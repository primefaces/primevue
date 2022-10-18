<template>
    <div class="p-dock-list-container">
        <ul
            ref="list"
            :id="id"
            class="p-dock-list"
            role="menu"
            :aria-orientation="position === 'bottom' || position === 'top' ? 'horizontal' : 'vertical'"
            :aria-activedescendant="focused ? focusedOptionId : undefined"
            :tabindex="tabindex"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            @focus="onListFocus"
            @blur="onListBlur"
            @keydown="onListKeyDown"
            @mouseleave="onListMouseLeave"
        >
            <template v-for="(processedItem, index) of model" :key="index">
                <div class="p-menuitem-content">
                    <li :id="getItemId(index)" :class="itemClass(processedItem, index, getItemId(index))" role="menuitem" :aria-label="processedItem.label" :aria-disabled="disabled(processedItem)" @mouseenter="onItemMouseEnter(index)">
                        <template v-if="!templates['item']">
                            <router-link v-if="processedItem.to && !disabled(processedItem)" v-slot="{ navigate, href, isActive, isExactActive }" :to="processedItem.to" custom>
                                <a
                                    v-tooltip:[tooltipOptions]="{ value: processedItem.label, disabled: !tooltipOptions }"
                                    :href="href"
                                    :class="linkClass({ isActive, isExactActive })"
                                    :target="processedItem.target"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    @click="onItemClick($event, processedItem, navigate)"
                                >
                                    <template v-if="!templates['icon']">
                                        <span v-ripple :class="['p-dock-action-icon', processedItem.icon]"></span>
                                    </template>
                                    <component v-else :is="templates['icon']" :item="processedItem"></component>
                                </a>
                            </router-link>
                            <a
                                v-else
                                v-tooltip:[tooltipOptions]="{ value: processedItem.label, disabled: !tooltipOptions }"
                                :href="processedItem.url"
                                :class="linkClass()"
                                :target="processedItem.target"
                                tabindex="-1"
                                aria-hidden="true"
                                @click="onItemClick($event, processedItem)"
                            >
                                <template v-if="!templates['icon']">
                                    <span v-ripple :class="['p-dock-action-icon', processedItem.icon]"></span>
                                </template>
                                <component v-else :is="templates['icon']" :item="processedItem"></component>
                            </a>
                        </template>
                        <component v-else :is="templates['item']" :item="processedItem" :index="index"></component>
                    </li>
                </div>
            </template>
        </ul>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'DockSub',
    emits: ['focus', 'blur'],
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        model: {
            type: Array,
            default: null
        },
        templates: {
            type: null,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        },
        tooltipOptions: null,
        menuId: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-label': {
            type: String,
            default: null
        },
        'aria-labelledby': {
            type: String,
            default: null
        }
    },
    data() {
        return {
            currentIndex: -3,
            focused: false,
            focusedOptionIndex: -1
        };
    },
    methods: {
        getItemId(index) {
            return `${this.id}_${index}`;
        },
        onListMouseLeave() {
            this.currentIndex = -3;
        },
        onItemMouseEnter(index) {
            this.currentIndex = index;
        },
        onItemClick(event, item, navigate) {
            if (this.disabled(item)) {
                event.preventDefault();

                return;
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            if (item.to && navigate) {
                navigate(event);
            }
        },
        onListFocus(event) {
            this.focused = true;
            this.changeFocusedOptionIndex(0);
            this.$emit('focus', event);
        },
        onListBlur(event) {
            this.focused = false;
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onListKeyDown(event) {
            switch (event.code) {
                case 'ArrowDown': {
                    if (this.position === 'left' || this.position === 'right') this.onArrowDownKey();
                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    if (this.position === 'left' || this.position === 'right') this.onArrowUpKey();
                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    if (this.position === 'top' || this.position === 'bottom') this.onArrowDownKey();
                    event.preventDefault();
                    break;
                }

                case 'ArrowLeft': {
                    if (this.position === 'top' || this.position === 'bottom') this.onArrowUpKey();
                    event.preventDefault();
                    break;
                }

                case 'Home': {
                    this.onHomeKey();
                    event.preventDefault();
                    break;
                }

                case 'End': {
                    this.onEndKey();
                    event.preventDefault();
                    break;
                }

                case 'Enter':

                case 'Space': {
                    this.onSpaceKey(event);
                    event.preventDefault();
                    break;
                }

                default:
                    break;
            }
        },
        onArrowDownKey() {
            const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);

            this.changeFocusedOptionIndex(optionIndex);
        },
        onArrowUpKey() {
            const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);

            this.changeFocusedOptionIndex(optionIndex);
        },
        onHomeKey() {
            this.changeFocusedOptionIndex(0);
        },
        onEndKey() {
            this.changeFocusedOptionIndex(DomHandler.find(this.$refs.list, 'li.p-dock-item:not(.p-disabled)').length - 1);
        },
        onSpaceKey(event) {
            const menuitems = DomHandler.find(this.$refs.list, 'li.p-dock-item');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === this.focusedOptionId);

            if (this.model[matchedOptionIndex].to) {
                this.$router.push(this.model[matchedOptionIndex].to);
            } else if (this.model[matchedOptionIndex].url) {
                menuitems[matchedOptionIndex].children[0].children[0].click();
            } else {
                this.onItemClick(event, this.model[matchedOptionIndex]);
            }
        },
        findNextOptionIndex(index) {
            const menuitems = DomHandler.find(this.$refs.list, 'li.p-dock-item:not(.p-disabled)');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

            console.log(matchedOptionIndex);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        },
        findPrevOptionIndex(index) {
            const menuitems = DomHandler.find(this.$refs.list, 'li.p-dock-item:not(.p-disabled)');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        },
        changeFocusedOptionIndex(index) {
            const menuitems = DomHandler.find(this.$refs.list, 'li.p-dock-item:not(.p-disabled)');

            let order = index >= menuitems.length ? menuitems.length - 1 : index < 0 ? 0 : index;

            this.focusedOptionIndex = menuitems[order].getAttribute('id');
        },
        itemClass(item, index, id) {
            return [
                'p-dock-item',
                {
                    'p-focus': id === this.focusedOptionIndex,
                    'p-disabled': this.disabled(item),
                    'p-dock-item-second-prev': this.currentIndex - 2 === index,
                    'p-dock-item-prev': this.currentIndex - 1 === index,
                    'p-dock-item-current': this.currentIndex === index,
                    'p-dock-item-next': this.currentIndex + 1 === index,
                    'p-dock-item-second-next': this.currentIndex + 2 === index
                }
            ];
        },
        linkClass(routerProps) {
            return [
                'p-dock-action',
                {
                    'router-link-active': routerProps && routerProps.isActive,
                    'router-link-active-exact': this.exact && routerProps && routerProps.isExactActive
                }
            ];
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        }
    },
    computed: {
        id() {
            return this.menuId || UniqueComponentId();
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
        }
    },
    directives: {
        ripple: Ripple,
        tooltip: Tooltip
    }
};
</script>

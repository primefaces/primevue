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
            <li v-for="(item, index) of model" :key="index" :class="itemClass(index)" role="presentation" @mouseenter="onItemMouseEnter(index)">
                <template v-if="!templates['item']">
                    <router-link v-if="item.to && !disabled(item)" v-slot="{ navigate, href, isActive, isExactActive }" :to="item.to" custom>
                        <a
                            :id="id + '_' + index"
                            v-tooltip:[tooltipOptions]="{ value: item.label, disabled: !tooltipOptions }"
                            :href="href"
                            role="menuitem"
                            :class="linkClass(item, `${id}_${index}`, { isActive, isExactActive })"
                            :target="item.target"
                            :aria-label="item.label"
                            :aria-disabled="disabled(item)"
                            @click="onItemClick($event, item, navigate)"
                        >
                            <template v-if="!templates['icon']">
                                <span v-ripple :class="['p-dock-action-icon', item.icon]"></span>
                            </template>
                            <component v-else :is="templates['icon']" :item="item"></component>
                        </a>
                    </router-link>
                    <a
                        v-else
                        :id="id + '_' + index"
                        v-tooltip:[tooltipOptions]="{ value: item.label, disabled: !tooltipOptions }"
                        :href="item.url"
                        role="menuitem"
                        :class="linkClass(item, `${id}_${index}`)"
                        :target="item.target"
                        :aria-label="item.label"
                        :aria-disabled="disabled(item)"
                        @click="onItemClick($event, item)"
                    >
                        <template v-if="!templates['icon']">
                            <span v-ripple :class="['p-dock-action-icon', item.icon]"></span>
                        </template>
                        <component v-else :is="templates['icon']" :item="item"></component>
                    </a>
                </template>
                <component v-else :is="templates['item']" :item="item" :index="index"></component>
            </li>
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
        listId: {
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
            this.changeFocusedOptionIndex(DomHandler.find(this.$refs.list, 'a.p-dock-action:not(.p-disabled)').length - 1);
        },
        onSpaceKey(event) {
            const links = DomHandler.find(this.$refs.list, 'a.p-dock-action');
            const matchedOptionIndex = [...links].findIndex((link) => link.id === this.focusedOptionId);

            if (this.model[matchedOptionIndex].to) {
                this.$router.push(this.model[matchedOptionIndex].to);
            } else if (this.model[matchedOptionIndex].url) {
                links[matchedOptionIndex].click();
            } else {
                this.onItemClick(event, this.model[matchedOptionIndex]);
            }
        },
        findNextOptionIndex(index) {
            const links = DomHandler.find(this.$refs.list, 'a.p-dock-action:not(.p-disabled)');
            const matchedOptionIndex = [...links].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        },
        findPrevOptionIndex(index) {
            const links = DomHandler.find(this.$refs.list, 'a.p-dock-action:not(.p-disabled)');
            const matchedOptionIndex = [...links].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        },
        changeFocusedOptionIndex(index) {
            const links = DomHandler.find(this.$refs.list, 'a.p-dock-action:not(.p-disabled)');

            let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;

            this.focusedOptionIndex = links[order].getAttribute('id');
        },
        itemClass(index) {
            return [
                'p-dock-item',
                {
                    'p-dock-item-second-prev': this.currentIndex - 2 === index,
                    'p-dock-item-prev': this.currentIndex - 1 === index,
                    'p-dock-item-current': this.currentIndex === index,
                    'p-dock-item-next': this.currentIndex + 1 === index,
                    'p-dock-item-second-next': this.currentIndex + 2 === index
                }
            ];
        },
        linkClass(item, id, routerProps) {
            return [
                'p-dock-action',
                {
                    'p-focus': id === this.focusedOptionIndex,
                    'p-disabled': this.disabled(item),
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
            return this.listId || UniqueComponentId();
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

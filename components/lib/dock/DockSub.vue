<template>
    <div class="p-dock-list-container" v-bind="ptm('container')">
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
            v-bind="ptm('menu')"
        >
            <template v-for="(processedItem, index) of model" :key="index">
                <li
                    :id="getItemId(index)"
                    :class="itemClass(processedItem, index, getItemId(index))"
                    role="menuitem"
                    :aria-label="processedItem.label"
                    :aria-disabled="disabled(processedItem)"
                    @click="onItemClick($event, processedItem)"
                    @mouseenter="onItemMouseEnter(index)"
                    v-bind="getPTOptions(getItemId(index), 'menuitem')"
                >
                    <div class="p-menuitem-content" v-bind="getPTOptions(getItemId(index), 'content')">
                        <template v-if="!templates['item']">
                            <router-link v-if="processedItem.to && !disabled(processedItem)" v-slot="{ navigate, href, isActive, isExactActive }" :to="processedItem.to" custom>
                                <a
                                    v-tooltip:[tooltipOptions]="{ value: processedItem.label, disabled: !tooltipOptions }"
                                    :href="href"
                                    :class="linkClass({ isActive, isExactActive })"
                                    :target="processedItem.target"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    @click="onItemActionClick($event, processedItem, navigate)"
                                    v-bind="getPTOptions(getItemId(index), 'action')"
                                >
                                    <template v-if="!templates['icon']">
                                        <span v-ripple :class="['p-dock-icon', processedItem.icon]" v-bind="getPTOptions(getItemId(index), 'icon')"></span>
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
                                v-bind="getPTOptions(getItemId(index), 'action')"
                            >
                                <template v-if="!templates['icon']">
                                    <span v-ripple :class="['p-dock-icon', processedItem.icon]" v-bind="getPTOptions(getItemId(index), 'icon')"></span>
                                </template>
                                <component v-else :is="templates['icon']" :item="processedItem"></component>
                            </a>
                        </template>
                        <component v-else :is="templates['item']" :item="processedItem" :index="index"></component>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import { DomHandler, ObjectUtils, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'DockSub',
    extends: BaseComponent,
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
            id: this.menuId,
            currentIndex: -3,
            focused: false,
            focusedOptionIndex: -1
        };
    },
    watch: {
        menuId(newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
    },
    methods: {
        getItemId(index) {
            return `${this.id}_${index}`;
        },
        getItemProp(processedItem, name) {
            return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
        },
        getPTOptions(id, key) {
            return this.ptm(key, {
                context: {
                    active: this.isItemActive(id)
                }
            });
        },
        isSameMenuItem(event) {
            return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('.p-menuitem')));
        },
        isItemActive(id) {
            return id === this.focusedOptionIndex;
        },
        onListMouseLeave() {
            this.currentIndex = -3;
        },
        onItemMouseEnter(index) {
            this.currentIndex = index;
        },
        onItemActionClick(event, navigate) {
            navigate && navigate(event);
        },
        onItemClick(event, processedItem) {
            if (this.isSameMenuItem(event)) {
                const command = this.getItemProp(processedItem, 'command');

                command && command({ originalEvent: event, item: processedItem.item });
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
        onSpaceKey() {
            const element = DomHandler.findSingle(this.$refs.list, `li[id="${`${this.focusedOptionIndex}`}"]`);
            const anchorElement = element && DomHandler.findSingle(element, '.p-dock-link');

            anchorElement ? anchorElement.click() : element && element.click();
        },
        findNextOptionIndex(index) {
            const menuitems = DomHandler.find(this.$refs.list, 'li.p-dock-item:not(.p-disabled)');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

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
                    'p-focus': this.isItemActive(id),
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
                'p-dock-link',
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

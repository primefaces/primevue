<template>
    <div :class="cx('listContainer')" v-bind="ptm('listContainer')">
        <ul
            ref="list"
            :id="id"
            :class="cx('list')"
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
            v-bind="ptm('list')"
        >
            <template v-for="(processedItem, index) of model" :key="index">
                <li
                    :id="getItemId(index)"
                    :class="cx('item', { processedItem, id: getItemId(index) })"
                    role="menuitem"
                    :aria-label="processedItem.label"
                    :aria-disabled="disabled(processedItem)"
                    @click="onItemClick($event, processedItem)"
                    @mouseenter="onItemMouseEnter(index)"
                    v-bind="getPTOptions('item', processedItem, index)"
                    :data-p-focused="isItemActive(getItemId(index))"
                    :data-p-disabled="disabled(processedItem) || false"
                >
                    <div :class="cx('itemContent')" v-bind="getPTOptions('itemContent', processedItem, index)">
                        <template v-if="!templates['item']">
                            <a
                                v-tooltip:[tooltipOptions]="{ value: processedItem.label, disabled: !tooltipOptions }"
                                :href="processedItem.url"
                                :class="cx('itemLink')"
                                :target="processedItem.target"
                                tabindex="-1"
                                aria-hidden="true"
                                v-bind="getPTOptions('itemLink', processedItem, index)"
                            >
                                <!-- TODO: icon deprecated since v4.0-->
                                <template v-if="!templates['icon'] && !templates['itemicon']">
                                    <span v-ripple :class="[cx('itemIcon'), processedItem.icon]" v-bind="getPTOptions('itemIcon', processedItem, index)"></span>
                                </template>
                                <component v-else :is="templates['icon'] || templates['itemicon']" :item="processedItem" :class="cx('itemIcon')"></component>
                            </a>
                        </template>
                        <component v-else :is="templates['item']" :item="processedItem" :index="index" :label="processedItem.label" :props="getMenuItemProps(processedItem, index)"></component>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import { find, findSingle } from '@primeuix/utils/dom';
import { resolve } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import { UniqueComponentId } from '@primevue/core/utils';
import Ripple from 'primevue/ripple';
import Tooltip from 'primevue/tooltip';
import { mergeProps } from 'vue';

export default {
    name: 'DockSub',
    hostName: 'Dock',
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
        tooltipOptions: null,
        menuId: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
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
            return processedItem && processedItem.item ? resolve(processedItem.item[name]) : undefined;
        },
        getPTOptions(key, item, index) {
            return this.ptm(key, {
                context: {
                    index,
                    item,
                    active: this.isItemActive(this.getItemId(index))
                }
            });
        },
        isSameMenuItem(event) {
            return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[data-pc-section="item"]')));
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
                case 'NumpadEnter':

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
            this.changeFocusedOptionIndex(find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]').length - 1);
        },
        onSpaceKey() {
            const element = findSingle(this.$refs.list, `li[id="${`${this.focusedOptionIndex}`}"]`);
            const anchorElement = element && findSingle(element, '[data-pc-section="itemlink"]');

            anchorElement ? anchorElement.click() : element && element.click();
        },
        findNextOptionIndex(index) {
            const menuitems = find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        },
        findPrevOptionIndex(index) {
            const menuitems = find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]');
            const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        },
        changeFocusedOptionIndex(index) {
            const menuitems = find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]');

            let order = index >= menuitems.length ? menuitems.length - 1 : index < 0 ? 0 : index;

            this.focusedOptionIndex = menuitems[order].getAttribute('id');
        },
        disabled(item) {
            return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
        },
        getMenuItemProps(item, index) {
            return {
                action: mergeProps(
                    {
                        tabindex: -1,
                        class: this.cx('itemLink')
                    },
                    this.getPTOptions('itemLink', item, index)
                ),
                icon: mergeProps(
                    {
                        class: [this.cx('itemIcon'), item.icon]
                    },
                    this.getPTOptions('itemIcon', item, index)
                )
            };
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

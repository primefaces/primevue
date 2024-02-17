<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div :class="cx('controls')" v-bind="ptm('controls')">
            <slot name="controlsstart"></slot>
            <OLButton type="button" @click="moveUp" :aria-label="moveUpAriaLabel" :disabled="moveDisabled()" v-bind="moveUpButtonProps" :pt="ptm('moveUpButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="moveupicon">
                        <AngleUpIcon v-bind="ptm('moveUpButton')['icon']" data-pc-section="moveupicon" />
                    </slot>
                </template>
            </OLButton>
            <OLButton type="button" @click="moveTop" :aria-label="moveTopAriaLabel" :disabled="moveDisabled()" v-bind="moveTopButtonProps" :pt="ptm('moveTopButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movetopicon">
                        <AngleDoubleUpIcon v-bind="ptm('moveTopButton')['icon']" data-pc-section="movetopicon" />
                    </slot>
                </template>
            </OLButton>
            <OLButton type="button" @click="moveDown" :aria-label="moveDownAriaLabel" :disabled="moveDisabled()" v-bind="moveDownButtonProps" :pt="ptm('moveDownButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movedownicon">
                        <AngleDownIcon v-bind="ptm('moveDownButton')['icon']" data-pc-section="movedownicon" />
                    </slot>
                </template>
            </OLButton>
            <OLButton type="button" @click="moveBottom" :aria-label="moveBottomAriaLabel" :disabled="moveDisabled()" v-bind="moveBottomButtonProps" :pt="ptm('moveBottomButton')" :unstyled="unstyled">
                <template #icon>
                    <slot name="movebottomicon">
                        <AngleDoubleDownIcon v-bind="ptm('moveBottomButton')['icon']" data-pc-section="movebottomicon" />
                    </slot>
                </template>
            </OLButton>
            <slot name="controlsend"></slot>
        </div>
        <div :class="cx('container')" v-bind="ptm('container')">
            <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
                <slot name="header"></slot>
            </div>
            <transition-group
                :ref="listRef"
                :id="id + '_list'"
                name="p-orderlist-flip"
                tag="ul"
                :class="cx('list')"
                :style="listStyle"
                role="listbox"
                aria-multiselectable="true"
                :tabindex="tabindex"
                :aria-activedescendant="focused ? focusedOptionId : undefined"
                :aria-label="ariaLabel"
                :aria-labelledby="ariaLabelledby"
                @focus="onListFocus"
                @blur="onListBlur"
                @keydown="onListKeyDown"
                v-bind="{ ...listProps, ...ptm('list'), ...ptm('transition') }"
            >
                <template v-for="(item, i) of modelValue" :key="getItemKey(item, i)">
                    <li
                        :id="id + '_' + i"
                        v-ripple
                        role="option"
                        :class="cx('item', { item, id: `${id}_${i}` })"
                        @click="onItemClick($event, item, i)"
                        @touchend="onItemTouchEnd"
                        @mousedown="onOptionMouseDown($event, i)"
                        @mousemove="onOptionMouseMove(i)"
                        :aria-selected="isSelected(item)"
                        v-bind="getPTOptions(item, 'item', i)"
                        :data-p-highlight="isSelected(item)"
                        :data-p-focused="`${id}_${i}` === focusedOptionId"
                    >
                        <slot name="item" :item="item" :index="i"> </slot>
                    </li>
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import AngleDoubleDownIcon from 'primevue/icons/angledoubledown';
import AngleDoubleUpIcon from 'primevue/icons/angledoubleup';
import AngleDownIcon from 'primevue/icons/angledown';
import AngleUpIcon from 'primevue/icons/angleup';
import Ripple from 'primevue/ripple';
import { DomHandler, ObjectUtils, UniqueComponentId } from 'primevue/utils';
import BaseOrderList from './BaseOrderList.vue';

export default {
    name: 'OrderList',
    extends: BaseOrderList,
    inheritAttrs: false,
    emits: ['update:modelValue', 'reorder', 'update:selection', 'selection-change', 'focus', 'blur'],
    itemTouched: false,
    reorderDirection: null,
    styleElement: null,
    list: null,
    data() {
        return {
            id: this.$attrs.id,
            d_selection: this.selection,
            focused: false,
            focusedOptionIndex: -1
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        }
    },
    beforeUnmount() {
        this.destroyStyle();
    },
    updated() {
        if (this.reorderDirection) {
            this.updateListScroll();
            this.reorderDirection = null;
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        if (this.responsive) {
            this.createStyle();
        }
    },
    methods: {
        getItemKey(item, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
        },
        getPTOptions(item, key, index) {
            return this.ptm(key, {
                context: {
                    active: this.isSelected(item),
                    focused: `${this.id}_${index}` === this.focusedOptionId
                }
            });
        },
        isSelected(item) {
            return ObjectUtils.findIndexInList(item, this.d_selection) != -1;
        },
        onListFocus(event) {
            this.focused = true;
            this.findCurrentFocusedIndex();
            this.scrollInView(this.focusedOptionIndex);
            this.$emit('focus', event);
        },
        onListBlur(event) {
            this.focused = false;
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onListKeyDown(event) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event);
                    break;

                case 'Home':
                    this.onHomeKey(event);
                    break;

                case 'End':
                    this.onEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    this.onEnterKey(event);
                    break;

                case 'Space':
                    this.onSpaceKey(event);
                    break;

                case 'KeyA':
                    if (event.ctrlKey) {
                        this.d_selection = [...this.modelValue];
                        this.$emit('update:selection', this.d_selection);

                        event.preventDefault();
                    }

                default:
                    break;
            }
        },
        onOptionMouseDown(event, index) {
            this.changeFocusedOptionIndex(index);
        },
        onOptionMouseMove(index) {
            if (this.focusOnHover && this.focused) {
                this.changeFocusedOptionIndex(index);
            }
        },
        onArrowDownKey(event) {
            const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex() : this.findFirstSelectedOptionIndex();

            this.changeFocusedOptionIndex(optionIndex);

            if (event.shiftKey) {
                this.onEnterKey(event);
            }

            event.preventDefault();
        },
        onArrowUpKey(event) {
            const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex() : this.findLastSelectedOptionIndex();

            this.changeFocusedOptionIndex(optionIndex);

            if (event.shiftKey) {
                this.onEnterKey(event);
            }

            event.preventDefault();
        },
        onHomeKey(event) {
            if (event.ctrlKey && event.shiftKey) {
                const matchedOptionIndex = this.findMatchedOptionIndex();

                this.d_selection = [...this.modelValue].slice(0, matchedOptionIndex + 1);
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            } else {
                this.changeFocusedOptionIndex(0);
            }

            event.preventDefault();
        },
        onEndKey(event) {
            if (event.ctrlKey && event.shiftKey) {
                const matchedOptionIndex = this.findMatchedOptionIndex();

                this.d_selection = [...this.modelValue].slice(matchedOptionIndex, items.length);
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            } else {
                this.changeFocusedOptionIndex(this.findAllItems().length - 1);
            }

            event.preventDefault();
        },
        onEnterKey(event) {
            const matchedOptionIndex = this.findMatchedOptionIndex();

            this.onItemClick(event, this.modelValue[matchedOptionIndex], matchedOptionIndex);
            event.preventDefault();
        },
        onSpaceKey(event) {
            event.preventDefault();

            if (event.shiftKey && this.d_selection && this.d_selection.length > 0) {
                const selectedItemIndex = ObjectUtils.findIndexInList(this.d_selection[0], [...this.modelValue]);
                const matchedOptionIndex = this.findMatchedOptionIndex();

                this.d_selection = [...this.modelValue].slice(Math.min(selectedItemIndex, matchedOptionIndex), Math.max(selectedItemIndex, matchedOptionIndex) + 1);
                this.$emit('update:selection', this.d_selection);
                this.$emit('selection-change', {
                    originalEvent: event,
                    value: this.d_selection
                });
            } else {
                this.onEnterKey(event);
            }
        },
        findAllItems() {
            return DomHandler.find(this.list, '[data-pc-section="item"]');
        },
        findFocusedItem() {
            return DomHandler.findSingle(this.list, `[data-pc-section="item"][id=${this.focusedOptionIndex}]`);
        },
        findCurrentFocusedIndex() {
            if (this.focusedOptionIndex === -1) {
                this.focusedOptionIndex = this.findFirstSelectedOptionIndex();

                if (this.autoOptionFocus && this.focusedOptionIndex === -1) {
                    this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
                }
            }
        },
        findFirstFocusedOptionIndex() {
            const firstFocusableItem = DomHandler.findSingle(this.list, '[data-pc-section="item"]');

            return DomHandler.getAttribute(firstFocusableItem, 'id');
        },
        findFirstSelectedOptionIndex() {
            if (this.hasSelectedOption) {
                const selectedFirstItem = DomHandler.findSingle(this.list, '[data-p-highlight="true"]');

                return DomHandler.getAttribute(selectedFirstItem, 'id');
            }

            return -1;
        },
        findLastSelectedOptionIndex() {
            if (this.hasSelectedOption) {
                const selectedItems = DomHandler.find(this.list, '[data-p-highlight="true"]');

                return ObjectUtils.findIndexInList(selectedItems[selectedItems.length - 1], this.list.children);
            }

            return -1;
        },
        findMatchedOptionIndex(id = this.focusedOptionIndex) {
            const items = this.findAllItems();

            return [...items].findIndex((link) => link.id === id);
        },
        findNextOptionIndex() {
            const matchedOptionIndex = this.findMatchedOptionIndex();

            return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
        },
        findPrevOptionIndex() {
            const matchedOptionIndex = this.findMatchedOptionIndex();

            return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
        },
        changeFocusedOptionIndex(index) {
            const items = this.findAllItems();

            let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;

            this.focusedOptionIndex = items[order] ? items[order].getAttribute('id') : -1;
            this.scrollInView(this.focusedOptionIndex);
        },
        scrollInView(id) {
            const element = DomHandler.findSingle(this.list, `[data-pc-section="item"][id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
            }
        },
        moveUp(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex - 1];

                        value[selectedItemIndex - 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'up';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveTop(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = 0; i < this.d_selection.length; i++) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== 0) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];

                        value.unshift(movedItem);
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'top';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveDown(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== value.length - 1) {
                        let movedItem = value[selectedItemIndex];
                        let temp = value[selectedItemIndex + 1];

                        value[selectedItemIndex + 1] = movedItem;
                        value[selectedItemIndex] = temp;
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'down';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        moveBottom(event) {
            if (this.d_selection) {
                let value = [...this.modelValue];

                for (let i = this.d_selection.length - 1; i >= 0; i--) {
                    let selectedItem = this.d_selection[i];
                    let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, value);

                    if (selectedItemIndex !== value.length - 1) {
                        let movedItem = value.splice(selectedItemIndex, 1)[0];

                        value.push(movedItem);
                    } else {
                        break;
                    }
                }

                this.reorderDirection = 'bottom';
                this.$emit('update:modelValue', value);
                this.$emit('reorder', {
                    originalEvent: event,
                    value: value,
                    direction: this.reorderDirection
                });
            }
        },
        onItemClick(event, item, index) {
            this.itemTouched = false;
            const selectedIndex = ObjectUtils.findIndexInList(item, this.d_selection);
            const selected = selectedIndex != -1;
            const metaSelection = this.itemTouched ? false : this.metaKeySelection;
            const selectedId = this.findAllItems()[index].getAttribute('id');

            this.focusedOptionIndex = selectedId;

            if (metaSelection) {
                const metaKey = event.metaKey || event.ctrlKey;

                if (selected && metaKey) {
                    this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex);
                } else {
                    this.d_selection = metaKey ? (this.d_selection ? [...this.d_selection] : []) : [];
                    ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.modelValue);
                }
            } else {
                if (selected) {
                    this.d_selection = this.d_selection.filter((val, index) => index !== selectedIndex);
                } else {
                    this.d_selection = this.d_selection ? [...this.d_selection] : [];
                    ObjectUtils.insertIntoOrderedArray(item, index, this.d_selection, this.modelValue);
                }
            }

            this.$emit('update:selection', this.d_selection);
            this.$emit('selection-change', {
                originalEvent: event,
                value: this.d_selection
            });
        },
        onItemTouchEnd() {
            this.itemTouched = true;
        },
        updateListScroll() {
            const listItems = DomHandler.find(this.list, '[data-pc-section="item"][data-p-highlight="true"]');

            if (listItems && listItems.length) {
                switch (this.reorderDirection) {
                    case 'up':
                        DomHandler.scrollInView(this.list, listItems[0]);
                        break;

                    case 'top':
                        this.list.scrollTop = 0;
                        break;

                    case 'down':
                        DomHandler.scrollInView(this.list, listItems[listItems.length - 1]);
                        break;

                    case 'bottom':
                        this.list.scrollTop = this.list.scrollHeight;
                        break;

                    default:
                        break;
                }
            }
        },
        createStyle() {
            if (!this.styleElement && !this.isUnstyled) {
                this.$el.setAttribute(this.attributeSelector, '');
                this.styleElement = document.createElement('style');
                this.styleElement.type = 'text/css';
                DomHandler.setAttribute(this.styleElement, 'nonce', this.$primevue?.config?.csp?.nonce);
                document.head.appendChild(this.styleElement);

                let innerHTML = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-orderlist[${this.attributeSelector}] {
        flex-direction: column;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls .p-button:last-child {
        margin-right: 0;
    }
}
`;

                this.styleElement.innerHTML = innerHTML;
            }
        },
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        moveDisabled() {
            if (!this.d_selection || !this.d_selection.length) {
                return true;
            }
        },
        listRef(el) {
            this.list = el ? el.$el : undefined;
        }
    },
    computed: {
        attributeSelector() {
            return UniqueComponentId();
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
        },
        moveUpAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveUp : undefined;
        },
        moveTopAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveTop : undefined;
        },
        moveDownAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveDown : undefined;
        },
        moveBottomAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.moveBottom : undefined;
        },
        hasSelectedOption() {
            return ObjectUtils.isNotEmpty(this.d_selection);
        }
    },
    components: {
        OLButton: Button,
        AngleUpIcon: AngleUpIcon,
        AngleDownIcon: AngleDownIcon,
        AngleDoubleUpIcon: AngleDoubleUpIcon,
        AngleDoubleDownIcon: AngleDoubleDownIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

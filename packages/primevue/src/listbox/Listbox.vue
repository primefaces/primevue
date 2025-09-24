<template>
    <div :id="$id" :class="cx('root')" @focusout="onFocusout" :data-p="containerDataP" v-bind="ptmi('root')">
        <span
            ref="firstHiddenFocusableElement"
            role="presentation"
            aria-hidden="true"
            class="p-hidden-accessible p-hidden-focusable"
            :tabindex="!disabled ? tabindex : -1"
            @focus="onFirstHiddenFocus"
            v-bind="ptm('hiddenFirstFocusableEl')"
            :data-p-hidden-accessible="true"
            :data-p-hidden-focusable="true"
        ></span>
        <div v-if="$slots.header" :class="cx('header')" v-bind="ptm('header')">
            <slot name="header" :value="d_value" :options="visibleOptions"></slot>
        </div>
        <div v-if="filter" :class="cx('header')" v-bind="ptm('header')">
            <IconField :unstyled="unstyled" :pt="ptm('pcFilterContainer')">
                <InputText
                    v-model="filterValue"
                    type="text"
                    :class="cx('pcFilter')"
                    :placeholder="filterPlaceholder"
                    role="searchbox"
                    autocomplete="off"
                    :disabled="disabled"
                    :unstyled="unstyled"
                    :aria-owns="$id + '_list'"
                    :aria-activedescendant="focusedOptionId"
                    :tabindex="!disabled && !focused ? tabindex : -1"
                    @input="onFilterChange"
                    @keydown="onFilterKeyDown"
                    :pt="ptm('pcFilter')"
                />
                <InputIcon :unstyled="unstyled" :pt="ptm('pcFilterIconContainer')">
                    <slot name="filtericon">
                        <span v-if="filterIcon" :class="filterIcon" v-bind="ptm('filterIcon')" />
                        <SearchIcon v-else v-bind="ptm('filterIcon')" />
                    </slot>
                </InputIcon>
            </IconField>
            <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenFilterResult')" :data-p-hidden-accessible="true">
                {{ filterResultMessageText }}
            </span>
        </div>
        <div :class="cx('listContainer')" :style="[{ 'max-height': virtualScrollerDisabled ? scrollHeight : '' }, listStyle]" v-bind="ptm('listContainer')">
            <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :items="visibleOptions" :style="[{ height: scrollHeight }, listStyle]" :tabindex="-1" :disabled="virtualScrollerDisabled" :pt="ptm('virtualScroller')">
                <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                    <ul
                        :ref="(el) => listRef(el, contentRef)"
                        :id="$id + '_list'"
                        :class="[cx('list'), styleClass]"
                        :style="contentStyle"
                        :tabindex="-1"
                        role="listbox"
                        :aria-multiselectable="multiple"
                        :aria-label="ariaLabel"
                        :aria-labelledby="ariaLabelledby"
                        :aria-activedescendant="focused ? focusedOptionId : undefined"
                        :aria-disabled="disabled"
                        @focus="onListFocus"
                        @blur="onListBlur"
                        @keydown="onListKeyDown"
                        v-bind="ptm('list')"
                    >
                        <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                            <li v-if="isOptionGroup(option)" :id="$id + '_' + getOptionIndex(i, getItemOptions)" :style="{ height: itemSize ? itemSize + 'px' : undefined }" :class="cx('optionGroup')" role="option" v-bind="ptm('optionGroup')">
                                <slot name="optiongroup" :option="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{ getOptionGroupLabel(option.optionGroup) }}</slot>
                            </li>
                            <li
                                v-else
                                :id="$id + '_' + getOptionIndex(i, getItemOptions)"
                                v-ripple
                                :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                :class="cx('option', { option, index: i, getItemOptions })"
                                role="option"
                                :aria-label="getOptionLabel(option)"
                                :aria-selected="isSelected(option)"
                                :aria-disabled="isOptionDisabled(option)"
                                :aria-setsize="ariaSetSize"
                                :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                @click="onOptionSelect($event, option, getOptionIndex(i, getItemOptions))"
                                @mousedown="onOptionMouseDown($event, getOptionIndex(i, getItemOptions))"
                                @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                                @touchend="onOptionTouchEnd()"
                                @dblclick="onOptionDblClick($event, option)"
                                v-bind="getPTOptions(option, getItemOptions, i, 'option')"
                                :data-p-selected="!checkmark && isSelected(option)"
                                :data-p-focused="focusedOptionIndex === getOptionIndex(i, getItemOptions)"
                                :data-p-disabled="isOptionDisabled(option)"
                            >
                                <template v-if="checkmark">
                                    <CheckIcon v-if="isSelected(option)" :class="cx('optionCheckIcon')" v-bind="ptm('optionCheckIcon')" />
                                    <BlankIcon v-else :class="cx('optionBlankIcon')" v-bind="ptm('optionBlankIcon')" />
                                </template>
                                <slot name="option" :option="option" :selected="isSelected(option)" :index="getOptionIndex(i, getItemOptions)">{{ getOptionLabel(option) }}</slot>
                            </li>
                        </template>
                        <li v-if="filterValue && (!items || (items && items.length === 0))" :class="cx('emptyMessage')" role="option" v-bind="ptm('emptyMessage')">
                            <slot name="emptyfilter">{{ emptyFilterMessageText }}</slot>
                        </li>
                        <li v-else-if="!options || (options && options.length === 0)" :class="cx('emptyMessage')" role="option" v-bind="ptm('emptyMessage')">
                            <slot name="empty">{{ emptyMessageText }}</slot>
                        </li>
                    </ul>
                </template>
                <template v-if="$slots.loader" v-slot:loader="{ options }">
                    <slot name="loader" :options="options"></slot>
                </template>
            </VirtualScroller>
        </div>
        <slot name="footer" :value="d_value" :options="visibleOptions"></slot>
        <span v-if="!options || (options && options.length === 0)" role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenEmptyMessage')" :data-p-hidden-accessible="true">
            {{ emptyMessageText }}
        </span>
        <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSelectedMessage')" :data-p-hidden-accessible="true">
            {{ selectedMessageText }}
        </span>
        <span
            ref="lastHiddenFocusableElement"
            role="presentation"
            aria-hidden="true"
            class="p-hidden-accessible p-hidden-focusable"
            :tabindex="!disabled ? tabindex : -1"
            @focus="onLastHiddenFocus"
            v-bind="ptm('hiddenLastFocusableEl')"
            :data-p-hidden-accessible="true"
            :data-p-hidden-focusable="true"
        ></span>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import { findSingle, focus, getFirstFocusableElement, isElement } from '@primeuix/utils/dom';
import { equals, findLastIndex, isNotEmpty, isPrintableCharacter, resolveFieldData } from '@primeuix/utils/object';
import { FilterService } from '@primevue/core/api';
import BlankIcon from '@primevue/icons/blank';
import CheckIcon from '@primevue/icons/check';
import SearchIcon from '@primevue/icons/search';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';
import BaseListbox from './BaseListbox.vue';

export default {
    name: 'Listbox',
    extends: BaseListbox,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur', 'filter', 'item-dblclick', 'option-dblclick'],
    list: null,
    virtualScroller: null,
    optionTouched: false,
    startRangeIndex: -1,
    searchTimeout: null,
    searchValue: '',
    data() {
        return {
            filterValue: null,
            focused: false,
            focusedOptionIndex: -1
        };
    },
    watch: {
        options() {
            this.autoUpdateModel();
        }
    },
    mounted() {
        this.autoUpdateModel();
    },
    methods: {
        getOptionIndex(index, fn) {
            return this.virtualScrollerDisabled ? index : fn && fn(index)['index'];
        },
        getOptionLabel(option) {
            return this.optionLabel ? resolveFieldData(option, this.optionLabel) : typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean' ? option : null;
        },
        getOptionValue(option) {
            return this.optionValue ? resolveFieldData(option, this.optionValue) : option;
        },
        getOptionRenderKey(option, index) {
            return (this.dataKey ? resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + '_' + index;
        },
        getPTOptions(option, itemOptions, index, key) {
            return this.ptm(key, {
                context: {
                    selected: this.isSelected(option),
                    focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
                    disabled: this.isOptionDisabled(option)
                }
            });
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : false;
        },
        isOptionGroup(option) {
            return this.optionGroupLabel && option.optionGroup && option.group;
        },
        getOptionGroupLabel(optionGroup) {
            return resolveFieldData(optionGroup, this.optionGroupLabel);
        },
        getOptionGroupChildren(optionGroup) {
            return resolveFieldData(optionGroup, this.optionGroupChildren);
        },
        getAriaPosInset(index) {
            return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
        },
        onFirstHiddenFocus() {
            focus(this.list);

            const firstFocusableEl = getFirstFocusableElement(this.$el, ':not([data-p-hidden-focusable="true"])');

            this.$refs.lastHiddenFocusableElement.tabIndex = isElement(firstFocusableEl) ? undefined : -1;
            this.$refs.firstHiddenFocusableElement.tabIndex = -1;
        },
        onLastHiddenFocus(event) {
            const relatedTarget = event.relatedTarget;

            if (relatedTarget === this.list) {
                const firstFocusableEl = getFirstFocusableElement(this.$el, ':not([data-p-hidden-focusable="true"])');

                focus(firstFocusableEl);
                this.$refs.firstHiddenFocusableElement.tabIndex = undefined;
            } else {
                focus(this.$refs.firstHiddenFocusableElement);
            }

            this.$refs.lastHiddenFocusableElement.tabIndex = -1;
        },
        onFocusout(event) {
            if (!this.$el.contains(event.relatedTarget) && this.$refs.lastHiddenFocusableElement && this.$refs.firstHiddenFocusableElement) {
                this.$refs.lastHiddenFocusableElement.tabIndex = this.$refs.firstHiddenFocusableElement.tabIndex = undefined;
            }
        },
        onListFocus(event) {
            this.focused = true;
            this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
            this.autoUpdateModel();
            this.scrollInView(this.focusedOptionIndex);
            this.$emit('focus', event);
        },
        onListBlur(event) {
            this.focused = false;
            this.focusedOptionIndex = this.startRangeIndex = -1;
            this.searchValue = '';
            this.$emit('blur', event);
        },
        onListKeyDown(event) {
            const metaKey = event.metaKey || event.ctrlKey;

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

                case 'PageDown':
                    this.onPageDownKey(event);
                    break;

                case 'PageUp':
                    this.onPageUpKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    this.onSpaceKey(event);
                    break;

                case 'Tab':
                    //NOOP
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.onShiftKey(event);
                    break;

                default:
                    if (this.multiple && event.code === 'KeyA' && metaKey) {
                        const value = this.visibleOptions.filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));

                        this.updateModel(event, value);

                        event.preventDefault();
                        break;
                    }

                    if (!metaKey && isPrintableCharacter(event.key)) {
                        this.searchOptions(event, event.key);
                        event.preventDefault();
                    }

                    break;
            }
        },
        onOptionSelect(event, option, index = -1) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            this.multiple ? this.onOptionSelectMultiple(event, option) : this.onOptionSelectSingle(event, option);
            this.optionTouched = false;
            index !== -1 && (this.focusedOptionIndex = index);
        },
        onOptionMouseDown(event, index) {
            this.changeFocusedOptionIndex(event, index);
        },
        onOptionMouseMove(event, index) {
            if (this.focusOnHover && this.focused) {
                this.changeFocusedOptionIndex(event, index);
            }
        },
        onOptionTouchEnd() {
            if (this.disabled) {
                return;
            }

            this.optionTouched = true;
        },
        onOptionDblClick(event, item) {
            this.$emit('item-dblclick', {
                originalEvent: event,
                value: item
            });
            this.$emit('option-dblclick', {
                originalEvent: event,
                value: item
            });
        },
        onOptionSelectSingle(event, option) {
            let selected = this.isSelected(option);
            let valueChanged = false;
            let value = null;
            let metaSelection = this.optionTouched ? false : this.metaKeySelection;

            if (metaSelection) {
                let metaKey = event && (event.metaKey || event.ctrlKey);

                if (selected) {
                    if (metaKey) {
                        value = null;
                        valueChanged = true;
                    }
                } else {
                    value = this.getOptionValue(option);
                    valueChanged = true;
                }
            } else {
                value = selected ? null : this.getOptionValue(option);
                valueChanged = true;
            }

            if (valueChanged) {
                this.updateModel(event, value);
            }
        },
        onOptionSelectMultiple(event, option) {
            let selected = this.isSelected(option);
            let value = null;
            let metaSelection = this.optionTouched ? false : this.metaKeySelection;

            if (metaSelection) {
                let metaKey = event.metaKey || event.ctrlKey;

                if (selected) {
                    value = metaKey ? this.removeOption(option) : [this.getOptionValue(option)];
                } else {
                    value = metaKey ? this.d_value || [] : [];
                    value = [...value, this.getOptionValue(option)];
                }
            } else {
                value = selected ? this.removeOption(option) : [...(this.d_value || []), this.getOptionValue(option)];
            }

            this.updateModel(event, value);
        },
        onOptionSelectRange(event, start = -1, end = -1) {
            start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
            end === -1 && (end = this.findNearestSelectedOptionIndex(start));

            if (start !== -1 && end !== -1) {
                const rangeStart = Math.min(start, end);
                const rangeEnd = Math.max(start, end);
                const value = this.visibleOptions
                    .slice(rangeStart, rangeEnd + 1)
                    .filter((option) => this.isValidOption(option))
                    .map((option) => this.getOptionValue(option));

                this.updateModel(event, value);
            }
        },
        onFilterChange(event) {
            this.$emit('filter', { originalEvent: event, value: event.target.value, filterValue: this.visibleOptions });
            this.focusedOptionIndex = this.startRangeIndex = -1;
        },
        onFilterKeyDown(event) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                case 'ArrowRight':
                    this.onArrowLeftKey(event, true);
                    break;

                case 'Home':
                    this.onHomeKey(event, true);
                    break;

                case 'End':
                    this.onEndKey(event, true);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    this.onEnterKey(event);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.onShiftKey(event);
                    break;

                default:
                    break;
            }
        },
        onArrowDownKey(event) {
            const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();

            if (this.multiple && event.shiftKey) {
                this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
            }

            this.changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
        },
        onArrowUpKey(event) {
            const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();

            if (this.multiple && event.shiftKey) {
                this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
            }

            this.changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
        },
        onArrowLeftKey(event, pressedInInputText = false) {
            pressedInInputText && (this.focusedOptionIndex = -1);
        },
        onHomeKey(event, pressedInInputText = false) {
            if (pressedInInputText) {
                const target = event.currentTarget;

                if (event.shiftKey) {
                    target.setSelectionRange(0, event.target.selectionStart);
                } else {
                    target.setSelectionRange(0, 0);
                    this.focusedOptionIndex = -1;
                }
            } else {
                let metaKey = event.metaKey || event.ctrlKey;
                let optionIndex = this.findFirstOptionIndex();

                if (this.multiple && event.shiftKey && metaKey) {
                    this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
                }

                this.changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        },
        onEndKey(event, pressedInInputText = false) {
            if (pressedInInputText) {
                const target = event.currentTarget;

                if (event.shiftKey) {
                    target.setSelectionRange(event.target.selectionStart, target.value.length);
                } else {
                    const len = target.value.length;

                    target.setSelectionRange(len, len);
                    this.focusedOptionIndex = -1;
                }
            } else {
                let metaKey = event.metaKey || event.ctrlKey;
                let optionIndex = this.findLastOptionIndex();

                if (this.multiple && event.shiftKey && metaKey) {
                    this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
                }

                this.changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        },
        onPageUpKey(event) {
            this.scrollInView(0);
            event.preventDefault();
        },
        onPageDownKey(event) {
            this.scrollInView(this.visibleOptions.length - 1);
            event.preventDefault();
        },
        onEnterKey(event) {
            if (this.focusedOptionIndex !== -1) {
                if (this.multiple && event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex);
                else this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
            }
        },
        onSpaceKey(event) {
            event.preventDefault();
            this.onEnterKey(event);
        },
        onShiftKey() {
            this.startRangeIndex = this.focusedOptionIndex;
        },
        isOptionMatched(option) {
            return this.isValidOption(option) && typeof this.getOptionLabel(option) === 'string' && this.getOptionLabel(option)?.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
        },
        isValidOption(option) {
            return isNotEmpty(option) && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
        },
        isValidSelectedOption(option) {
            return this.isValidOption(option) && this.isSelected(option);
        },
        isEquals(value1, value2) {
            return equals(value1, value2, this.equalityKey);
        },
        isSelected(option) {
            const optionValue = this.getOptionValue(option);

            if (this.multiple) return (this.d_value || []).some((value) => this.isEquals(value, optionValue));
            else return this.isEquals(this.d_value, optionValue);
        },
        findFirstOptionIndex() {
            return this.visibleOptions.findIndex((option) => this.isValidOption(option));
        },
        findLastOptionIndex() {
            return findLastIndex(this.visibleOptions, (option) => this.isValidOption(option));
        },
        findNextOptionIndex(index) {
            const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        },
        findPrevOptionIndex(index) {
            const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), (option) => this.isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        },
        findSelectedOptionIndex() {
            if (this.$filled) {
                if (this.multiple) {
                    for (let index = this.d_value.length - 1; index >= 0; index--) {
                        const value = this.d_value[index];
                        const matchedOptionIndex = this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option) && this.isEquals(value, this.getOptionValue(option)));

                        if (matchedOptionIndex > -1) return matchedOptionIndex;
                    }
                } else {
                    return this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option));
                }
            }

            return -1;
        },
        findFirstSelectedOptionIndex() {
            return this.$filled ? this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option)) : -1;
        },
        findLastSelectedOptionIndex() {
            return this.$filled ? findLastIndex(this.visibleOptions, (option) => this.isValidSelectedOption(option)) : -1;
        },
        findNextSelectedOptionIndex(index) {
            const matchedOptionIndex = this.$filled && index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
        },
        findPrevSelectedOptionIndex(index) {
            const matchedOptionIndex = this.$filled && index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
        },
        findNearestSelectedOptionIndex(index, firstCheckUp = false) {
            let matchedOptionIndex = -1;

            if (this.$filled) {
                if (firstCheckUp) {
                    matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
                    matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
                } else {
                    matchedOptionIndex = this.findNextSelectedOptionIndex(index);
                    matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
                }
            }

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        },
        findFirstFocusedOptionIndex() {
            const selectedIndex = this.findFirstSelectedOptionIndex();

            return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
        },
        findLastFocusedOptionIndex() {
            const selectedIndex = this.findLastSelectedOptionIndex();

            return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
        },
        searchOptions(event, char) {
            this.searchValue = (this.searchValue || '') + char;

            let optionIndex = -1;

            if (isNotEmpty(this.searchValue)) {
                if (this.focusedOptionIndex !== -1) {
                    optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option));
                    optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex;
                } else {
                    optionIndex = this.visibleOptions.findIndex((option) => this.isOptionMatched(option));
                }

                if (optionIndex === -1 && this.focusedOptionIndex === -1) {
                    optionIndex = this.findFirstFocusedOptionIndex();
                }

                if (optionIndex !== -1) {
                    this.changeFocusedOptionIndex(event, optionIndex);
                }
            }

            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            this.searchTimeout = setTimeout(() => {
                this.searchValue = '';
                this.searchTimeout = null;
            }, 500);
        },
        removeOption(option) {
            return this.d_value.filter((val) => !equals(val, this.getOptionValue(option), this.equalityKey));
        },
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionIndex !== index) {
                this.focusedOptionIndex = index;
                this.scrollInView();

                if (this.selectOnFocus && !this.multiple) {
                    this.onOptionSelect(event, this.visibleOptions[index]);
                }
            }
        },
        scrollInView(index = -1) {
            this.$nextTick(() => {
                const id = index !== -1 ? `${this.$id}_${index}` : this.focusedOptionId;
                const element = findSingle(this.list, `li[id="${id}"]`);

                if (element) {
                    element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
                } else if (!this.virtualScrollerDisabled) {
                    this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
                }
            });
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.$filled && !this.multiple && this.focused) {
                this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
                this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex]);
            }
        },
        updateModel(event, value) {
            this.writeValue(value, event);
            this.$emit('change', { originalEvent: event, value });
        },
        listRef(el, contentRef) {
            this.list = el;
            contentRef && contentRef(el); // For VirtualScroller
        },
        virtualScrollerRef(el) {
            this.virtualScroller = el;
        }
    },
    computed: {
        optionsListFlat() {
            return this.filterValue ? FilterService.filter(this.options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale) : this.options;
        },
        optionsListGroup() {
            const filteredOptions = [];

            (this.options || []).forEach((optionGroup) => {
                const optionGroupChildren = this.getOptionGroupChildren(optionGroup) || [];
                const filteredChildren = this.filterValue ? FilterService.filter(optionGroupChildren, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale) : optionGroupChildren;

                if (filteredChildren?.length) {
                    filteredOptions.push({ optionGroup, group: true }, ...filteredChildren);
                }
            });

            return filteredOptions;
        },
        visibleOptions() {
            return this.optionGroupLabel ? this.optionsListGroup : this.optionsListFlat;
        },
        // @deprecated use $filled instead
        hasSelectedOption() {
            return isNotEmpty(this.d_value);
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        },
        searchFields() {
            return this.filterFields || [this.optionLabel];
        },
        filterResultMessageText() {
            return isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptyFilterMessageText;
        },
        filterMessageText() {
            return this.filterMessage || this.$primevue.config.locale.searchMessage || '';
        },
        emptyFilterMessageText() {
            return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || '';
        },
        emptyMessageText() {
            return this.emptyMessage || this.$primevue.config.locale.emptyMessage || '';
        },
        selectionMessageText() {
            return this.selectionMessage || this.$primevue.config.locale.selectionMessage || '';
        },
        emptySelectionMessageText() {
            return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || '';
        },
        selectedMessageText() {
            return this.$filled ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.d_value.length : '1') : this.emptySelectionMessageText;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? `${this.$id}_${this.focusedOptionIndex}` : null;
        },
        ariaSetSize() {
            return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        },
        containerDataP() {
            return cn({
                invalid: this.$invalid,
                disabled: this.disabled
            });
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        InputText,
        VirtualScroller,
        InputIcon,
        IconField,
        SearchIcon,
        CheckIcon,
        BlankIcon
    }
};
</script>

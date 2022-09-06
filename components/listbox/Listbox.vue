<template>
    <div :id="id" :class="containerClass" @focusout="onFocusout">
        <span ref="firstHiddenFocusableElement" role="presentation" aria-hidden="true" class="p-hidden-accessible p-hidden-focusable" :tabindex="!disabled ? tabindex : -1" @focus="onFirstHiddenFocus"></span>
        <slot name="header" :value="modelValue" :options="visibleOptions"></slot>
        <div v-if="filter" class="p-listbox-header">
            <div class="p-listbox-filter-container">
                <input ref="filterInput" type="text" class="p-listbox-filter p-inputtext p-component" v-model="filterValue" :placeholder="filterPlaceholder"
                    role="searchbox" autocomplete="off" :aria-owns="id + '_list'" :aria-activedescendant="focusedOptionId" :tabindex="!disabled && !focused ? tabindex : -1"
                    @input="onFilterChange" @blur="onFilterBlur" @keydown="onFilterKeyDown" v-bind="filterInputProps">
                <span class="p-listbox-filter-icon pi pi-search"></span>
            </div>
            <span role="status" aria-live="polite" class="p-hidden-accessible">
                {{filterResultMessageText}}
            </span>
        </div>
        <div ref="listWrapper" class="p-listbox-list-wrapper" :style="listStyle">
            <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="listStyle" :items="visibleOptions" :tabindex="-1" :disabled="virtualScrollerDisabled">
                <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                    <ul :ref="(el) => listRef(el, contentRef)" :id="id + '_list'" :class="['p-listbox-list', styleClass]" :style="contentStyle" :tabindex="-1" role="listbox"
                        :aria-multiselectable="multiple" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby" :aria-activedescendant="focused ? focusedOptionId : undefined" :aria-disabled="disabled"
                        @focus="onListFocus" @blur="onListBlur" @keydown="onListKeyDown">
                        <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                            <li v-if="isOptionGroup(option)" :id="id + '_' + getOptionIndex(i, getItemOptions)" :style="{height: itemSize ? itemSize + 'px' : undefined}" class="p-listbox-item-group" role="option">
                                <slot name="optiongroup" :option="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{getOptionGroupLabel(option.optionGroup)}}</slot>
                            </li>
                            <li v-else v-ripple :id="id + '_' + getOptionIndex(i, getItemOptions)" :style="{height: itemSize ? itemSize + 'px' : undefined}"
                                :class="['p-listbox-item', {'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex === getOptionIndex(i, getItemOptions), 'p-disabled': isOptionDisabled(option)}]"
                                role="option" :aria-label="getOptionLabel(option)" :aria-selected="isSelected(option)" :aria-disabled="isOptionDisabled(option)" :aria-setsize="ariaSetSize" :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                @click="onOptionSelect($event, option, getOptionIndex(i, getItemOptions))" @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))" @touchend="onOptionTouchEnd()">
                                <slot name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{getOptionLabel(option)}}</slot>
                            </li>
                        </template>
                        <li v-if="filterValue && (!items || (items && items.length === 0))" class="p-listbox-empty-message" role="option">
                            <slot name="emptyfilter">{{emptyFilterMessageText}}</slot>
                        </li>
                        <li v-else-if="(!options || (options && options.length === 0))" class="p-listbox-empty-message" role="option">
                            <slot name="empty">{{emptyMessageText}}</slot>
                        </li>
                    </ul>
                    <span v-if="(!options || (options && options.length === 0))" role="status" aria-live="polite" class="p-hidden-accessible">
                        {{emptyMessageText}}
                    </span>
                    <span role="status" aria-live="polite" class="p-hidden-accessible">
                        {{selectedMessageText}}
                    </span>
                </template>
                <template v-if="$slots.loader" v-slot:loader="{ options }">
                    <slot name="loader" :options="options"></slot>
                </template>
            </VirtualScroller>
        </div>
        <slot name="footer" :value="modelValue" :options="visibleOptions"></slot>
        <span ref="lastHiddenFocusableElement" role="presentation" aria-hidden="true" class="p-hidden-accessible p-hidden-focusable" :tabindex="!disabled ? tabindex : -1" @focus="onLastHiddenFocus"></span>
    </div>
</template>

<script>
import {DomHandler,ObjectUtils,UniqueComponentId} from 'primevue/utils';
import {FilterService} from 'primevue/api';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';

export default {
    name: 'Listbox',
    emits: ['update:modelValue', 'change', 'focus', 'blur', 'filter'],
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
		listStyle: null,
        disabled: Boolean,
        dataKey: null,
        multiple: Boolean,
        metaKeySelection: Boolean,
        filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String,
        filterMatchMode: {
            type: String,
            default: 'contains'
        },
        filterFields: {
            type: Array,
            default: null
        },
        filterInputProps: null,
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        filterMessage: {
            type: String,
            default: null
        },
        selectionMessage: {
            type: String,
            default: null
        },
        emptySelectionMessage: {
            type: String,
            default: null
        },
        emptyFilterMessage: {
            type: String,
            default: null
        },
        emptyMessage: {
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
    list: null,
    virtualScroller: null,
    optionTouched: false,
    startRangeIndex: -1,
    searchTimeout: null,
    searchValue: '',
    selectOnFocus: false,
    focusOnHover: false,
    data() {
        return {
            id: UniqueComponentId(),
            filterValue: null,
            focused: false,
            focusedOptionIndex: -1
        }
    },
    watch: {
        options() {
            this.autoUpdateModel();
        }
    },
    mounted() {
        this.id = this.$attrs.id || this.id;

        this.autoUpdateModel();
    },
    methods: {
        getOptionIndex(index, fn) {
            return this.virtualScrollerDisabled ? index : (fn && fn(index)['index']);
        },
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionRenderKey(option, index) {
            return (this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + '_' + index;
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
        },
        isOptionGroup(option) {
            return this.optionGroupLabel && option.optionGroup && option.group;
        },
        getOptionGroupLabel(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
        },
        getOptionGroupChildren(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
        },
        getAriaPosInset(index) {
            return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
        },
        onFirstHiddenFocus() {
            this.list.focus();

            const firstFocusableEl = DomHandler.getFirstFocusableElement(this.$el, ':not(.p-hidden-focusable)');
            this.$refs.lastHiddenFocusableElement.tabIndex = ObjectUtils.isEmpty(firstFocusableEl) ? -1 : undefined;
            this.$refs.firstHiddenFocusableElement.tabIndex = -1;
        },
        onLastHiddenFocus(event) {
            const relatedTarget = event.relatedTarget;

            if (relatedTarget === this.list) {
                const firstFocusableEl = DomHandler.getFirstFocusableElement(this.$el, ':not(.p-hidden-focusable)');
                firstFocusableEl && firstFocusableEl.focus();
                this.$refs.firstHiddenFocusableElement.tabIndex = undefined;
            }
            else {
                this.$refs.firstHiddenFocusableElement.focus();
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
            this.focusedOptionIndex = this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
            this.$emit('focus', event);
        },
        onListBlur(event) {
            this.focused = false;
            this.focusedOptionIndex = this.startRangeIndex = -1;
            this.searchValue = '';
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

                case 'PageDown':
                    this.onPageDownKey(event);
                    break;

                case 'PageUp':
                    this.onPageUpKey(event);
                    break;

                case 'Enter':
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
                    if (event.code === 'KeyA' && this.multiple && (event.metaKey || event.ctrlKey)) {
                        const value = this.visibleOptions.filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
                        this.updateModel(event, value);

                        event.preventDefault();
                        break;
                    }

                    if (ObjectUtils.isPrintableCharacter(event.key)) {
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
        onOptionMouseMove(event, index) {
            if (this.focusOnHover) {
                this.changeFocusedOptionIndex(event, index);
            }
        },
        onOptionTouchEnd() {
            if (this.disabled) {
                return;
            }

            this.optionTouched = true;
        },
        onOptionSelectSingle(event, option) {
            let selected = this.isSelected(option);
            let valueChanged = false;
            let value = null;
            let metaSelection = this.optionTouched ? false : this.metaKeySelection;

            if (metaSelection) {
                let metaKey = (event.metaKey || event.ctrlKey);

                if (selected) {
                    if (metaKey) {
                        value = null;
                        valueChanged = true;
                    }
                }
                else {
                    value = this.getOptionValue(option);
                    valueChanged = true;
                }
            }
            else {
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
                let metaKey = (event.metaKey || event.ctrlKey);

                if (selected) {
                    value = metaKey ? this.removeOption(option) : [this.getOptionValue(option)];
                }
                else {
                    value = (metaKey) ? this.modelValue || [] : [];
                    value = [...value, this.getOptionValue(option)];
                }
            }
            else {
                value = selected ? this.removeOption(option) : [...this.modelValue || [], this.getOptionValue(option)];
            }

            this.updateModel(event, value);
        },
        onOptionSelectRange(event, start = -1, end = -1) {
            start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
            end === -1 && (end = this.findNearestSelectedOptionIndex(start));

            if (start !== -1 && end !== -1) {
                const rangeStart = Math.min(start, end);
                const rangeEnd = Math.max(start, end);
                const value = this.visibleOptions.slice(rangeStart, rangeEnd + 1).filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));

                this.updateModel(event, value);
            }
        },
        onFilterChange(event) {
            this.$emit('filter', {originalEvent: event, value: event.target.value});
            this.focusedOptionIndex = this.startRangeIndex = -1;
        },
        onFilterBlur() {
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
                event.currentTarget.setSelectionRange(0, 0);
                this.focusedOptionIndex = -1;
            }
            else {
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
                const len = target.value.length;
                target.setSelectionRange(len, len);
                this.focusedOptionIndex = -1;
            }
            else {
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
                if (this.multiple && event.shiftKey)
                    this.onOptionSelectRange(event, this.focusedOptionIndex);
                else
                    this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
            }

            event.preventDefault();
        },
        onSpaceKey(event) {
            this.onEnterKey(event);
        },
        onShiftKey() {
            this.startRangeIndex = this.focusedOptionIndex;
        },
        isOptionMatched(option) {
            return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
        },
        isValidOption(option) {
            return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
        },
        isValidSelectedOption(option) {
            return this.isValidOption(option) && this.isSelected(option);
        },
        isSelected(option) {
            const optionValue = this.getOptionValue(option);

            if (this.multiple)
                return (this.modelValue || []).some(value => ObjectUtils.equals(value, optionValue, this.equalityKey));
            else
                return ObjectUtils.equals(this.modelValue, optionValue, this.equalityKey);
        },
        findFirstOptionIndex() {
            return this.visibleOptions.findIndex(option => this.isValidOption(option));
        },
        findLastOptionIndex() {
            return ObjectUtils.findLastIndex(this.visibleOptions, option => this.isValidOption(option));
        },
        findNextOptionIndex(index) {
            const matchedOptionIndex = index < (this.visibleOptions.length - 1) ? this.visibleOptions.slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        },
        findPrevOptionIndex(index) {
            const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), option => this.isValidOption(option)) : -1;
            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        },
        findFirstSelectedOptionIndex() {
            return this.hasSelectedOption ? this.visibleOptions.findIndex(option => this.isValidSelectedOption(option)) : -1;
        },
        findLastSelectedOptionIndex() {
            return this.hasSelectedOption ? ObjectUtils.findLastIndex(this.visibleOptions, option => this.isValidSelectedOption(option)) : -1;
        },
        findNextSelectedOptionIndex(index) {
            const matchedOptionIndex = this.hasSelectedOption && index < (this.visibleOptions.length - 1) ? this.visibleOptions.slice(index + 1).findIndex(option => this.isValidSelectedOption(option)) : -1;
            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
        },
        findPrevSelectedOptionIndex(index) {
            const matchedOptionIndex = this.hasSelectedOption && index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), option => this.isValidSelectedOption(option)) : -1;
            return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
        },
        findNearestSelectedOptionIndex(index, firstCheckUp = false) {
            let matchedOptionIndex = -1;

            if (this.hasSelectedOption) {
                if (firstCheckUp) {
                    matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
                    matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
                }
                else {
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
            if (this.focusedOptionIndex !== -1) {
                optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(option => this.isOptionMatched(option));
                optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(option => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex;
            }
            else {
                optionIndex = this.visibleOptions.findIndex(option => this.isOptionMatched(option));
            }

            if (optionIndex === -1 && this.focusedOptionIndex === -1) {
                optionIndex = this.findFirstFocusedOptionIndex();
            }

            if (optionIndex !== -1) {
                this.changeFocusedOptionIndex(event, optionIndex);
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
            return this.modelValue.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey));
        },
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionIndex !== index) {
                this.focusedOptionIndex = index;
                this.scrollInView();

                if (this.selectOnFocus && !this.multiple) {
                    this.updateModel(event, this.getOptionValue(this.visibleOptions[index]));
                }
            }
        },
        scrollInView(index = -1) {
            const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
            const element = DomHandler.findSingle(this.list, `li[id="${id}"]`);
            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }
            else if (!this.virtualScrollerDisabled) {
                this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
            }
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
                this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
                const value = this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);
                this.updateModel(null, this.multiple ? [value] : value);
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', { originalEvent: event, value });
        },
        flatOptions(options) {
            return (options || []).reduce((result, option, index) => {
                result.push({ optionGroup: option, group: true, index });

                const optionGroupChildren = this.getOptionGroupChildren(option);
                optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));

                return result;
            }, []);
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
        containerClass() {
            return ['p-listbox p-component', {
                'p-focus': this.focused,
                'p-disabled': this.disabled
            }];
        },
        visibleOptions() {
            const options = this.optionGroupLabel ? this.flatOptions(this.options) : (this.options || []);

            return this.filterValue ? FilterService.filter(options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale) : options;
        },
        hasSelectedOption() {
            return ObjectUtils.isNotEmpty(this.modelValue);
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        },
        searchFields() {
            return this.filterFields || [this.optionLabel];
        },
        filterResultMessageText() {
            return ObjectUtils.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptyFilterMessageText;
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
            return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.modelValue.length : '1') : this.emptySelectionMessageText;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
        },
        ariaSetSize() {
            return this.visibleOptions.filter(option => !this.isOptionGroup(option)).length;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        }
    },
    directives: {
        'ripple': Ripple
    },
    components: {
        'VirtualScroller': VirtualScroller
    }
}
</script>

<style>
.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.p-listbox-item-group {
    cursor: auto;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-listbox-filter {
    width: 100%;
}
</style>

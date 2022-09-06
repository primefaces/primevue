<template>
    <div ref="container" :class="containerClass" @click="onContainerClick">
        <input v-if="!multiple" ref="focusInput" :id="inputId" type="text" :style="inputStyle" :class="inputStyleClass" :value="inputValue" :placeholder="placeholder" :tabindex="!disabled ? tabindex : -1" :disabled="disabled" autocomplete="off"
            role="combobox" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby" aria-haspopup="listbox" aria-autocomplete="list" :aria-expanded="overlayVisible" :aria-controls="id + '_list'" :aria-activedescendant="focused ? focusedOptionId : undefined"
            @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" @input="onInput" @change="onChange" v-bind="inputProps" />
        <ul v-if="multiple" ref="multiContainer" :class="multiContainerClass" tabindex="-1" role="listbox" aria-orientation="horizontal" :aria-activedescendant="focused ? focusedMultipleOptionId : undefined"
            @focus="onMultipleContainerFocus" @blur="onMultipleContainerBlur" @keydown="onMultipleContainerKeyDown">
            <li v-for="(option, i) of modelValue" :key="i" :id="id + '_multiple_option_' + i" :class="['p-autocomplete-token', {'p-focus': focusedMultipleOptionIndex === i}]"
                role="option" :aria-label="getOptionLabel(option)" :aria-selected="true" :aria-setsize="modelValue.length" :aria-posinset="i + 1">
                <slot name="chip" :value="option">
                    <span class="p-autocomplete-token-label">{{getOptionLabel(option)}}</span>
                </slot>
                <span class="p-autocomplete-token-icon pi pi-times-circle" @click="removeOption($event, i)" aria-hidden="true"></span>
            </li>
            <li class="p-autocomplete-input-token" role="option">
                <input ref="focusInput" :id="inputId" type="text" :style="inputStyle" :class="inputClass" :placeholder="placeholder" :tabindex="!disabled ? tabindex : -1" :disabled="disabled" autocomplete="off"
                    role="combobox" :aria-label="ariaLabel" :aria-labelledby="ariaLabelledby" aria-haspopup="listbox" aria-autocomplete="list" :aria-expanded="overlayVisible" :aria-controls="id + '_list'" :aria-activedescendant="focused ? focusedOptionId : undefined"
                    @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" @input="onInput" @change="onChange" v-bind="inputProps" />
            </li>
        </ul>
        <i v-if="searching" :class="loadingIconClass" aria-hidden="true"></i>
        <Button v-if="dropdown" ref="dropdownButton" type="button" icon="pi pi-chevron-down" class="p-autocomplete-dropdown" tabindex="-1" :disabled="disabled" aria-hidden="true" @click="onDropdownClick" />
        <span role="status" aria-live="polite" class="p-hidden-accessible">
            {{searchResultMessageText}}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div v-if="overlayVisible" :ref="overlayRef" :class="panelStyleClass" :style="{...panelStyle, 'max-height': virtualScrollerDisabled ? scrollHeight : ''}" @click="onOverlayClick" @keydown="onOverlayKeyDown" v-bind="panelProps">
                    <slot name="header" :value="modelValue" :suggestions="visibleOptions"></slot>
                    <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="{'height': scrollHeight}" :items="visibleOptions" :tabindex="-1" :disabled="virtualScrollerDisabled">
                        <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                            <ul :ref="(el) => listRef(el, contentRef)" :id="id + '_list'" :class="['p-autocomplete-items', styleClass]" :style="contentStyle" role="listbox">
                                <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                                    <li v-if="isOptionGroup(option)" :id="id + '_' + getOptionIndex(i, getItemOptions)" :style="{height: itemSize ? itemSize + 'px' : undefined}" class="p-autocomplete-item-group" role="option">
                                        <slot name="optiongroup" :option="option.optionGroup" :item="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{getOptionGroupLabel(option.optionGroup)}}</slot>
                                    </li>
                                    <li v-else v-ripple :id="id + '_' + getOptionIndex(i, getItemOptions)" :style="{height: itemSize ? itemSize + 'px' : undefined}"
                                        :class="['p-autocomplete-item', {'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex === getOptionIndex(i, getItemOptions), 'p-disabled': isOptionDisabled(option)}]"
                                        role="option" :aria-label="getOptionLabel(option)" :aria-selected="isSelected(option)" :aria-disabled="isOptionDisabled(option)" :aria-setsize="ariaSetSize" :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                        @click="onOptionSelect($event, option)" @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))">
                                        <slot v-if="$slots.option" name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{getOptionLabel(option)}}</slot>
                                        <slot v-else name="item" :item="option" :index="getOptionIndex(i, getItemOptions)">{{getOptionLabel(option)}}</slot> <!--TODO: Deprecated since v3.16.0-->
                                    </li>
                                </template>
                            </ul>
                            <span role="status" aria-live="polite" class="p-hidden-accessible">
                                {{selectedMessageText}}
                            </span>
                        </template>
                        <template v-if="$slots.loader" v-slot:loader="{ options }">
                            <slot name="loader" :options="options"></slot>
                        </template>
                    </VirtualScroller>
                    <slot name="footer" :value="modelValue" :suggestions="visibleOptions"></slot>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import {ConnectedOverlayScrollHandler,UniqueComponentId,ObjectUtils,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';
import Portal from 'primevue/portal';

export default {
    name: 'AutoComplete',
    emits: ['update:modelValue', 'change', 'focus', 'blur', 'item-select', 'item-unselect', 'dropdown-click', 'clear', 'complete', 'before-show', 'before-hide', 'show', 'hide'],
    props: {
        modelValue: null,
        suggestions: {
            type: Array,
            default: null
        },
        field: { // TODO: Deprecated since v3.16.0
            type: [String,Function],
            default: null
        },
        optionLabel: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        dropdown: {
            type: Boolean,
            default: false
        },
        dropdownMode: {
            type: String,
            default: 'blank'
        },
        autoHighlight: { // TODO: Deprecated since v3.16.0
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        dataKey: {
            type: String,
            default: null
        },
        minLength: {
            type: Number,
            default: 1
        },
        delay: {
            type: Number,
            default: 300
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        forceSelection: {
            type: Boolean,
            default: false
        },
        completeOnFocus: {
            type: Boolean,
            default: false
        },
        inputId: String,
        inputStyle: null,
        inputClass: null,
        inputProps: null,
        panelStyle: null,
        panelClass: null,
        panelProps: null,
        loadingIcon: {
            type: String,
            default: 'pi pi-spinner'
        },
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        searchLocale: {
            type: String,
            default: undefined
        },
        searchMessage: {
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
        emptySearchMessage: {
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
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    virtualScroller: null,
    searchTimeout: null,
    selectOnFocus: false,
    focusOnHover: false,
    dirty: false,
    data() {
        return {
            id: UniqueComponentId(),
            focused: false,
            focusedOptionIndex: -1,
            focusedMultipleOptionIndex: -1,
            overlayVisible: false,
            searching: false
        }
    },
    watch: {
        suggestions() {
            if (this.searching) {
                ObjectUtils.isNotEmpty(this.suggestions) ? this.show() : this.hide();
                this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
                this.searching = false;
            }

            this.autoUpdateModel();
        }
    },
    mounted() {
        this.id = this.$attrs.id || this.id;

        this.autoUpdateModel();
    },
    updated() {
        if (this.overlayVisible) {
            this.alignOverlay();
        }
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.overlay = null;
        }
    },
    methods: {
        getOptionIndex(index, fn) {
            return this.virtualScrollerDisabled ? index : (fn && fn(index)['index']);
        },
        getOptionLabel(option) {
            return this.field || this.optionLabel ? ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option;
        },
        getOptionValue(option) {
            return option; // TODO: The 'optionValue' properties can be added.
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
        show(isFocus) {
            this.$emit('before-show');
            this.dirty = true;
            this.overlayVisible = true;
            this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : (this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1);

            isFocus && this.$refs.focusInput.focus();
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.dirty = isFocus;
                this.overlayVisible = false;
                this.focusedOptionIndex = -1;

                isFocus && this.$refs.focusInput.focus();
            }

            setTimeout(() => { _hide() }, 0); // For ScreenReaders
        },
        onFocus(event) {
            if (!this.dirty && this.completeOnFocus) {
                this.search(event, event.target.value, 'focus');
            }

            this.dirty = true;
            this.focused = true;
            this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
            this.overlayVisible && this.scrollInView(this.focusedOptionIndex);
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.dirty = false;
            this.focused = false;
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                    this.onArrowLeftKey(event);
                    break;

                case 'ArrowRight':
                    this.onArrowRightKey(event);
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
                    this.onEnterKey(event);
                    break;

                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                case 'Tab':
                    this.onTabKey(event);
                    break;

                case 'Backspace':
                    this.onBackspaceKey(event);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    break;
            }
        },
        onInput(event) {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            let query = event.target.value;
            if (!this.multiple) {
                this.updateModel(event, query);
            }

            if (query.length === 0) {
                this.hide();
                this.$emit('clear');
            }
            else {
                if (query.length >= this.minLength) {
                    this.focusedOptionIndex = -1;

                    this.searchTimeout = setTimeout(() => {
                        this.search(event, query, 'input');
                    }, this.delay);
                }
                else {
                    this.hide();
                }
            }
        },
        onChange(event) {
            if (this.forceSelection) {
                let valid = false;

                if (this.visibleOptions)  {
                    const matchedValue = this.visibleOptions.find(option => this.isOptionMatched(option, event.target.value));

                    if (matchedValue !== undefined) {
                        valid = true;
                        !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
                    }
                }

                if (!valid) {
                    this.$refs.focusInput.value = '';
                    this.$emit('clear');
                    !this.multiple && this.updateModel(event, null);
                }
            }
        },
        onMultipleContainerFocus() {
            this.focused = true;
        },
        onMultipleContainerBlur() {
            this.focusedMultipleOptionIndex = -1;
            this.focused = false;
        },
        onMultipleContainerKeyDown(event) {
            switch (event.code) {
                case 'ArrowLeft':
                    this.onArrowLeftKeyOnMultiple(event);
                    break;

                case 'ArrowRight':
                    this.onArrowRightKeyOnMultiple(event);
                    break;

                case 'Backspace':
                    this.onBackspaceKeyOnMultiple(event);
                    break;

                default:
                    break;
            }
        },
        onContainerClick(event) {
            if (this.disabled || this.searching || this.isInputClicked(event) || this.isDropdownClicked(event)) {
                return;
            }

            if (!this.overlay || !this.overlay.contains(event.target)) {
                this.$refs.focusInput.focus();
            }
        },
        onDropdownClick(event) {
            let query = undefined;

            if (this.overlayVisible) {
                this.hide(true);
            }
            else {
                this.$refs.focusInput.focus();
                query = this.$refs.focusInput.value;

                if (this.dropdownMode === 'blank')
                    this.search(event, '', 'dropdown');
                else if (this.dropdownMode === 'current')
                    this.search(event, query, 'dropdown');
            }

            this.$emit('dropdown-click', { originalEvent: event, query });
        },
        onOptionSelect(event, option) {
            const value = this.getOptionValue(option);

            if (this.multiple) {
                this.$refs.focusInput.value = '';

                if (!this.isSelected(option)) {
                    this.updateModel(event, [...(this.modelValue || []), value]);
                }
            }
            else {
                this.updateModel(event, value);
            }

            this.$emit('item-select', { originalEvent: event, value: option });

            this.hide(true);
        },
        onOptionMouseMove(event, index) {
            if (this.focusOnHover) {
                this.changeFocusedOptionIndex(event, index);
            }
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.$el
            });
        },
        onOverlayKeyDown(event) {
            switch (event.code) {
                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                default:
                    break;
            }
        },
        onArrowDownKey(event) {
            if (!this.overlayVisible) {
                return;
            }

            const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();

            this.changeFocusedOptionIndex(event, optionIndex);

            event.preventDefault();
        },
        onArrowUpKey(event) {
            if (!this.overlayVisible) {
                return;
            }

            if (event.altKey) {
                if (this.focusedOptionIndex !== -1) {
                    this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                }

                this.overlayVisible && this.hide();
                event.preventDefault();
            }
            else {
                const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex);

                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            const target = event.currentTarget;
            this.focusedOptionIndex = -1;

            if (this.multiple) {
                if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption) {
                    this.$refs.multiContainer.focus();
                    this.focusedMultipleOptionIndex = this.modelValue.length;
                }
                else {
                    event.stopPropagation(); // To prevent onArrowLeftKeyOnMultiple method
                }
            }
        },
        onArrowRightKey(event) {
            this.focusedOptionIndex = -1;

            this.multiple && event.stopPropagation(); // To prevent onArrowRightKeyOnMultiple method
        },
        onHomeKey(event) {
            event.currentTarget.setSelectionRange(0, 0);
            this.focusedOptionIndex = -1;

            event.preventDefault();
        },
        onEndKey(event) {
            const target = event.currentTarget;
            const len = target.value.length;
            target.setSelectionRange(len, len);
            this.focusedOptionIndex = -1;

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
            if (!this.overlayVisible) {
                this.onArrowDownKey(event);
            }
            else {
                if (this.focusedOptionIndex !== -1) {
                    this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                }

                this.hide();
            }

            event.preventDefault();
        },
        onEscapeKey(event) {
            this.overlayVisible && this.hide(true);
            event.preventDefault();
        },
        onTabKey(event) {
            if (this.focusedOptionIndex !== -1) {
                this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
            }

            this.overlayVisible && this.hide();
        },
        onBackspaceKey(event) {
            if (this.multiple) {
                if (ObjectUtils.isNotEmpty(this.modelValue) && !this.$refs.focusInput.value) {
                    const removedValue = this.modelValue[this.modelValue.length - 1];
                    const newValue = this.modelValue.slice(0, -1);

                    this.$emit('update:modelValue', newValue);
                    this.$emit('item-unselect', { originalEvent: event, value: removedValue });
                }

                event.stopPropagation(); // To prevent onBackspaceKeyOnMultiple method
            }
        },
        onArrowLeftKeyOnMultiple() {
            this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
        },
        onArrowRightKeyOnMultiple() {
            this.focusedMultipleOptionIndex++;

            if (this.focusedMultipleOptionIndex > (this.modelValue.length - 1)) {
                this.focusedMultipleOptionIndex = -1;
                this.$refs.focusInput.focus();
            }
        },
        onBackspaceKeyOnMultiple(event) {
            if (this.focusedMultipleOptionIndex !== -1) {
                this.removeOption(event, this.focusedMultipleOptionIndex);
            }
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
        },
        onOverlayAfterEnter() {
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();

            this.$emit('hide');
            this.overlay = null;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            let target = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput;
            if (this.appendTo === 'self') {
                DomHandler.relativePosition(this.overlay, target);
            }
            else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(target) + 'px';
                DomHandler.absolutePosition(this.overlay, target);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.overlay && this.isOutsideClicked(event)) {
                        this.hide();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
                        this.hide();
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        isOutsideClicked(event) {
            return !this.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
        },
        isInputClicked(event) {
            if (this.multiple)
                return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
            else
                return event.target === this.$refs.focusInput;
        },
        isDropdownClicked(event) {
            return this.$refs.dropdownButton ? (event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.$el.contains(event.target)) : false;
        },
        isOptionMatched(option, value) {
            return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
        },
        isValidOption(option) {
            return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
        },
        isValidSelectedOption(option) {
            return this.isValidOption(option) && this.isSelected(option);
        },
        isSelected(option) {
            return ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
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
        findSelectedOptionIndex() {
            return this.hasSelectedOption ? this.visibleOptions.findIndex(option => this.isValidSelectedOption(option)) : -1;
        },
        findFirstFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();
            return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
        },
        findLastFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();
            return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
        },
        search(event, query, source) {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
                return;
            }

            //do not search blank values on input change
            if (source === 'input' && query.trim().length === 0) {
                return;
            }

            this.searching = true;
            this.$emit('complete', { originalEvent: event, query });
        },
        removeOption(event, index) {
            const removedOption = this.modelValue[index];
            const value = this.modelValue.filter((_, i) => i !== index).map(option => this.getOptionValue(option));

            this.updateModel(event, value);
            this.$emit('item-unselect', { originalEvent: event, value: removedOption });
            this.dirty = true;
            this.$refs.focusInput.focus();
        },
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionIndex !== index) {
                this.focusedOptionIndex = index;
                this.scrollInView();

                if (this.selectOnFocus || this.autoHighlight) {
                    this.updateModel(event, this.getOptionValue(this.visibleOptions[index]));
                }
            }
        },
        scrollInView(index = -1) {
            const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
            const element = DomHandler.findSingle(this.list, `li[id="${id}"]`);
            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
            else if (!this.virtualScrollerDisabled) {
                setTimeout(() => {
                    this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
                }, 0);
            }
        },
        autoUpdateModel() {
            if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption) {
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
        overlayRef(el) {
            this.overlay = el;
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
            return ['p-autocomplete p-component p-inputwrapper', {
                'p-disabled': this.disabled,
                'p-focus': this.focused,
                'p-autocomplete-dd': this.dropdown,
                'p-autocomplete-multiple': this.multiple,
                'p-inputwrapper-filled': this.modelValue || ObjectUtils.isNotEmpty(this.inputValue),
                'p-inputwrapper-focus': this.focused,
                'p-overlay-open': this.overlayVisible
            }];
        },
        inputStyleClass() {
            return ['p-autocomplete-input p-inputtext p-component', this.inputClass, {
                'p-autocomplete-dd-input': this.dropdown
            }];
        },
        multiContainerClass() {
            return ['p-autocomplete-multiple-container p-component p-inputtext'];
        },
        panelStyleClass() {
            return ['p-autocomplete-panel p-component', this.panelClass, {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        loadingIconClass() {
            return ['p-autocomplete-loader pi-spin', this.loadingIcon];
        },
        visibleOptions() {
            return this.optionGroupLabel ? this.flatOptions(this.suggestions) : (this.suggestions || []);
        },
        inputValue() {
            if (this.modelValue) {
                if (typeof this.modelValue === 'object') {
                    const label = this.getOptionLabel(this.modelValue);
                    return label != null ? label : this.modelValue;
                }
                else {
                    return this.modelValue;
                }
            }
            else {
                return '';
            }
        },
        hasSelectedOption() {
            return ObjectUtils.isNotEmpty(this.modelValue);
        },
        equalityKey() {
            return this.dataKey; // TODO: The 'optionValue' properties can be added.
        },
        searchResultMessageText() {
            return ObjectUtils.isNotEmpty(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptySearchMessageText;
        },
        searchMessageText() {
            return this.searchMessage || this.$primevue.config.locale.searchMessage || '';
        },
        emptySearchMessageText() {
            return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || '';
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
        focusedMultipleOptionId() {
            return this.focusedMultipleOptionIndex !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex}` : null;
        },
        ariaSetSize() {
            return this.visibleOptions.filter(option => !this.isOptionGroup(option)).length;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        }
    },
    components: {
        'Button': Button,
        'VirtualScroller': VirtualScroller,
        'Portal': Portal
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-autocomplete {
    display: inline-flex;
    position: relative;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-autocomplete-dd .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
     border-top-right-radius: 0;
     border-bottom-right-radius: 0;
 }

.p-autocomplete-dd .p-autocomplete-dropdown {
     border-top-left-radius: 0;
     border-bottom-left-radius: 0px;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
}

.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-autocomplete-token-icon {
    cursor: pointer;
}

.p-autocomplete-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
</style>

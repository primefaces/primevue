<template>
    <div ref="container" :class="containerClass" @click="onContainerClick($event)" v-bind="ptm('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input
                ref="focusInput"
                :id="inputId"
                type="text"
                :style="inputStyle"
                :class="inputClass"
                readonly
                :disabled="disabled"
                :placeholder="placeholder"
                :tabindex="!disabled ? tabindex : -1"
                role="combobox"
                :aria-label="ariaLabel"
                :aria-labelledby="ariaLabelledby"
                aria-haspopup="tree"
                :aria-expanded="overlayVisible"
                :aria-controls="id + '_tree'"
                :aria-activedescendant="focused ? focusedOptionId : undefined"
                @focus="onFocus"
                @blur="onBlur"
                @keydown="onKeyDown"
                v-bind="{ ...inputProps, ...ptm('input') }"
            />
        </div>
        <span :class="labelClass" v-bind="ptm('label')">
            <slot name="value" :value="modelValue" :placeholder="placeholder">
                {{ label }}
            </slot>
        </span>
        <div class="p-cascadeselect-trigger" role="button" tabindex="-1" aria-hidden="true" v-bind="ptm('dropdownButton')">
            <slot v-if="loading" name="loadingicon" class="p-cascadeselect-trigger-icon">
                <span v-if="loadingIcon" :class="['p-cascadeselect-trigger-icon pi-spin', loadingIcon]" aria-hidden="true" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else class="p-cascadeselect-trigger-icon" spin aria-hidden="true" v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="dropdownicon" class="p-cascadeselect-trigger-icon">
                <component :is="dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="['p-cascadeselect-trigger-icon', dropdownIcon]" aria-hidden="true" v-bind="ptm('dropdownIcon')" />
            </slot>
        </div>
        <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('searchResultAria')">
            {{ searchResultMessageText }}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave">
                <div v-if="overlayVisible" :ref="overlayRef" :style="panelStyle" :class="panelStyleClass" @click="onOverlayClick" @keydown="onOverlayKeyDown" v-bind="{ ...panelProps, ...ptm('panel') }">
                    <div class="p-cascadeselect-items-wrapper" v-bind="ptm('wrapper')">
                        <CascadeSelectSub
                            :id="id + '_tree'"
                            role="tree"
                            aria-orientation="horizontal"
                            :selectId="id"
                            :focusedOptionId="focused ? focusedOptionId : undefined"
                            :options="processedOptions"
                            :activeOptionPath="activeOptionPath"
                            :level="0"
                            :templates="$slots"
                            :optionLabel="optionLabel"
                            :optionValue="optionValue"
                            :optionDisabled="optionDisabled"
                            :optionGroupIcon="optionGroupIcon"
                            :optionGroupLabel="optionGroupLabel"
                            :optionGroupChildren="optionGroupChildren"
                            @option-change="onOptionChange"
                            :pt="pt"
                        />
                    </div>

                    <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSelectedMessage')">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import AngleRightIcon from 'primevue/icons/angleright';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import SpinnerIcon from 'primevue/icons/spinner';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import { ConnectedOverlayScrollHandler, DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import CascadeSelectSub from './CascadeSelectSub.vue';

export default {
    name: 'CascadeSelect',
    extends: BaseComponent,
    emits: ['update:modelValue', 'change', 'focus', 'blur', 'click', 'group-change', 'before-show', 'before-hide', 'hide', 'show'],
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        placeholder: String,
        disabled: Boolean,
        dataKey: null,
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        panelClass: {
            type: [String, Object],
            default: null
        },
        panelStyle: {
            type: Object,
            default: null
        },
        panelProps: {
            type: null,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        loading: {
            type: Boolean,
            default: false
        },
        dropdownIcon: {
            type: String,
            default: undefined
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        optionGroupIcon: {
            type: String,
            default: undefined
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        selectOnFocus: {
            type: Boolean,
            default: false
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
        emptyMessage: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    overlay: null,
    searchTimeout: null,
    searchValue: null,
    focusOnHover: false,
    data() {
        return {
            id: this.$attrs.id,
            focused: false,
            focusedOptionInfo: { index: -1, level: 0, parentKey: '' },
            activeOptionPath: [],
            overlayVisible: false,
            dirty: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        options() {
            this.autoUpdateModel();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();

        this.autoUpdateModel();
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
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
        },
        getOptionGroupLabel(optionGroup) {
            return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(optionGroup, level) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
        },
        isOptionGroup(option, level) {
            return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
        },
        getProccessedOptionLabel(processedOption) {
            const grouped = this.isProccessedOptionGroup(processedOption);

            return grouped ? this.getOptionGroupLabel(processedOption.option, processedOption.level) : this.getOptionLabel(processedOption.option);
        },
        isProccessedOptionGroup(processedOption) {
            return ObjectUtils.isNotEmpty(processedOption.children);
        },
        show(isFocus) {
            this.$emit('before-show');
            this.overlayVisible = true;
            this.activeOptionPath = this.hasSelectedOption ? this.findOptionPathByValue(this.modelValue) : this.activeOptionPath;

            if (this.hasSelectedOption && ObjectUtils.isNotEmpty(this.activeOptionPath)) {
                const processedOption = this.activeOptionPath[this.activeOptionPath.length - 1];

                this.focusedOptionInfo = { index: this.autoOptionFocus ? processedOption.index : -1, level: processedOption.level, parentKey: processedOption.parentKey };
            } else {
                this.focusedOptionInfo = { index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, level: 0, parentKey: '' };
            }

            isFocus && DomHandler.focus(this.$refs.focusInput);
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.overlayVisible = false;
                this.activeOptionPath = [];
                this.focusedOptionInfo = { index: -1, level: 0, parentKey: '' };

                isFocus && DomHandler.focus(this.$refs.focusInput);
            };

            setTimeout(() => {
                _hide();
            }, 0); // For ScreenReaders
        },
        onFocus(event) {
            if (this.disabled) {
                // For ScreenReaders
                return;
            }

            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedOptionInfo = { index: -1, level: 0, parentKey: '' };
            this.searchValue = '';
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            if (this.disabled || this.loading) {
                event.preventDefault();

                return;
            }

            const metaKey = event.metaKey || event.ctrlKey;

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

                case 'Space':
                    this.onSpaceKey(event);
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

                case 'PageDown':
                case 'PageUp':
                case 'Backspace':
                case 'ShiftLeft':
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        !this.overlayVisible && this.show();
                        this.searchOptions(event, event.key);
                    }

                    break;
            }
        },
        onOptionChange(event) {
            const { originalEvent, processedOption, isFocus, isHide } = event;

            if (ObjectUtils.isEmpty(processedOption)) return;

            const { index, level, parentKey, children } = processedOption;
            const grouped = ObjectUtils.isNotEmpty(children);

            const activeOptionPath = this.activeOptionPath.filter((p) => p.parentKey !== parentKey);

            activeOptionPath.push(processedOption);

            this.focusedOptionInfo = { index, level, parentKey };
            this.activeOptionPath = activeOptionPath;

            grouped ? this.onOptionGroupSelect(originalEvent, processedOption) : this.onOptionSelect(originalEvent, processedOption, isHide);
            isFocus && DomHandler.focus(this.$refs.focusInput);
        },
        onOptionSelect(event, processedOption, isHide = true) {
            const value = this.getOptionValue(processedOption.option);

            this.activeOptionPath.forEach((p) => (p.selected = true));
            this.updateModel(event, value);
            isHide && this.hide(true);
        },
        onOptionGroupSelect(event, processedOption) {
            this.dirty = true;
            this.$emit('group-change', { originalEvent: event, value: processedOption.option });
        },
        onContainerClick(event) {
            if (this.disabled || this.loading) {
                return;
            }

            if (!this.overlay || !this.overlay.contains(event.target)) {
                this.overlayVisible ? this.hide() : this.show();
                DomHandler.focus(this.$refs.focusInput);
            }

            this.$emit('click', event);
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
            const optionIndex = this.focusedOptionInfo.index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo.index) : this.findFirstFocusedOptionIndex();

            this.changeFocusedOptionIndex(event, optionIndex);

            !this.overlayVisible && this.show();
            event.preventDefault();
        },
        onArrowUpKey(event) {
            if (event.altKey) {
                if (this.focusedOptionInfo.index !== -1) {
                    const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                    const grouped = this.isProccessedOptionGroup(processedOption);

                    !grouped && this.onOptionChange({ originalEvent: event, processedOption });
                }

                this.overlayVisible && this.hide();
                event.preventDefault();
            } else {
                const optionIndex = this.focusedOptionInfo.index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo.index) : this.findLastFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex);

                !this.overlayVisible && this.show();
                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            if (this.overlayVisible) {
                const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                const parentOption = this.activeOptionPath.find((p) => p.key === processedOption.parentKey);
                const matched = this.focusedOptionInfo.parentKey === '' || (parentOption && parentOption.key === this.focusedOptionInfo.parentKey);
                const root = ObjectUtils.isEmpty(processedOption.parent);

                if (matched) {
                    this.activeOptionPath = this.activeOptionPath.filter((p) => p.parentKey !== this.focusedOptionInfo.parentKey);
                }

                if (!root) {
                    this.focusedOptionInfo = { index: -1, parentKey: parentOption ? parentOption.parentKey : '' };
                    this.searchValue = '';
                    this.onArrowDownKey(event);
                }

                event.preventDefault();
            }
        },
        onArrowRightKey(event) {
            if (this.overlayVisible) {
                const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                const grouped = this.isProccessedOptionGroup(processedOption);

                if (grouped) {
                    const matched = this.activeOptionPath.some((p) => processedOption.key === p.key);

                    if (matched) {
                        this.focusedOptionInfo = { index: -1, parentKey: processedOption.key };
                        this.searchValue = '';
                        this.onArrowDownKey(event);
                    } else {
                        this.onOptionChange({ originalEvent: event, processedOption });
                    }
                }

                event.preventDefault();
            }
        },
        onHomeKey(event) {
            this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());

            !this.overlayVisible && this.show();
            event.preventDefault();
        },
        onEndKey(event) {
            this.changeFocusedOptionIndex(event, this.findLastOptionIndex());

            !this.overlayVisible && this.show();
            event.preventDefault();
        },
        onEnterKey(event) {
            if (!this.overlayVisible) {
                this.onArrowDownKey(event);
            } else {
                if (this.focusedOptionInfo.index !== -1) {
                    const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                    const grouped = this.isProccessedOptionGroup(processedOption);

                    this.onOptionChange({ originalEvent: event, processedOption });
                    !grouped && this.hide();
                }
            }

            event.preventDefault();
        },
        onSpaceKey(event) {
            this.onEnterKey(event);
        },
        onEscapeKey(event) {
            this.overlayVisible && this.hide(true);
            event.preventDefault();
        },
        onTabKey(event) {
            if (this.focusedOptionInfo.index !== -1) {
                const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                const grouped = this.isProccessedOptionGroup(processedOption);

                !grouped && this.onOptionChange({ originalEvent: event, processedOption });
            }

            this.overlayVisible && this.hide();
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
            this.alignOverlay();
            this.scrollInView();
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
            this.dirty = false;
        },
        onOverlayAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        alignOverlay() {
            if (this.appendTo === 'self') {
                DomHandler.relativePosition(this.overlay, this.$el);
            } else {
                this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + 'px';
                DomHandler.absolutePosition(this.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.overlay && !this.$el.contains(event.target) && !this.overlay.contains(event.target)) {
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
        isOptionMatched(processedOption) {
            return this.isValidOption(processedOption) && this.getProccessedOptionLabel(processedOption).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
        },
        isValidOption(processedOption) {
            return !!processedOption && !this.isOptionDisabled(processedOption.option);
        },
        isValidSelectedOption(processedOption) {
            return this.isValidOption(processedOption) && this.isSelected(processedOption);
        },
        isSelected(processedOption) {
            return this.activeOptionPath.some((p) => p.key === processedOption.key);
        },
        findFirstOptionIndex() {
            return this.visibleOptions.findIndex((processedOption) => this.isValidOption(processedOption));
        },
        findLastOptionIndex() {
            return ObjectUtils.findLastIndex(this.visibleOptions, (processedOption) => this.isValidOption(processedOption));
        },
        findNextOptionIndex(index) {
            const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((processedOption) => this.isValidOption(processedOption)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        },
        findPrevOptionIndex(index) {
            const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), (processedOption) => this.isValidOption(processedOption)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        },
        findSelectedOptionIndex() {
            return this.visibleOptions.findIndex((processedOption) => this.isValidSelectedOption(processedOption));
        },
        findFirstFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();

            return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
        },
        findLastFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();

            return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
        },
        findOptionPathByValue(value, processedOptions, level = 0) {
            processedOptions = processedOptions || (level === 0 && this.processedOptions);

            if (!processedOptions) return null;
            if (ObjectUtils.isEmpty(value)) return [];

            for (let i = 0; i < processedOptions.length; i++) {
                const processedOption = processedOptions[i];

                if (ObjectUtils.equals(value, this.getOptionValue(processedOption.option), this.equalityKey)) {
                    return [processedOption];
                }

                const matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);

                if (matchedOptions) {
                    matchedOptions.unshift(processedOption);

                    return matchedOptions;
                }
            }
        },
        searchOptions(event, char) {
            this.searchValue = (this.searchValue || '') + char;

            let optionIndex = -1;
            let matched = false;

            if (this.focusedOptionInfo.index !== -1) {
                optionIndex = this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex((processedOption) => this.isOptionMatched(processedOption));
                optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionInfo.index).findIndex((processedOption) => this.isOptionMatched(processedOption)) : optionIndex + this.focusedOptionInfo.index;
            } else {
                optionIndex = this.visibleOptions.findIndex((processedOption) => this.isOptionMatched(processedOption));
            }

            if (optionIndex !== -1) {
                matched = true;
            }

            if (optionIndex === -1 && this.focusedOptionInfo.index === -1) {
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

            return matched;
        },
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionInfo.index !== index) {
                this.focusedOptionInfo.index = index;
                this.scrollInView();

                if (this.selectOnFocus) {
                    this.onOptionChange({ originalEvent: event, processedOption: this.visibleOptions[index], isHide: false });
                }
            }
        },
        scrollInView(index = -1) {
            const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
            const element = DomHandler.findSingle(this.list, `li[id="${id}"]`);

            if (element) {
                element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
                this.focusedOptionInfo.index = this.findFirstFocusedOptionIndex();
                this.onOptionChange({ processedOption: this.visibleOptions[this.focusedOptionInfo.index], isHide: false });

                !this.overlayVisible && (this.focusedOptionInfo = { index: -1, level: 0, parentKey: '' });
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', { originalEvent: event, value });
        },
        createProcessedOptions(options, level = 0, parent = {}, parentKey = '') {
            const processedOptions = [];

            options &&
                options.forEach((option, index) => {
                    const key = (parentKey !== '' ? parentKey + '_' : '') + index;
                    const newOption = {
                        option,
                        index,
                        level,
                        key,
                        parent,
                        parentKey
                    };

                    newOption['children'] = this.createProcessedOptions(this.getOptionGroupChildren(option, level), level + 1, newOption, key);
                    processedOptions.push(newOption);
                });

            return processedOptions;
        },
        overlayRef(el) {
            this.overlay = el;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-cascadeselect p-component p-inputwrapper',
                {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': this.modelValue,
                    'p-inputwrapper-focus': this.focused || this.overlayVisible,
                    'p-overlay-open': this.overlayVisible
                }
            ];
        },
        labelClass() {
            return [
                'p-cascadeselect-label p-inputtext',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-cascadeselect-label-empty': !this.$slots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
                }
            ];
        },
        panelStyleClass() {
            return [
                'p-cascadeselect-panel p-component',
                this.panelClass,
                {
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false
                }
            ];
        },
        hasSelectedOption() {
            return ObjectUtils.isNotEmpty(this.modelValue);
        },
        label() {
            const label = this.placeholder || 'p-emptylabel';

            if (this.hasSelectedOption) {
                const activeOptionPath = this.findOptionPathByValue(this.modelValue);
                const processedOption = ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;

                return processedOption ? this.getOptionLabel(processedOption.option) : label;
            }

            return label;
        },
        processedOptions() {
            return this.createProcessedOptions(this.options || []);
        },
        visibleOptions() {
            const processedOption = this.activeOptionPath.find((p) => p.key === this.focusedOptionInfo.parentKey);

            return processedOption ? processedOption.children : this.processedOptions;
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        },
        searchResultMessageText() {
            return ObjectUtils.isNotEmpty(this.visibleOptions) ? this.searchMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptySearchMessageText;
        },
        searchMessageText() {
            return this.searchMessage || this.$primevue.config.locale.searchMessage || '';
        },
        emptySearchMessageText() {
            return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || '';
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
            return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
        },
        focusedOptionId() {
            return this.focusedOptionInfo.index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(this.focusedOptionInfo.parentKey) ? '_' + this.focusedOptionInfo.parentKey : ''}_${this.focusedOptionInfo.index}` : null;
        }
    },
    components: {
        CascadeSelectSub: CascadeSelectSub,
        Portal: Portal,
        ChevronDownIcon: ChevronDownIcon,
        SpinnerIcon: SpinnerIcon,
        AngleRightIcon: AngleRightIcon
    }
};
</script>

<style>
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-cascadeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-cascadeselect .p-cascadeselect-panel {
    min-width: 100%;
}

.p-cascadeselect-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-cascadeselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
}

.p-cascadeselect-item-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
}

.p-cascadeselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    min-width: 100%;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-sublist {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}

.p-cascadeselect-item-active {
    overflow: visible !important;
}

.p-cascadeselect-item-active > .p-cascadeselect-sublist {
    display: block;
    left: 100%;
    top: 0;
}
</style>

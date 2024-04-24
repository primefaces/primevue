<template>
    <div ref="container" :id="id" :class="cx('root')" @click="onContainerClick" v-bind="ptmi('root')">
        <input
            v-if="editable"
            ref="focusInput"
            :id="inputId"
            type="text"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="editableInputValue"
            :placeholder="placeholder"
            :tabindex="!disabled ? tabindex : -1"
            :disabled="disabled"
            autocomplete="off"
            role="combobox"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            aria-haspopup="listbox"
            :aria-expanded="overlayVisible"
            :aria-controls="id + '_list'"
            :aria-activedescendant="focused ? focusedOptionId : undefined"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            @input="onEditableInput"
            v-bind="{ ...inputProps, ...ptm('input') }"
        />
        <span
            v-else
            ref="focusInput"
            :id="inputId"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :tabindex="!disabled ? tabindex : -1"
            role="combobox"
            :aria-label="ariaLabel || (label === 'p-emptylabel' ? undefined : label)"
            :aria-labelledby="ariaLabelledby"
            aria-haspopup="listbox"
            :aria-expanded="overlayVisible"
            :aria-controls="id + '_list'"
            :aria-activedescendant="focused ? focusedOptionId : undefined"
            :aria-disabled="disabled"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            v-bind="{ ...inputProps, ...ptm('input') }"
        >
            <slot name="value" :value="modelValue" :placeholder="placeholder">{{ label === 'p-emptylabel' ? '&nbsp;' : label || 'empty' }}</slot>
        </span>
        <slot v-if="showClear && modelValue != null" name="clearicon" :class="cx('clearIcon')" :onClick="onClearClick" :clearCallback="onClearClick">
            <component :is="clearIcon ? 'i' : 'TimesIcon'" ref="clearIcon" :class="[cx('clearIcon'), clearIcon]" @click="onClearClick" v-bind="{ ...clearIconProps, ...ptm('clearIcon') }" data-pc-section="clearicon" />
        </slot>
        <div :class="cx('trigger')" v-bind="ptm('trigger')">
            <slot v-if="loading" name="loadingicon" :class="cx('loadingIcon')">
                <span v-if="loadingIcon" :class="[cx('loadingIcon'), 'pi-spin', loadingIcon]" aria-hidden="true" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else :class="cx('loadingIcon')" spin aria-hidden="true" v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="dropdownicon" :class="cx('dropdownIcon')">
                <component :is="dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="[cx('dropdownIcon'), dropdownIcon]" aria-hidden="true" v-bind="ptm('dropdownIcon')" />
            </slot>
        </div>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="ptm('transition')">
                <div v-if="overlayVisible" :ref="overlayRef" :class="[cx('panel'), panelClass]" :style="panelStyle" @click="onOverlayClick" @keydown="onOverlayKeyDown" v-bind="{ ...panelProps, ...ptm('panel') }">
                    <span
                        ref="firstHiddenFocusableElementOnOverlay"
                        role="presentation"
                        aria-hidden="true"
                        class="p-hidden-accessible p-hidden-focusable"
                        :tabindex="0"
                        @focus="onFirstHiddenFocus"
                        v-bind="ptm('hiddenFirstFocusableEl')"
                        :data-p-hidden-accessible="true"
                        :data-p-hidden-focusable="true"
                    ></span>
                    <slot name="header" :value="modelValue" :options="visibleOptions"></slot>
                    <div v-if="filter" :class="cx('header')" v-bind="ptm('header')">
                        <div :class="cx('filterContainer')" v-bind="ptm('filterContainer')">
                            <input
                                ref="filterInput"
                                type="text"
                                :value="filterValue"
                                @vue:mounted="onFilterUpdated"
                                @vue:updated="onFilterUpdated"
                                :class="cx('filterInput')"
                                :placeholder="filterPlaceholder"
                                role="searchbox"
                                autocomplete="off"
                                :aria-owns="id + '_list'"
                                :aria-activedescendant="focusedOptionId"
                                @keydown="onFilterKeyDown"
                                @blur="onFilterBlur"
                                @input="onFilterChange"
                                v-bind="{ ...filterInputProps, ...ptm('filterInput') }"
                            />
                            <slot name="filtericon" :class="cx('filterIcon')">
                                <component :is="filterIcon ? 'span' : 'SearchIcon'" :class="[cx('filterIcon'), filterIcon]" v-bind="ptm('filterIcon')" />
                            </slot>
                        </div>
                        <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenFilterResult')" :data-p-hidden-accessible="true">
                            {{ filterResultMessageText }}
                        </span>
                    </div>
                    <div :class="cx('wrapper')" :style="{ 'max-height': virtualScrollerDisabled ? scrollHeight : '' }" v-bind="ptm('wrapper')">
                        <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :items="visibleOptions" :style="{ height: scrollHeight }" :tabindex="-1" :disabled="virtualScrollerDisabled" :pt="ptm('virtualScroller')">
                            <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                                <ul :ref="(el) => listRef(el, contentRef)" :id="id + '_list'" :class="[cx('list'), styleClass]" :style="contentStyle" role="listbox" :aria-label="listAriaLabel" v-bind="ptm('list')">
                                    <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                                        <li v-if="isOptionGroup(option)" :id="id + '_' + getOptionIndex(i, getItemOptions)" :style="{ height: itemSize ? itemSize + 'px' : undefined }" :class="cx('itemGroup')" role="option" v-bind="ptm('itemGroup')">
                                            <slot name="optiongroup" :option="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">
                                                <span :class="cx('itemGroupLabel')" v-bind="ptm('itemGroupLabel')">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            </slot>
                                        </li>
                                        <li
                                            v-else
                                            :id="id + '_' + getOptionIndex(i, getItemOptions)"
                                            v-ripple
                                            :class="cx('item', { option, focusedOption: getOptionIndex(i, getItemOptions) })"
                                            :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                            role="option"
                                            :aria-label="getOptionLabel(option)"
                                            :aria-selected="isSelected(option)"
                                            :aria-disabled="isOptionDisabled(option)"
                                            :aria-setsize="ariaSetSize"
                                            :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                            @click="onOptionSelect($event, option)"
                                            @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                                            :data-p-highlight="isSelected(option)"
                                            :data-p-focused="focusedOptionIndex === getOptionIndex(i, getItemOptions)"
                                            :data-p-disabled="isOptionDisabled(option)"
                                            v-bind="getPTItemOptions(option, getItemOptions, i, 'item')"
                                        >
                                            <template v-if="checkmark">
                                                <CheckIcon v-if="isSelected(option)" :class="cx('checkIcon')" v-bind="ptm('checkIcon')" />
                                                <BlankIcon v-else :class="cx('blankIcon')" v-bind="ptm('blankIcon')" />
                                            </template>
                                            <slot name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">
                                                <span :class="cx('itemLabel')" v-bind="ptm('itemLabel')">{{ getOptionLabel(option) }}</span>
                                            </slot>
                                        </li>
                                    </template>
                                    <li v-if="filterValue && (!items || (items && items.length === 0))" :class="cx('emptyMessage')" role="option" v-bind="ptm('emptyMessage')" :data-p-hidden-accessible="true">
                                        <slot name="emptyfilter">{{ emptyFilterMessageText }}</slot>
                                    </li>
                                    <li v-else-if="!options || (options && options.length === 0)" :class="cx('emptyMessage')" role="option" v-bind="ptm('emptyMessage')" :data-p-hidden-accessible="true">
                                        <slot name="empty">{{ emptyMessageText }}</slot>
                                    </li>
                                </ul>
                            </template>
                            <template v-if="$slots.loader" v-slot:loader="{ options }">
                                <slot name="loader" :options="options"></slot>
                            </template>
                        </VirtualScroller>
                    </div>
                    <slot name="footer" :value="modelValue" :options="visibleOptions"></slot>
                    <span v-if="!options || (options && options.length === 0)" role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenEmptyMessage')" :data-p-hidden-accessible="true">
                        {{ emptyMessageText }}
                    </span>
                    <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSelectedMessage')" :data-p-hidden-accessible="true">
                        {{ selectedMessageText }}
                    </span>
                    <span
                        ref="lastHiddenFocusableElementOnOverlay"
                        role="presentation"
                        aria-hidden="true"
                        class="p-hidden-accessible p-hidden-focusable"
                        :tabindex="0"
                        @focus="onLastHiddenFocus"
                        v-bind="ptm('hiddenLastFocusableEl')"
                        :data-p-hidden-accessible="true"
                        :data-p-hidden-focusable="true"
                    ></span>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import { FilterService } from 'primevue/api';
import BlankIcon from 'primevue/icons/blank';
import CheckIcon from 'primevue/icons/check';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import SearchIcon from 'primevue/icons/search';
import SpinnerIcon from 'primevue/icons/spinner';
import TimesIcon from 'primevue/icons/times';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { ConnectedOverlayScrollHandler, DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import VirtualScroller from 'primevue/virtualscroller';
import BaseDropdown from './BaseDropdown.vue';

export default {
    name: 'Dropdown',
    extends: BaseDropdown,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur', 'before-show', 'before-hide', 'show', 'hide', 'filter'],
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    labelClickListener: null,
    overlay: null,
    list: null,
    virtualScroller: null,
    searchTimeout: null,
    searchValue: null,
    isModelValueChanged: false,
    data() {
        return {
            id: this.$attrs.id,
            clicked: false,
            focused: false,
            focusedOptionIndex: -1,
            filterValue: null,
            overlayVisible: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        modelValue() {
            this.isModelValueChanged = true;
        },
        options() {
            this.autoUpdateModel();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
        this.autoUpdateModel();
        this.bindLabelClickListener();
    },
    updated() {
        if (this.overlayVisible && this.isModelValueChanged) {
            this.scrollInView(this.findSelectedOptionIndex());
        }

        this.isModelValueChanged = false;
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindLabelClickListener();

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
            return this.virtualScrollerDisabled ? index : fn && fn(index)['index'];
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
        getPTItemOptions(option, itemOptions, index, key) {
            return this.ptm(key, {
                context: {
                    option,
                    index,
                    selected: this.isSelected(option),
                    focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
                    disabled: this.isOptionDisabled(option)
                }
            });
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
            return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
        },
        show(isFocus) {
            this.$emit('before-show');
            this.overlayVisible = true;
            this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();

            isFocus && DomHandler.focus(this.$refs.focusInput);
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.overlayVisible = false;
                this.clicked = false;
                this.focusedOptionIndex = -1;
                this.searchValue = '';

                this.resetFilterOnHide && (this.filterValue = null);
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

            if (this.overlayVisible) {
                this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
                this.scrollInView(this.focusedOptionIndex);
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedOptionIndex = -1;
            this.searchValue = '';
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            if (this.disabled || DomHandler.isAndroid()) {
                event.preventDefault();

                return;
            }

            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event, this.editable);
                    break;

                case 'ArrowLeft':
                case 'ArrowRight':
                    this.onArrowLeftKey(event, this.editable);
                    break;

                case 'Delete':
                    this.onDeleteKey(event);

                case 'Home':
                    this.onHomeKey(event, this.editable);
                    break;

                case 'End':
                    this.onEndKey(event, this.editable);
                    break;

                case 'PageDown':
                    this.onPageDownKey(event);
                    break;

                case 'PageUp':
                    this.onPageUpKey(event);
                    break;

                case 'Space':
                    this.onSpaceKey(event, this.editable);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    this.onEnterKey(event);
                    break;

                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                case 'Tab':
                    this.onTabKey(event);
                    break;

                case 'Backspace':
                    this.onBackspaceKey(event, this.editable);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        !this.overlayVisible && this.show();
                        !this.editable && this.searchOptions(event, event.key);
                    }

                    break;
            }

            this.clicked = false;
        },
        onEditableInput(event) {
            const value = event.target.value;

            this.searchValue = '';
            const matched = this.searchOptions(event, value);

            !matched && (this.focusedOptionIndex = -1);

            this.updateModel(event, value);

            !this.overlayVisible && ObjectUtils.isNotEmpty(value) && this.show();
        },
        onContainerClick(event) {
            if (this.disabled || this.loading) {
                return;
            }

            if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
                return;
            } else if (!this.overlay || !this.overlay.contains(event.target)) {
                this.overlayVisible ? this.hide(true) : this.show(true);
            }

            this.clicked = true;
        },
        onClearClick(event) {
            this.updateModel(event, null);
            this.resetFilterOnClear && (this.filterValue = null);
        },
        onFirstHiddenFocus(event) {
            const focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;

            DomHandler.focus(focusableEl);
        },
        onLastHiddenFocus(event) {
            const focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;

            DomHandler.focus(focusableEl);
        },
        onOptionSelect(event, option, isHide = true) {
            const value = this.getOptionValue(option);

            this.updateModel(event, value);
            isHide && this.hide(true);
        },
        onOptionMouseMove(event, index) {
            if (this.focusOnHover) {
                this.changeFocusedOptionIndex(event, index);
            }
        },
        onFilterChange(event) {
            const value = event.target.value;

            this.filterValue = value;
            this.focusedOptionIndex = -1;
            this.$emit('filter', { originalEvent: event, value });

            !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
        },
        onFilterKeyDown(event) {
            switch (event.code) {
                case 'ArrowDown':
                    this.onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    this.onArrowUpKey(event, true);
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

                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                case 'Tab':
                    this.onTabKey(event, true);
                    break;

                default:
                    break;
            }
        },
        onFilterBlur() {
            this.focusedOptionIndex = -1;
        },
        onFilterUpdated() {
            if (this.overlayVisible) {
                this.alignOverlay();
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
        onDeleteKey(event) {
            if (this.showClear) {
                this.updateModel(event, null);
                event.preventDefault();
            }
        },
        onArrowDownKey(event) {
            if (!this.overlayVisible) {
                this.show();
                this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
            } else {
                const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        },
        onArrowUpKey(event, pressedInInputText = false) {
            if (event.altKey && !pressedInInputText) {
                if (this.focusedOptionIndex !== -1) {
                    this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                }

                this.overlayVisible && this.hide();
                event.preventDefault();
            } else {
                const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex);

                !this.overlayVisible && this.show();
                event.preventDefault();
            }
        },
        onArrowLeftKey(event, pressedInInputText = false) {
            pressedInInputText && (this.focusedOptionIndex = -1);
        },
        onHomeKey(event, pressedInInputText = false) {
            if (pressedInInputText) {
                event.currentTarget.setSelectionRange(0, 0);
                this.focusedOptionIndex = -1;
            } else {
                this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());

                !this.overlayVisible && this.show();
            }

            event.preventDefault();
        },
        onEndKey(event, pressedInInputText = false) {
            if (pressedInInputText) {
                const target = event.currentTarget;
                const len = target.value.length;

                target.setSelectionRange(len, len);
                this.focusedOptionIndex = -1;
            } else {
                this.changeFocusedOptionIndex(event, this.findLastOptionIndex());

                !this.overlayVisible && this.show();
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
            if (!this.overlayVisible) {
                this.focusedOptionIndex = -1; // reset
                this.onArrowDownKey(event);
            } else {
                if (this.focusedOptionIndex !== -1) {
                    this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                }

                this.hide();
            }

            event.preventDefault();
        },
        onSpaceKey(event, pressedInInputText = false) {
            !pressedInInputText && this.onEnterKey(event);
        },
        onEscapeKey(event) {
            this.overlayVisible && this.hide(true);
            event.preventDefault();
            event.stopPropagation(); //@todo will be changed next versionss
        },
        onTabKey(event, pressedInInputText = false) {
            if (!pressedInInputText) {
                if (this.overlayVisible && this.hasFocusableElements()) {
                    DomHandler.focus(this.$refs.firstHiddenFocusableElementOnOverlay);

                    event.preventDefault();
                } else {
                    if (this.focusedOptionIndex !== -1) {
                        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                    }

                    this.overlayVisible && this.hide(this.filter);
                }
            }
        },
        onBackspaceKey(event, pressedInInputText = false) {
            if (pressedInInputText) {
                !this.overlayVisible && this.show();
            }
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);

            DomHandler.addStyles(el, { position: 'absolute', top: '0', left: '0' });
            this.alignOverlay();
            this.scrollInView();

            this.autoFilterFocus && DomHandler.focus(this.$refs.filterInput);
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
        bindLabelClickListener() {
            if (!this.editable && !this.labelClickListener) {
                const label = document.querySelector(`label[for="${this.inputId}"]`);

                if (label && DomHandler.isVisible(label)) {
                    this.labelClickListener = () => {
                        DomHandler.focus(this.$refs.focusInput);
                    };

                    label.addEventListener('click', this.labelClickListener);
                }
            }
        },
        unbindLabelClickListener() {
            if (this.labelClickListener) {
                const label = document.querySelector(`label[for="${this.inputId}"]`);

                if (label && DomHandler.isVisible(label)) {
                    label.removeEventListener('click', this.labelClickListener);
                }
            }
        },
        hasFocusableElements() {
            return DomHandler.getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
        },
        isOptionMatched(option) {
            return this.isValidOption(option) && this.getOptionLabel(option)?.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
        },
        isValidOption(option) {
            return ObjectUtils.isNotEmpty(option) && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
        },
        isValidSelectedOption(option) {
            return this.isValidOption(option) && this.isSelected(option);
        },
        isSelected(option) {
            return this.isValidOption(option) && ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
        },
        findFirstOptionIndex() {
            return this.visibleOptions.findIndex((option) => this.isValidOption(option));
        },
        findLastOptionIndex() {
            return ObjectUtils.findLastIndex(this.visibleOptions, (option) => this.isValidOption(option));
        },
        findNextOptionIndex(index) {
            const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        },
        findPrevOptionIndex(index) {
            const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), (option) => this.isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        },
        findSelectedOptionIndex() {
            return this.hasSelectedOption ? this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option)) : -1;
        },
        findFirstFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();

            return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
        },
        findLastFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();

            return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
        },
        searchOptions(event, char) {
            this.searchValue = (this.searchValue || '') + char;

            let optionIndex = -1;
            let matched = false;

            if (ObjectUtils.isNotEmpty(this.searchValue)) {
                if (this.focusedOptionIndex !== -1) {
                    optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option));
                    optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex;
                } else {
                    optionIndex = this.visibleOptions.findIndex((option) => this.isOptionMatched(option));
                }

                if (optionIndex !== -1) {
                    matched = true;
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

            return matched;
        },
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionIndex !== index) {
                this.focusedOptionIndex = index;
                this.scrollInView();

                if (this.selectOnFocus) {
                    this.onOptionSelect(event, this.visibleOptions[index], false);
                }
            }
        },
        scrollInView(index = -1) {
            this.$nextTick(() => {
                const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
                const element = DomHandler.findSingle(this.list, `li[id="${id}"]`);

                if (element) {
                    element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
                } else if (!this.virtualScrollerDisabled) {
                    this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
                }
            });
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
                this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
                this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
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

                optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));

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
        visibleOptions() {
            const options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];

            if (this.filterValue) {
                const filteredOptions = FilterService.filter(options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);

                if (this.optionGroupLabel) {
                    const optionGroups = this.options || [];
                    const filtered = [];

                    optionGroups.forEach((group) => {
                        const groupChildren = this.getOptionGroupChildren(group);
                        const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));

                        if (filteredItems.length > 0) filtered.push({ ...group, [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems] });
                    });

                    return this.flatOptions(filtered);
                }

                return filteredOptions;
            }

            return options;
        },
        hasSelectedOption() {
            return ObjectUtils.isNotEmpty(this.modelValue);
        },
        label() {
            const selectedOptionIndex = this.findSelectedOptionIndex();

            return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.placeholder || 'p-emptylabel';
        },
        editableInputValue() {
            const selectedOptionIndex = this.findSelectedOptionIndex();

            return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.modelValue || '';
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
            return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
        },
        listAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
        },
        ariaSetSize() {
            return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        VirtualScroller,
        Portal,
        TimesIcon,
        ChevronDownIcon,
        SpinnerIcon,
        SearchIcon,
        CheckIcon,
        BlankIcon
    }
};
</script>

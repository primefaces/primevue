<template>
    <div ref="container" :class="cx('root')" :style="sx('root')" @click="onContainerClick" v-bind="ptmi('root')">
        <input
            v-if="!multiple"
            ref="focusInput"
            :id="inputId"
            type="text"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="inputValue"
            :placeholder="placeholder"
            :tabindex="!disabled ? tabindex : -1"
            :disabled="disabled"
            autocomplete="off"
            role="combobox"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            :aria-expanded="overlayVisible"
            :aria-controls="id + '_list'"
            :aria-activedescendant="focused ? focusedOptionId : undefined"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            @input="onInput"
            @change="onChange"
            v-bind="{ ...inputProps, ...ptm('input') }"
        />
        <ul
            v-if="multiple"
            ref="multiContainer"
            :class="cx('container')"
            tabindex="-1"
            role="listbox"
            aria-orientation="horizontal"
            :aria-activedescendant="focused ? focusedMultipleOptionId : undefined"
            @focus="onMultipleContainerFocus"
            @blur="onMultipleContainerBlur"
            @keydown="onMultipleContainerKeyDown"
            v-bind="ptm('container')"
        >
            <li
                v-for="(option, i) of modelValue"
                :key="i"
                :id="id + '_multiple_option_' + i"
                :class="cx('token', { i })"
                role="option"
                :aria-label="getOptionLabel(option)"
                :aria-selected="true"
                :aria-setsize="modelValue.length"
                :aria-posinset="i + 1"
                v-bind="ptm('token')"
            >
                <slot name="chip" :value="option">
                    <span :class="cx('tokenLabel')" v-bind="ptm('tokenLabel')">{{ getOptionLabel(option) }}</span>
                </slot>
                <slot name="removetokenicon" :class="cx('removeTokenIcon')" :index="i" :onClick="(event) => removeOption(event, i)" :removeCallback="(event) => removeOption(event, i)">
                    <component :is="removeTokenIcon ? 'span' : 'TimesCircleIcon'" :class="[cx('removeTokenIcon'), removeTokenIcon]" @click="removeOption($event, i)" aria-hidden="true" v-bind="ptm('removeTokenIcon')" />
                </slot>
            </li>
            <li :class="cx('inputToken')" role="option" v-bind="ptm('inputToken')">
                <input
                    ref="focusInput"
                    :id="inputId"
                    type="text"
                    :style="inputStyle"
                    :class="inputClass"
                    :placeholder="placeholder"
                    :tabindex="!disabled ? tabindex : -1"
                    :disabled="disabled"
                    autocomplete="off"
                    role="combobox"
                    :aria-label="ariaLabel"
                    :aria-labelledby="ariaLabelledby"
                    aria-haspopup="listbox"
                    aria-autocomplete="list"
                    :aria-expanded="overlayVisible"
                    :aria-controls="id + '_list'"
                    :aria-activedescendant="focused ? focusedOptionId : undefined"
                    :aria-invalid="invalid || undefined"
                    @focus="onFocus"
                    @blur="onBlur"
                    @keydown="onKeyDown"
                    @input="onInput"
                    @change="onChange"
                    v-bind="{ ...inputProps, ...ptm('input') }"
                />
            </li>
        </ul>
        <slot v-if="searching || loading" :class="cx('loadingIcon')" name="loadingicon">
            <i v-if="loadingIcon" :class="['pi-spin', cx('loadingIcon'), loadingIcon]" aria-hidden="true" v-bind="ptm('loadingIcon')" />
            <SpinnerIcon v-else :class="[cx('loadingIcon'), loadingIcon]" spin aria-hidden="true" v-bind="ptm('loadingIcon')" />
        </slot>
        <Button v-if="dropdown" ref="dropdownButton" type="button" tabindex="-1" :class="[cx('dropdownButton'), dropdownClass]" :disabled="disabled" aria-hidden="true" @click="onDropdownClick" :unstyled="unstyled" :pt="ptm('dropdownButton')">
            <template #icon>
                <slot name="dropdownicon" :class="dropdownIcon">
                    <component :is="dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="dropdownIcon" v-bind="ptm('dropdownButton')['icon']" data-pc-section="dropdownicon" />
                </slot>
            </template>
        </Button>
        <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSearchResult')" :data-p-hidden-accessible="true">
            {{ searchResultMessageText }}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="ptm('transition')">
                <div
                    v-if="overlayVisible"
                    :ref="overlayRef"
                    :class="[cx('panel'), panelClass]"
                    :style="{ ...panelStyle, 'max-height': virtualScrollerDisabled ? scrollHeight : '' }"
                    @click="onOverlayClick"
                    @keydown="onOverlayKeyDown"
                    v-bind="{ ...panelProps, ...ptm('panel') }"
                >
                    <slot name="header" :value="modelValue" :suggestions="visibleOptions"></slot>
                    <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="{ height: scrollHeight }" :items="visibleOptions" :tabindex="-1" :disabled="virtualScrollerDisabled" :pt="ptm('virtualScroller')">
                        <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                            <ul :ref="(el) => listRef(el, contentRef)" :id="id + '_list'" :class="[cx('list'), styleClass]" :style="contentStyle" role="listbox" :aria-label="listAriaLabel" v-bind="ptm('list')">
                                <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                                    <li v-if="isOptionGroup(option)" :id="id + '_' + getOptionIndex(i, getItemOptions)" :style="{ height: itemSize ? itemSize + 'px' : undefined }" :class="cx('itemGroup')" role="option" v-bind="ptm('itemGroup')">
                                        <slot name="optiongroup" :option="option.optionGroup" :item="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{ getOptionGroupLabel(option.optionGroup) }}</slot>
                                    </li>
                                    <li
                                        v-else
                                        :id="id + '_' + getOptionIndex(i, getItemOptions)"
                                        v-ripple
                                        :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                        :class="cx('item', { option, i, getItemOptions })"
                                        role="option"
                                        :aria-label="getOptionLabel(option)"
                                        :aria-selected="isSelected(option)"
                                        :aria-disabled="isOptionDisabled(option)"
                                        :aria-setsize="ariaSetSize"
                                        :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                        @click="onOptionSelect($event, option)"
                                        @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                                        :data-p-highlight="isSelected(option)"
                                        :data-p-focus="focusedOptionIndex === getOptionIndex(i, getItemOptions)"
                                        :data-p-disabled="isOptionDisabled(option)"
                                        v-bind="getPTOptions(option, getItemOptions, i, 'item')"
                                    >
                                        <slot v-if="$slots.option" name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{ getOptionLabel(option) }}</slot>
                                        <slot v-else name="item" :item="option" :index="getOptionIndex(i, getItemOptions)">{{ getOptionLabel(option) }}</slot>
                                        <!--TODO: Deprecated since v3.16.0-->
                                    </li>
                                </template>
                                <li v-if="!items || (items && items.length === 0)" :class="cx('emptyMessage')" role="option" v-bind="ptm('emptyMessage')">
                                    <slot name="empty">{{ searchResultMessageText }}</slot>
                                </li>
                            </ul>
                        </template>
                        <template v-if="$slots.loader" v-slot:loader="{ options }">
                            <slot name="loader" :options="options"></slot>
                        </template>
                    </VirtualScroller>
                    <slot name="footer" :value="modelValue" :suggestions="visibleOptions"></slot>
                    <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSelectedMessage')" :data-p-hidden-accessible="true">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import Button from 'primevue/button';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import SpinnerIcon from 'primevue/icons/spinner';
import TimesCircleIcon from 'primevue/icons/timescircle';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import { ConnectedOverlayScrollHandler, DomHandler, ObjectUtils, UniqueComponentId, ZIndexUtils } from 'primevue/utils';
import VirtualScroller from 'primevue/virtualscroller';
import BaseAutoComplete from './BaseAutoComplete.vue';

export default {
    name: 'AutoComplete',
    extends: BaseAutoComplete,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur', 'item-select', 'item-unselect', 'dropdown-click', 'clear', 'complete', 'before-show', 'before-hide', 'show', 'hide'],
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    virtualScroller: null,
    searchTimeout: null,
    dirty: false,
    data() {
        return {
            id: this.$attrs.id,
            clicked: false,
            focused: false,
            focusedOptionIndex: -1,
            focusedMultipleOptionIndex: -1,
            overlayVisible: false,
            searching: false
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        suggestions() {
            if (this.searching) {
                this.show();
                this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
                this.searching = false;
            }

            this.autoUpdateModel();
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
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
            return this.virtualScrollerDisabled ? index : fn && fn(index)['index'];
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
            this.dirty = true;
            this.overlayVisible = true;
            this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;

            isFocus && DomHandler.focus(this.$refs.focusInput);
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.dirty = isFocus;
                this.overlayVisible = false;
                this.clicked = false;
                this.focusedOptionIndex = -1;

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

            if (!this.dirty && this.completeOnFocus) {
                this.search(event, event.target.value, 'focus');
            }

            this.dirty = true;
            this.focused = true;

            if (this.overlayVisible) {
                this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
                this.scrollInView(this.focusedOptionIndex);
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.dirty = false;
            this.focused = false;
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onKeyDown(event) {
            if (this.disabled) {
                event.preventDefault();

                return;
            }

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
                    this.onBackspaceKey(event);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    break;
            }

            this.clicked = false;
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
            } else {
                if (query.length >= this.minLength) {
                    this.focusedOptionIndex = -1;

                    this.searchTimeout = setTimeout(() => {
                        this.search(event, query, 'input');
                    }, this.delay);
                } else {
                    this.hide();
                }
            }
        },
        onChange(event) {
            if (this.forceSelection) {
                let valid = false;

                // when forceSelection is on, prevent called twice onOptionSelect()
                if (this.visibleOptions && !this.multiple) {
                    const matchedValue = this.visibleOptions.find((option) => this.isOptionMatched(option, this.$refs.focusInput.value || ''));

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
            if (this.disabled) {
                // For ScreenReaders
                return;
            }

            this.focused = true;
        },
        onMultipleContainerBlur() {
            this.focusedMultipleOptionIndex = -1;
            this.focused = false;
        },
        onMultipleContainerKeyDown(event) {
            if (this.disabled) {
                event.preventDefault();

                return;
            }

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
            this.clicked = true;

            if (this.disabled || this.searching || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
                return;
            }

            if (!this.overlay || !this.overlay.contains(event.target)) {
                DomHandler.focus(this.$refs.focusInput);
            }
        },
        onDropdownClick(event) {
            let query = undefined;

            if (this.overlayVisible) {
                this.hide(true);
            } else {
                DomHandler.focus(this.$refs.focusInput);
                query = this.$refs.focusInput.value;

                if (this.dropdownMode === 'blank') this.search(event, '', 'dropdown');
                else if (this.dropdownMode === 'current') this.search(event, query, 'dropdown');
            }

            this.$emit('dropdown-click', { originalEvent: event, query });
        },
        onOptionSelect(event, option, isHide = true) {
            const value = this.getOptionValue(option);

            if (this.multiple) {
                this.$refs.focusInput.value = '';

                if (!this.isSelected(option)) {
                    this.updateModel(event, [...(this.modelValue || []), value]);
                }
            } else {
                this.updateModel(event, value);
            }

            this.$emit('item-select', { originalEvent: event, value: option });

            isHide && this.hide(true);
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

            const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();

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
            } else {
                const optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex);

                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            const target = event.currentTarget;

            this.focusedOptionIndex = -1;

            if (this.multiple) {
                if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption) {
                    DomHandler.focus(this.$refs.multiContainer);
                    this.focusedMultipleOptionIndex = this.modelValue.length;
                } else {
                    event.stopPropagation(); // To prevent onArrowLeftKeyOnMultiple method
                }
            }
        },
        onArrowRightKey(event) {
            this.focusedOptionIndex = -1;

            this.multiple && event.stopPropagation(); // To prevent onArrowRightKeyOnMultiple method
        },
        onHomeKey(event) {
            const { currentTarget } = event;
            const len = currentTarget.value.length;

            currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
            this.focusedOptionIndex = -1;

            event.preventDefault();
        },
        onEndKey(event) {
            const { currentTarget } = event;
            const len = currentTarget.value.length;

            currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
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
                this.focusedOptionIndex = -1; // reset
                this.onArrowDownKey(event);
            } else {
                if (this.focusedOptionIndex !== -1) {
                    this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                }

                this.hide();
            }
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

            if (this.focusedMultipleOptionIndex > this.modelValue.length - 1) {
                this.focusedMultipleOptionIndex = -1;
                DomHandler.focus(this.$refs.focusInput);
            }
        },
        onBackspaceKeyOnMultiple(event) {
            if (this.focusedMultipleOptionIndex !== -1) {
                this.removeOption(event, this.focusedMultipleOptionIndex);
            }
        },
        onOverlayEnter(el) {
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);

            DomHandler.addStyles(el, { position: 'absolute', top: '0', left: '0' });
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
            } else {
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
            if (this.multiple) return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
            else return event.target === this.$refs.focusInput;
        },
        isDropdownClicked(event) {
            return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.$el.contains(event.target) : false;
        },
        isOptionMatched(option, value) {
            return this.isValidOption(option) && this.getOptionLabel(option)?.toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
        },
        isValidOption(option) {
            return ObjectUtils.isNotEmpty(option) && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
        },
        isValidSelectedOption(option) {
            return this.isValidOption(option) && this.isSelected(option);
        },
        isEquals(value1, value2) {
            return ObjectUtils.equals(value1, value2, this.equalityKey);
        },
        isSelected(option) {
            const optionValue = this.getOptionValue(option);

            return this.multiple ? (this.modelValue || []).some((value) => this.isEquals(value, optionValue)) : this.isEquals(this.modelValue, this.getOptionValue(option));
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
            const value = this.modelValue.filter((_, i) => i !== index).map((option) => this.getOptionValue(option));

            this.updateModel(event, value);
            this.$emit('item-unselect', { originalEvent: event, value: removedOption });
            this.dirty = true;
            DomHandler.focus(this.$refs.focusInput);
        },
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionIndex !== index) {
                this.focusedOptionIndex = index;
                this.scrollInView();

                if (this.selectOnFocus || this.autoHighlight) {
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
            if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption) {
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
            return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
        },
        inputValue() {
            if (ObjectUtils.isNotEmpty(this.modelValue)) {
                if (typeof this.modelValue === 'object') {
                    const label = this.getOptionLabel(this.modelValue);

                    return label != null ? label : this.modelValue;
                } else {
                    return this.modelValue;
                }
            } else {
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
        listAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
        },
        focusedMultipleOptionId() {
            return this.focusedMultipleOptionIndex !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex}` : null;
        },
        ariaSetSize() {
            return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        }
    },
    components: {
        Button: Button,
        VirtualScroller: VirtualScroller,
        Portal: Portal,
        ChevronDownIcon: ChevronDownIcon,
        SpinnerIcon: SpinnerIcon,
        TimesCircleIcon: TimesCircleIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

<template>
    <div ref="container" :class="cx('root')" :style="sx('root')" @click="onContainerClick" :data-p="containerDataP" v-bind="ptmi('root')">
        <InputText
            v-if="!multiple"
            ref="focusInput"
            :id="inputId"
            type="text"
            :name="$formName"
            :class="[cx('pcInputText'), inputClass]"
            :style="inputStyle"
            :defaultValue="inputValue"
            :placeholder="placeholder"
            :tabindex="!disabled ? tabindex : -1"
            :fluid="$fluid"
            :disabled="disabled"
            :size="size"
            :invalid="invalid"
            :variant="variant"
            autocomplete="off"
            role="combobox"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledby"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            :aria-expanded="overlayVisible"
            :aria-controls="overlayVisible ? panelId : undefined"
            :aria-activedescendant="focused ? focusedOptionId : undefined"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
            @input="onInput"
            @change="onChange"
            :unstyled="unstyled"
            :data-p-has-dropdown="dropdown"
            :pt="ptm('pcInputText')"
        />
        <slot v-if="isClearIconVisible" name="clearicon" :class="cx('clearIcon')" :clearCallback="onClearClick">
            <TimesIcon :class="[cx('clearIcon')]" @click="onClearClick" v-bind="ptm('clearIcon')" />
        </slot>
        <ul
            v-if="multiple"
            ref="multiContainer"
            :class="cx('inputMultiple')"
            tabindex="-1"
            role="listbox"
            aria-orientation="horizontal"
            :aria-activedescendant="focused ? focusedMultipleOptionId : undefined"
            @focus="onMultipleContainerFocus"
            @blur="onMultipleContainerBlur"
            @keydown="onMultipleContainerKeyDown"
            :data-p-has-dropdown="dropdown"
            :data-p="inputMultipleDataP"
            v-bind="ptm('inputMultiple')"
        >
            <li
                v-for="(option, i) of d_value"
                :key="`${i}_${getOptionLabel(option)}`"
                :id="$id + '_multiple_option_' + i"
                :class="cx('chipItem', { i })"
                role="option"
                :aria-label="getOptionLabel(option)"
                :aria-selected="true"
                :aria-setsize="d_value.length"
                :aria-posinset="i + 1"
                v-bind="ptm('chipItem')"
            >
                <slot name="chip" :class="cx('pcChip')" :value="option" :index="i" :removeCallback="(event) => removeOption(event, i)" v-bind="ptm('pcChip')">
                    <!-- TODO: removetokenicon and removeTokenIcon  deprecated since v4.0. Use chipicon slot and chipIcon prop-->
                    <Chip
                        :class="cx('pcChip')"
                        :label="getOptionLabel(option)"
                        :removeIcon="chipIcon || removeTokenIcon"
                        removable
                        :unstyled="unstyled"
                        @remove="removeOption($event, i)"
                        :data-p-focused="focusedMultipleOptionIndex === i"
                        :pt="ptm('pcChip')"
                    >
                        <template #removeicon>
                            <slot :name="$slots.chipicon ? 'chipicon' : 'removetokenicon'" :class="cx('chipIcon')" :index="i" :removeCallback="(event) => removeOption(event, i)" />
                        </template>
                    </Chip>
                </slot>
            </li>
            <li :class="cx('inputChip')" role="option" v-bind="ptm('inputChip')">
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
                    :aria-controls="$id + '_list'"
                    :aria-activedescendant="focused ? focusedOptionId : undefined"
                    :aria-invalid="invalid || undefined"
                    @focus="onFocus"
                    @blur="onBlur"
                    @keydown="onKeyDown"
                    @input="onInput"
                    @change="onChange"
                    v-bind="ptm('input')"
                />
            </li>
        </ul>
        <slot v-if="searching || loading" :class="cx('loader')" :name="$slots.loader ? 'loader' : 'loadingicon'">
            <i v-if="loader || loadingIcon" :class="['pi-spin', cx('loader'), loader, loadingIcon]" aria-hidden="true" :data-p-has-dropdown="dropdown" v-bind="ptm('loader')" />
            <SpinnerIcon v-else-if="loading" :class="cx('loader')" spin aria-hidden="true" :data-p-has-dropdown="dropdown" v-bind="ptm('loader')" />
        </slot>
        <slot :name="$slots.dropdown ? 'dropdown' : 'dropdownbutton'" :toggleCallback="(event) => onDropdownClick(event)">
            <button
                v-if="dropdown"
                ref="dropdownButton"
                type="button"
                :class="[cx('dropdown'), dropdownClass]"
                :disabled="disabled"
                aria-haspopup="listbox"
                :aria-expanded="overlayVisible"
                :aria-controls="panelId"
                @click="onDropdownClick"
                v-bind="ptm('dropdown')"
            >
                <slot name="dropdownicon" :class="dropdownIcon">
                    <component :is="dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="dropdownIcon" v-bind="ptm('dropdownIcon')" />
                </slot>
            </button>
        </slot>
        <span v-if="typeahead" role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSearchResult')" :data-p-hidden-accessible="true">
            {{ searchResultMessageText }}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-anchored-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="ptm('transition')">
                <div
                    v-if="overlayVisible"
                    :ref="overlayRef"
                    :id="panelId"
                    :class="[cx('overlay'), panelClass, overlayClass]"
                    :style="{ ...panelStyle, ...overlayStyle }"
                    @click="onOverlayClick"
                    @keydown="onOverlayKeyDown"
                    :data-p="overlayDataP"
                    v-bind="ptm('overlay')"
                >
                    <slot name="header" :value="d_value" :suggestions="visibleOptions"></slot>
                    <div :class="cx('listContainer')" :style="{ 'max-height': virtualScrollerDisabled ? scrollHeight : '' }" v-bind="ptm('listContainer')">
                        <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="{ height: scrollHeight }" :items="visibleOptions" :tabindex="-1" :disabled="virtualScrollerDisabled" :pt="ptm('virtualScroller')">
                            <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                                <ul :ref="(el) => listRef(el, contentRef)" :id="$id + '_list'" :class="[cx('list'), styleClass]" :style="contentStyle" role="listbox" :aria-label="listAriaLabel" v-bind="ptm('list')">
                                    <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                                        <li
                                            v-if="isOptionGroup(option)"
                                            :id="$id + '_' + getOptionIndex(i, getItemOptions)"
                                            :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                            :class="cx('optionGroup')"
                                            role="option"
                                            v-bind="ptm('optionGroup')"
                                        >
                                            <slot name="optiongroup" :option="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{ getOptionGroupLabel(option.optionGroup) }}</slot>
                                        </li>
                                        <li
                                            v-else
                                            :id="$id + '_' + getOptionIndex(i, getItemOptions)"
                                            v-ripple
                                            :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                            :class="cx('option', { option, i, getItemOptions })"
                                            role="option"
                                            :aria-label="getOptionLabel(option)"
                                            :aria-selected="isSelected(option)"
                                            :aria-disabled="isOptionDisabled(option)"
                                            :aria-setsize="ariaSetSize"
                                            :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                            @click="onOptionSelect($event, option)"
                                            @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                                            :data-p-selected="isSelected(option)"
                                            :data-p-focused="focusedOptionIndex === getOptionIndex(i, getItemOptions)"
                                            :data-p-disabled="isOptionDisabled(option)"
                                            v-bind="getPTOptions(option, getItemOptions, i, 'option')"
                                        >
                                            <slot name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{ getOptionLabel(option) }}</slot>
                                        </li>
                                    </template>
                                    <li v-if="showEmptyMessage && (!items || (items && items.length === 0))" :class="cx('emptyMessage')" role="option" v-bind="ptm('emptyMessage')">
                                        <slot name="empty">{{ searchResultMessageText }}</slot>
                                    </li>
                                </ul>
                            </template>
                            <template v-if="$slots.loader" v-slot:loader="{ options }">
                                <slot name="loader" :options="options"></slot>
                            </template>
                        </VirtualScroller>
                    </div>
                    <slot name="footer" :value="d_value" :suggestions="visibleOptions"></slot>
                    <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSelectedMessage')" :data-p-hidden-accessible="true">
                        {{ selectedMessageText }}
                    </span>
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import { absolutePosition, addStyle, findSingle, focus, getOuterWidth, isTouchDevice, relativePosition } from '@primeuix/utils/dom';
import { equals, findLastIndex, isEmpty, isNotEmpty, resolveFieldData } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler } from '@primevue/core/utils';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import SpinnerIcon from '@primevue/icons/spinner';
import TimesIcon from '@primevue/icons/times';
import Chip from 'primevue/chip';
import InputText from 'primevue/inputtext';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';
import BaseAutoComplete from './BaseAutoComplete.vue';

export default {
    name: 'AutoComplete',
    extends: BaseAutoComplete,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur', 'item-select', 'item-unselect', 'option-select', 'option-unselect', 'dropdown-click', 'clear', 'complete', 'before-show', 'before-hide', 'show', 'hide'],
    inject: {
        $pcFluid: { default: null }
    },
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
    overlay: null,
    virtualScroller: null,
    searchTimeout: null,
    dirty: false,
    startRangeIndex: -1,
    data() {
        return {
            clicked: false,
            focused: false,
            focusedOptionIndex: -1,
            focusedMultipleOptionIndex: -1,
            overlayVisible: false,
            searching: false
        };
    },
    watch: {
        suggestions() {
            if (this.searching) {
                this.show();
                this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
                this.searching = false;
                !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide();
            }

            this.autoUpdateModel();
        }
    },
    mounted() {
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
            ZIndex.clear(this.overlay);
            this.overlay = null;
        }
    },
    methods: {
        getOptionIndex(index, fn) {
            return this.virtualScrollerDisabled ? index : fn && fn(index)['index'];
        },
        getOptionLabel(option) {
            return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return option; // TODO: The 'optionValue' properties can be added.
        },
        getOptionRenderKey(option, index) {
            return (this.dataKey ? resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + '_' + index;
        },
        getPTOptions(option, itemOptions, index, key) {
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
        show(isFocus) {
            this.$emit('before-show');
            this.dirty = true;
            this.overlayVisible = true;
            this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
            isFocus && focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.dirty = isFocus;
                this.overlayVisible = false;
                this.clicked = false;
                this.focusedOptionIndex = -1;

                isFocus && focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput?.$el);
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
            this.formField.onBlur?.();
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

                case 'Space':
                    this.onSpaceKey(event);
                    break;

                case 'Escape':
                    this.onEscapeKey(event);
                    break;

                case 'Tab':
                    this.onTabKey(event);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    this.onShiftKey(event);
                    break;

                case 'Backspace':
                    this.onBackspaceKey(event);
                    break;

                default:
                    break;
            }

            this.clicked = false;
        },
        onInput(event) {
            if (this.typeahead) {
                if (this.searchTimeout) {
                    clearTimeout(this.searchTimeout);
                }

                let query = event.target.value;

                if (!this.multiple) {
                    this.updateModel(event, query);
                }

                if (query.length === 0) {
                    this.searching = false;
                    this.hide();
                    this.$emit('clear');
                } else {
                    if (query.length >= this.minLength) {
                        this.focusedOptionIndex = -1;

                        this.searchTimeout = setTimeout(() => {
                            this.search(event, query, 'input');
                        }, this.delay);
                    } else {
                        this.searching = false;
                        this.hide();
                    }
                }
            }
        },
        onChange(event) {
            if (this.forceSelection) {
                let valid = false;

                // when forceSelection is on, prevent called twice onOptionSelect()
                if (this.visibleOptions && !this.multiple) {
                    let value = this.multiple ? this.$refs.focusInput.value : this.$refs.focusInput?.$el?.value;
                    const matchedValue = this.visibleOptions.find((option) => this.isOptionMatched(option, value || ''));

                    if (matchedValue !== undefined) {
                        valid = true;
                        !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
                    }
                }

                if (!valid) {
                    if (this.multiple) {
                        this.$refs.focusInput.value = '';
                    } else {
                        const inputEl = this.$refs.focusInput?.$el;
                        inputEl && (inputEl.value = '');
                    }
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

            if (this.disabled || this.searching || this.loading || this.isDropdownClicked(event)) {
                return;
            }

            if (!this.overlay || !this.overlay.contains(event.target)) {
                focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
            }
        },
        onDropdownClick(event) {
            let query = undefined;

            if (this.overlayVisible) {
                this.hide(true);
            } else {
                let target = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;

                focus(target);
                query = target.value;

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
                    this.updateModel(event, [...(this.d_value || []), value]);
                }
            } else {
                this.updateModel(event, value);
            }

            this.$emit('item-select', { originalEvent: event, value: option });
            this.$emit('option-select', { originalEvent: event, value: option });

            isHide && this.hide(true);
        },
        onOptionMouseMove(event, index) {
            if (this.focusOnHover) {
                this.changeFocusedOptionIndex(event, index);
            }
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
                    .filter((option) => !this.isSelected(option))
                    .map((option) => this.getOptionValue(option));

                this.updateModel(event, [...(this.d_value || []), ...value]);
            }
        },
        onClearClick(event) {
            this.updateModel(event, null);
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

            if (this.multiple && event.shiftKey) {
                this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
            }

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

                if (this.multiple && event.shiftKey) {
                    this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
                }

                this.changeFocusedOptionIndex(event, optionIndex);

                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            const target = event.currentTarget;

            this.focusedOptionIndex = -1;

            if (this.multiple) {
                if (isEmpty(target.value) && this.$filled) {
                    focus(this.$refs.multiContainer);
                    this.focusedMultipleOptionIndex = this.d_value.length;
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
            const metaKey = event.metaKey || event.ctrlKey;
            const optionIndex = this.findFirstOptionIndex();

            if (this.multiple && event.shiftKey && metaKey) {
                this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
            }

            currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
            this.focusedOptionIndex = -1;

            event.preventDefault();
        },
        onEndKey(event) {
            const { currentTarget } = event;
            const len = currentTarget.value.length;
            const metaKey = event.metaKey || event.ctrlKey;
            const optionIndex = this.findLastOptionIndex();

            if (this.multiple && event.shiftKey && metaKey) {
                this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
            }

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
            if (!this.typeahead) {
                if (this.multiple) {
                    if (event.target.value.trim()) {
                        this.updateModel(event, [...(this.d_value || []), event.target.value.trim()]);
                        this.$refs.focusInput.value = '';
                    }

                    event.preventDefault();
                }
            } else {
                if (!this.overlayVisible) {
                    this.focusedOptionIndex = -1; // reset
                    this.onArrowDownKey(event);
                } else {
                    if (this.focusedOptionIndex !== -1) {
                        if (this.multiple && event.shiftKey) {
                            this.onOptionSelectRange(event, this.focusedOptionIndex);
                            event.preventDefault();
                        } else {
                            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                        }
                    }

                    this.hide();
                }
            }
        },
        onSpaceKey(event) {
            if (!this.autoOptionFocus && this.focusedOptionIndex !== -1) {
                this.onEnterKey(event);
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
        onShiftKey() {
            this.startRangeIndex = this.focusedOptionIndex;
        },
        onBackspaceKey(event) {
            if (this.multiple) {
                if (isNotEmpty(this.d_value) && !this.$refs.focusInput.value) {
                    const removedValue = this.d_value[this.d_value.length - 1];
                    const newValue = this.d_value.slice(0, -1);

                    this.writeValue(newValue, event);
                    this.$emit('item-unselect', { originalEvent: event, value: removedValue });
                    this.$emit('option-unselect', { originalEvent: event, value: removedValue });
                }

                event.stopPropagation(); // To prevent onBackspaceKeyOnMultiple method
            }
        },
        onArrowLeftKeyOnMultiple() {
            this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
        },
        onArrowRightKeyOnMultiple() {
            this.focusedMultipleOptionIndex++;

            if (this.focusedMultipleOptionIndex > this.d_value.length - 1) {
                this.focusedMultipleOptionIndex = -1;
                focus(this.$refs.focusInput);
            }
        },
        onBackspaceKeyOnMultiple(event) {
            if (this.focusedMultipleOptionIndex !== -1) {
                this.removeOption(event, this.focusedMultipleOptionIndex);
            }
        },
        onOverlayEnter(el) {
            ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);

            addStyle(el, { position: 'absolute', top: '0' });
            this.alignOverlay();

            // Issue: #7508
            this.$attrSelector && el.setAttribute(this.$attrSelector, '');
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
            ZIndex.clear(el);
        },
        alignOverlay() {
            let target = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;

            if (this.appendTo === 'self') {
                relativePosition(this.overlay, target);
            } else {
                this.overlay.style.minWidth = getOuterWidth(target) + 'px';
                absolutePosition(this.overlay, target);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.overlay && this.isOutsideClicked(event)) {
                        this.hide();
                    }
                };

                document.addEventListener('click', this.outsideClickListener, true);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener, true);
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
                    if (this.overlayVisible && !isTouchDevice()) {
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
            else return event.target === this.$refs.focusInput.$el;
        },
        isDropdownClicked(event) {
            return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(event.target) : false;
        },
        isOptionMatched(option, value) {
            return this.isValidOption(option) && this.getOptionLabel(option)?.toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
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

            return this.multiple ? (this.d_value || []).some((value) => this.isEquals(value, optionValue)) : this.isEquals(this.d_value, this.getOptionValue(option));
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
            return this.$filled ? this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option)) : -1;
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
            const removedOption = this.d_value[index];
            const value = this.d_value.filter((_, i) => i !== index).map((option) => this.getOptionValue(option));

            this.updateModel(event, value);
            this.$emit('item-unselect', { originalEvent: event, value: removedOption });
            this.$emit('option-unselect', { originalEvent: event, value: removedOption });
            this.dirty = true;
            focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
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
                const id = index !== -1 ? `${this.$id}_${index}` : this.focusedOptionId;
                const element = findSingle(this.list, `li[id="${id}"]`);

                if (element) {
                    element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
                } else if (!this.virtualScrollerDisabled) {
                    this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
                }
            });
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
                this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
                this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
            }
        },
        updateModel(event, value) {
            this.writeValue(value, event);
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
        }
    },
    computed: {
        visibleOptions() {
            return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
        },
        inputValue() {
            if (this.$filled) {
                if (typeof this.d_value === 'object') {
                    const label = this.getOptionLabel(this.d_value);

                    return label != null ? label : this.d_value;
                } else {
                    return this.d_value;
                }
            } else {
                return '';
            }
        },
        // @deprecated use $filled instead.
        hasSelectedOption() {
            return this.$filled;
        },
        equalityKey() {
            // @todo: The 'optionValue' properties can be added.
            return this.dataKey;
        },
        searchResultMessageText() {
            return isNotEmpty(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptySearchMessageText;
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
            return this.$filled ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.d_value.length : '1') : this.emptySelectionMessageText;
        },
        listAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? `${this.$id}_${this.focusedOptionIndex}` : null;
        },
        focusedMultipleOptionId() {
            return this.focusedMultipleOptionIndex !== -1 ? `${this.$id}_multiple_option_${this.focusedMultipleOptionIndex}` : null;
        },
        isClearIconVisible() {
            return this.showClear && this.$filled && !this.disabled && !this.loading;
        },
        ariaSetSize() {
            return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        },
        panelId() {
            return this.$id + '_panel';
        },
        containerDataP() {
            return cn({
                fluid: this.$fluid
            });
        },
        overlayDataP() {
            return cn({
                ['portal-' + this.appendTo]: 'portal-' + this.appendTo
            });
        },
        inputMultipleDataP() {
            return cn({
                invalid: this.$invalid,
                disabled: this.disabled,
                focus: this.focused,
                fluid: this.$fluid,
                filled: this.$variant === 'filled',
                empty: !this.$filled,
                [this.size]: this.size
            });
        }
    },
    components: {
        InputText,
        VirtualScroller,
        Portal,
        Chip,
        ChevronDownIcon,
        SpinnerIcon,
        TimesIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

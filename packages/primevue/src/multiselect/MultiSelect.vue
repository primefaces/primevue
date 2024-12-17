<template>
    <div ref="container" :class="cx('root')" :style="sx('root')" @click="onContainerClick" v-bind="ptmi('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputContainer')" :data-p-hidden-accessible="true">
            <input
                ref="focusInput"
                :id="inputId"
                type="text"
                readonly
                :disabled="disabled"
                :placeholder="placeholder"
                :tabindex="!disabled ? tabindex : -1"
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
                v-bind="ptm('hiddenInput')"
            />
        </div>
        <div :class="cx('labelContainer')" v-bind="ptm('labelContainer')">
            <div :class="cx('label')" v-bind="ptm('label')">
                <slot name="value" :value="d_value" :placeholder="placeholder">
                    <template v-if="display === 'comma'">
                        {{ label || 'empty' }}
                    </template>
                    <template v-else-if="display === 'chip'">
                        <template v-if="chipSelectedItems">
                            <span>{{ label }}</span>
                        </template>
                        <template v-else>
                            <span v-for="item of d_value" :key="getLabelByValue(item)" :class="cx('chipItem')" v-bind="ptm('chipItem')">
                                <slot name="chip" :value="item" :removeCallback="(event) => removeOption(event, item)">
                                    <!-- TODO: removetokenicon and removeTokenIcon  deprecated since v4.0. Use chipicon slot and chipIcon prop-->
                                    <Chip :class="cx('pcChip')" :label="getLabelByValue(item)" :removeIcon="chipIcon || removeTokenIcon" removable :unstyled="unstyled" @remove="removeOption($event, item)" :pt="ptm('pcChip')">
                                        <template #removeicon>
                                            <slot :name="$slots.chipicon ? 'chipicon' : 'removetokenicon'" :class="cx('chipIcon')" :item="item" :removeCallback="(event) => removeOption(event, item)" />
                                        </template>
                                    </Chip>
                                </slot>
                            </span>
                        </template>
                        <template v-if="!d_value || d_value.length === 0">{{ placeholder || 'empty' }}</template>
                    </template>
                </slot>
            </div>
        </div>
        <slot v-if="isClearIconVisible" name="clearicon" :class="cx('clearIcon')" :clearCallback="onClearClick">
            <component :is="clearIcon ? 'i' : 'TimesIcon'" ref="clearIcon" :class="[cx('clearIcon'), clearIcon]" @click="onClearClick" v-bind="ptm('clearIcon')" data-pc-section="clearicon" />
        </slot>
        <div :class="cx('dropdown')" v-bind="ptm('dropdown')">
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
                <div v-if="overlayVisible" :ref="overlayRef" :style="[panelStyle, overlayStyle]" :class="[cx('overlay'), panelClass, overlayClass]" @click="onOverlayClick" @keydown="onOverlayKeyDown" v-bind="ptm('overlay')">
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
                    <slot name="header" :value="d_value" :options="visibleOptions"></slot>
                    <div v-if="(showToggleAll && selectionLimit == null) || filter" :class="cx('header')" v-bind="ptm('header')">
                        <Checkbox
                            v-if="showToggleAll && selectionLimit == null"
                            :modelValue="allSelected"
                            :binary="true"
                            :disabled="disabled"
                            :variant="variant"
                            :aria-label="toggleAllAriaLabel"
                            @change="onToggleAll"
                            :unstyled="unstyled"
                            :pt="getHeaderCheckboxPTOptions('pcHeaderCheckbox')"
                        >
                            <template #icon="slotProps">
                                <component v-if="$slots.headercheckboxicon" :is="$slots.headercheckboxicon" :checked="slotProps.checked" :class="slotProps.class" />
                                <component v-else-if="slotProps.checked" :is="checkboxIcon ? 'span' : 'CheckIcon'" :class="[slotProps.class, { [checkboxIcon]: slotProps.checked }]" v-bind="getHeaderCheckboxPTOptions('pcHeaderCheckbox.icon')" />
                            </template>
                        </Checkbox>
                        <IconField v-if="filter" :class="cx('pcFilterContainer')" :unstyled="unstyled" :pt="ptm('pcFilterContainer')">
                            <InputText
                                ref="filterInput"
                                :value="filterValue"
                                @vue:mounted="onFilterUpdated"
                                @vue:updated="onFilterUpdated"
                                :class="cx('pcFilter')"
                                :placeholder="filterPlaceholder"
                                :disabled="disabled"
                                :variant="variant"
                                :unstyled="unstyled"
                                role="searchbox"
                                autocomplete="off"
                                :aria-owns="id + '_list'"
                                :aria-activedescendant="focusedOptionId"
                                @keydown="onFilterKeyDown"
                                @blur="onFilterBlur"
                                @input="onFilterChange"
                                :pt="ptm('pcFilter')"
                            />
                            <InputIcon :unstyled="unstyled" :pt="ptm('pcFilterIconContainer')">
                                <slot name="filtericon">
                                    <span v-if="filterIcon" :class="filterIcon" v-bind="ptm('filterIcon')" />
                                    <SearchIcon v-else v-bind="ptm('filterIcon')" />
                                </slot>
                            </InputIcon>
                        </IconField>
                        <span v-if="filter" role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenFilterResult')" :data-p-hidden-accessible="true">
                            {{ filterResultMessageText }}
                        </span>
                    </div>
                    <div :class="cx('listContainer')" :style="{ 'max-height': virtualScrollerDisabled ? scrollHeight : '' }" v-bind="ptm('listContainer')">
                        <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :items="visibleOptions" :style="{ height: scrollHeight }" :tabindex="-1" :disabled="virtualScrollerDisabled" :pt="ptm('virtualScroller')">
                            <template v-slot:content="{ styleClass, contentRef, items, getItemOptions, contentStyle, itemSize }">
                                <ul :ref="(el) => listRef(el, contentRef)" :id="id + '_list'" :class="[cx('list'), styleClass]" :style="contentStyle" role="listbox" aria-multiselectable="true" :aria-label="listAriaLabel" v-bind="ptm('list')">
                                    <template v-for="(option, i) of items" :key="getOptionRenderKey(option, getOptionIndex(i, getItemOptions))">
                                        <li
                                            v-if="isOptionGroup(option)"
                                            :id="id + '_' + getOptionIndex(i, getItemOptions)"
                                            :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                            :class="cx('optionGroup')"
                                            role="option"
                                            v-bind="ptm('optionGroup')"
                                        >
                                            <slot name="optiongroup" :option="option.optionGroup" :index="getOptionIndex(i, getItemOptions)">{{ getOptionGroupLabel(option.optionGroup) }}</slot>
                                        </li>
                                        <li
                                            v-else
                                            :id="id + '_' + getOptionIndex(i, getItemOptions)"
                                            v-ripple
                                            :style="{ height: itemSize ? itemSize + 'px' : undefined }"
                                            :class="cx('option', { option, index: i, getItemOptions })"
                                            role="option"
                                            :aria-label="getOptionLabel(option)"
                                            :aria-selected="isSelected(option)"
                                            :aria-disabled="isOptionDisabled(option)"
                                            :aria-setsize="ariaSetSize"
                                            :aria-posinset="getAriaPosInset(getOptionIndex(i, getItemOptions))"
                                            @click="onOptionSelect($event, option, getOptionIndex(i, getItemOptions), true)"
                                            @mousemove="onOptionMouseMove($event, getOptionIndex(i, getItemOptions))"
                                            v-bind="getCheckboxPTOptions(option, getItemOptions, i, 'option')"
                                            :data-p-selected="isSelected(option)"
                                            :data-p-focused="focusedOptionIndex === getOptionIndex(i, getItemOptions)"
                                            :data-p-disabled="isOptionDisabled(option)"
                                        >
                                            <Checkbox :defaultValue="isSelected(option)" :binary="true" :tabindex="-1" :variant="variant" :unstyled="unstyled" :pt="getCheckboxPTOptions(option, getItemOptions, i, 'pcOptionCheckbox')">
                                                <template #icon="slotProps">
                                                    <component v-if="$slots.optioncheckboxicon || $slots.itemcheckboxicon" :is="$slots.optioncheckboxicon || $slots.itemcheckboxicon" :checked="slotProps.checked" :class="slotProps.class" />
                                                    <component
                                                        v-else-if="slotProps.checked"
                                                        :is="checkboxIcon ? 'span' : 'CheckIcon'"
                                                        :class="[slotProps.class, { [checkboxIcon]: slotProps.checked }]"
                                                        v-bind="getCheckboxPTOptions(option, getItemOptions, i, 'pcOptionCheckbox.icon')"
                                                    />
                                                </template>
                                            </Checkbox>
                                            <slot name="option" :option="option" :selected="isSelected(option)" :index="getOptionIndex(i, getItemOptions)">
                                                <span v-bind="ptm('optionLabel')">{{ getOptionLabel(option) }}</span>
                                            </slot>
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
import { absolutePosition, addStyle, findSingle, focus, getFirstFocusableElement, getFocusableElements, getLastFocusableElement, getOuterWidth, isTouchDevice, relativePosition } from '@primeuix/utils/dom';
import { equals, findLastIndex, isEmpty, isNotEmpty, isPrintableCharacter, resolveFieldData } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { FilterService } from '@primevue/core/api';
import { ConnectedOverlayScrollHandler, UniqueComponentId } from '@primevue/core/utils';
import CheckIcon from '@primevue/icons/check';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import SearchIcon from '@primevue/icons/search';
import SpinnerIcon from '@primevue/icons/spinner';
import TimesIcon from '@primevue/icons/times';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';
import BaseMultiSelect from './BaseMultiSelect.vue';

export default {
    name: 'MultiSelect',
    extends: BaseMultiSelect,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur', 'before-show', 'before-hide', 'show', 'hide', 'filter', 'selectall-change'],
    inject: {
        $pcFluid: { default: null }
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    overlay: null,
    list: null,
    virtualScroller: null,
    startRangeIndex: -1,
    searchTimeout: null,
    searchValue: '',
    selectOnFocus: false,
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
            return this.optionValue ? resolveFieldData(option, this.optionValue) : option;
        },
        getOptionRenderKey(option, index) {
            return this.dataKey ? resolveFieldData(option, this.dataKey) : this.getOptionLabel(option) + `_${index}`;
        },
        getHeaderCheckboxPTOptions(key) {
            return this.ptm(key, {
                context: {
                    selected: this.allSelected
                }
            });
        },
        getCheckboxPTOptions(option, itemOptions, index, key) {
            return this.ptm(key, {
                context: {
                    selected: this.isSelected(option),
                    focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
                    disabled: this.isOptionDisabled(option)
                }
            });
        },
        isOptionDisabled(option) {
            if (this.maxSelectionLimitReached && !this.isSelected(option)) {
                return true;
            }

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
            this.overlayVisible = true;
            this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();

            isFocus && focus(this.$refs.focusInput);
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.overlayVisible = false;
                this.clicked = false;
                this.focusedOptionIndex = -1;
                this.searchValue = '';

                this.resetFilterOnHide && (this.filterValue = null);
                isFocus && focus(this.$refs.focusInput);
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
                this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
                this.scrollInView(this.focusedOptionIndex);
            }

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.clicked = false;
            this.focused = false;
            this.focusedOptionIndex = -1;
            this.searchValue = '';
            this.$emit('blur', event);
            this.formField.onBlur?.();
        },
        onKeyDown(event) {
            if (this.disabled) {
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
                    this.onEnterKey(event);
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

                default:
                    if (event.code === 'KeyA' && metaKey) {
                        const value = this.visibleOptions.filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));

                        this.updateModel(event, value);

                        event.preventDefault();
                        break;
                    }

                    if (!metaKey && isPrintableCharacter(event.key)) {
                        !this.overlayVisible && this.show();
                        this.searchOptions(event);
                        event.preventDefault();
                    }

                    break;
            }

            this.clicked = false;
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
            const focusableEl = event.relatedTarget === this.$refs.focusInput ? getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;

            focus(focusableEl);
        },
        onLastHiddenFocus(event) {
            const focusableEl = event.relatedTarget === this.$refs.focusInput ? getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;

            focus(focusableEl);
        },
        onOptionSelect(event, option, index = -1, isFocus = false) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            let selected = this.isSelected(option);
            let value = null;

            if (selected) value = this.d_value.filter((val) => !equals(val, this.getOptionValue(option), this.equalityKey));
            else value = [...(this.d_value || []), this.getOptionValue(option)];

            this.updateModel(event, value);
            index !== -1 && (this.focusedOptionIndex = index);
            isFocus && focus(this.$refs.focusInput);
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
                    .map((option) => this.getOptionValue(option));

                this.updateModel(event, value);
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
        onArrowDownKey(event) {
            if (!this.overlayVisible) {
                this.show();
            } else {
                const optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();

                if (event.shiftKey) {
                    this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
                }

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

                if (event.shiftKey) {
                    this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
                }

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

                if (event.shiftKey && metaKey) {
                    this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
                }

                this.changeFocusedOptionIndex(event, optionIndex);

                !this.overlayVisible && this.show();
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

                if (event.shiftKey && metaKey) {
                    this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
                }

                this.changeFocusedOptionIndex(event, optionIndex);

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
                    if (event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex);
                    else this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                }
            }

            event.preventDefault();
        },
        onEscapeKey(event) {
            this.overlayVisible && this.hide(true);
            event.preventDefault();
        },
        onTabKey(event, pressedInInputText = false) {
            if (!pressedInInputText) {
                if (this.overlayVisible && this.hasFocusableElements()) {
                    focus(event.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay);

                    event.preventDefault();
                } else {
                    if (this.focusedOptionIndex !== -1) {
                        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
                    }

                    this.overlayVisible && this.hide(this.filter);
                }
            }
        },
        onShiftKey() {
            this.startRangeIndex = this.focusedOptionIndex;
        },
        onOverlayEnter(el) {
            ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);

            addStyle(el, { position: 'absolute', top: '0', left: '0' });
            this.alignOverlay();
            this.scrollInView();

            this.autoFilterFocus && focus(this.$refs.filterInput.$el);
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
            if (this.appendTo === 'self') {
                relativePosition(this.overlay, this.$el);
            } else {
                this.overlay.style.minWidth = getOuterWidth(this.$el) + 'px';
                absolutePosition(this.overlay, this.$el);
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.isOutsideClicked(event)) {
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
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target) || (this.overlay && this.overlay.contains(event.target)));
        },
        getLabelByValue(value) {
            const options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
            const matchedOption = options.find((option) => !this.isOptionGroup(option) && equals(this.getOptionValue(option), value, this.equalityKey));

            return matchedOption ? this.getOptionLabel(matchedOption) : null;
        },
        getSelectedItemsLabel() {
            let pattern = /{(.*?)}/;
            const selectedItemsLabel = this.selectedItemsLabel || this.$primevue.config.locale.selectionMessage;

            if (pattern.test(selectedItemsLabel)) {
                return selectedItemsLabel.replace(selectedItemsLabel.match(pattern)[0], this.d_value.length + '');
            }

            return selectedItemsLabel;
        },
        onToggleAll(event) {
            if (this.selectAll !== null) {
                this.$emit('selectall-change', { originalEvent: event, checked: !this.allSelected });
            } else {
                const value = this.allSelected ? [] : this.visibleOptions.filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));

                this.updateModel(event, value);
            }
        },
        removeOption(event, optionValue) {
            event.stopPropagation();
            let value = this.d_value.filter((val) => !equals(val, optionValue, this.equalityKey));

            this.updateModel(event, value);
        },
        clearFilter() {
            this.filterValue = null;
        },
        hasFocusableElements() {
            return getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
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

            return (this.d_value || []).some((value) => this.isEquals(value, optionValue));
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
                for (let index = this.d_value.length - 1; index >= 0; index--) {
                    const value = this.d_value[index];
                    const matchedOptionIndex = this.visibleOptions.findIndex((option) => this.isValidSelectedOption(option) && this.isEquals(value, this.getOptionValue(option)));

                    if (matchedOptionIndex > -1) return matchedOptionIndex;
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
            const selectedIndex = this.findSelectedOptionIndex();

            return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
        },
        findLastFocusedOptionIndex() {
            const selectedIndex = this.findSelectedOptionIndex();

            return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
        },
        searchOptions(event) {
            this.searchValue = (this.searchValue || '') + event.key;

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
        changeFocusedOptionIndex(event, index) {
            if (this.focusedOptionIndex !== index) {
                this.focusedOptionIndex = index;
                this.scrollInView();

                if (this.selectOnFocus) {
                    this.onOptionSelect(event, this.visibleOptions[index]);
                }
            }
        },
        scrollInView(index = -1) {
            this.$nextTick(() => {
                const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
                const element = findSingle(this.list, `li[id="${id}"]`);

                if (element) {
                    element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                } else if (!this.virtualScrollerDisabled) {
                    this.virtualScroller && this.virtualScroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex);
                }
            });
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
                this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
                const value = this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);

                this.updateModel(null, [value]);
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
        label() {
            // TODO: Refactor
            let label;

            if (this.d_value && this.d_value.length) {
                if (isNotEmpty(this.maxSelectedLabels) && this.d_value.length > this.maxSelectedLabels) {
                    return this.getSelectedItemsLabel();
                } else {
                    label = '';

                    for (let i = 0; i < this.d_value.length; i++) {
                        if (i !== 0) {
                            label += ', ';
                        }

                        label += this.getLabelByValue(this.d_value[i]);
                    }
                }
            } else {
                label = this.placeholder;
            }

            return label;
        },
        chipSelectedItems() {
            return isNotEmpty(this.maxSelectedLabels) && this.d_value && this.d_value.length > this.maxSelectedLabels;
        },
        allSelected() {
            return this.selectAll !== null ? this.selectAll : isNotEmpty(this.visibleOptions) && this.visibleOptions.every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
        },
        // @deprecated use $filled instead.
        hasSelectedOption() {
            return this.$filled;
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        },
        searchFields() {
            return this.filterFields || [this.optionLabel];
        },
        maxSelectionLimitReached() {
            return this.selectionLimit && this.d_value && this.d_value.length === this.selectionLimit;
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
            return this.$filled ? this.selectionMessageText.replaceAll('{0}', this.d_value.length) : this.emptySelectionMessageText;
        },
        focusedOptionId() {
            return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
        },
        ariaSetSize() {
            return this.visibleOptions.filter((option) => !this.isOptionGroup(option)).length;
        },
        toggleAllAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[this.allSelected ? 'selectAll' : 'unselectAll'] : undefined;
        },
        listAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        },
        hasFluid() {
            return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
        },
        isClearIconVisible() {
            return this.showClear && this.d_value != null && isNotEmpty(this.options);
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        InputText,
        Checkbox,
        VirtualScroller,
        Portal,
        Chip,
        IconField,
        InputIcon,
        TimesIcon,
        SearchIcon,
        ChevronDownIcon,
        SpinnerIcon,
        CheckIcon
    }
};
</script>

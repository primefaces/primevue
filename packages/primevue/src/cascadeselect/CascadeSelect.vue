<template>
    <div ref="container" :class="cx('root')" :style="sx('root')" @click="onContainerClick($event)" v-bind="ptmi('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputContainer')" :data-p-hidden-accessible="true">
            <input
                ref="focusInput"
                :id="inputId"
                type="text"
                :class="inputClass"
                :style="inputStyle"
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
                :aria-invalid="invalid || undefined"
                @focus="onFocus"
                @blur="onBlur"
                @keydown="onKeyDown"
                v-bind="{ ...inputProps, ...ptm('hiddenInput') }"
            />
        </div>
        <span :class="cx('label')" v-bind="ptm('label')">
            <slot name="value" :value="d_value" :placeholder="placeholder">
                {{ label }}
            </slot>
        </span>
        <slot v-if="isClearIconVisible" name="clearicon" :class="cx('clearIcon')" :clearCallback="onClearClick">
            <component :is="clearIcon ? 'i' : 'TimesIcon'" ref="clearIcon" :class="[cx('clearIcon'), clearIcon]" @click="onClearClick" v-bind="ptm('clearIcon')" data-pc-section="clearicon" />
        </slot>
        <div :class="cx('dropdown')" role="button" tabindex="-1" v-bind="ptm('dropdown')">
            <slot v-if="loading" name="loadingicon" :class="cx('loadingIcon')">
                <span v-if="loadingIcon" :class="[cx('loadingIcon'), 'pi-spin', loadingIcon]" aria-hidden="true" v-bind="ptm('loadingIcon')" />
                <SpinnerIcon v-else :class="cx('loadingIcon')" spin aria-hidden="true" v-bind="ptm('loadingIcon')" />
            </slot>
            <slot v-else name="dropdownicon" :class="cx('dropdownIcon')">
                <component :is="dropdownIcon ? 'span' : 'ChevronDownIcon'" :class="[cx('dropdownIcon'), dropdownIcon]" aria-hidden="true" v-bind="ptm('dropdownIcon')" />
            </slot>
        </div>
        <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSearchResult')" :data-p-hidden-accessible="true">
            {{ searchResultMessageText }}
        </span>
        <Portal :appendTo="appendTo">
            <transition name="p-connected-overlay" @enter="onOverlayEnter" @after-enter="onOverlayAfterEnter" @leave="onOverlayLeave" @after-leave="onOverlayAfterLeave" v-bind="ptm('transition')">
                <div
                    v-if="overlayVisible"
                    :ref="overlayRef"
                    :class="[cx('overlay'), panelClass, overlayClass]"
                    :style="[panelStyle, overlayStyle]"
                    @click="onOverlayClick"
                    @keydown="onOverlayKeyDown"
                    v-bind="{ ...panelProps, ...overlayProps, ...ptm('overlay') }"
                >
                    <slot name="header" :value="d_value" :options="options" />
                    <div :class="cx('listContainer')" v-bind="ptm('listContainer')">
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
                            :value="d_value"
                            @option-change="onOptionClick"
                            @option-focus-change="onOptionMouseMove"
                            @option-focus-enter-change="onOptionMouseEnter"
                            :pt="pt"
                            :unstyled="unstyled"
                        />
                    </div>
                    <span role="status" aria-live="polite" class="p-hidden-accessible" v-bind="ptm('hiddenSelectedMessage')" :data-p-hidden-accessible="true">
                        {{ selectedMessageText }}
                    </span>
                    <slot name="footer" :value="d_value" :options="options" />
                </div>
            </transition>
        </Portal>
    </div>
</template>

<script>
import { absolutePosition, addStyle, findSingle, focus, getOuterWidth, isTouchDevice, relativePosition } from '@primeuix/utils/dom';
import { equals, findLastIndex, isEmpty, isNotEmpty, isPrintableCharacter, isString, resolveFieldData } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { ConnectedOverlayScrollHandler, UniqueComponentId } from '@primevue/core/utils';
import AngleRightIcon from '@primevue/icons/angleright';
import ChevronDownIcon from '@primevue/icons/chevrondown';
import SpinnerIcon from '@primevue/icons/spinner';
import OverlayEventBus from 'primevue/overlayeventbus';
import Portal from 'primevue/portal';
import BaseCascadeSelect from './BaseCascadeSelect.vue';
import CascadeSelectSub from './CascadeSelectSub.vue';
import TimesIcon from '@primevue/icons/times';

export default {
    name: 'CascadeSelect',
    extends: BaseCascadeSelect,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur', 'click', 'group-change', 'before-show', 'before-hide', 'hide', 'show'],
    outsideClickListener: null,
    matchMediaListener: null,
    scrollHandler: null,
    resizeListener: null,
    overlay: null,
    searchTimeout: null,
    searchValue: null,
    data() {
        return {
            id: this.$attrs.id,
            clicked: false,
            focused: false,
            focusedOptionInfo: { index: -1, level: 0, parentKey: '' },
            activeOptionPath: [],
            overlayVisible: false,
            dirty: false,
            mobileActive: false,
            query: null,
            queryMatches: false
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
        this.bindMatchMediaListener();
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindMatchMediaListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.overlay) {
            ZIndex.clear(this.overlay);
            this.overlay = null;
        }

        if (this.mobileActive) {
            this.mobileActive = false;
        }
    },
    methods: {
        getOptionLabel(option) {
            return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? resolveFieldData(option, this.optionValue) : option;
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : false;
        },
        getOptionGroupLabel(optionGroup) {
            return this.optionGroupLabel ? resolveFieldData(optionGroup, this.optionGroupLabel) : null;
        },
        getOptionGroupChildren(optionGroup, level) {
            return isString(this.optionGroupChildren) ? resolveFieldData(optionGroup, this.optionGroupChildren) : resolveFieldData(optionGroup, this.optionGroupChildren[level]);
        },
        isOptionGroup(option, level) {
            return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
        },
        getProccessedOptionLabel(processedOption = {}) {
            const grouped = this.isProccessedOptionGroup(processedOption);

            return grouped ? this.getOptionGroupLabel(processedOption.option, processedOption.level) : this.getOptionLabel(processedOption.option);
        },
        isProccessedOptionGroup(processedOption) {
            return isNotEmpty(processedOption?.children);
        },
        show(isFocus) {
            this.$emit('before-show');
            this.overlayVisible = true;
            this.activeOptionPath = this.$filled ? this.findOptionPathByValue(this.d_value) : this.activeOptionPath;

            if (this.$filled && isNotEmpty(this.activeOptionPath)) {
                const processedOption = this.activeOptionPath[this.activeOptionPath.length - 1];

                this.focusedOptionInfo = { index: processedOption.index, level: processedOption.level, parentKey: processedOption.parentKey };
            } else {
                this.focusedOptionInfo = { index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex(), level: 0, parentKey: '' };
            }

            isFocus && focus(this.$refs.focusInput);
        },
        hide(isFocus) {
            const _hide = () => {
                this.$emit('before-hide');
                this.overlayVisible = false;
                this.clicked = false;
                this.activeOptionPath = [];
                this.focusedOptionInfo = { index: -1, level: 0, parentKey: '' };

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
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.focusedOptionInfo = { index: -1, level: 0, parentKey: '' };
            this.searchValue = '';
            this.$emit('blur', event);
            this.formField.onBlur?.();
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
                case 'NumpadEnter':
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
                    if (!metaKey && isPrintableCharacter(event.key)) {
                        !this.overlayVisible && this.show();
                        this.searchOptions(event, event.key);
                    }

                    break;
            }

            this.clicked = false;
        },
        onOptionChange(event) {
            const { processedOption, type } = event;

            if (isEmpty(processedOption)) return;

            const { index, key, level, parentKey, children } = processedOption;
            const grouped = isNotEmpty(children);
            const activeOptionPath = this.activeOptionPath.filter((p) => p.parentKey !== parentKey && p.parentKey !== key);

            this.focusedOptionInfo = { index, level, parentKey };

            if (type == 'hover' && this.queryMatches) {
                return;
            }

            if (grouped) {
                activeOptionPath.push(processedOption);
            }

            this.activeOptionPath = activeOptionPath;
        },
        onOptionClick(event) {
            const { originalEvent, processedOption, isFocus, isHide, preventSelection } = event;
            const { index, key, level, parentKey } = processedOption;
            const grouped = this.isProccessedOptionGroup(processedOption);
            const selected = this.isSelected(processedOption);

            if (selected) {
                this.activeOptionPath = this.activeOptionPath.filter((p) => key !== p.key && key.startsWith(p.key));
                this.focusedOptionInfo = { index, level, parentKey };
            } else {
                if (grouped) {
                    this.onOptionChange(event);
                    this.onOptionGroupSelect(originalEvent, processedOption);
                } else {
                    const activeOptionPath = this.activeOptionPath.filter((p) => p.parentKey !== parentKey);

                    activeOptionPath.push(processedOption);

                    this.focusedOptionInfo = { index, level, parentKey };

                    if (!preventSelection || processedOption?.children.length !== 0) {
                        this.activeOptionPath = activeOptionPath;
                        this.onOptionSelect(originalEvent, processedOption, isHide);
                    }
                }
            }

            isFocus && focus(this.$refs.focusInput);
        },
        onOptionMouseEnter(event) {
            if (this.focusOnHover) {
                if (this.dirty || (!this.dirty && isNotEmpty(this.d_value))) {
                    this.onOptionChange({ ...event, type: 'hover' });
                } else if (!this.dirty && event.processedOption.level === 0) {
                    this.onOptionClick({ ...event, type: 'hover' });
                }
            }
        },
        onOptionMouseMove(event) {
            if (this.focused && this.focusOnHover) {
                this.changeFocusedOptionIndex(event, event.processedOption.index);
            }
        },
        onOptionSelect(event, processedOption, isHide = true) {
            const value = this.getOptionValue(processedOption?.option);

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

            if (event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
                return;
            } else if (!this.overlay || !this.overlay.contains(event.target)) {
                this.overlayVisible ? this.hide() : this.show();
                focus(this.$refs.focusInput);
            }

            this.clicked = true;
            this.$emit('click', event);
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
                this.show();
            } else {
                const optionIndex = this.focusedOptionInfo.index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo.index) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex, true);
            }

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
                const optionIndex = this.focusedOptionInfo.index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo.index) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();

                this.changeFocusedOptionIndex(event, optionIndex, true);

                !this.overlayVisible && this.show();
                event.preventDefault();
            }
        },
        onArrowLeftKey(event) {
            if (this.overlayVisible) {
                const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                const parentOption = this.activeOptionPath.find((p) => p.key === processedOption?.parentKey);
                const matched = this.focusedOptionInfo.parentKey === '' || (parentOption && parentOption.key === this.focusedOptionInfo.parentKey);
                const root = isEmpty(processedOption?.parent);

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
                    const matched = this.activeOptionPath.some((p) => processedOption?.key === p.key);

                    if (matched) {
                        this.focusedOptionInfo = { index: -1, parentKey: processedOption?.key };
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
                this.focusedOptionInfo.index !== -1; // reset
                this.onArrowDownKey(event);
            } else {
                if (this.focusedOptionInfo.index !== -1) {
                    const processedOption = this.visibleOptions[this.focusedOptionInfo.index];
                    const grouped = this.isProccessedOptionGroup(processedOption);

                    this.onOptionClick({ originalEvent: event, processedOption, preventSelection: false });
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
            ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);

            addStyle(el, { position: 'absolute', top: '0', left: '0' });
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
        bindMatchMediaListener() {
            if (!this.matchMediaListener) {
                const query = matchMedia(`(max-width: ${this.breakpoint})`);

                this.query = query;
                this.queryMatches = query.matches;

                this.matchMediaListener = () => {
                    this.queryMatches = query.matches;
                    this.mobileActive = false;
                };

                this.query.addEventListener('change', this.matchMediaListener);
            }
        },
        unbindMatchMediaListener() {
            if (this.matchMediaListener) {
                this.query.removeEventListener('change', this.matchMediaListener);
                this.matchMediaListener = null;
            }
        },
        isOptionMatched(processedOption) {
            return this.isValidOption(processedOption) && this.getProccessedOptionLabel(processedOption)?.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
        },
        isValidOption(processedOption) {
            return isNotEmpty(processedOption) && !this.isOptionDisabled(processedOption.option);
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
            return findLastIndex(this.visibleOptions, (processedOption) => this.isValidOption(processedOption));
        },
        findNextOptionIndex(index) {
            const matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex((processedOption) => this.isValidOption(processedOption)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        },
        findPrevOptionIndex(index) {
            const matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), (processedOption) => this.isValidOption(processedOption)) : -1;

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
            if (isEmpty(value)) return [];

            for (let i = 0; i < processedOptions.length; i++) {
                const processedOption = processedOptions[i];

                if (equals(value, this.getOptionValue(processedOption.option), this.equalityKey)) {
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

            if (isNotEmpty(this.searchValue)) {
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
        changeFocusedOptionIndex(event, index, preventSelection) {
            if (this.focusedOptionInfo.index !== index) {
                this.focusedOptionInfo.index = index;
                this.scrollInView();

                if (this.focusOnHover) {
                    this.onOptionClick({ originalEvent: event, processedOption: this.visibleOptions[index], isHide: false, preventSelection });
                }

                if (this.selectOnFocus) {
                    this.onOptionChange({ originalEvent: event, processedOption: this.visibleOptions[index], isHide: false });
                }
            }
        },
        scrollInView(index = -1) {
            this.$nextTick(() => {
                const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
                const element = findSingle(this.list, `li[id="${id}"]`);

                if (element) {
                    element.scrollIntoView && element.scrollIntoView({ block: 'nearest', inline: 'start' });
                }
            });
        },
        autoUpdateModel() {
            if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
                this.focusedOptionInfo.index = this.findFirstFocusedOptionIndex();
                this.onOptionChange({ processedOption: this.visibleOptions[this.focusedOptionInfo.index], isHide: false });

                !this.overlayVisible && (this.focusedOptionInfo = { index: -1, level: 0, parentKey: '' });
            }
        },
        updateModel(event, value) {
            this.writeValue(value, event);
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
        // @deprecated use $filled instead.
        hasSelectedOption() {
            return this.$filled;
        },
        label() {
            const label = this.placeholder || 'p-emptylabel';

            if (this.$filled) {
                const activeOptionPath = this.findOptionPathByValue(this.d_value);
                const processedOption = isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;

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
            return isNotEmpty(this.visibleOptions) ? this.searchMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptySearchMessageText;
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
            return this.$filled ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
        },
        focusedOptionId() {
            return this.focusedOptionInfo.index !== -1 ? `${this.id}${isNotEmpty(this.focusedOptionInfo.parentKey) ? '_' + this.focusedOptionInfo.parentKey : ''}_${this.focusedOptionInfo.index}` : null;
        },
        isClearIconVisible() {
            return this.showClear && this.d_value != null && isNotEmpty(this.options);
        }
    },
    components: {
        CascadeSelectSub,
        Portal,
        ChevronDownIcon,
        SpinnerIcon,
        AngleRightIcon,
        TimesIcon
    }
};
</script>

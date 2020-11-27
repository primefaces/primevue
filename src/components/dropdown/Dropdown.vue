<template>
    <div ref="container" :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="focusInput" type="text" :id="inputId" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex"
                aria-haspopup="listbox" :aria-expanded="overlayVisible" :aria-labelledby="ariaLabelledBy"/>
        </div>
        <input v-if="editable" type="text" class="p-dropdown-label p-inputtext" :disabled="disabled" @focus="onFocus" @blur="onBlur" :placeholder="placeholder" :value="editableInputValue" @input="onEditableInput"
            aria-haspopup="listbox" :aria-expanded="overlayVisible">
        <span v-if="!editable" :class="labelClass">
            <slot name="value" :value="value" :placeholder="placeholder">
                {{label}}
            </slot>
        </span>
        <i v-if="showClear && value != null" class="p-dropdown-clear-icon pi pi-times" @click="onClearClick($event)"></i>
        <div class="p-dropdown-trigger" role="button" aria-haspopup="listbox" :aria-expanded="overlayVisible">
            <span class="p-dropdown-trigger-icon pi pi-chevron-down"></span>
        </div>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-dropdown-panel p-component" v-if="overlayVisible">
                <div class="p-dropdown-header" v-if="filter">
                     <div  class="p-dropdown-filter-container">
                        <input type="text" ref="filterInput" v-model="filterValue" autoComplete="off" class="p-dropdown-filter p-inputtext p-component" :placeholder="filterPlaceholder" @keydown="onFilterKeyDown"  @input="onFilterChange"/>
                        <span class="p-dropdown-filter-icon pi pi-search"></span>
                    </div>
                </div>
                <div ref="itemsWrapper" class="p-dropdown-items-wrapper" :style="{'max-height': scrollHeight}">
                    <ul class="p-dropdown-items" role="listbox">
                        <li v-for="(option, i) of visibleOptions" :class="['p-dropdown-item', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option)}]" v-ripple
                            :aria-label="getOptionLabel(option)" :key="getOptionRenderKey(option)" @click="onOptionSelect($event, option)" role="option" :aria-selected="isSelected(option)">
                            <slot name="option" :option="option" :index="i">
                                {{getOptionLabel(option)}}
                            </slot>
                        </li>
                        <li v-if="filterValue && (!visibleOptions || (visibleOptions && visibleOptions.length === 0))" class="p-dropdown-empty-message">{{emptyFilterMessage}}</li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
    props: {
        value: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
		scrollHeight: {
			type: String,
			default: '200px'
		},
		filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String,
		editable: Boolean,
		placeholder: String,
		disabled: Boolean,
        dataKey: null,
        showClear: Boolean,
        inputId: String,
        tabindex: String,
        ariaLabelledBy: null,
        appendTo: {
            type: String,
            default: null
        },
        emptyFilterMessage: {
            type: String,
            default: 'No results found'
        }
    },
    data() {
        return {
            focused: false,
            filterValue: null,
            overlayVisible: false
        };
    },
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    searchTimeout: null,
    currentSearchChar: null,
    previousSearchChar: null,
    searchValue: null,
    beforeDestroy() {
        this.restoreAppend();
        this.unbindOutsideClickListener();
        this.unbindResizeListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
    },
    methods: {
        getOptionLabel(option) {
            return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        getOptionRenderKey(option) {
            return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
        },
        getSelectedOption() {
            let selectedOption;

            if (this.value != null && this.options) {
                for (let option of this.options) {
                    if ((ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey))) {
                        selectedOption = option;
                        break;
                    }
                }
            }

            return selectedOption;
        },
        isSelected(option) {
            return ObjectUtils.equals(this.value, this.getOptionValue(option), this.equalityKey);
        },
        getSelectedOptionIndex() {
            let selectedOptionIndex = -1;

            if (this.value != null && this.visibleOptions) {
                for (let i = 0; i < this.visibleOptions.length; i++) {
                    if ((ObjectUtils.equals(this.value, this.getOptionValue(this.visibleOptions[i]), this.equalityKey))) {
                        selectedOptionIndex = i;
                        break;
                    }
                }
            }

            return selectedOptionIndex;
        },
        show() {
            this.$emit('before-show');
            this.overlayVisible = true;
        },
        hide() {
            this.$emit('before-hide');
            this.overlayVisible = false;
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onKeyDown(event) {
            switch(event.which) {
                //down
                case 40:
                    this.onDownKey(event);
                break;

                //up
                case 38:
                    this.onUpKey(event);
                break;

                //space
                case 32:
                    if (!this.overlayVisible) {
                        this.show();
                        event.preventDefault();
                    }
                break;

                //enter and escape
                case 13:
                case 27:
                    if (this.overlayVisible) {
                        this.hide();
                        event.preventDefault();
                    }
                break;

                //tab
                case 9:
                    this.hide();
                break;

                default:
                    this.search(event);
                break;
            }
        },
        onFilterKeyDown(event) {
            switch (event.which) {
                //down
                case 40:
                    this.onDownKey(event);
                    break;

                //up
                case 38:
                    this.onUpKey(event);
                    break;

                //enter and escape
                case 13:
                case 27:
                    this.overlayVisible = false;
                    event.preventDefault();
                break;

                default:
                break;
            }
        },
        onDownKey(event) {
            if (this.visibleOptions) {
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                else {
                    let nextOption = this.findNextOption(this.getSelectedOptionIndex());

                    if (nextOption) {
                        this.updateModel(event, this.getOptionValue(nextOption));
                    }
                }
            }

            event.preventDefault();
        },
        onUpKey(event) {
            if (this.visibleOptions) {
                let prevOption = this.findPrevOption(this.getSelectedOptionIndex());

                if (prevOption) {
                    this.updateModel(event, this.getOptionValue(prevOption));
                }
            }

            event.preventDefault();
        },
        findNextOption(index) {
            let i = index + 1;
            if (i === this.visibleOptions.length) {
                return null;
            }

            let option = this.visibleOptions[i];
            if (this.isOptionDisabled(option))
                return this.findNextOption(i);
            else
                return option;

        },
        findPrevOption(index) {
            let i = index - 1;
            if (i < 0) {
                return null;
            }

            let option = this.visibleOptions[i];
            if (this.isOptionDisabled(option))
                return this.findPrevOption(i);
            else
                return option;
        },
        onClearClick(event) {
            this.updateModel(event, null);
        },
        onClick(event) {
            if (this.disabled) {
                return;
            }

            if (DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {
                return;
            }
            else if (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();

                this.$refs.focusInput.focus();
            }
        },
        onOptionSelect(event, option) {
            let value = this.getOptionValue(option);
            this.updateModel(event, value);
            this.$refs.focusInput.focus();

            setTimeout(() => {
                this.hide();
            }, 200);
        },
        onEditableInput(event) {
            this.$emit('input', event.target.value);
        },
        onOverlayEnter() {
            this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.appendContainer();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindScrollListener();
            this.bindResizeListener();

            if (this.filter) {
                this.$refs.filterInput.focus();
            }

            this.$emit('show');
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
            this.$emit('hide');
        },
        alignOverlay() {
            if (this.appendTo) {
                DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container);
                this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.container) + 'px';
            } else {
                DomHandler.relativePosition(this.$refs.overlay, this.$refs.container);
            }
        },
        updateModel(event, value) {
            this.$emit('input', value);
            this.$emit('change', {originalEvent: event, value: value});
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.$refs.overlay && !this.$refs.container.contains(event.target) && !this.$refs.overlay.contains(event.target)) {
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
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.$el, () => {
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
                    if (this.overlayVisible) {
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
        search(event) {
            if (!this.visibleOptions) {
                return;
            }

            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }

            const char = String.fromCharCode(event.keyCode);
            this.previousSearchChar = this.currentSearchChar;
            this.currentSearchChar = char;

            if (this.previousSearchChar === this.currentSearchChar)
                this.searchValue = this.currentSearchChar;
            else
                this.searchValue = this.searchValue ? this.searchValue + char : char;

            let searchIndex = this.getSelectedOptionIndex();
            let newOption = this.searchOption(++searchIndex);

            if (newOption) {
                this.updateModel(event, this.getOptionValue(newOption));
            }

            this.searchTimeout = setTimeout(() => {
                this.searchValue = null;
            }, 250);
        },
        searchOption(index) {
            let option;

            if (this.searchValue) {
                option = this.searchOptionInRange(index, this.visibleOptions.length);

                if (!option) {
                    option = this.searchOptionInRange(0, index);
                }
            }

            return option;
        },
        searchOptionInRange(start, end) {
            for (let i = start; i < end; i++) {
                let opt = this.visibleOptions[i];
                let label = this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale);
                if (label.startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))) {
                    return opt;
                }
            }

            return null;
        },
        appendContainer() {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.$refs.overlay);
                else
                    document.getElementById(this.appendTo).appendChild(this.$refs.overlay);
            }
        },
        restoreAppend() {
            if (this.$refs.overlay && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.$refs.overlay);
                else
                    document.getElementById(this.appendTo).removeChild(this.$refs.overlay);
            }
        },
        onFilterChange(event) {
            this.$emit('filter', {originalEvent: event, value: event.target.value});
            if (this.overlayVisible) {
                this.alignOverlay();
            }
        }
    },
    computed: {
        visibleOptions() {
            if (this.filterValue && this.filterValue.trim().length > 0)
                return this.options.filter(option => this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale)) > -1);
            else
                return this.options;
        },
        containerClass() {
            return [
                'p-dropdown p-component p-inputwrapper',
                {
                    'p-disabled': this.disabled,
                    'p-dropdown-clearable': this.showClear && !this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': this.value,
                    'p-inputwrapper-focus': this.focused
                }
            ];
        },
        labelClass() {
            return [
                'p-dropdown-label p-inputtext',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-dropdown-label-empty': !this.$scopedSlots['value'] && (this.label === 'p-emptylabel' || this.label.length === 0)
                }
            ];
        },
        label() {
            let selectedOption = this.getSelectedOption();
            if (selectedOption)
                return this.getOptionLabel(selectedOption);
            else
                return this.placeholder||'p-emptylabel';
        },
        editableInputValue() {
            let selectedOption = this.getSelectedOption();
            if (selectedOption)
                return this.getOptionLabel(selectedOption);
            else
                return this.value;
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}

.p-dropdown-label-empty {
    overflow: hidden;
    visibility: hidden;
}

input.p-dropdown-label  {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-dropdown-filter {
    width: 100%;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
</style>
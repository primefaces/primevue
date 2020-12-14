<template>
    <div ref="container" :class="containerClass" @click="onClick">
        <div class="p-hidden-accessible">
            <input ref="focusInput" type="text" role="listbox" :id="inputId" readonly :disabled="disabled" @focus="onFocus" @blur="onBlur" @keydown="onKeyDown" :tabindex="tabindex"
                aria-haspopup="listbox" :aria-expanded="overlayVisible" :aria-labelledby="ariaLabelledBy"/>
        </div>
        <div class="p-multiselect-label-container">
            <div :class="labelClass">
                <slot name="value" :value="value" :placeholder="placeholder">
                    <template v-if="display === 'comma'">
                        {{label || 'empty'}}
                    </template>
                    <template v-else-if="display === 'chip'">
                        <div v-for="item of value" class="p-multiselect-token" :key="getLabelByValue(item)">
                            <span class="p-multiselect-token-label">{{getLabelByValue(item)}}</span>
                            <span v-if="!disabled" class="p-multiselect-token-icon pi pi-times-circle" @click="removeChip(item)"></span>
                        </div>
                        <template v-if="!value || value.length === 0">{{placeholder || 'empty'}}</template>
                    </template>
                </slot>
            </div>
        </div>
        <div class="p-multiselect-trigger">
            <span class="p-multiselect-trigger-icon pi pi-chevron-down"></span>
        </div>
        <transition name="p-connected-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-multiselect-panel p-component" v-if="overlayVisible">
                <div class="p-multiselect-header">
                    <div class="p-checkbox p-component" @click="onToggleAll" role="checkbox" :aria-checked="allSelected">
                        <div class="p-hidden-accessible">
                            <input type="checkbox" readonly @focus="onHeaderCheckboxFocus" @blur="onHeaderCheckboxBlur">
                        </div>
                        <div :class="['p-checkbox-box', {'p-highlight': allSelected, 'p-focus': headerCheckboxFocused}]" role="checkbox" :aria-checked="allSelected">
                            <span :class="['p-checkbox-icon', {'pi pi-check': allSelected}]"></span>
                        </div>
                    </div>
                    <div v-if="filter" class="p-multiselect-filter-container">
                        <input type="text" v-model="filterValue" class="p-multiselect-filter p-inputtext p-component" :placeholder="filterPlaceholder" @input="onFilterChange">
                        <span class="p-multiselect-filter-icon pi pi-search"></span>
                    </div>
                    <button class="p-multiselect-close p-link" @click="onCloseClick" type="button" v-ripple>
                        <span class="p-multiselect-close-icon pi pi-times" />
                    </button>
                </div>
                <div ref="itemsWrapper" class="p-multiselect-items-wrapper" :style="{'max-height': scrollHeight}">
                    <ul class="p-multiselect-items p-component" role="listbox" aria-multiselectable="true">
                        <li v-for="(option, i) of visibleOptions" :class="['p-multiselect-item', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option)}]" role="option" :aria-selected="isSelected(option)"
                            :aria-label="getOptionLabel(option)" :key="getOptionRenderKey(option)" @click="onOptionSelect($event, option)" @keydown="onOptionKeyDown($event, option)" :tabindex="tabindex||'0'" v-ripple>
                            <div class="p-checkbox p-component">
                                <div :class="['p-checkbox-box', {'p-highlight': isSelected(option)}]">
                                    <span :class="['p-checkbox-icon', {'pi pi-check': isSelected(option)}]"></span>
                                </div>
                            </div>
                            <slot name="option" :option="option" :index="i">
                                <span>{{getOptionLabel(option)}}</span>
                            </slot>
                        </li>
                        <li v-if="filterValue && (!visibleOptions || (visibleOptions && visibleOptions.length === 0))" class="p-multiselect-empty-message">{{emptyFilterMessage}}</li>
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
		placeholder: String,
		disabled: Boolean,
		filter: Boolean,
        tabindex: String,
        inputId: String,
        dataKey: null,
        filterPlaceholder: String,
        filterLocale: String,
        ariaLabelledBy: null,
        appendTo: {
            type: String,
            default: null
        },
        emptyFilterMessage: {
            type: String,
            default: 'No results found'
        },
        display: {
            type: String,
            default: 'comma'
        }
    },
    data() {
        return {
            focused: false,
            headerCheckboxFocused: false,
            filterValue: null,
            overlayVisible: false
        };
    },
    outsideClickListener: null,
    resizeListener: null,
    scrollHandler: null,
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
        isSelected(option) {
            let selected = false;
            let optionValue = this.getOptionValue(option);

            if (this.value) {
                for (let val of this.value) {
                    if (ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                        selected = true;
                        break;
                    }
                }
            }

            return selected;
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
        onHeaderCheckboxFocus() {
            this.headerCheckboxFocused = true;
        },
        onHeaderCheckboxBlur() {
            this.headerCheckboxFocused = false;
        },
        onClick() {
            if (!this.disabled && (!this.$refs.overlay || !this.$refs.overlay.contains(event.target)) && !DomHandler.hasClass(event.target, 'p-multiselect-close')) {
                if (this.overlayVisible)
                    this.hide();
                else
                    this.show();

                this.$refs.focusInput.focus();
            }
        },
        onCloseClick() {
            this.hide();
        },
        onKeyDown(event) {
            switch(event.which) {
                //down
                case 40:
                    if (this.visibleOptions && !this.overlayVisible && event.altKey) {
                        this.show();
                    }
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
                break;
            }
        },
        onOptionSelect(event, option) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            let selected = this.isSelected(option);
            let value = null;

            if (selected)
                value = this.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey));
            else
                value = [...this.value || [], this.getOptionValue(option)];

            this.$emit('input', value);
            this.$emit('change', {originalEvent: event, value: value});
        },
        onOptionKeyDown(event, option) {
            let listItem = event.target;

            switch(event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(listItem);
                    if (nextItem) {
                        nextItem.focus();
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    var prevItem = this.findPrevItem(listItem);
                    if (prevItem) {
                        prevItem.focus();
                    }

                    event.preventDefault();
                break;

                //enter
                case 13:
                    this.onOptionSelect(event, option);
                    event.preventDefault();
                break;

                default:
                break;
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        onOverlayEnter() {
            this.$refs.overlay.style.zIndex = String(DomHandler.generateZIndex());
            this.appendContainer();
            this.alignOverlay();
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
        },
        alignOverlay() {
            if (this.appendTo) {
                DomHandler.absolutePosition(this.$refs.overlay, this.$refs.container);
                this.$refs.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.container) + 'px';
            }
            else {
                DomHandler.relativePosition(this.$refs.overlay, this.$refs.container);
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
        isOutsideClicked(event) {
            return !(this.$refs.container.isSameNode(event.target) || this.$refs.container.contains(event.target) || (this.$refs.overlay && this.$refs.overlay.contains(event.target)));
        },
        getLabelByValue(val) {
            let label = null;

            if (this.options) {
                for (let option of this.options) {
                    let optionValue = this.getOptionValue(option);

                    if(ObjectUtils.equals(optionValue, val, this.equalityKey)) {
                        label = this.getOptionLabel(option);
                        break;
                    }
                }
            }

            return label;
        },
        onToggleAll(event) {
            const value = this.allSelected ? [] : this.visibleOptions  && this.visibleOptions.map(option => this.getOptionValue(option));

            this.$emit('input', value);
            this.$emit('change', {originalEvent: event, value: value});
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
        },
        removeChip(item) {
            let value = this.value.filter(val => !ObjectUtils.equals(val, item, this.equalityKey));

            this.$emit('input', value);
            this.$emit('change', {originalEvent: event, value: value});
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
                'p-multiselect p-component p-inputwrapper',
                {
                    'p-multiselect-chip': this.display === 'chip',
                    'p-disabled': this.disabled,
                    'p-focus': this.focused,
                    'p-inputwrapper-filled': this.value && this.value.length,
                    'p-inputwrapper-focus': this.focused
                }
            ];
        },
        labelClass() {
            return [
                'p-multiselect-label',
                {
                    'p-placeholder': this.label === this.placeholder,
                    'p-multiselect-label-empty': !this.placeholder && (!this.modelValue || this.modelValue.length === 0)
                }
            ];
        },
        label() {
            let label;

            if (this.value && this.value.length) {
                label = '';
                for(let i = 0; i < this.value.length; i++) {
                    if(i !== 0) {
                        label += ', ';
                    }

                    label += this.getLabelByValue(this.value[i]);
                }
            }
            else {
                label = this.placeholder;
            }

            return label;
        },
        allSelected() {
            if (this.filterValue && this.filterValue.trim().length > 0) {
                let allSelected = true;
				if(this.visibleOptions.length > 0) {
					for (let option of this.visibleOptions) {
						if (!this.isSelected(option)) {
							allSelected = false;
							break;
						}
					}
                }
                else
                    allSelected = false;
                return allSelected;
            }
            else {
                return this.value && this.options && (this.value.length > 0 && this.value.length === this.options.length);
            }
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
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label  {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-multiselect-token-icon {
    cursor: pointer;
}

.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}

.p-multiselect-panel {
    position: absolute;
}

.p-multiselect-items-wrapper {
    overflow: auto;
}

.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-multiselect-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}

.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-multiselect-filter-container .p-inputtext {
    width: 100%;
}

.p-multiselect-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
}

.p-fluid .p-multiselect {
    display: flex;
}
</style>
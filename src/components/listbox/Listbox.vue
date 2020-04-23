<template>
    <div class="p-listbox p-inputtext p-component">
        <div class="p-listbox-header" v-if="filter">
            <div class="p-listbox-filter-container">
                <input type="text" class="p-inputtext p-component" v-model="filterValue" :placeholder="filterPlaceholder">
                <span class="p-listbox-filter-icon pi pi-search"></span>
            </div>
        </div>
        <div class="p-listbox-list-wrapper" :style="listStyle">
            <ul class="p-listbox-list" role="listbox" aria-multiselectable="multiple">
                <li v-for="(option, i) of visibleOptions" :tabindex="isOptionDisabled(option) ? null : '0'" :class="['p-listbox-item', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option)}]"
                    :aria-label="getOptionLabel(option)" :key="getOptionRenderKey(option)" @click="onOptionSelect($event, option)" @touchend="onOptionTouchEnd()" @keydown="onOptionKeyDown($event, option)" role="option" :aria-selected="isSelected(option)">
                    <slot name="option" :option="option" :index="i">
                        {{getOptionLabel(option)}}
                    </slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
        value: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
		listStyle: null,
        disabled: Boolean,
        dataKey: null,
        multiple: Boolean,
        metaKeySelection: Boolean,
        filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String
    },
    optionTouched: false,
    data() {
        return {
            filterValue: null
        };
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
        onOptionSelect(event, option) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            if(this.multiple)
                this.onOptionSelectMultiple(event, option);
            else
                this.onOptionSelectSingle(event, option);

            this.optionTouched = false;
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
            let valueChanged = false;
            let value = null;
            let metaSelection = this.optionTouched ? false : this.metaKeySelection;

            if (metaSelection) {
                let metaKey = (event.metaKey || event.ctrlKey);

                if (selected) {
                    if(metaKey)
                        value = this.removeOption(option);
                    else
                        value = [this.getOptionValue(option)];

                    valueChanged = true;
                }
                else {
                    value = (metaKey) ? this.value || [] : [];
                    value = [...value, this.getOptionValue(option)];
                    valueChanged = true;
                }
            }
            else {
                if (selected)
                    value = this.removeOption(option);
                else
                    value = [...this.value || [], this.getOptionValue(option)];

                valueChanged = true;
            }

            if(valueChanged) {
                this.updateModel(event, value);
            }
        },
        isSelected(option) {
            let selected = false;
            let optionValue = this.getOptionValue(option);

            if (this.multiple) {
                if (this.value) {
                    for (let val of this.value) {
                        if (ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                            selected = true;
                            break;
                        }
                    }
                }
            }
            else {
                selected = ObjectUtils.equals(this.value, optionValue, this.equalityKey);
            }

            return selected;
        },
        removeOption(option) {
            return this.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey));
        },
        updateModel(event, value) {
            this.$emit('input', value);
            this.$emit('change', {originalEvent: event, value: value});
        },
        onOptionKeyDown(event, option) {
            let item = event.currentTarget;

            switch (event.which) {
                //down
                case 40:
                    var nextItem = this.findNextItem(item);
                    if(nextItem) {
                        nextItem.focus();
                    }

                    event.preventDefault();
                break;

                //up
                case 38:
                    var prevItem = this.findPrevItem(item);
                    if(prevItem) {
                        prevItem.focus();
                    }

                    event.preventDefault();
                break;

                //enter
                case 13:
                    this.onOptionSelect(event, option);
                    event.preventDefault();
                break;
            }
        },
        findNextItem(item) {
            let nextItem = item.nextElementSibling;

            if (nextItem)
                return DomHandler.hasClass(nextItem, 'p-disabled') ? this.findNextOption(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-disabled') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        }
    },
    computed: {
        visibleOptions() {
            if (this.filterValue)
                return this.options.filter(option => this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).indexOf(this.filterValue.toLocaleLowerCase(this.filterLocale)) > -1);
            else
                return this.options;
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        }
    }
}
</script>

<style>
.p-listbox {
    padding: .25em;
    width: 10em;
}

.p-listbox .p-listbox-list-wrapper {
    overflow:auto;
}

.p-listbox .p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.p-listbox .p-listbox-item {
    padding: .25em;
    border: 0 none;
    cursor: pointer;
    font-weight: normal;
    margin-bottom: 1px;
}

.p-listbox .p-listbox-item > span {
    vertical-align: middle;
}

.p-listbox .p-listbox-item:last-child {
    margin-bottom: 0;
}

.p-listbox.p-disabled .p-listbox-item {
    cursor: default;
}

.p-listbox-header {
    margin-bottom: 0.3em;
    padding: .125em .2em;
    position: relative;
}

.p-listbox-header .p-checkbox {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

.p-listbox-header .p-listbox-filter-container {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 100%;
}

.p-listbox-header.p-listbox-header-w-checkbox .p-listbox-filter-container {
    width: calc(100% - 2em);
}

.p-listbox-header .p-listbox-filter-container .p-listbox-filter-icon {
    position: absolute;
    top: .25em;
    left: .25em;
}

.p-listbox-header .p-inputtext {
    padding: .125em .125em .125em 1.25em;
    width: 100%;
}
</style>
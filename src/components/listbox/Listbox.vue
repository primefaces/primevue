<template>
    <div class="p-listbox p-component">
        <slot name="header" :value="modelValue" :options="visibleOptions"></slot>
        <div class="p-listbox-header" v-if="filter">
            <div class="p-listbox-filter-container">
                <input type="text" class="p-listbox-filter p-inputtext p-component" v-model="filterValue" :placeholder="filterPlaceholder" @input="onFilterChange">
                <span class="p-listbox-filter-icon pi pi-search"></span>
            </div>
        </div>
        <div class="p-listbox-list-wrapper" :style="listStyle">
            <VirtualScroller :ref="virtualScrollerRef" v-bind="virtualScrollerOptions" :style="listStyle" :items="visibleOptions" :disabled="virtualScrollerDisabled">
                <template v-slot:content="{ styleClass, contentRef, items, getItemOptions }">
                    <ul :ref="contentRef" :class="['p-listbox-list', styleClass]" role="listbox" aria-multiselectable="multiple">
                        <template v-if="!optionGroupLabel">
                            <li v-for="(option, i) of items" :tabindex="isOptionDisabled(option) ? null : '0'" :class="['p-listbox-item', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option)}]" v-ripple
                                :key="getOptionRenderKey(option)" @click="onOptionSelect($event, option)" @touchend="onOptionTouchEnd()" @keydown="onOptionKeyDown($event, option)" role="option" :aria-label="getOptionLabel(option)" :aria-selected="isSelected(option)" >
                                <slot name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{getOptionLabel(option)}} </slot>
                            </li>
                        </template>
                        <template v-else>
                            <template v-for="(optionGroup, i) of items" :key="getOptionGroupRenderKey(optionGroup)">
                                <li  class="p-listbox-item-group">
                                    <slot name="optiongroup" :option="optionGroup" :index="getOptionIndex(i, getItemOptions)">{{getOptionGroupLabel(optionGroup)}}</slot>
                                </li>
                                <li v-for="(option, i) of getOptionGroupChildren(optionGroup)" :tabindex="isOptionDisabled(option) ? null : '0'" :class="['p-listbox-item', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option)}]" v-ripple
                                    :key="getOptionRenderKey(option)" @click="onOptionSelect($event, option)" @touchend="onOptionTouchEnd()" @keydown="onOptionKeyDown($event, option)" role="option" :aria-label="getOptionLabel(option)" :aria-selected="isSelected(option)" >
                                    <slot name="option" :option="option" :index="getOptionIndex(i, getItemOptions)">{{getOptionLabel(option)}}</slot>
                                </li>
                            </template>
                        </template>
                        <li v-if="filterValue && (!items || (items && items.length === 0))" class="p-listbox-empty-message">
                            <slot name="emptyfilter">{{emptyFilterMessageText}}</slot>
                        </li>
                        <li v-else-if="(!options || (options && options.length === 0))" class="p-listbox-empty-message">
                            <slot name="empty">{{emptyMessageText}}</slot>
                        </li>
                    </ul>
                </template>
                <template v-slot:loader="{ options }" v-if="$slots.loader">
                    <slot name="loader" :options="options"></slot>
                </template>
            </VirtualScroller>
        </div>
        <slot name="footer" :value="modelValue" :options="visibleOptions"></slot>
    </div>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';
import {DomHandler} from 'primevue/utils';
import {FilterService} from 'primevue/api';
import Ripple from 'primevue/ripple';
import VirtualScroller from 'primevue/virtualscroller';

export default {
    name: 'Listbox',
    emits: ['update:modelValue', 'change', 'filter'],
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
		listStyle: null,
        disabled: Boolean,
        dataKey: null,
        multiple: Boolean,
        metaKeySelection: Boolean,
        filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String,
        filterMatchMode: {
            type: String,
            default: 'contains'
        },
        filterFields: {
            type: Array,
            default: null
        },
        emptyFilterMessage: {
            type: String,
            default: null
        },
        emptyMessage: {
            type: String,
            default: null
        },
        virtualScrollerOptions: {
            type: Object,
            default: null
        }
    },
    optionTouched: false,
    virtualScroller: null,
    data() {
        return {
            filterValue: null
        };
    },
    methods: {
        getOptionIndex(index, fn) {
            return this.virtualScrollerDisabled ? index : (fn && fn(index)['index']);
        },
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
        getOptionGroupRenderKey(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
        },
        getOptionGroupLabel(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
        },
        getOptionGroupChildren(optionGroup) {
            return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
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
                    value = (metaKey) ? this.modelValue || [] : [];
                    value = [...value, this.getOptionValue(option)];
                    valueChanged = true;
                }
            }
            else {
                if (selected)
                    value = this.removeOption(option);
                else
                    value = [...this.modelValue || [], this.getOptionValue(option)];

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
                if (this.modelValue) {
                    for (let val of this.modelValue) {
                        if (ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                            selected = true;
                            break;
                        }
                    }
                }
            }
            else {
                selected = ObjectUtils.equals(this.modelValue, optionValue, this.equalityKey);
            }

            return selected;
        },
        removeOption(option) {
            return this.modelValue.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey));
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
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
                return DomHandler.hasClass(nextItem, 'p-disabled') || DomHandler.hasClass(nextItem, 'p-listbox-item-group') ? this.findNextItem(nextItem) : nextItem;
            else
                return null;
        },
        findPrevItem(item) {
            let prevItem = item.previousElementSibling;

            if (prevItem)
                return DomHandler.hasClass(prevItem, 'p-disabled') || DomHandler.hasClass(prevItem, 'p-listbox-item-group') ? this.findPrevItem(prevItem) : prevItem;
            else
                return null;
        },
        onFilterChange(event) {
            this.$emit('filter', {originalEvent: event, value: event.target.value});
        },
        virtualScrollerRef(el) {
            this.virtualScroller = el;
        }
    },
    computed: {
        visibleOptions() {
            if (this.filterValue) {
                if (this.optionGroupLabel) {
                    let filteredGroups = [];
                    for (let optgroup of this.options) {
                        let filteredSubOptions = FilterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
                        if (filteredSubOptions && filteredSubOptions.length) {
                            filteredGroups.push({...optgroup, ...{items: filteredSubOptions}});
                        }
                    }
                    return filteredGroups
                }
                else {
                    return FilterService.filter(this.options, this.searchFields, this.filterValue, 'contains', this.filterLocale);
                }
            }
            else {
                return this.options;
            }
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        },
        searchFields() {
            return this.filterFields || [this.optionLabel];
        },
        emptyFilterMessageText() {
            return this.emptyFilterMessage || this.$primevue.config.locale.emptyFilterMessage;
        },
        emptyMessageText() {
            return this.emptyMessage || this.$primevue.config.locale.emptyMessage;
        },
        virtualScrollerDisabled() {
            return !this.virtualScrollerOptions;
        }
    },
    directives: {
        'ripple': Ripple
    },
    components: {
        'VirtualScroller': VirtualScroller
    }
}
</script>

<style>
.p-listbox-list-wrapper {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.p-listbox-item {
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.p-listbox-item-group {
    cursor: auto;
}

.p-listbox-filter-container {
    position: relative;
}

.p-listbox-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}

.p-listbox-filter {
    width: 100%;
}
</style>

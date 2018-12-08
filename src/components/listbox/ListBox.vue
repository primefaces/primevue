<template>
    <div class="p-listbox p-inputtext p-component">
        <div class="p-listbox-list-wrapper">
            <ul class="p-listbox-list">
                <li v-for="option of options" tabindex="0" :class="['p-listbox-item', {'p-highlight': isSelected(option)}]" 
                    :key="getOptionLabel(option)" @click="onOptionClick($event, option)" @touchend="onOptionTouchEnd()">
                    {{getOptionLabel(option)}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';

export default {
    props: {
        value: null,
        options: Array,
        disabled: Boolean,
        dataKey: null,
        multiple: Boolean,
        metaKeySelection: Boolean,
        filter: Boolean,
        optionLabel: null,
        optionValue: null
    },
    optionTouched: false,
    methods: {
        getOptionLabel(option) {
            return ObjectUtils.resolveFieldData(option, this.optionLabel);
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        onOptionClick(event, option) {
            if (this.disabled) {
                return;
            }
            
            if(this.multiple)
                this.onOptionClickMultiple(event, option);
            else
                this.onOptionClickSingle(event, option);
                
            this.optionTouched = false;
        },
        onOptionTouchEnd() {
            if (this.disabled) {
                return;
            }
        
            this.optionTouched = true;
        },
        onOptionClickSingle(event, option) {
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
        onOptionClickMultiple(event, option) {        
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
                        if (ObjectUtils.equals(val, optionValue, this.dataKey)) {
                            selected = true;
                            break;
                        }
                    }
                }
            }
            else {
                selected = ObjectUtils.equals(this.value, optionValue, this.dataKey);
            }

            return selected;
        },
        removeOption(option) {
            return this.value.filter(val => !ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
        },
        updateModel(event, value) {
            this.$emit('input', value);
            this.$emit('change', {originalEvent: event, value: value});
        }
    }
}
</script>
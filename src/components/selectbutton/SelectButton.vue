<template>
    <div class="p-selectbutton p-buttonset p-component p-buttonset">
    <div v-for="(option, i) of options" :key="getOptionLabel(option)" :aria-label="getOptionLabel(option)"  
            @click="onOptionSelect($event, option, i)" @keydown.enter.prevent="onOptionSelect($event, option, i)" @keydown.space.prevent="onOptionSelect($event, option, i)"
            :tabindex="isOptionDisabled(option) ? null : '0'" @focus="onFocus($event, i)" @blur="onBlur($event)"
            :class="['p-button p-component p-button-text-only', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option), 'p-focus': (i === focusedIndex)}]">
            <slot :option="option" :index="i">
                <span class="p-button-text p-c">{{getOptionLabel(option)}}</span>
            </slot>
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
        name: String,
        multiple: Boolean,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null
    },
    data() {
        return {
            focusedIndex: null
        };
    },
    methods: {
        getOptionLabel(option) {
            return ObjectUtils.resolveFieldData(option, this.optionLabel);
        },
        getOptionValue(option) {
            return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
        },
        isOptionDisabled(option) {
            return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
        },
        onOptionSelect(event, option, index) {
            if (this.disabled || this.isOptionDisabled(option)) {
                return;
            }

            let selected = this.isSelected(option);
            let optionValue = this.getOptionValue(option);
            let newValue;
            
            if(this.multiple) {
                if (selected)
                    newValue = this.value.filter(val => !ObjectUtils.equals(val, optionValue, this.dataKey));
                else
                    newValue = this.value ? [...this.value, optionValue]: [optionValue];
            }
            else {
                newValue = selected ? null : optionValue;
            }

            this.$emit('input', newValue);
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
        onFocus(event, index) {
            this.focusedIndex = index;
            this.$emit('focus', event);
        },
        onBlur() {
            this.focusedIndex = null
            this.$emit('blur', event);
        }
    }
}
</script>
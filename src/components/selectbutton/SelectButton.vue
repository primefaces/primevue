<template>
    <div :class="containerClass" role="group">
        <div v-for="(option, i) of options" :key="getOptionRenderKey(option)" :aria-label="getOptionLabel(option)" role="button" :aria-pressed="isSelected(option)"
            @click="onOptionSelect($event, option, i)" @keydown.enter.prevent="onOptionSelect($event, option, i)" @keydown.space.prevent="onOptionSelect($event, option)"
            :tabindex="isOptionDisabled(option) ? null : '0'" @focus="onFocus($event, i)" @blur="onBlur($event)" :aria-labelledby="ariaLabelledBy"
            :class="['p-button p-component p-button-text-only', {'p-highlight': isSelected(option), 'p-disabled': isOptionDisabled(option), 'p-focus': (i === focusedIndex)}]">
            <slot name="option" :option="option" :index="i">
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
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
		multiple: Boolean,
        disabled: Boolean,
        dataKey: null,
        ariaLabelledBy: null
    },
    data() {
        return {
            focusedIndex: null
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

            let selected = this.isSelected(option);
            let optionValue = this.getOptionValue(option);
            let newValue;

            if(this.multiple) {
                if (selected)
                    newValue = this.value.filter(val => !ObjectUtils.equals(val, optionValue, this.equalityKey));
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
        onFocus(event, index) {
            this.focusedIndex = index;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focusedIndex = null
            this.$emit('blur', event);
        }
    },
	computed: {
		containerClass() {
			return 'p-selectbutton p-buttonset p-component p-buttonset-' + String(this.options ? this.options.length : 0);
        },
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        }
	}
}
</script>
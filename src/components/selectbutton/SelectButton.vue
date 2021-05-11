<template>
    <div class="p-selectbutton p-buttonset p-component" role="group">
        <div v-for="(option, i) of options" :key="getOptionRenderKey(option)" :aria-label="getOptionLabel(option)" role="button" :aria-pressed="isSelected(option)"
            @click="onOptionSelect($event, option, i)" @keydown.enter.prevent="onOptionSelect($event, option, i)" @keydown.space.prevent="onOptionSelect($event, option)"
            :tabindex="isOptionDisabled(option) ? null : '0'" @focus="onFocus($event)" @blur="onBlur($event)" :aria-labelledby="ariaLabelledBy" v-ripple
            :class="getButtonClass(option)">
            <slot name="option" :option="option" :index="i">
                <span class="p-button-label">{{getOptionLabel(option)}}</span>
            </slot>
        </div>
    </div>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'SelectButton',
    emits: ['update:modelValue', 'focus', 'blur'],
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
		multiple: Boolean,
        disabled: Boolean,
        dataKey: null,
        ariaLabelledBy: null
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
                    newValue = this.modelValue.filter(val => !ObjectUtils.equals(val, optionValue, this.equalityKey));
                else
                    newValue = this.modelValue ? [...this.modelValue, optionValue]: [optionValue];
            }
            else {
                newValue = optionValue;
            }

            this.$emit('update:modelValue', newValue);
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
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        },
        getButtonClass(option) {
            return ['p-button p-component', {
                'p-highlight': this.isSelected(option),
                'p-disabled': this.isOptionDisabled(option)
            }];
        }
    },
	computed: {
        equalityKey() {
            return this.optionValue ? null : this.dataKey;
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

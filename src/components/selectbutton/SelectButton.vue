<template>
    <div :class="containerClass" role="group">
        <div v-for="(option, i) of options" :key="getOptionRenderKey(option)" :aria-label="getOptionLabel(option)" role="button" :aria-pressed="isSelected(option)"
            :class="getButtonClass(option)" :tabindex="isOptionDisabled(option) ? null : '0'" v-ripple
            @click="onOptionSelect($event, option)" @keydown="onKeydown($event, option)" @focus="onFocus($event)" @blur="onBlur($event)">
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
    emits: ['update:modelValue', 'focus', 'blur', 'change'],
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
		multiple: Boolean,
        disabled: Boolean,
        dataKey: null
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
                newValue = selected ? null : optionValue;
            }

            this.$emit('update:modelValue', newValue);
            this.$emit('change', {event: event, value: newValue});
        },
        onKeydown(event, option) {
            //space
            if (event.which === 32) {
                this.onOptionSelect(event, option);
                event.preventDefault();
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
        containerClass() {
            return ['p-selectbutton p-buttonset p-component', {
                'p-disabled': this.disabled
            }];
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

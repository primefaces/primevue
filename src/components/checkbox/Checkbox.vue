<template>
    <div :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input :id="inputId" ref="input" type="checkbox" :value="value" :class="inputClass" :style="inputStyle" :name="name" :checked="checked" :tabindex="tabindex" :disabled="disabled" :readonly="readonly" :required="required" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel"
                @focus="onFocus($event)" @blur="onBlur($event)" v-bind="inputProps">
        </div>
        <div ref="box" :class="['p-checkbox-box', {'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}]">
            <span :class="['p-checkbox-icon', {'pi pi-check': checked}]"></span>
        </div>
    </div>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';

export default {
    name: 'Checkbox',
    emits: ['click', 'update:modelValue', 'change', 'input', 'focus', 'blur'],
    props: {
        value: null,
        modelValue: null,
        binary: Boolean,
        name: {
            type: String,
            default: null
        },
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                }
                else {
                    if (this.checked)
                        newModelValue = this.modelValue.filter(val => !ObjectUtils.equals(val, this.value));
                    else
                        newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$emit('input', newModelValue);
                this.$refs.input.focus();
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        checked() {
            return this.binary ? this.modelValue === this.trueValue : ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return [
                'p-checkbox p-component', {
                    'p-checkbox-checked': this.checked,
                    'p-checkbox-disabled': this.disabled,
                    'p-checkbox-focused': this.focused
                }];
        }
    }
}
</script>

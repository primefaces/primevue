<template>
    <div :class="containerClass" @click="onClick($event)" v-bind="ptm('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input
                ref="input"
                :id="inputId"
                type="radio"
                :class="inputClass"
                :style="inputStyle"
                :name="name"
                :checked="checked"
                :disabled="disabled"
                :value="value"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @focus="onFocus"
                @blur="onBlur"
                v-bind="ptm('hiddenInput')"
            />
        </div>
        <div ref="box" :class="['p-radiobutton-box', { 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }]" v-bind="{ ...inputProps, ...ptm('input') }">
            <div class="p-radiobutton-icon" v-bind="ptm('icon')"></div>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'RadioButton',
    extends: BaseComponent,
    emits: ['click', 'update:modelValue', 'change', 'focus', 'blur'],
    props: {
        value: null,
        modelValue: null,
        name: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
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
        };
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('click', event);
                this.$emit('update:modelValue', this.value);
                this.$refs.input.focus();

                if (!this.checked) {
                    this.$emit('change', event);
                }
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
            return this.modelValue != null && ObjectUtils.equals(this.modelValue, this.value);
        },
        containerClass() {
            return [
                'p-radiobutton p-component',
                {
                    'p-radiobutton-checked': this.checked,
                    'p-radiobutton-disabled': this.disabled,
                    'p-radiobutton-focused': this.focused
                }
            ];
        }
    }
};
</script>

<template>
    <div :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="input" type="radio" :id="inputId" :checked="checked" :value="value" @focus="onFocus" @blur="onBlur" v-bind="inputProps">
        </div>
        <div ref="box" :class="['p-radiobutton-box', {'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}]">
            <div class="p-radiobutton-icon"></div>
        </div>
    </div>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';

export default {
    name: 'RadioButton',
    emits: ['click', 'update:modelValue', 'change', 'focus', 'blur'],
    props: {
		value: null,
        modelValue: null,
        disabled: {
            type: Boolean,
            default: false
        },
        inputId: {
            type: String,
            default: null
        },
        inputProps: {
            type: Object,
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
                'p-radiobutton p-component', {
                    'p-radiobutton-checked': this.checked,
                    'p-radiobutton-disabled': this.disabled,
                    'p-radiobutton-focused': this.focused
                }];
        }
    }
}
</script>

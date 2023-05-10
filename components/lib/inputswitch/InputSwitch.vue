<template>
    <div :class="containerClass" @click="onClick($event)" v-bind="ptm('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input
                ref="input"
                :id="inputId"
                type="checkbox"
                role="switch"
                :class="inputClass"
                :style="inputStyle"
                :checked="checked"
                :disabled="disabled"
                :aria-checked="checked"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="ptm('hiddenInput')"
            />
        </div>
        <span class="p-inputswitch-slider" v-bind="{ ...inputProps, ...ptm('slider') }"></span>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'InputSwitch',
    extends: BaseComponent,
    emits: ['click', 'update:modelValue', 'change', 'input', 'focus', 'blur'],
    props: {
        modelValue: {
            type: null,
            default: false
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
                const newValue = this.checked ? this.falseValue : this.trueValue;

                this.$emit('click', event);
                this.$emit('update:modelValue', newValue);
                this.$emit('change', event);
                this.$emit('input', newValue);
                this.$refs.input.focus();
            }

            event.preventDefault();
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
        containerClass() {
            return [
                'p-inputswitch p-component',
                {
                    'p-inputswitch-checked': this.checked,
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        checked() {
            return this.modelValue === this.trueValue;
        }
    }
};
</script>

<style>
.p-inputswitch {
    position: relative;
    display: inline-block;
}

.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
}

.p-inputswitch-slider:before {
    position: absolute;
    content: '';
    top: 50%;
}
</style>

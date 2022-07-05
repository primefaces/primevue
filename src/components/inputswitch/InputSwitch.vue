<template>
    <div :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input :id="inputId" ref="input" type="checkbox" role="switch" :checked="checked" :disabled="disabled"
                @focus="onFocus($event)" @blur="onBlur($event)" v-bind="inputProps">
        </div>
        <span class="p-inputswitch-slider"></span>
    </div>
</template>

<script>
export default {
    name: 'InputSwitch',
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
        inputId: null,
        inputProps: null
    },
    data() {
        return {
            focused: false
        }
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
}
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
}

.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
}
</style>

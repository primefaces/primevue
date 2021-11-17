<template>
    <div :class="containerClass" @click="onClick($event)" :style="style">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :checked="checked" v-bind="$attrs" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.enter.prevent="onClick($event)"
                role="switch" :aria-checked="checked">
        </div>
        <span class="p-inputswitch-slider"></span>
    </div>
</template>

<script>
export default {
    name: 'InputSwitch',
    inheritAttrs: false,
    emits: ['click', 'update:modelValue', 'change', 'input'],
    props: {
        modelValue: {
            type: null,
            default: false
        },
        class: null,
        style: null,
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        }
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                const newValue = this.checked ? this.falseValue : this.trueValue;
                this.$emit('click', event);
                this.$emit('update:modelValue', newValue);
                this.$emit('change', event);
                this.$emit('input', newValue);
                this.$refs.input.focus();
            }
            event.preventDefault();
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    },
    computed: {
        containerClass() {
            return [
                'p-inputswitch p-component', this.class,
                {
                    'p-inputswitch-checked': this.checked,
					'p-disabled': this.$attrs.disabled,
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

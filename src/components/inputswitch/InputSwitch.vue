<template>
    <div :class="containerClass" @click="onClick($event)" :style="style">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :checked="modelValue" v-bind="$attrs" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.enter.prevent="onClick($event)"
                role="switch" :aria-checked="modelValue">
        </div>
        <span class="p-inputswitch-slider"></span>
    </div>
</template>

<script>
export default {
    name: 'InputSwitch',
    inheritAttrs: false,
    emits: ['update:modelValue', 'click', 'change'],
    props: {
        modelValue: Boolean,
        class: null,
        style: null
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                this.$emit('click', event);
                this.$emit('update:modelValue', !this.modelValue);
                this.$emit('change', event);
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
                    'p-inputswitch-checked': this.modelValue,
					'p-disabled': this.$attrs.disabled,
                    'p-focus': this.focused
                }
            ];
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

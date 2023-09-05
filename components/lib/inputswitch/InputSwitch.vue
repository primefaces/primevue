<template>
    <div :class="cx('root')" :style="sx('root')" @click="onClick($event)" v-bind="ptm('root')" data-pc-name="inputswitch">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')" :data-p-hidden-accessible="true">
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
                v-bind="{ ...inputProps, ...ptm('hiddenInput') }"
            />
        </div>
        <span :class="cx('slider')" v-bind="ptm('slider')"></span>
    </div>
</template>

<script>
import BaseInputSwitch from './BaseInputSwitch.vue';

export default {
    name: 'InputSwitch',
    extends: BaseInputSwitch,
    emits: ['click', 'update:modelValue', 'change', 'input', 'focus', 'blur'],
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
            return this.modelValue === this.trueValue;
        }
    }
};
</script>

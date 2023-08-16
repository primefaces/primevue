<template>
    <div :class="cx('root')" @click="onClick($event)" v-bind="ptm('root')" data-pc-name="radiobutton">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')" :data-p-hidden-accessible="true">
            <input ref="input" :id="inputId" type="radio" :name="name" :checked="checked" :disabled="disabled" :value="value" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" @focus="onFocus" @blur="onBlur" v-bind="ptm('hiddenInput')" />
        </div>
        <div ref="box" :class="[cx('input'), inputClass]" :style="inputStyle" v-bind="{ ...inputProps, ...ptm('input') }" :data-p-highlight="checked" :data-p-disabled="disabled" :data-p-focused="focused">
            <div :class="cx('icon')" v-bind="ptm('icon')"></div>
        </div>
    </div>
</template>

<script>
import { ObjectUtils } from 'primevue/utils';
import BaseRadioButton from './BaseRadioButton.vue';

export default {
    name: 'RadioButton',
    extends: BaseRadioButton,
    emits: ['click', 'update:modelValue', 'change', 'focus', 'blur'],
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
        }
    }
};
</script>

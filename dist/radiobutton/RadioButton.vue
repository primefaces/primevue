<template>
   <div :class="containerClass" @click="onClick($event)" :style="style">
       <div class="p-hidden-accessible">
           <input ref="input" type="radio" :checked="checked" :value="value" v-bind="$attrs" @focus="onFocus" @blur="onBlur">
        </div>
        <div ref="box" :class="['p-radiobutton-box', {'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="radio" :aria-checked="checked">
            <div class="p-radiobutton-icon"></div>
        </div>
    </div>
</template>

<script>
import {ObjectUtils} from 'primevue/utils';

export default {
    name: 'RadioButton',
    inheritAttrs: false,
    emits: ['click', 'update:modelValue', 'change'],
    props: {
		value: null,
        modelValue: null,
        class: null,
        style: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                this.$emit('click', event);
                this.$emit('update:modelValue', this.value);
                this.$refs.input.focus();

                if (!this.checked) {
                    this.$emit('change', event);
                }
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    },
    computed: {
        checked() {
            return this.modelValue != null && ObjectUtils.equals(this.modelValue, this.value);
        },
        containerClass() {
            return ['p-radiobutton p-component', this.class, {'p-radiobutton-checked': this.checked, 'p-radiobutton-disabled': this.$attrs.disabled, 'p-radiobutton-focused': this.focused}];
        }
    }
}
</script>

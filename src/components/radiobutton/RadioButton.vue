<template>
   <div :class="containerClass" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" type="radio" :checked="checked" :value="value" v-bind="$attrs" @focus="onFocus($event)" @blur="onBlur($event)">
        </div>
        <div ref="box" :class="['p-radiobutton-box', {'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="radio" :aria-checked="checked">
            <div class="p-radiobutton-icon"></div>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';

export default {
    inheritAttrs: false,
    props: {
		value: null,
        modelValue: null
    },
    model: {
        prop: 'modelValue',
        event: 'input'
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
                this.$emit('input', this.value);
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
            return ['p-radiobutton p-component', {'p-radiobutton-checked': this.checked, 'p-radiobutton-disabled': this.$attrs.disabled, 'p-radiobutton-focused': this.focused}];
        }
    }
}
</script>
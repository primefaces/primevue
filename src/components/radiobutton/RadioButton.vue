<template>
   <div class="p-radiobutton p-component" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" type="radio" :checked="checked" :value="value" v-bind="$attrs" @focus="onFocus($event)" @blur="onBlur($event)" :aria-labelledby="ariaLabelledBy">
        </div>
        <div ref="box" :class="['p-radiobutton-box p-component', {'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="radio" :aria-checked="checked">
            <span :class="['p-radiobutton-icon p-c', {'pi pi-circle-on': checked}]"></span>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';

export default {
    inheritAttrs: false,
    props: {
		value: null,
        modelValue: null,
        ariaLabelledBy: null
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
        }
    }
}
</script>
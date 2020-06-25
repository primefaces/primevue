<template>
   <div :class="containerClass" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" type="checkbox" :checked="checked" :value="value" v-bind="$attrs" @focus="onFocus($event)" @blur="onBlur($event)">
        </div>
        <div ref="box" :class="['p-checkbox-box', {'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="checkbox" :aria-checked="checked">
            <span :class="['p-checkbox-icon', {'pi pi-check': checked}]"></span>
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
        binary: Boolean
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
                let newModelValue;

                if (this.binary) {
                    newModelValue = !this.modelValue;
                }
                else {
                    if (this.checked)
                        newModelValue = this.modelValue.filter(val => !ObjectUtils.equals(val, this.value));
                    else
                        newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('input', newModelValue);
                this.$emit('change', event);
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
            return this.binary ? this.modelValue : ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return ['p-checkbox p-component', {'p-checkbox-checked': this.checked, 'p-checkbox-disabled': this.$attrs.disabled, 'p-checkbox-focused': this.focused}];
        }
    }
}
</script>
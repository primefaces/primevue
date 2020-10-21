<template>
   <div :class="containerClass" @click="onClick($event)" :style="style">
       <div class="p-hidden-accessible">
           <input ref="input" type="checkbox" :checked="checked" :value="value" v-bind="$attrs" @focus="onFocus" @blur="onBlur">
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
    emits: ['click', 'update:modelValue', 'change'],
    props: {
        value: null,
        modelValue: null,
        binary: Boolean,
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
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$refs.input.focus();
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
            return this.binary ? this.modelValue : ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return ['p-checkbox p-component', this.class, {'p-checkbox-checked': this.checked, 'p-checkbox-disabled': this.$attrs.disabled, 'p-checkbox-focused': this.focused}];
        }
    }
}
</script>
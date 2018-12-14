<template>
   <div class="p-checkbox p-component" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" :id="inputId" type="checkbox" :name="name" :checked="checked" :disabled="disabled" @focus="onFocus()" @blur="onBlur()"
                    :autocomplete="autocomplete" :autofocus="autofocus">
        </div>
        <div ref="box" :class="['p-checkbox-box p-component', {'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}]">
            <span :class="['p-checkbox-icon p-c', {'pi pi-check': checked}]"></span>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';

export default {
    props: {
         value: null,
         modelValue: null,
         name: String,
         inputId: String,
         autofocus: Boolean,
         autocomplete: String,
         disabled: Boolean
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
            if (!this.disabled) {
                let newModelValue;
                
                if (this.checked)
                    newModelValue = this.modelValue.filter(val => !ObjectUtils.equals(val, this.value));
                else
                    newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value]; 
                    
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
        onBlur() {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        checked() {
            return this.modelValue != null && ObjectUtils.contains(this.value, this.modelValue);
        }
    }
}
</script>
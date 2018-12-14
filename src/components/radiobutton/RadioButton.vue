<template>
   <div class="p-radiobutton p-component" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" :id="inputId" type="radio" :name="name" :checked="checked" :disabled="disabled" @focus="onFocus()" @blur="onBlur()"
                    :autocomplete="autocomplete" :autofocus="autofocus">
        </div>
        <div ref="box" :class="['p-radiobutton-box p-component', {'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}]">
            <span :class="['p-radiobutton-icon p-c', {'pi pi-circle-on': checked}]"></span>
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
                this.$emit('click', event);
                this.$emit('input', this.value);
                this.$refs.input.focus();
                this.focused = true;

                if (!this.checked) {
                    this.$emit('change', event);
                }
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
            return this.modelValue != null && ObjectUtils.equals(this.modelValue, this.value);
        }
    }
}
</script>

<style>
.p-radiobutton-box {
    transition: background-color 0.2s, border-color 0.2s, box-shadow .2s !important;
}
    
.p-radiobutton-box.p-focus {
    box-shadow: 0 0 0 0.2em #8dcdff;
}
</style>

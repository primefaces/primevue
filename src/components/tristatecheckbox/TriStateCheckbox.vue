<template>
   <div class="p-checkbox p-component" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" :id="inputId" type="checkbox" :name="name" :checked="value === true" :disabled="disabled" @focus="onFocus()" @blur="onBlur()"
                    :autocomplete="autocomplete" :autofocus="autofocus">
        </div>
        <div ref="box" :class="['p-checkbox-box p-component', {'p-highlight': (value != null), 'p-disabled': disabled, 'p-focus': focused}]">
            <span :class="['p-checkbox-icon p-c', icon]"></span>
        </div>
    </div>
</template>

<script>
import ObjectUtils from '../utils/ObjectUtils';

export default {
    props: {
         value: null,
         name: String,
         inputId: String,
         autofocus: Boolean,
         autocomplete: String,
         disabled: Boolean
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                let newValue;

                switch (this.value) {
                    case true:
                        newValue = false;
                    break;

                    case false:
                        newValue = null;
                    break;

                    case null:
                        newValue = true;
                    break;
                }

                this.$emit('click', event);
                this.$emit('input', newValue);
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
        icon() {
            let icon;
            switch (this.value) {
                case true:
                    icon = 'pi pi-check';
                break;

                case false:
                    icon = 'pi pi-times';
                break;

                case null:
                    icon = null;
                break;
            }

            return icon;
        }
    }
}
</script>
<template>
   <div :class="containerClass" @click="onClick($event)" :style="style">
       <div class="p-hidden-accessible">
           <input ref="input" type="checkbox" :checked="modelValue === true" v-bind="$attrs" @focus="onFocus()" @blur="onBlur()">
        </div>
        <div ref="box" :class="['p-checkbox-box', {'p-highlight': (modelValue != null), 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="checkbox" :aria-checked="modelValue === true">
            <span :class="['p-checkbox-icon', icon]"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TriStateCheckbox',
    inheritAttrs: false,
    emits: ['click', 'update:modelValue', 'change'],
    props: {
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
                let newValue;

                switch (this.modelValue) {
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
                this.$emit('update:modelValue', newValue);
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
        icon() {
            let icon;
            switch (this.modelValue) {
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
        },
        containerClass() {
            return ['p-checkbox p-component', this.class, {'p-checkbox-checked': this.modelValue === true, 'p-checkbox-disabled': this.$attrs.disabled, 'p-checkbox-focused': this.focused}];
        }
    }
}
</script>

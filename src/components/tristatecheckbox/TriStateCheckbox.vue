<template>
   <div class="p-checkbox p-component" @click="onClick($event)">
       <div class="p-hidden-accessible">
           <input ref="input" type="checkbox" :checked="value === true" v-bind="$attrs" @focus="onFocus()" @blur="onBlur()" :aria-labelledby="ariaLabelledBy">
        </div>
        <div ref="box" :class="['p-checkbox-box', {'p-highlight': (value != null), 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="checkbox" :aria-checked="value === true">
            <span :class="['p-checkbox-icon', icon]"></span>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: null,
        ariaLabelledBy: String
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
        onBlur(event) {
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
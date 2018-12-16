<template>
    <div :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :id="inputId" :name="name" :checked="value" :disabled="disabled" 
                @focus="onFocus($event)" @blur="onBlur($event)" @keydown.enter.prevent="onClick($event)">
        </div>
        <span class="p-inputswitch-slider"></span>
    </div>
</template>

<script>
export default {
    props: {
        value: Boolean,
        inputId: String,
        name: String,
        disabled: Boolean
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('click', event);
                this.$emit('input', !this.value);
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
        containerClass() {
            return [
                'p-inputswitch p-component',
                {
                    'p-inputswitch-checked': this.value,
                    'p-inputswitch-focus': this.focused
                }
            ];
        }
    }
}
</script>
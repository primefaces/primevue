<template>
    <div class="p-radiobutton p-component" @click="onClick">
        <div class="p-hidden-accessible">
           <input ref="input" type="radio" :checked="checked" @focus="onFocus($event)" @blur="onBlur($event)" :disabled="disabled">
        </div>
        <div ref="box" :class="['p-radiobutton-box p-component', {'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused}]" role="radio" :aria-checked="checked">
            <span :class="['p-radiobutton-icon p-c', {'pi pi-circle-on': checked}]"></span>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
		value: null,
        disabled: null,
        checked: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                if (!this.checked) {
                    this.$emit('change', {
                        originalEvent: event,
                        data: this.value
                    });
                }

                this.$refs.input.focus();
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    }
}
</script>
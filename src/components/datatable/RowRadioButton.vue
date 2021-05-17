<template>
    <div class="p-radiobutton p-component" @click="onClick" tabindex="0" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.space.prevent="onClick">
        <div ref="box" :class="['p-radiobutton-box p-component', {'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused}]" role="radio" :aria-checked="checked">
            <div class="p-radiobutton-icon"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RowRadioButton',
    inheritAttrs: false,
    emits: ['change'],
    props: {
		value: null,
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

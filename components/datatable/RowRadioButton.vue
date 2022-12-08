<template>
    <div :class="['p-radiobutton p-component', { 'p-radiobutton-focused': focused }]" @click="onClick">
        <div class="p-hidden-accessible">
            <input ref="input" type="radio" :checked="checked" :disabled="$attrs.disabled" :name="name" tabindex="0" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.space.prevent="onClick" />
        </div>
        <div ref="box" :class="['p-radiobutton-box p-component', { 'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused }]">
            <div class="p-radiobutton-icon"></div>
        </div>
    </div>
</template>

<script>
import { DomHandler } from 'primevue/utils';

export default {
    name: 'RowRadioButton',
    inheritAttrs: false,
    emits: ['change'],
    props: {
        value: null,
        checked: null,
        name: null
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

                    DomHandler.focus(this.$refs.input);
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
};
</script>

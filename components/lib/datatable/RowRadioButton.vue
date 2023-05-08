<template>
    <div :class="['p-radiobutton p-component', { 'p-radiobutton-focused': focused }]" @click="onClick" v-bind="ptm('radiobuttonWrapper')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input ref="input" type="radio" :checked="checked" :disabled="$attrs.disabled" :name="name" tabindex="0" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.space.prevent="onClick" v-bind="ptm('hiddenInput')" />
        </div>
        <div ref="box" :class="['p-radiobutton-box p-component', { 'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused }]" v-bind="ptm('radiobutton')">
            <div class="p-radiobutton-icon" v-bind="ptm('radiobuttonIcon')"></div>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'RowRadioButton',
    extends: BaseComponent,
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
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    checked: this.checked,
                    focused: this.focused,
                    disabled: this.$attrs.disabled
                }
            });
        },
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

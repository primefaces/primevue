<template>
    <div :class="['p-radiobutton p-component', { 'p-radiobutton-focused': focused }]" @click="onClick" v-bind="getColumnPTOptions('radiobuttonWrapper')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input ref="input" type="radio" :checked="checked" :disabled="$attrs.disabled" :name="name" tabindex="0" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.space.prevent="onClick" v-bind="getColumnPTOptions('hiddenInput')" />
        </div>
        <div ref="box" :class="['p-radiobutton-box p-component', { 'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused }]" v-bind="getColumnPTOptions('radiobutton')">
            <div class="p-radiobutton-icon" v-bind="getColumnPTOptions('radiobuttonIcon')"></div>
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
        name: null,
        column: null
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        getColumnPTOptions(key) {
            return this.ptmo(this.getColumnProp(), key, {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    checked: this.checked,
                    focused: this.focused,
                    disabled: this.$attrs.disabled
                }
            });
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
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

<template>
    <div :class="cx('radiobuttonWrapper')" @click="onClick" v-bind="getColumnPT('radiobuttonWrapper')">
        <div class="p-hidden-accessible" v-bind="getColumnPT('hiddenInputWrapper')" :data-p-hidden-accessible="true">
            <input ref="input" type="radio" :checked="checked" :disabled="$attrs.disabled" :name="name" tabindex="0" @focus="onFocus($event)" @blur="onBlur($event)" @keydown.space.prevent="onClick" v-bind="getColumnPT('hiddenInput')" />
        </div>
        <div ref="box" :class="cx('radiobutton')" v-bind="getColumnPT('radiobutton')">
            <div :class="cx('radiobuttonIcon')" v-bind="getColumnPT('radiobuttonIcon')"></div>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { DomHandler } from 'primevue/utils';
import { mergeProps } from 'vue';

export default {
    name: 'RowRadioButton',
    hostName: 'DataTable',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['change'],
    props: {
        value: null,
        checked: null,
        name: null,
        column: null,
        index: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            focused: false
        };
    },
    methods: {
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    checked: this.checked,
                    focused: this.focused,
                    disabled: this.$attrs.disabled
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
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

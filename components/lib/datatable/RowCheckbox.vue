<template>
    <div :class="cx('checkboxWrapper')" @click="onClick" v-bind="getColumnPTOptions('checkboxWrapper')">
        <div :class="cx('hiddenInputWrapper')" :style="sx('hiddenAccessible', isUnstyled)" v-bind="getColumnPTOptions('hiddenInputWrapper')" :data-p-hidden-accessible="true">
            <input
                ref="input"
                type="checkbox"
                :checked="checked"
                :disabled="$attrs.disabled"
                :tabindex="$attrs.disabled ? null : '0'"
                :aria-label="checkboxAriaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                @keydown="onKeydown"
                v-bind="getColumnPTOptions('hiddenInput')"
            />
        </div>
        <div ref="box" :class="cx('checkbox')" v-bind="getColumnPTOptions('checkbox')">
            <component v-if="rowCheckboxIconTemplate" :is="rowCheckboxIconTemplate" :checked="checked" :class="cx('checkboxIcon')" />
            <CheckIcon v-else-if="!rowCheckboxIconTemplate && !!checked" :class="cx('checkboxIcon')" v-bind="getColumnPTOptions('checkboxIcon')" />
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'RowCheckbox',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        value: null,
        checked: null,
        column: null,
        rowCheckboxIconTemplate: {
            type: Function,
            default: null
        }
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
            if (!this.$attrs.disabled) {
                this.$emit('change', {
                    originalEvent: event,
                    data: this.value
                });

                DomHandler.focus(this.$refs.input);
            }

            event.preventDefault();
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        onKeydown(event) {
            switch (event.code) {
                case 'Space': {
                    this.onClick(event);

                    break;
                }

                default:
                    break;
            }
        }
    },
    computed: {
        checkboxAriaLabel() {
            return this.$primevue.config.locale.aria ? (this.checked ? this.$primevue.config.locale.aria.selectRow : this.$primevue.config.locale.aria.unselectRow) : undefined;
        }
    },
    components: {
        CheckIcon: CheckIcon
    }
};
</script>

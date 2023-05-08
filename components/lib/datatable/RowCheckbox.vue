<template>
    <div :class="['p-checkbox p-component', { 'p-checkbox-focused': focused }]" @click="onClick" v-bind="ptm('checkboxWrapper')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
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
                v-bind="ptm('hiddenInput')"
            />
        </div>
        <div ref="box" :class="['p-checkbox-box p-component', { 'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused }]" v-bind="getPTOptions('checkbox')">
            <component v-if="rowCheckboxIconTemplate" :is="rowCheckboxIconTemplate" :checked="checked" class="p-checkbox-icon" />
            <CheckIcon v-else class="p-checkbox-icon" v-bind="getPTOptions('checkboxIcon')" />
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

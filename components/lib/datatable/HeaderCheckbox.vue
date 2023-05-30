<template>
    <div :class="['p-checkbox p-component', { 'p-checkbox-focused': focused, 'p-disabled': disabled }]" @click="onClick" @keydown.space.prevent="onClick" v-bind="getColumnPTOptions('headerCheckboxWrapper')">
        <div class="p-hidden-accessible" v-bind="getColumnPTOptions('hiddenHeaderInputWrapper')">
            <input
                ref="input"
                type="checkbox"
                :checked="checked"
                :disabled="disabled"
                :tabindex="disabled ? null : '0'"
                :aria-label="headerCheckboxAriaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="getColumnPTOptions('hiddenHeaderInput')"
            />
        </div>
        <div ref="box" :class="['p-checkbox-box p-component', { 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }]" v-bind="getColumnPTOptions('headerCheckbox')">
            <component v-if="headerCheckboxIconTemplate" :is="headerCheckboxIconTemplate" :checked="checked" class="p-checkbox-icon" />
            <CheckIcon v-else-if="!headerCheckboxIconTemplate && !!checked" class="p-checkbox-icon" v-bind="getColumnPTOptions('headerCheckboxIcon')" />
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'HeaderCheckbox',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        checked: null,
        disabled: null,
        column: null,
        headerCheckboxIconTemplate: {
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
                    disabled: this.disabled
                }
            });
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
        },
        onClick(event) {
            if (!this.disabled) {
                this.$emit('change', {
                    originalEvent: event,
                    checked: !this.checked
                });

                DomHandler.focus(this.$refs.input);
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        }
    },
    computed: {
        headerCheckboxAriaLabel() {
            return this.$primevue.config.locale.aria ? (this.checked ? this.$primevue.config.locale.aria.selectAll : this.$primevue.config.locale.aria.unselectAll) : undefined;
        }
    },
    components: {
        CheckIcon: CheckIcon
    }
};
</script>

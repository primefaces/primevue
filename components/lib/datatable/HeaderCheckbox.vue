<template>
    <div :class="cx('headerCheckboxWrapper')" @click="onClick" @keydown.space.prevent="onClick" v-bind="getColumnPT('headerCheckboxWrapper')">
        <div class="p-hidden-accessible" v-bind="getColumnPT('hiddenHeaderInputWrapper')" :data-p-hidden-accessible="true">
            <input
                ref="input"
                type="checkbox"
                :checked="checked"
                :disabled="disabled"
                :tabindex="disabled ? null : '0'"
                :aria-label="headerCheckboxAriaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="getColumnPT('hiddenHeaderInput')"
            />
        </div>
        <div ref="box" :class="cx('headerCheckbox')" v-bind="getColumnPT('headerCheckbox')">
            <component v-if="headerCheckboxIconTemplate" :is="headerCheckboxIconTemplate" :checked="checked" :class="cx('headerCheckboxIcon')" />
            <CheckIcon v-else-if="!headerCheckboxIconTemplate && !!checked" :class="cx('headerCheckboxIcon')" v-bind="getColumnPT('headerCheckboxIcon')" />
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import { DomHandler } from 'primevue/utils';
import { mergeProps } from 'vue';

export default {
    name: 'HeaderCheckbox',
    hostName: 'DataTable',
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
        getColumnPT(key) {
            const columnMetaData = {
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
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
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

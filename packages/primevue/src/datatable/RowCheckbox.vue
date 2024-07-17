<template>
    <Checkbox :modelValue="checked" :binary="true" :disabled="$attrs.disabled" :aria-label="checkboxAriaLabel" @change="onChange" :unstyled="unstyled" :pt="getColumnPT('pcRowCheckbox')">
        <template #icon="slotProps">
            <component v-if="rowCheckboxIconTemplate" :is="rowCheckboxIconTemplate" :checked="slotProps.checked" :class="slotProps.class" />
            <CheckIcon v-else-if="!rowCheckboxIconTemplate && slotProps.checked" :class="slotProps.class" v-bind="getColumnPT('pcRowCheckbox')['icon']" />
        </template>
    </Checkbox>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import CheckIcon from '@primevue/icons/check';
import Checkbox from 'primevue/checkbox';
import { mergeProps } from 'vue';

export default {
    name: 'RowCheckbox',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        value: null,
        checked: null,
        column: null,
        rowCheckboxIconTemplate: {
            type: Function,
            default: null
        },
        index: {
            type: Number,
            default: null
        }
    },
    methods: {
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index,
                    checked: this.checked,
                    disabled: this.$attrs.disabled
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
        },
        onChange(event) {
            if (!this.$attrs.disabled) {
                this.$emit('change', {
                    originalEvent: event,
                    data: this.value
                });
            }
        }
    },
    computed: {
        checkboxAriaLabel() {
            return this.$primevue.config.locale.aria ? (this.checked ? this.$primevue.config.locale.aria.selectRow : this.$primevue.config.locale.aria.unselectRow) : undefined;
        }
    },
    components: {
        CheckIcon,
        Checkbox
    }
};
</script>

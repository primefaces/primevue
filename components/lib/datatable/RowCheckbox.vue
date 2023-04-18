<template>
    <div :class="['p-checkbox p-component', { 'p-checkbox-focused': focused }]" @click="onClick">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :checked="checked" :disabled="$attrs.disabled" :tabindex="$attrs.disabled ? null : '0'" :aria-label="checkboxAriaLabel" @focus="onFocus($event)" @blur="onBlur($event)" @keydown="onKeydown" />
        </div>
        <div ref="box" :class="['p-checkbox-box p-component', { 'p-highlight': checked, 'p-disabled': $attrs.disabled, 'p-focus': focused }]">
            <component v-if="rowCheckboxIconTemplate" :is="rowCheckboxIconTemplate" :checked="checked" class="p-checkbox-icon" />
            <CheckIcon v-else class="p-checkbox-icon" />
        </div>
    </div>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'RowCheckbox',
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

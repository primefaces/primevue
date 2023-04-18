<template>
    <div :class="['p-checkbox p-component', { 'p-checkbox-focused': focused, 'p-disabled': disabled }]" @click="onClick" @keydown.space.prevent="onClick">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :checked="checked" :disabled="disabled" :tabindex="disabled ? null : '0'" :aria-label="headerCheckboxAriaLabel" @focus="onFocus($event)" @blur="onBlur($event)" />
        </div>
        <div ref="box" :class="['p-checkbox-box p-component', { 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }]">
            <component v-if="headerCheckboxIconTemplate" :is="headerCheckboxIconTemplate" :checked="checked" class="p-checkbox-icon" />
            <CheckIcon v-else class="p-checkbox-icon" />
        </div>
    </div>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import { DomHandler } from 'primevue/utils';

export default {
    name: 'HeaderCheckbox',
    emits: ['change'],
    props: {
        checked: null,
        disabled: null,
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

<template>
    <div :class="containerClass" @click="onClick($event)" v-bind="ptm('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input
                ref="input"
                :id="inputId"
                type="checkbox"
                :checked="modelValue === true"
                :tabindex="tabindex"
                :disabled="disabled"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @keydown="onKeyDown($event)"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="{ ...inputProps, ...ptm('hiddenInput') }"
            />
        </div>
        <span class="p-sr-only" aria-live="polite" v-bind="ptm('srOnlyAria')">{{ ariaValueLabel }}</span>
        <div ref="box" :class="['p-checkbox-box', { 'p-highlight': modelValue != null, 'p-disabled': disabled, 'p-focus': focused }]" v-bind="getPTOptions('checbox')">
            <slot v-if="modelValue === true" name="checkicon">
                <component :is="'CheckIcon'" class="p-checkbox-icon" v-bind="ptm('checkIcon')" />
            </slot>
            <slot v-else-if="modelValue === false" name="uncheckicon">
                <component :is="'TimesIcon'" class="p-checkbox-icon" v-bind="ptm('uncheckIcon')" />
            </slot>
            <slot v-else name="nullableicon">
                <span class="p-checkbox-icon" v-bind="ptm('nullableIcon')"></span>
            </slot>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import TimesIcon from 'primevue/icons/times';

export default {
    name: 'TriStateCheckbox',
    extends: BaseComponent,
    emits: ['click', 'update:modelValue', 'change', 'keydown', 'focus', 'blur'],
    props: {
        modelValue: null,
        inputId: {
            type: String,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
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
                    active: this.modelValue !== null,
                    focused: this.focused,
                    disabled: this.disabled
                }
            });
        },
        updateModel() {
            if (!this.disabled) {
                let newValue;

                switch (this.modelValue) {
                    case true:
                        newValue = false;
                        break;

                    case false:
                        newValue = null;
                        break;

                    default:
                        newValue = true;
                        break;
                }

                this.$emit('update:modelValue', newValue);
            }
        },
        onClick(event) {
            this.updateModel();
            this.$emit('click', event);
            this.$emit('change', event);
            this.$refs.input.focus();
        },
        onKeyDown(event) {
            if (event.code === 'Enter') {
                this.updateModel();
                this.$emit('keydown', event);
                event.preventDefault();
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        containerClass() {
            return [
                'p-checkbox p-component',
                {
                    'p-checkbox-checked': this.modelValue === true,
                    'p-checkbox-disabled': this.disabled,
                    'p-checkbox-focused': this.focused
                }
            ];
        },
        ariaValueLabel() {
            return this.modelValue ? this.$primevue.config.locale.aria.trueLabel : this.modelValue === false ? this.$primevue.config.locale.aria.falseLabel : this.$primevue.config.locale.aria.nullLabel;
        }
    },
    components: {
        CheckIcon: CheckIcon,
        TimesIcon: TimesIcon
    }
};
</script>

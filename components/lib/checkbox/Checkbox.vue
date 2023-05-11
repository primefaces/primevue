<template>
    <div :class="containerClass" @click="onClick($event)" v-bind="ptm('root')">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input
                ref="input"
                :id="inputId"
                type="checkbox"
                :value="value"
                :name="name"
                :checked="checked"
                :tabindex="tabindex"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="ptm('hiddenInput')"
            />
        </div>
        <div ref="box" :class="['p-checkbox-box', inputClass, { 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }]" :style="inputStyle" v-bind="{ ...inputProps, ...ptm('input') }">
            <slot name="icon" :checked="checked">
                <component :is="checked ? 'CheckIcon' : null" class="p-checkbox-icon" v-bind="ptm('icon')" />
            </slot>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import CheckIcon from 'primevue/icons/check';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'Checkbox',
    extends: BaseComponent,
    emits: ['click', 'update:modelValue', 'change', 'input', 'focus', 'blur'],
    props: {
        value: null,
        modelValue: null,
        binary: Boolean,
        name: {
            type: String,
            default: null
        },
        trueValue: {
            type: null,
            default: true
        },
        falseValue: {
            type: null,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        inputProps: {
            type: null,
            default: null
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
        onClick(event) {
            if (!this.disabled && !this.readonly) {
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                } else {
                    if (this.checked) newModelValue = this.modelValue.filter((val) => !ObjectUtils.equals(val, this.value));
                    else newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$emit('input', newModelValue);
                this.$refs.input.focus();
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
        checked() {
            return this.binary ? this.modelValue === this.trueValue : ObjectUtils.contains(this.value, this.modelValue);
        },
        containerClass() {
            return [
                'p-checkbox p-component',
                {
                    'p-checkbox-checked': this.checked,
                    'p-checkbox-disabled': this.disabled,
                    'p-checkbox-focused': this.focused
                }
            ];
        }
    },
    components: {
        CheckIcon: CheckIcon
    }
};
</script>

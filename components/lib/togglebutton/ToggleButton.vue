<template>
    <div ref="container" v-ripple :class="buttonClass" @click="onClick($event)" v-bind="ptm('root')">
        <span class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')">
            <input
                :id="inputId"
                type="checkbox"
                role="switch"
                :class="inputClass"
                :style="inputStyle"
                :checked="modelValue"
                :value="modelValue"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="{ ...inputProps, ...ptm('hiddenInput') }"
            />
        </span>
        <slot name="icon" :value="modelValue" :class="iconClass">
            <span v-if="onIcon || offIcon" :class="iconClass" v-bind="ptm('icon')" />
        </slot>
        <span class="p-button-label" v-bind="ptm('label')">{{ label }}</span>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Ripple from 'primevue/ripple';

export default {
    name: 'ToggleButton',
    extends: BaseComponent,
    emits: ['update:modelValue', 'change', 'click', 'focus', 'blur'],
    props: {
        modelValue: Boolean,
        onIcon: String,
        offIcon: String,
        onLabel: {
            type: String,
            default: 'Yes'
        },
        offLabel: {
            type: String,
            default: 'No'
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        disabled: {
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
    outsideClickListener: null,
    data() {
        return {
            focused: false
        };
    },
    mounted() {
        this.bindOutsideClickListener();
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
                this.$emit('change', event);
                this.$emit('click', event);
                this.focused = true;
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.focused && !this.$refs.container.contains(event.target)) {
                        this.focused = false;
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        }
    },
    computed: {
        buttonClass() {
            return [
                'p-button p-togglebutton p-component',
                {
                    'p-focus': this.focused,
                    'p-button-icon-only': this.hasIcon && !this.hasLabel,
                    'p-disabled': this.disabled,
                    'p-highlight': this.modelValue === true
                }
            ];
        },
        iconClass() {
            return [
                this.modelValue ? this.onIcon : this.offIcon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label
                }
            ];
        },
        hasLabel() {
            return this.onLabel && this.onLabel.length > 0 && this.offLabel && this.offLabel.length > 0;
        },
        hasIcon() {
            return this.$slots.icon || (this.onIcon && this.offIcon);
        },
        label() {
            return this.hasLabel ? (this.modelValue ? this.onLabel : this.offLabel) : '&nbsp;';
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>

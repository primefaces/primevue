<template>
    <div :class="buttonClass" @click="onClick($event)" v-ripple>
        <span class="p-hidden-accessible">
            <input type="checkbox" role="switch" :id="inputId" :class="inputClass" :style="inputStyle" :checked="modelValue" :value="modelValue" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel"
                @focus="onFocus($event)" @blur="onBlur($event)" v-bind="inputProps">
        </span>
        <span v-if="hasIcon" :class="iconClass"></span>
        <span class="p-button-label">{{label}}</span>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';

export default {
    name: 'ToggleButton',
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
        inputId: null,
        inputClass: null,
        inputStyle: null,
        inputProps: null,
        'aria-labelledby': {
            type: String,
			default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
                this.$emit('change', event);
                this.$emit('click', event);
            }
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-togglebutton p-component': true,
                'p-button-icon-only': this.hasIcon && !this.hasLabel,
                'p-disabled': this.disabled,
                'p-highlight': this.modelValue === true
            }
        },
        iconClass() {
            return [
                this.modelValue ? this.onIcon: this.offIcon,
                'p-button-icon',
                {
                    'p-button-icon-left': this.iconPos === 'left' && this.label,
                    'p-button-icon-right': this.iconPos === 'right' && this.label
                }
            ]
        },
        hasLabel() {
            return this.onLabel && this.onLabel.length > 0 && this.offLabel && this.offLabel.length > 0;
        },
        hasIcon() {
            return this.onIcon && this.onIcon.length > 0 && this.offIcon && this.offIcon.length > 0;
        },
        label() {
            return this.hasLabel ? (this.modelValue ? this.onLabel : this.offLabel): '&nbsp;';
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
<template>
    <div :class="buttonClass" role="button" :tabindex="tabindex" :aria-pressed="modelValue" v-ripple
        @click="onClick($event)" @keydown="onKeyDown($event)" @focus="onFocus($event)" @blur="onBlur($event)">
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
            default: 0
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
        onKeyDown(event) {
            //space
            if (event.keyCode === 32) {
                this.onClick(event);
                event.preventDefault();
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

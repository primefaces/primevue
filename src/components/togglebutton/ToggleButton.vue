<template>
    <div :class="buttonClass" @click="onClick($event)" role="checkbox" :aria-labelledby="ariaLabelledBy" :aria-checked="value" :tabindex="$attrs.disabled ? null : '0'" v-ripple>
        <span v-if="hasIcon" :class="iconClass"></span>
        <span class="p-button-label">{{label}}</span>
    </div>
</template>

<script>
import Ripple from '../ripple/Ripple';

export default {
    props: {
        value: Boolean,
		onIcon: String,
		offIcon: String,
        onLabel: String,
        offLabel: String,
        iconPos: {
            type: String,
            default: 'left'
        },
        ariaLabelledBy: String
    },
    methods: {
        onClick(event) {
            if (!this.$attrs.disabled) {
                this.$emit('click', event);
                this.$emit('input', !this.value);
                this.$emit('change', event);
            }
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-togglebutton p-component': true,
                'p-button-icon-only': this.hasIcon && !this.hasLabel,
                'p-disabled': this.$attrs.disabled,
                'p-highlight': this.value === true
            }
        },
        iconClass() {
            return [
                this.value ? this.onIcon: this.offIcon,
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
            return this.hasLabel ? (this.value ? this.onLabel : this.offLabel): '&nbsp;';
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
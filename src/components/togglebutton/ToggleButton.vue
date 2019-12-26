<template>
    <div :class="buttonClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input ref="input" type="checkbox" :id="inputId" :name="name" :checked="value" :disabled="disabled"
                @focus="onFocus($event)" @blur="onBlur($event)" @keydown.enter.prevent="onClick($event)" role="button" :aria-pressed="value" :aria-labelledby="ariaLabelledBy">
        </div>
        <span v-if="hasIcon" :class="iconClass"></span>
        <span class="p-button-text p-unselectable-text p-c">{{label}}</span>
    </div>
</template>

<script>
export default {
    props: {
        value: Boolean,
		onIcon: String,
		offIcon: String,
        onLabel: String,
        offLabel: String,
        inputId: String,
        name: String,
        iconPos: {
            type: String,
            default: 'left'
        },
        disabled: Boolean,
        ariaLabelledBy: String
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('click', event);
                this.$emit('input', !this.value);
                this.$emit('change', event);
                this.$refs.input.focus();
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur() {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        buttonClass() {
            return {
                'p-button p-togglebutton p-component': true,
                'p-button-icon-only': this.hasIcon && !this.hasLabel,
                'p-button-text-icon-left': this.hasIcon && this.hasLabel && this.iconPos === 'left',
                'p-button-text-icon-right': this.hasIcon && this.hasLabel && this.iconPos === 'right',
                'p-button-text-only': !this.hasIcon && this.hasLabel,
                'p-disabled': this.disabled,
                'p-focus': this.focused,
                'p-highlight': this.value === true
            }
        },
        iconClass() {
            return [
                this.value ? this.onIcon: this.offIcon,
                {
                    'p-button-icon-left': this.iconPos === 'left',
                    'p-button-icon-right': this.iconPos === 'right'
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
            return this.hasLabel ? (this.value ? this.onLabel : this.offLabel): 'p-btn';
        }
    }
}
</script>
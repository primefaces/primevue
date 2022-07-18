<template>
    <div :class="containerClass" @click="onClick($event)">
        <div class="p-hidden-accessible">
            <input :id="inputId" ref="input" type="checkbox" :checked="modelValue === true" :tabindex="tabindex" :disabled="disabled" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel"
                @keydown="onKeyDown($event)" @focus="onFocus($event)" @blur="onBlur($event)" v-bind="inputProps" >
        </div>
        <span class="p-sr-only" aria-live="polite">{{ariaValueLabel}}</span>
        <div ref="box" :class="['p-checkbox-box', {'p-highlight': (modelValue != null), 'p-disabled': disabled, 'p-focus': focused}]" >
            <span :class="['p-checkbox-icon', icon]"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TriStateCheckbox',
    emits: ['click', 'update:modelValue', 'change', 'keydown', 'focus', 'blur'],
    props: {
        modelValue: null,
        inputId: null,
        inputProps: null,
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

                    case null:
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
        icon() {
            let icon;
            switch (this.modelValue) {
                case true:
                    icon = 'pi pi-check';
                break;

                case false:
                    icon = 'pi pi-times';
                break;

                case null:
                    icon = null;
                break;
            }

            return icon;
        },
        containerClass() {
            return [
                'p-checkbox p-component', {
                    'p-checkbox-checked': this.modelValue === true,
                    'p-checkbox-disabled': this.disabled,
                    'p-checkbox-focused': this.focused
            }];
        },
        ariaValueLabel() {
            return this.modelValue ? this.$primevue.config.locale.aria.trueLabel : (this.modelValue === false ? this.$primevue.config.locale.aria.falseLabel : this.$primevue.config.locale.aria.nullLabel);
        }
    }
}
</script>

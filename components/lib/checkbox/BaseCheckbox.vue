<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': instance.checked,
            'p-checkbox-disabled': props.disabled,
            'p-checkbox-focused': instance.focused
        }
    ],
    input: ({ instance, props }) => [
        'p-checkbox-box',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    icon: 'p-checkbox-icon'
};

export default {
    name: 'BaseCheckbox',
    extends: BaseComponent,
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
    css: {
        classes
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

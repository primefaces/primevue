<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance, props }) => [
        'p-radiobutton p-component',
        {
            'p-radiobutton-checked': instance.checked,
            'p-radiobutton-disabled': props.disabled,
            'p-radiobutton-focused': instance.focused
        }
    ],
    input: ({ instance, props }) => [
        'p-radiobutton-box',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    icon: 'p-radiobutton-icon'
};

export default {
    name: 'BaseRadioButton',
    extends: BaseComponent,
    props: {
        value: null,
        modelValue: null,
        name: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
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

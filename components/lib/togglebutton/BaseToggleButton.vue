<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance, props }) => [
        'p-button p-togglebutton p-component',
        {
            'p-focus': instance.focused,
            'p-button-icon-only': instance.hasIcon && !instance.hasLabel,
            'p-disabled': props.disabled,
            'p-highlight': props.modelValue === true
        }
    ],
    icon: ({ instance, props }) => [
        'p-button-icon',
        {
            'p-button-icon-left': props.iconPos === 'left' && instance.label,
            'p-button-icon-right': props.iconPos === 'right' && instance.label
        }
    ],
    label: 'p-button-label'
};

export default {
    name: 'BaseToggleButton',
    extends: BaseComponent,
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

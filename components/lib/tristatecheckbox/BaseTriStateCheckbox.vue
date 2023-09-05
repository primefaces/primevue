<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': props.modelValue === true,
            'p-checkbox-disabled': props.disabled,
            'p-checkbox-focused': instance.focused
        }
    ],
    checkbox: ({ instance, props }) => [
        'p-checkbox-box',
        {
            'p-highlight': props.modelValue != null,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    checkIcon: 'p-checkbox-icon',
    uncheckIcon: 'p-checkbox-icon',
    nullableIcon: 'p-checkbox-icon'
};

export default {
    name: 'BaseTriStateCheckbox',
    extends: BaseComponent,
    props: {
        modelValue: null,
        inputId: {
            type: String,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
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

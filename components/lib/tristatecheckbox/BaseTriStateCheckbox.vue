<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = ``;

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': props.modelValue === true,
            'p-checkbox-disabled': props.disabled,
            'p-checkbox-focused': instance.focused
        }
    ],
    hiddenInputWrapper: 'p-hidden-accessible',
    srOnlyAria: 'p-sr-only',
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

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { id: 'primevue_tristatecheckbox_style', manual: true });

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
    watch: {
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                !newValue && loadStyle();
            }
        }
    }
};
</script>

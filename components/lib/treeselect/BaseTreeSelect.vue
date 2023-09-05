<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
}

.p-treeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-treeselect .p-treeselect-panel {
    min-width: 100%;
}

.p-treeselect-items-wrapper {
    overflow: auto;
}

.p-fluid .p-treeselect {
    display: flex;
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-treeselect p-component p-inputwrapper',
        {
            'p-treeselect-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': !instance.emptyValue,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible
        }
    ],
    labelContainer: 'p-treeselect-label-container',
    label: ({ instance, props }) => [
        'p-treeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
        }
    ],
    token: 'p-treeselect-token',
    tokenLabel: 'p-treeselect-token-label',
    trigger: 'p-treeselect-trigger',
    triggerIcon: 'p-treeselect-trigger-icon',
    panel: ({ instance }) => [
        'p-treeselect-panel p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    wrapper: 'p-treeselect-items-wrapper',
    emptyMessage: 'p-treeselect-empty-message'
};

const { load: loadStyle } = useStyle(styles, { name: 'treeselect', manual: true });

export default {
    name: 'BaseTreeSelect',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        scrollHeight: {
            type: String,
            default: '400px'
        },
        placeholder: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        selectionMode: {
            type: String,
            default: 'single'
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        emptyMessage: {
            type: String,
            default: null
        },
        display: {
            type: String,
            default: 'comma'
        },
        metaKeySelection: {
            type: Boolean,
            default: true
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
        panelClass: {
            type: [String, Object],
            default: null
        },
        panelProps: {
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
        classes,
        inlineStyles,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

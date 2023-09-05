<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-inputnumber {
    display: inline-flex;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    flex: 1 1 auto;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-inputnumber p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled,
            'p-inputwrapper-focus': instance.focused,
            'p-inputnumber-buttons-stacked': props.showButtons && props.buttonLayout === 'stacked',
            'p-inputnumber-buttons-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
            'p-inputnumber-buttons-vertical': props.showButtons && props.buttonLayout === 'vertical'
        }
    ],
    input: 'p-inputnumber-input',
    buttonGroup: 'p-inputnumber-button-group',
    incrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-button-up',
        {
            'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
        }
    ],
    decrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-button-down',
        {
            'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
        }
    ]
};

const { load: loadStyle } = useStyle(styles, { name: 'inputnumber', manual: true });

export default {
    name: 'BaseInputNumber',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        format: {
            type: Boolean,
            default: true
        },
        showButtons: {
            type: Boolean,
            default: false
        },
        buttonLayout: {
            type: String,
            default: 'stacked'
        },
        incrementButtonClass: {
            type: String,
            default: null
        },
        decrementButtonClass: {
            type: String,
            default: null
        },
        incrementButtonIcon: {
            type: String,
            default: undefined
        },
        decrementButtonIcon: {
            type: String,
            default: undefined
        },
        locale: {
            type: String,
            default: undefined
        },
        localeMatcher: {
            type: String,
            default: undefined
        },
        mode: {
            type: String,
            default: 'decimal'
        },
        prefix: {
            type: String,
            default: null
        },
        suffix: {
            type: String,
            default: null
        },
        currency: {
            type: String,
            default: undefined
        },
        currencyDisplay: {
            type: String,
            default: undefined
        },
        useGrouping: {
            type: Boolean,
            default: true
        },
        minFractionDigits: {
            type: Number,
            default: undefined
        },
        maxFractionDigits: {
            type: Number,
            default: undefined
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        step: {
            type: Number,
            default: 1
        },
        allowEmpty: {
            type: Boolean,
            default: true
        },
        highlightOnFocus: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
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
        incrementButtonProps: {
            type: null,
            default: null
        },
        decrementButtonProps: {
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
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

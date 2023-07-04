<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';
import { ObjectUtils } from 'primevue/utils';

const styles = `
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-autocomplete-dd .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-autocomplete-dd .p-autocomplete-dropdown {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0px;
}

.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}

.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
}

.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-autocomplete-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-autocomplete-token-icon {
    cursor: pointer;
}

.p-autocomplete-input-token {
    flex: 1 1 auto;
    display: inline-flex;
}

.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
}

.p-fluid .p-autocomplete {
    display: flex;
}

.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
`;

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-autocomplete p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-focus': instance.focused,
            'p-autocomplete-dd': props.dropdown,
            'p-autocomplete-multiple': props.multiple,
            'p-inputwrapper-filled': props.modelValue || ObjectUtils.isNotEmpty(instance.inputValue),
            'p-inputwrapper-focus': instance.focused,
            'p-overlay-open': instance.overlayVisible
        }
    ],
    input: ({ props }) => ['p-autocomplete-input p-inputtext p-component', { 'p-autocomplete-dd-input': props.dropdown }],
    container: 'p-autocomplete-multiple-container p-component p-inputtext',
    token: ({ instance, i }) => ['p-autocomplete-token', { 'p-focus': instance.focusedMultipleOptionIndex === i }],
    tokenLabel: 'p-autocomplete-token-label',
    removeTokenIcon: 'p-autocomplete-token-icon',
    inputToken: 'p-autocomplete-input-token',
    loadingIcon: 'p-autocomplete-loader',
    dropdownButton: 'p-autocomplete-dropdown',
    panel: ({ instance }) => [
        'p-autocomplete-panel p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    list: 'p-autocomplete-items',
    itemGroup: 'p-autocomplete-item-group',
    item: ({ instance, option, i, getItemOptions }) => [
        'p-autocomplete-item',
        {
            'p-highlight': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    emptyMessage: 'p-autocomplete-empty-message'
};

const { load: loadStyle } = useStyle(styles, { name: 'autocomplete', manual: true });

export default {
    name: 'BaseAutoComplete',
    extends: BaseComponent,
    props: {
        modelValue: null,
        suggestions: {
            type: Array,
            default: null
        },
        field: {
            // TODO: Deprecated since v3.16.0
            type: [String, Function],
            default: null
        },
        optionLabel: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        dropdown: {
            type: Boolean,
            default: false
        },
        dropdownMode: {
            type: String,
            default: 'blank'
        },
        autoHighlight: {
            // TODO: Deprecated since v3.16.0. Use selectOnFocus property instead.
            type: Boolean,
            default: false
        },
        multiple: {
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
        dataKey: {
            type: String,
            default: null
        },
        minLength: {
            type: Number,
            default: 1
        },
        delay: {
            type: Number,
            default: 300
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        forceSelection: {
            type: Boolean,
            default: false
        },
        completeOnFocus: {
            type: Boolean,
            default: false
        },
        inputId: {
            type: String,
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        panelStyle: {
            type: Object,
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
        dropdownIcon: {
            type: String,
            default: undefined
        },
        dropdownClass: {
            type: [String, Object],
            default: null
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        removeTokenIcon: {
            type: String,
            default: undefined
        },
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        searchLocale: {
            type: String,
            default: undefined
        },
        searchMessage: {
            type: String,
            default: null
        },
        selectionMessage: {
            type: String,
            default: null
        },
        emptySelectionMessage: {
            type: String,
            default: null
        },
        emptySearchMessage: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-label': {
            type: String,
            default: null
        },
        'aria-labelledby': {
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

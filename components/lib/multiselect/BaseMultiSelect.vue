<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
}

.p-multiselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect-token {
    cursor: default;
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.p-multiselect-token-icon {
    cursor: pointer;
}

.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}

.p-multiselect-items-wrapper {
    overflow: auto;
}

.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-multiselect-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-multiselect-item-group {
    cursor: auto;
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-multiselect-filter-container {
    position: relative;
    flex: 1 1 auto;
}

.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-multiselect-filter-container .p-inputtext {
    width: 100%;
}

.p-multiselect-close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    position: relative;
    margin-left: auto;
}

.p-fluid .p-multiselect {
    display: flex;
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-multiselect p-component p-inputwrapper',
        {
            'p-multiselect-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue && props.modelValue.length,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-overlay-open': instance.overlayVisible
        }
    ],
    labelContainer: 'p-multiselect-label-container',
    label: ({ instance, props }) => [
        'p-multiselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
        }
    ],
    token: 'p-multiselect-token',
    tokenLabel: 'p-multiselect-token-label',
    removeTokenIcon: 'p-multiselect-token-icon',
    trigger: 'p-multiselect-trigger',
    loadingIcon: 'p-multiselect-trigger-icon',
    dropdownIcon: 'p-multiselect-trigger-icon',
    panel: ({ instance }) => [
        'p-multiselect-panel p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    header: 'p-multiselect-header',
    headerCheckboxContainer: ({ instance }) => [
        'p-checkbox p-component',
        {
            'p-checkbox-checked': instance.allSelected,
            'p-checkbox-focused': instance.headerCheckboxFocused
        }
    ],
    headerCheckbox: ({ instance }) => [
        'p-checkbox-box',
        {
            'p-highlight': instance.allSelected,
            'p-focus': instance.headerCheckboxFocused
        }
    ],
    headerCheckboxIcon: 'p-checkbox-icon',
    filterContainer: 'p-multiselect-filter-container',
    filterInput: 'p-multiselect-filter p-inputtext p-component',
    filterIcon: 'p-multiselect-filter-icon',
    closeButton: 'p-multiselect-close p-link',
    closeIcon: 'p-multiselect-close-icon',
    wrapper: 'p-multiselect-items-wrapper',
    list: 'p-multiselect-items p-component',
    itemGroup: 'p-multiselect-item-group',
    item: ({ instance, option, index, getItemOptions }) => [
        'p-multiselect-item',
        {
            'p-highlight': instance.isSelected(option),
            'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    checkboxContainer: 'p-checkbox p-component',
    checkbox: ({ instance, option }) => ['p-checkbox-box', { 'p-highlight': instance.isSelected(option) }],
    checkboxIcon: 'p-checkbox-icon',
    emptyMessage: 'p-multiselect-empty-message'
};

const { load: loadStyle } = useStyle(styles, { name: 'multiselect', manual: true });

export default {
    name: 'BaseMultiSelect',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '200px'
        },
        placeholder: String,
        disabled: Boolean,
        inputId: {
            type: String,
            default: null
        },
        inputProps: {
            type: null,
            default: null
        },
        panelClass: {
            type: String,
            default: null
        },
        panelStyle: {
            type: null,
            default: null
        },
        panelProps: {
            type: null,
            default: null
        },
        filterInputProps: {
            type: null,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        },
        dataKey: null,
        filter: Boolean,
        filterPlaceholder: String,
        filterLocale: String,
        filterMatchMode: {
            type: String,
            default: 'contains'
        },
        filterFields: {
            type: Array,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        display: {
            type: String,
            default: 'comma'
        },
        selectedItemsLabel: {
            type: String,
            default: '{0} items selected'
        },
        maxSelectedLabels: {
            type: Number,
            default: null
        },
        selectionLimit: {
            type: Number,
            default: null
        },
        showToggleAll: {
            type: Boolean,
            default: true
        },
        loading: {
            type: Boolean,
            default: false
        },
        checkboxIcon: {
            type: String,
            default: undefined
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        dropdownIcon: {
            type: String,
            default: undefined
        },
        filterIcon: {
            type: String,
            default: undefined
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        removeTokenIcon: {
            type: String,
            default: undefined
        },
        selectAll: {
            type: Boolean,
            default: null
        },
        resetFilterOnHide: {
            type: Boolean,
            default: false
        },
        virtualScrollerOptions: {
            type: Object,
            default: null
        },
        autoOptionFocus: {
            type: Boolean,
            default: true
        },
        autoFilterFocus: {
            type: Boolean,
            default: false
        },
        filterMessage: {
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
        emptyFilterMessage: {
            type: String,
            default: null
        },
        emptyMessage: {
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

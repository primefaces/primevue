<script>
import BaseComponent from 'primevue/basecomponent';
import MultiSelectStyle from 'primevue/multiselect/style';

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
        variant: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
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
            type: [String, Object],
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
            default: false
        },
        autoFilterFocus: {
            type: Boolean,
            default: false
        },
        focusOnHover: {
            type: Boolean,
            default: true
        },
        highlightOnSelect: {
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
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: MultiSelectStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

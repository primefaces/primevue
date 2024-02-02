<script>
import AutoCompleteStyle from 'primevue/autocomplete/style';
import BaseComponent from 'primevue/basecomponent';

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
        loading: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        },
        invalid: {
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
            type: [String, Object],
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
            default: false
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        },
        focusOnHover: {
            type: Boolean,
            default: true
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
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: AutoCompleteStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

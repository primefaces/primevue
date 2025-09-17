<script>
import BaseInput from '@primevue/core/baseinput';
import AutoCompleteStyle from 'primevue/autocomplete/style';

export default {
    name: 'BaseAutoComplete',
    extends: BaseInput,
    props: {
        suggestions: {
            type: Array,
            default: null
        },
        optionLabel: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        scrollHeight: {
            type: String,
            default: '14rem'
        },
        dropdown: {
            type: Boolean,
            default: false
        },
        dropdownMode: {
            type: String,
            default: 'blank'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        loading: {
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
        showClear: {
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
        panelStyle: {
            type: Object,
            default: null
        },
        panelClass: {
            type: [String, Object],
            default: null
        },
        overlayStyle: {
            type: Object,
            default: null
        },
        overlayClass: {
            type: [String, Object],
            default: null
        },
        dropdownIcon: {
            type: String,
            default: null
        },
        dropdownClass: {
            type: [String, Object],
            default: null
        },
        loader: {
            type: String,
            default: null
        },
        loadingIcon: {
            type: String,
            default: null
        },
        removeTokenIcon: {
            type: String,
            default: null
        },
        chipIcon: {
            type: String,
            default: null
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
        showEmptyMessage: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        typeahead: {
            type: Boolean,
            default: true
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
            $pcAutoComplete: this,
            $parentInstance: this
        };
    }
};
</script>

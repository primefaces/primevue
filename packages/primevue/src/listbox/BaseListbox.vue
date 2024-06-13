<script>
import BaseComponent from '@primevue/core/basecomponent';
import ListboxStyle from 'primevue/listbox/style';

export default {
    name: 'BaseListbox',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        listStyle: null,
        scrollHeight: {
            type: String,
            default: '14rem'
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        dataKey: null,
        multiple: {
            type: Boolean,
            default: false
        },
        metaKeySelection: {
            type: Boolean,
            default: false
        },
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
        focusOnHover: {
            type: Boolean,
            default: true
        },
        highlightOnSelect: {
            type: Boolean,
            default: true
        },
        checkmark: {
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
        filterIcon: {
            type: String,
            default: undefined
        },
        striped: {
            type: Boolean,
            default: false
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
    style: ListboxStyle,
    provide() {
        return {
            $pcListbox: this,
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseInput from '@primevue/core/baseinput';
import TreeSelectStyle from 'primevue/treeselect/style';

export default {
    name: 'BaseTreeSelect',
    extends: BaseInput,
    props: {
        options: Array,
        scrollHeight: {
            type: String,
            default: '20rem'
        },
        placeholder: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: null
        },
        selectionMode: {
            type: String,
            default: 'single'
        },
        selectedItemsLabel: {
            type: String,
            default: null
        },
        maxSelectedLabels: {
            type: Number,
            default: null
        },
        appendTo: {
            type: [String, Object],
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
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        loadingMode: {
            type: String,
            default: 'mask'
        },
        showClear: {
            type: Boolean,
            default: false
        },
        clearIcon: {
            type: String,
            default: undefined
        },
        filter: {
            type: Boolean,
            default: false
        },
        filterBy: {
            type: [String, Function],
            default: 'label'
        },
        filterMode: {
            type: String,
            default: 'lenient'
        },
        filterPlaceholder: {
            type: String,
            default: null
        },
        filterLocale: {
            type: String,
            default: undefined
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
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        }
    },
    style: TreeSelectStyle,
    provide() {
        return {
            $pcTreeSelect: this,
            $parentInstance: this
        };
    }
};
</script>

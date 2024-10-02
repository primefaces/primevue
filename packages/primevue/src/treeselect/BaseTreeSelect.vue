<script>
import BaseComponent from '@primevue/core/basecomponent';
import TreeSelectStyle from 'primevue/treeselect/style';

export default {
    name: 'BaseTreeSelect',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        scrollHeight: {
            type: String,
            default: '20rem'
        },
        placeholder: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
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
        fluid: {
            type: Boolean,
            default: null
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

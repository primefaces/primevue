<script>
import BaseComponent from '@primevue/core/basecomponent';
import TreeStyle from 'primevue/tree/style';

export default {
    name: 'BaseTree',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
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
        highlightOnSelect: {
            type: Boolean,
            default: false
        },
        scrollHeight: {
            type: String,
            default: null
        },
        level: {
            type: Number,
            default: 0
        },
        draggableNodes: {
            type: Boolean,
            default: null
        },
        droppableNodes: {
            type: Boolean,
            default: null
        },
        draggableScope: {
            type: [String, Array],
            default: null
        },
        droppableScope: {
            type: [String, Array],
            default: null
        },
        validateDrop: {
            type: Boolean,
            default: false
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: TreeStyle,
    provide() {
        return {
            $pcTree: this,
            $parentInstance: this
        };
    }
};
</script>

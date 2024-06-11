<script>
import BaseComponent from '@primevue/core/basecomponent';
import TreeTableStyle from 'primevue/treetable/style';

export default {
    name: 'BaseTreeTable',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: null
        },
        dataKey: {
            type: [String, Function],
            default: 'key'
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
        rows: {
            type: Number,
            default: 0
        },
        first: {
            type: Number,
            default: 0
        },
        totalRecords: {
            type: Number,
            default: 0
        },
        paginator: {
            type: Boolean,
            default: false
        },
        paginatorPosition: {
            type: String,
            default: 'bottom'
        },
        alwaysShowPaginator: {
            type: Boolean,
            default: true
        },
        paginatorTemplate: {
            type: String,
            default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        },
        pageLinkSize: {
            type: Number,
            default: 5
        },
        rowsPerPageOptions: {
            type: Array,
            default: null
        },
        currentPageReportTemplate: {
            type: String,
            default: '({currentPage} of {totalPages})'
        },
        lazy: {
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
        rowHover: {
            type: Boolean,
            default: false
        },
        autoLayout: {
            type: Boolean,
            default: false
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        defaultSortOrder: {
            type: Number,
            default: 1
        },
        multiSortMeta: {
            type: Array,
            default: null
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        removableSort: {
            type: Boolean,
            default: false
        },
        filters: {
            type: Object,
            default: null
        },
        filterMode: {
            type: String,
            default: 'lenient'
        },
        filterLocale: {
            type: String,
            default: undefined
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        columnResizeMode: {
            type: String,
            default: 'fit'
        },
        indentation: {
            type: Number,
            default: 1
        },
        showGridlines: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        scrollHeight: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        tableStyle: {
            type: null,
            default: null
        },
        tableClass: {
            type: [String, Object],
            default: null
        },
        tableProps: {
            type: Object,
            default: null
        }
    },
    style: TreeTableStyle,
    provide() {
        return {
            $pcTreeTable: this,
            $parentInstance: this
        };
    }
};
</script>

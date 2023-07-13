<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ props }) => [
        'p-dataview p-component',
        {
            'p-dataview-list': props.layout === 'list',
            'p-dataview-grid': props.layout === 'grid'
        }
    ],
    header: 'p-dataview-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : ''),
    content: 'p-dataview-content',
    grid: 'p-grid p-nogutter grid grid-nogutter',
    column: 'p-col col',
    emptyMessage: 'p-dataview-emptymessage',
    footer: 'p-dataview-footer'
};

export default {
    name: 'BaseDataView',
    extends: BaseComponent,
    props: {
        value: {
            type: Array,
            default: null
        },
        layout: {
            type: String,
            default: 'list'
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
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        dataKey: {
            type: String,
            default: null
        }
    },
    css: {
        classes
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

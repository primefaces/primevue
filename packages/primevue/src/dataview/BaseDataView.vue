<script>
import BaseComponent from '@primevue/core/basecomponent';
import DataViewStyle from 'primevue/dataview/style';

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
    style: DataViewStyle,
    provide() {
        return {
            $pcDataView: this,
            $parentInstance: this
        };
    }
};
</script>

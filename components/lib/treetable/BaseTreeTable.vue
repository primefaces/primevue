<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper > table,
.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr {
    cursor: pointer;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
}

.p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
}

.p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
}

/* Resizable */
.p-treetable-resizable > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead > tr > th,
.p-treetable-resizable .p-treetable-tfoot > tr > td,
.p-treetable-resizable .p-treetable-tbody > tr > td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}

.p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Scrollable */
.p-treetable-scrollable .p-treetable-wrapper {
    position: relative;
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-table {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead,
.p-treetable-scrollable .p-treetable-tbody,
.p-treetable-scrollable .p-treetable-tfoot {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead > tr,
.p-treetable-scrollable .p-treetable-tbody > tr,
.p-treetable-scrollable .p-treetable-tfoot > tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable-scrollable .p-treetable-thead > tr > th,
.p-treetable-scrollable .p-treetable-tbody > tr > td,
.p-treetable-scrollable .p-treetable-tfoot > tr > td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.p-treetable-scrollable .p-treetable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable-both .p-treetable-thead > tr > th,
.p-treetable-scrollable-both .p-treetable-tbody > tr > td,
.p-treetable-scrollable-both .p-treetable-tfoot > tr > td,
.p-treetable-scrollable-horizontal .p-treetable-thead > tr > th .p-treetable-scrollable-horizontal .p-treetable-tbody > tr > td,
.p-treetable-scrollable-horizontal .p-treetable-tfoot > tr > td {
    flex: 0 0 auto;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-treetable p-component',
        {
            'p-treetable-hoverable-rows': props.rowHover || instance.rowSelectionMode,
            'p-treetable-auto-layout': props.autoLayout,
            'p-treetable-resizable': props.resizableColumns,
            'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-treetable-gridlines': props.showGridlines,
            'p-treetable-scrollable': props.scrollable,
            'p-treetable-scrollable-vertical': props.scrollable && props.scrollDirection === 'vertical',
            'p-treetable-scrollable-horizontal': props.scrollable && props.scrollDirection === 'horizontal',
            'p-treetable-scrollable-both': props.scrollable && props.scrollDirection === 'both',
            'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-treetable-responsive-scroll': props.responsiveLayout === 'scroll',
            'p-treetable-sm': props.size === 'small',
            'p-treetable-lg': props.size === 'large'
        }
    ],
    loadingWrapper: 'p-treetable-loading',
    loadingOverlay: 'p-treetable-loading-overlay p-component-overlay',
    loadingIcon: 'p-treetable-loading-icon',
    header: 'p-treetable-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : ''),
    wrapper: 'p-treetable-wrapper',
    thead: 'p-treetable-thead',
    //headercell
    headerCell: ({ instance, props, column }) =>
        column && instance.hasColumnFilter()
            ? [
                  'p-filter-column',
                  {
                      'p-frozen-column': instance.columnProp(column, 'frozen')
                  }
              ]
            : [
                  {
                      'p-sortable-column': instance.columnProp('sortable'),
                      'p-resizable-column': props.resizableColumns,
                      'p-highlight': instance.isColumnSorted(),
                      'p-frozen-column': instance.columnProp('frozen')
                  }
              ],
    columnResizer: 'p-column-resizer',
    headerTitle: 'p-column-title',
    sortIcon: 'p-sortable-column-icon',
    sortBadge: 'p-sortable-column-badge',
    tbody: 'p-treetable-tbody',
    //ttrow
    row: ({ instance }) => [
        {
            'p-highlight': instance.selected
        }
    ],
    //bodycell
    bodyCell: ({ instance }) => [
        {
            'p-frozen-column': instance.columnProp('frozen')
        }
    ],
    rowToggler: 'p-treetable-toggler p-link',
    rowTogglerIcon: 'p-tree-toggler-icon',
    checkboxWrapper: ({ instance }) => [
        'p-checkbox p-treetable-checkbox p-component',
        {
            'p-checkbox-focused': instance.checkboxFocused
        }
    ],
    checkbox: ({ instance }) => [
        'p-checkbox-box',
        {
            'p-highlight': instance.checked,
            'p-focus': instance.checkboxFocused,
            'p-indeterminate': instance.partialChecked
        }
    ],
    checkboxicon: 'p-checkbox-icon',
    //treetable
    emptyMessage: 'p-treetable-emptymessage',
    tfoot: 'p-treetable-tfoot',
    //footercell
    footerCell: ({ instance }) => [
        {
            'p-frozen-column': instance.columnProp('frozen')
        }
    ],
    //treetable
    footer: 'p-treetable-footer',
    resizeHelper: 'p-column-resizer-helper p-highlight'
};

const { load: loadStyle } = useStyle(styles, { name: 'treetable', manual: true });

export default {
    name: 'BaseTreeTable',
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
            default: true
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
        scrollDirection: {
            type: String,
            default: 'vertical'
        },
        scrollHeight: {
            type: String,
            default: null
        },
        responsiveLayout: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        tableProps: {
            type: Object,
            default: null
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>

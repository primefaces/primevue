import { VNode } from 'vue';

interface DataTableProps {
    value?: any[];
    dataKey?: string;
    rows?: number;
    first?: number;
    totalRecords?: number;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    lazy?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    sortField?: string | ((item: any) => any);
    sortOrder?: number;
    defaultSortOrder?: number;
    multiSortMeta?: any[];
    sortMode?: string;
    removableSort?: boolean;
    filters?: {
        [s: string]: any;
    };
    filterLocale?: string;
    selection?: any[] | any;
    selectionMode?: string;
    compareSelectionBy?: string;
    metaKeySelection?: boolean;
    contextMenu?: boolean;
    contextMenuSelection?: any;
    rowHover?: boolean;
    csvSeparator?: string;
    exportFilename?: string;
    autoLayout?: boolean;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    expandedRows?: any[];
    expandedRowIcon?: string;
    collapsedRowIcon?: string;
    rowGroupMode?: string;
    groupRowsBy?: string[] | string;
    expandableRowGroups?: boolean;
    expandedRowGroups?: any[];
    stateStorage?: string;
    stateKey?: string;
    editMode?: string;
    editingRows?: any[];
    rowClass?: any;
    scrollable?: boolean;
    scrollHeight?: string;
    scrollDirection?: string;
    frozenValue?: any[];
    responsiveLayout?: string;
    breakpoing?: string;
    showGridlines?: boolean;
    stripedRows?: boolean;
}

declare class DataTable {
    $props: DataTableProps;

    $emit(eventName: 'page', event: Event): this;
    $emit(eventName: 'sort', event: Event): this;
    $emit(eventName: 'filter', event: Event): this;
    $emit(eventName: 'value-change', value: any[]): this;
    $emit(eventName: 'row-click', event: Event): this;
    $emit(eventName: 'row-dblclick', event: Event): this;
    $emit(eventName: 'row-contextmenu', event: Event): this;
    $emit(eventName: 'row-select', event: Event): this;
    $emit(eventName: 'row-unselect', event: Event): this;
    $emit(eventName: 'column-resize-end', event: Event): this;
    $emit(eventName: 'column-reorder', event: Event): this;
    $emit(eventName: 'row-reorder', event: Event): this;
    $emit(eventName: 'row-expand', event: Event): this;
    $emit(eventName: 'row-collapse', event: Event): this;
    $emit(eventName: 'rowgroup-expand', event: Event): this;
    $emit(eventName: 'rowgroup-collapse', event: Event): this;
    $emit(eventName: 'cell-edit-init', event: Event): this;
    $emit(eventName: 'cell-edit-complete', event: Event): this;
    $emit(eventName: 'cell-edit-cancel', event: Event): this;
    $emit(eventName: 'row-edit-init', event: Event): this;
    $emit(eventName: 'row-edit-save', event: Event): this;
    $emit(eventName: 'row-edit-cancel', event: Event): this;

    $slots: {
        header: VNode[];
        paginatorLeft: VNode[];
        paginatorRight: VNode[];
        empty: VNode[];
        footer: VNode[];
    };
}

export default DataTable;

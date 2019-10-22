import Vue, { VNode } from 'vue';

export declare class DataTable extends Vue {
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
    sortField?: string;
    sortOrder?: number;
    defaultSortOrder?: number;
    multiSortMeta?: any[];
    sortMode?: string;
    filters?: {
        [s: string]: any;
    };
    selection?: any[]|any;
    selectionMode?: string;
    compareSelectionBy?: string;
    metaKeySelection?: boolean;
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
    groupRowsBy?: string[]|string;
    expandableRowGroups?: boolean;
    expandedRowGroups?: any[];
    stateStorage?: string;
    stateKey?: string;
    $emit(eventName: 'page', event: Event): this;
    $emit(eventName: 'sort', event: Event): this;
    $emit(eventName: 'filter', event: Event): this;
    $emit(eventName: 'row-select', event: Event): this;
    $emit(eventName: 'row-unselect', event: Event): this;
    $emit(eventName: 'column-resize-end', event: Event): this;
    $emit(eventName: 'column-reorder', event: Event): this;
    $emit(eventName: 'row-reorder', event: Event): this;
    $emit(eventName: 'row-expand', event: Event): this;
    $emit(eventName: 'row-collapse', event: Event): this;
    $emit(eventName: 'rowgroup-expand', event: Event): this;
    $emit(eventName: 'rowgroup-collapse', event: Event): this;
    $slots: {
        header: VNode[];
        paginatorLeft: VNode[];
        paginatorRight: VNode[];
        empty: VNode[];
        footer: VNode[];
    }
}
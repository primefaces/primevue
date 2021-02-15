declare var _default: import("vue").DefineComponent<{
    value: {
        type: ArrayConstructor;
        default: null;
    };
    dataKey: {
        type: StringConstructor;
        default: null;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    first: {
        type: NumberConstructor;
        default: number;
    };
    totalRecords: {
        type: NumberConstructor;
        default: number;
    };
    paginator: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginatorPosition: {
        type: StringConstructor;
        default: string;
    };
    alwaysShowPaginator: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginatorTemplate: {
        type: StringConstructor;
        default: string;
    };
    pageLinkSize: {
        type: NumberConstructor;
        default: number;
    };
    rowsPerPageOptions: {
        type: ArrayConstructor;
        default: null;
    };
    currentPageReportTemplate: {
        type: StringConstructor;
        default: string;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    sortField: {
        type: (StringConstructor | FunctionConstructor)[];
        default: null;
    };
    sortOrder: {
        type: NumberConstructor;
        default: null;
    };
    defaultSortOrder: {
        type: NumberConstructor;
        default: number;
    };
    multiSortMeta: {
        type: ArrayConstructor;
        default: null;
    };
    sortMode: {
        type: StringConstructor;
        default: string;
    };
    removableSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    filters: {
        type: ObjectConstructor;
        default: null;
    };
    filterDisplay: {
        type: StringConstructor;
        default: null;
    };
    globalFilterFields: {
        type: ArrayConstructor;
        default: null;
    };
    filterLocale: {
        type: StringConstructor;
        default: undefined;
    };
    selection: {
        type: (ArrayConstructor | ObjectConstructor)[];
        default: null;
    };
    selectionMode: {
        type: StringConstructor;
        default: null;
    };
    compareSelectionBy: {
        type: StringConstructor;
        default: string;
    };
    metaKeySelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    contextMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    contextMenuSelection: {
        type: ObjectConstructor;
        default: null;
    };
    rowHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    csvSeparator: {
        type: StringConstructor;
        default: string;
    };
    exportFilename: {
        type: StringConstructor;
        default: string;
    };
    autoLayout: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizableColumns: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnResizeMode: {
        type: StringConstructor;
        default: string;
    };
    reorderableColumns: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandedRows: {
        type: ArrayConstructor;
        default: null;
    };
    expandedRowIcon: {
        type: StringConstructor;
        default: string;
    };
    collapsedRowIcon: {
        type: StringConstructor;
        default: string;
    };
    rowGroupMode: {
        type: StringConstructor;
        default: null;
    };
    groupRowsBy: {
        type: (ArrayConstructor | StringConstructor)[];
        default: null;
    };
    expandableRowGroups: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandedRowGroups: {
        type: ArrayConstructor;
        default: null;
    };
    stateStorage: {
        type: StringConstructor;
        default: string;
    };
    stateKey: {
        type: StringConstructor;
        default: null;
    };
    editMode: {
        type: StringConstructor;
        default: null;
    };
    editingRows: {
        type: ArrayConstructor;
        default: null;
    };
    rowClass: {
        type: null;
        default: null;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollDirection: {
        type: StringConstructor;
        default: string;
    };
    scrollHeight: {
        type: StringConstructor;
        default: null;
    };
    frozenValue: {
        type: ArrayConstructor;
        default: null;
    };
    frozenWidth: {
        type: StringConstructor;
        default: null;
    };
    virtualScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    virtualRowHeight: {
        type: NumberConstructor;
        default: number;
    };
    virtualScrollDelay: {
        type: NumberConstructor;
        default: number;
    };
}, any, {
    d_first: number;
    d_rows: number;
    d_sortField: string | Function;
    d_sortOrder: number;
    d_multiSortMeta: unknown[];
    d_selectionKeys: null;
    d_expandedRowKeys: null;
    d_columnOrder: null;
    d_editingRowKeys: null;
    d_filters: any;
}, {
    containerClass(): any;
    columns(): any;
    headerColumnGroup(): any;
    footerColumnGroup(): any;
    processedData(): any;
    dataToRender(): any;
    totalRecordsLength(): any;
    empty(): boolean;
    paginatorTop(): any;
    paginatorBottom(): any;
    sorted(): any;
    loadingIconClass(): any[];
    allRowsSelected(): any;
}, {
    columnProp(col: any, prop: any): any;
    onPage(event: any): void;
    onColumnHeaderClick(e: any): void;
    sortSingle(value: any): any[];
    sortMultiple(value: any): any[];
    multisortField(data1: any, data2: any, index: any): any;
    addMultiSortField(field: any): void;
    filter(data: any): any;
    executeLocalFilter(field: any, rowData: any, filterMeta: any): any;
    onRowClick(e: any): void;
    onRowRightClick(event: any): void;
    onRowTouchEnd(): void;
    onRowKeyDown(e: any): void;
    findNextSelectableRow(row: any): any;
    findPrevSelectableRow(row: any): any;
    toggleRowWithRadio(event: any): void;
    toggleRowWithCheckbox(event: any): void;
    toggleRowsWithCheckbox(event: any): void;
    isSingleSelectionMode(): boolean;
    isMultipleSelectionMode(): boolean;
    isSelected(rowData: any): any;
    findIndexInSelection(rowData: any): number;
    findIndex(rowData: any, collection: any): number;
    updateSelectionKeys(selection: any): void;
    updateExpandedRowKeys(expandedRows: any): void;
    updateEditingRowKeys(editingRows: any): void;
    equals(data1: any, data2: any): any;
    selectRange(event: any): void;
    exportCSV(options: any): void;
    resetPage(): void;
    onColumnResizeStart(event: any): void;
    onColumnResize(event: any): void;
    onColumnResizeEnd(): void;
    resizeColGroup(table: any, resizeColumnIndex: any, newColumnWidth: any, nextColumnWidth: any): void;
    bindColumnResizeEvents(): void;
    unbindColumnResizeEvents(): void;
    onColumnHeaderMouseDown(e: any): void;
    onColumnHeaderDragStart(event: any): void;
    onColumnHeaderDragOver(event: any): void;
    onColumnHeaderDragLeave(event: any): void;
    onColumnHeaderDrop(event: any): void;
    findParentHeader(element: any): any;
    findColumnByKey(columns: any, key: any): any;
    onRowMouseDown(event: any): void;
    onRowDragStart(e: any): void;
    onRowDragOver(e: any): void;
    onRowDragLeave(event: any): void;
    onRowDragEnd(event: any): void;
    onRowDrop(event: any): void;
    toggleRow(event: any): void;
    toggleRowGroup(e: any): void;
    isRowGroupExpanded(rowData: any): boolean;
    isStateful(): boolean;
    getStorage(): Storage;
    saveState(): void;
    restoreState(): void;
    saveColumnWidths(state: any): void;
    restoreColumnWidths(): void;
    onCellEditInit(event: any): void;
    onCellEditComplete(event: any): void;
    onCellEditCancel(event: any): void;
    onRowEditInit(event: any): void;
    onRowEditSave(event: any): void;
    onRowEditCancel(event: any): void;
    onVirtualScroll(event: any): void;
    createLazyLoadEvent(event: any): {
        originalEvent: any;
        first: number;
        rows: number;
        sortField: string | Function;
        sortOrder: number;
        multiSortMeta: unknown[];
        filters: Record<string, any>;
        filterMatchModes: {} | undefined;
    };
    hasFilters(): boolean;
    hasGlobalFilter(): boolean;
    getChildren(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | null;
    onFilterChange(filters: any): void;
    onFilterApply(): void;
    cloneFilters(): {};
    updateScrollWidth(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:first" | "update:rows" | "page" | "update:sortField" | "update:sortOrder" | "update:multiSortMeta" | "sort" | "filter" | "row-click" | "update:selection" | "row-select" | "row-unselect" | "update:contextMenuSelection" | "row-contextmenu" | "row-unselect-all" | "row-select-all" | "column-resize-end" | "column-reorder" | "row-reorder" | "update:expandedRows" | "row-collapse" | "row-expand" | "update:expandedRowGroups" | "rowgroup-collapse" | "rowgroup-expand" | "update:filters" | "virtual-scroll" | "state-restore" | "state-save" | "cell-edit-init" | "cell-edit-complete" | "cell-edit-cancel" | "update:editingRows" | "row-edit-init" | "row-edit-save" | "row-edit-cancel" | "operator-change" | "matchmode-change" | "constraint-add" | "constraint-remove" | "filter-clear" | "apply-click")[], "update:first" | "update:rows" | "page" | "update:sortField" | "update:sortOrder" | "update:multiSortMeta" | "sort" | "filter" | "row-click" | "update:selection" | "row-select" | "row-unselect" | "update:contextMenuSelection" | "row-contextmenu" | "row-unselect-all" | "row-select-all" | "column-resize-end" | "column-reorder" | "row-reorder" | "update:expandedRows" | "row-collapse" | "row-expand" | "update:expandedRowGroups" | "rowgroup-collapse" | "rowgroup-expand" | "update:filters" | "virtual-scroll" | "state-restore" | "state-save" | "cell-edit-init" | "cell-edit-complete" | "cell-edit-cancel" | "update:editingRows" | "row-edit-init" | "row-edit-save" | "row-edit-cancel" | "operator-change" | "matchmode-change" | "constraint-add" | "constraint-remove" | "filter-clear" | "apply-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: unknown[];
    dataKey: string;
    rows: number;
    first: number;
    totalRecords: number;
    paginator: boolean;
    paginatorPosition: string;
    alwaysShowPaginator: boolean;
    paginatorTemplate: string;
    pageLinkSize: number;
    rowsPerPageOptions: unknown[];
    currentPageReportTemplate: string;
    lazy: boolean;
    loading: boolean;
    loadingIcon: string;
    sortField: string | Function;
    sortOrder: number;
    defaultSortOrder: number;
    multiSortMeta: unknown[];
    sortMode: string;
    removableSort: boolean;
    filters: Record<string, any>;
    filterDisplay: string;
    globalFilterFields: unknown[];
    filterLocale: string;
    selection: null;
    selectionMode: string;
    compareSelectionBy: string;
    metaKeySelection: boolean;
    contextMenu: boolean;
    contextMenuSelection: Record<string, any>;
    rowHover: boolean;
    csvSeparator: string;
    exportFilename: string;
    autoLayout: boolean;
    resizableColumns: boolean;
    columnResizeMode: string;
    reorderableColumns: boolean;
    expandedRows: unknown[];
    expandedRowIcon: string;
    collapsedRowIcon: string;
    rowGroupMode: string;
    groupRowsBy: string | unknown[];
    expandableRowGroups: boolean;
    expandedRowGroups: unknown[];
    stateStorage: string;
    stateKey: string;
    editMode: string;
    editingRows: unknown[];
    rowClass: any;
    scrollable: boolean;
    scrollDirection: string;
    scrollHeight: string;
    frozenValue: unknown[];
    frozenWidth: string;
    virtualScroll: boolean;
    virtualRowHeight: number;
    virtualScrollDelay: number;
} & {}>, {
    value: unknown[];
    dataKey: string;
    rows: number;
    first: number;
    totalRecords: number;
    paginator: boolean;
    paginatorPosition: string;
    alwaysShowPaginator: boolean;
    paginatorTemplate: string;
    pageLinkSize: number;
    rowsPerPageOptions: unknown[];
    currentPageReportTemplate: string;
    lazy: boolean;
    loading: boolean;
    loadingIcon: string;
    sortField: string | Function;
    sortOrder: number;
    defaultSortOrder: number;
    multiSortMeta: unknown[];
    sortMode: string;
    removableSort: boolean;
    filters: Record<string, any>;
    filterDisplay: string;
    globalFilterFields: unknown[];
    filterLocale: string;
    selection: null;
    selectionMode: string;
    compareSelectionBy: string;
    metaKeySelection: boolean;
    contextMenu: boolean;
    contextMenuSelection: Record<string, any>;
    rowHover: boolean;
    csvSeparator: string;
    exportFilename: string;
    autoLayout: boolean;
    resizableColumns: boolean;
    columnResizeMode: string;
    reorderableColumns: boolean;
    expandedRows: unknown[];
    expandedRowIcon: string;
    collapsedRowIcon: string;
    rowGroupMode: string;
    groupRowsBy: string | unknown[];
    expandableRowGroups: boolean;
    expandedRowGroups: unknown[];
    stateStorage: string;
    stateKey: string;
    editMode: string;
    editingRows: unknown[];
    rowClass: any;
    scrollable: boolean;
    scrollDirection: string;
    scrollHeight: string;
    frozenValue: unknown[];
    frozenWidth: string;
    virtualScroll: boolean;
    virtualRowHeight: number;
    virtualScrollDelay: number;
}>;
export default _default;

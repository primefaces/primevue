import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';
import Column from '../column';
import { VirtualScrollerProps } from '../virtualscroller';

type DataTablePaginatorPositionType = 'top' | 'bottom' | 'both' | undefined;

type DataTableSortFieldType = string | ((item: any) => string) | undefined;

type DataTableDataKeyType = string | ((item: any) => string) | undefined;

type DataTableMultiSortMetaType = DataTableSortMeta[] | undefined | null;

type DataTableSortOrderType = 1 | 0 | -1 | undefined | null;

type DataTableSortModeType = 'single' | 'multiple' | undefined;

type DataTableFilterMatchModeType = 'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter' | undefined;

type DataTableFilterDisplayType = 'menu' | 'row' | undefined;

type DataTableSelectionModeType = 'single' | 'multiple' | undefined;

type DataTableCompareSelectionBy = 'equals' | 'deepEquals' | undefined;

type DataTableColumnResizeModeType = 'fit' | 'expand' | undefined;

type DataTableRowGroupModeType = 'subheader' | 'rowspan' | undefined;

type DataTableStateStorageType = 'session' | 'local' | undefined;

type DataTableEditModeType = 'cell' | 'row' | undefined;

type DataTableScrollDirectionType = 'vertical' | 'horizontal' | 'both' | undefined;

type DataTableScrollHeightType = 'flex' | string | undefined;

type DataTableResponsiveLayoutType = 'stack' | 'scroll' | undefined;

export interface DataTableExportFunctionOptions {
    /**
     * Row data
     */
    data: any;
    /**
     * Column Field
     */
    field: string;
}

export interface DataTableFilterMetaData {
    /**
     * Filter value
     */
    value: any;
    /**
     * Filter match mode
     * @see DataTableFilterMatchModeType
     */
    matchMode: string;
}

export interface DataTableOperatorFilterMetaData {
    /**
     * Filter operator
     */
    operator: string;
    /**
     * Array of filter meta datas.
     * @see DataTableFilterMetaData
     */
    constraints: DataTableFilterMetaData[];
}

export interface DataTableFilterMeta {
    /**
     * Filter keys
     * @see DataTableFilterMetaData
     */
    [key: string]: string | DataTableFilterMetaData | DataTableOperatorFilterMetaData;
}

export interface DataTableSortMeta {
    /**
     * Column field
     */
    field: string;
    /**
     * Column sort order
     */
    order: DataTableSortOrderType;
}

export interface DataTableExpandedRows {
    [key: string]: boolean;
}

export interface DataTableEditingRows {
    [key: string]: boolean;
}

export interface DataTableExportCSVOptions {
    /**
     * Whether to export only selection data.
     */
    selectionOnly: boolean;
}

export interface DataTableSortEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Index of first record
     */
    first: number;
    /**
     * Number of rows to display in new page
     */
    rows: number;
    /**
     * Field to sort against
     * @see DataTableSortFieldType
     */
    sortField: DataTableSortFieldType;
    /**
     * Sort order as integer
     * @see DataTableSortOrderType
     */
    sortOrder: DataTableSortOrderType;
    /**
     * MultiSort metadata
     * @see DataTableMultiSortMetaType
     */
    multiSortMeta: DataTableMultiSortMetaType;
    /**
     * Collection of active filters
     * @see DataTableFilterMeta
     */
    filters: DataTableFilterMeta;
    /**
     * Match modes per field
     * @see DataTableFilterMatchModeType
     */
    filterMatchModes: DataTableFilterMatchModeType;
}

/**
 * @extends DataTableSortEvent
 */
export interface DataTablePageEvent extends DataTableSortEvent {
    /**
     * New page number
     */
    page: number;
    /**
     * Total page count
     */
    pageCount: number;
}

/**
 * @extends DataTableSortEvent
 */
 export interface DataTableFilterEvent extends DataTableSortEvent {
    /**
     * Filtered collection (non-lazy only)
     */
    filteredValue: any;
}

export interface DataTableRowClickEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Selected row data.
     */
    data: any;
    /**
     * Row index.
     */
    index: number;
}

/**
 * @extends DataTableRowClickEvent
 */
export interface DataTableRowDoubleClickEvent extends DataTableRowClickEvent { }

/**
 * @extends DataTableRowClickEvent
 */
export interface DataTableRowContextMenuEvent extends DataTableRowClickEvent { }

export interface DataTableRowSelectEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Selected row data
     */
    data: any;
    /**
     * Row index
     */
    index: number;
    /**
     * Type of the selection, valid values are 'row', 'radio' or 'checkbox'.
     */
    type: string;
}

/**
 * @extends DataTableRowSelectEvent
 */
export interface DataTableRowUnselectEvent extends DataTableRowSelectEvent { }

export interface DataTableRowSelectAllEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Selected dataset
     */
    data: any;
}

export interface DataTableRowUnselectAllEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
}

export interface DataTableSelectAllChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Whether all data is selected.
     */
    checked: boolean;
}

export interface DataTableColumnResizeEndEvent {
    /**
     * DOM element of the resized column.
     */
    element: HTMLElement;
    /**
     * Change in column width
     */
    delta: any;
}

export interface DataTableColumnReorderEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Index of the dragged column
     */
    dragIndex: number;
    /**
     * Index of the dropped column
     */
    dropIndex: number;
}

export interface DataTableRowReorderEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Index of the dragged row
     */
    dragIndex: number;
    /**
     * Index of the dropped row
     */
    dropIndex: number;
    /**
     * Reordered value
     */
    value: any[];
}

export interface DataTableRowExpandEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Expanded row data
     */
    data: any[];
}

/**
 * @extends DataTableRowExpandEvent
 */
export interface DataTableRowCollapseEvent extends DataTableRowExpandEvent { }

export interface DataTableCellEditInitEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Row data to edit.
     */
    data: any;
    /**
     * Field name of the row data.
     */
    field: string;
    /**
     * Index of the row data to edit.
     */
    index: number;
}

/**
 * @extends DataTableCellEditInitEvent
 */
export interface DataTableCellEditCancelEvent extends DataTableCellEditInitEvent { }

export interface DataTableCellEditCompleteEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Row data to edit.
     */
    data: any;
    /**
     * New row data after editing.
     */
    newData: any;
    /**
     * Field value of row data to edit.
     */
    value: any;
    /**
     * Field value of new row data after editing.
     */
    newValue: any;
    /**
     * Field name of the row data.
     */
    field: string;
    /**
     * Index of the row data to edit.
     */
    index: number;
    /**
     * Type of completion such as 'enter', 'outside' or 'tab'.
     */
    type: string;
}

export interface DataTableRowEditInitEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Row data to edit.
     */
    data: any;
    /**
     * New row data after editing.
     */
    newData: any;
    /**
     * Field name of the row data.
     */
    field: string;
    /**
     * Index of the row data to edit.
     */
    index: number;
}

/**
 * @extends DataTableRowEditInitEvent
 */
export interface DataTableRowEditSaveEvent extends DataTableRowEditInitEvent { }

/**
 * @extends DataTableRowEditCancelEvent
 */
export interface DataTableRowEditCancelEvent extends DataTableRowEditInitEvent { }

export interface DataTableStateEvent {
    /**
     * Index of first record
     */
    first: number;
    /**
     * Number of rows to display in new page
     */
    rows: number;
    /**
     * Field to sort against
     */
    sortField: string;
    /**
     * Sort order as integer
     * @see DataTableSortOrderType
     */
    sortOrder: DataTableSortOrderType;
    /**
     * MultiSort metadata
     * @see DataTableMultiSortMetaType
     */
    multiSortMeta: DataTableMultiSortMetaType;
    /**
     * Collection of active filters
     * @see DataTableFilterMeta
     */
    filters: DataTableFilterMeta;
    /**
     * Comma separated list of column widths
     */
    columWidths: string[];
    /**
     * Order of the columns
     */
    columnOrder: string[];
    /**
     * Instances of rows in expanded state
     * @see DataTableExpandedRows
     */
    expandedRows: any[] | DataTableExpandedRows;
    /**
     * Keys of rows in expanded state
     */
    expandedRowKeys: any[];
    /**
     * Instances of rows in expanded state
     */
    expandedRowGroups: any[] | DataTableExpandedRows;
    /**
     * Selected rows
     */
    selection: any[] | any;
    /**
     * Keys of selected rows
     */
    selectionKeys: any[];
}

export interface DataTableProps {
    /**
     * An array of objects to display.
     */
    value?: any[] | undefined;
    /**
     * Name of the field that uniquely identifies the a record in the data.
     * @see DataTableDataKeyType
     */
    dataKey?: DataTableDataKeyType;
    /**
     * Number of rows to display per page.
     */
    rows?: number | undefined;
    /**
     * Index of the first row to be displayed.
     * Default value is 0.
     */
    first?: number | undefined;
    /**
     * Number of total records, defaults to length of value when not defined.
     */
    totalRecords?: number | undefined;
    /**
     * When specified as true, enables the pagination.
     */
    paginator?: boolean | undefined;
    /**
     * Position of the paginator, options are 'top','bottom' or 'both'.
     * @see DataTablePaginatorPositionType
     * Default value is 'bottom'.
     */
    paginatorPosition?: DataTablePaginatorPositionType;
    /**
     * Whether to show it even there is only one page.
     * Default value is true.
     */
    alwaysShowPaginator?: boolean | undefined;
    /**
     * Template of the paginator. It can be customized using the template property using the predefined keys, default value is 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'. Here are the available elements that can be placed inside a paginator in any order.
     *
     * - FirstPageLink
     * - PrevPageLink
     * - PageLinks
     * - NextPageLink
     * - LastPageLink
     * - RowsPerPageDropdown
     * - JumpToPageDropdown
     * - JumpToPageInput
     * - CurrentPageReport
     */
    paginatorTemplate?: string | undefined;
    /**
     * Number of page links to display.
     * Default value is 5.
     */
    pageLinkSize?: number | undefined;
    /**
     * Array of integer values to display inside rows per page dropdown.
     */
    rowsPerPageOptions?: number[] | undefined;
    /**
     * Template of the current page report element. It displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following;
     *
     * - {currentPage}
     * - {totalPages}
     * - {rows}
     * - {first}
     * - {last}
     * - {totalRecords}
     */
    currentPageReportTemplate?: string | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     */
    lazy?: boolean | undefined;
    /**
     * Displays a loader to indicate data load is in progress.
     */
    loading?: boolean | undefined;
    /**
     * The icon to show while indicating data load is in progress.
     * Default value is 'pi pi-spinner'.
     */
    loadingIcon?: string | undefined;
    /**
     * Property name or a getter function of a row data used for sorting by default
     * @see DataTableSortFieldType
     */
    sortField?: DataTableSortFieldType | undefined;
    /**
     * Order to sort the data by default.
     */
    sortOrder?: number | undefined;
    /**
     * Default sort order of an unsorted column.
     * Default value is 1.
     */
    defaultSortOrder?: number | undefined;
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     * @see DataTableMultiSortMetaType
     */
    multiSortMeta?: DataTableMultiSortMetaType;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @see DataTableSortModeType
     * Default value is 'single'.
     */
    sortMode?: DataTableSortModeType;
    /**
     * When enabled, columns can have an un-sorted state.
     */
    removableSort?: boolean | undefined;
    /**
     * Filters object with key-value pairs to define the filters.
     * @see DataTableFilterMeta
     */
    filters?: DataTableFilterMeta;
    /**
     * Layout of the filter elements, valid values are 'row' and 'menu'.
     * @see DataTableFilterDisplayType
     */
    filterDisplay?: DataTableFilterDisplayType;
    /**
     * Fields for global filter
     */
    globalFilterFields?: string[] | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     */
    filterLocale?: string | undefined;
    /**
     * Selected row in single mode or an array of values in multiple mode.
     */
    selection?: any[] | any | undefined;
    /**
     * Specifies the selection mode, valid values are 'single' and 'multiple'.
     * @see DataTableSelectionModeType
     */
    selectionMode?: DataTableSelectionModeType;
    /**
     * Algorithm to define if a row is selected, valid values are 'equals' that compares by reference and 'deepEquals' that compares all fields.
     * @see DataTableCompareSelectionBy
     * Default value is 'deepEquals'.
     */
    compareSelectionBy?: DataTableCompareSelectionBy;
    /**
     * Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and
     * when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * Default value is 'true'.
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Enables context menu integration.
     */
    contextMenu?: boolean | undefined;
    /**
     * Selected row instance with the ContextMenu.
     */
    contextMenuSelection?: any | any[] | undefined;
    /**
     * Whether all data is selected.
     */
    selectAll?: Nullable<boolean>;
    /**
     * When enabled, background of the rows change on hover.
     */
    rowHover?: boolean | undefined;
    /**
     * Character to use as the csv separator.
     * Default value is ','.
     */
    csvSeparator?: string | undefined;
    /**
     * Name of the exported file.
     * Default value is 'download'.
     */
    exportFilename?: string | undefined;
    /**
     * Custom function to export data.
     * @see DataTableExportFunctionOptions
     */
    exportFunction?(options: DataTableExportFunctionOptions): any;
    /**
     * Whether the cell widths scale according to their content or not. Does not apply to scrollable tables.
     */
    autoLayout?: boolean | undefined;
    /**
     * When enabled, columns can be resized using drag and drop.
     */
    resizableColumns?: boolean | undefined;
    /**
     * Defines whether the overall table width should change on column resize, valid values are 'fit' and 'expand'.
     * @see DataTableColumnResizeModeType
     * Default value is 'fit'.
     */
    columnResizeMode?: DataTableColumnResizeModeType;
    /**
     * When enabled, columns can be reordered using drag and drop.
     */
    reorderableColumns?: boolean | undefined;
    /**
     * A collection of row data display as expanded.
     * @see DataTableExpandedRows
     */
    expandedRows?: any[] | DataTableExpandedRows;
    /**
     * Icon of the row toggler to display the row as expanded.
     * Default value is 'pi-chevron-down'.
     */
    expandedRowIcon?: string | undefined;
    /**
     * Icon of the row toggler to display the row as collapsed.
     * Default value is 'pi-chevron-right'.
     */
    collapsedRowIcon?: string | undefined;
    /**
     * Defines the row group mode, valid options are 'subheader' and 'rowspan'.
     * @see DataTableRowGroupModeType
     */
    rowGroupMode?: DataTableRowGroupModeType;
    /**
     * One or more field names to use in row grouping.
     */
    groupRowsBy?: string[] | string | undefined;
    /**
     * Whether the row groups can be expandable.
     */
    expandableRowGroups?: boolean | undefined;
    /**
     * An array of group field values whose groups would be rendered as expanded.
     * @see DataTableExpandedRows
     */
    expandedRowGroups?: any[] | DataTableExpandedRows;
    /**
     * Defines where a stateful table keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
     * @see DataTableStateStorageType
     * Default value is 'session'.
     */
    stateStorage?: DataTableStateStorageType;
    /**
     * Unique identifier of a stateful table to use in state storage.
     */
    stateKey?: string | undefined;
    /**
     * Defines the incell editing mode, valid options are 'cell' and 'row'.
     * @see DataTableEditModeType
     */
    editMode?: DataTableEditModeType;
    /**
     * A collection of rows to represent the current editing data in row edit mode.
     * @see DataTableEditingRows
     */
    editingRows?: any[] | DataTableEditingRows;
    /**
     * A function that takes the row data as a parameter and returns a string to apply a particular class for the row.
     *
     */
    rowClass?:(data: any) => object | string | undefined;
    /**
     * A function that takes the row data as a parameter and returns the inline style for the corresponding row.
     */
    rowStyle?: any;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     */
    scrollable?: boolean | undefined;
    /**
     * Height of the scroll viewport in fixed pixels or the 'flex' keyword for a dynamic size.
     * @see DataTableScrollHeightType
     */
    scrollHeight?: DataTableScrollHeightType;
    /**
     * Orientation of the scrolling, options are 'vertical', 'horizontal' and 'both'.
     * @see DataTableScrollDirectionType
     * Default value is 'vertical'.
     */
    scrollDirection?: DataTableScrollDirectionType;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * Note: Currently only vertical orientation mode is supported.
     * @see VirtualScroller.VirtualScrollerProps
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Items of the frozen part in scrollable DataTable.
     */
    frozenValue?: any[] | undefined;
    /**
     * Defines the responsive mode, valid options are 'stack' and 'scroll'.
     * @see DataTableResponsiveLayoutType
     * Default value is 'stack'.
     */
    responsiveLayout?: DataTableResponsiveLayoutType;
    /**
     * The breakpoint to define the maximum width boundary when using stack responsive layout.
     * Default value is '960px'.
     */
    breakpoint?: string | undefined;
    /**
     * Whether to show grid lines between cells.
     */
    showGridlines?: boolean | undefined;
    /**
     * Whether to displays rows with alternating colors.
     */
    stripedRows?: boolean | undefined;
    /**
     * Inline style of the table element.
     */
    tableStyle?: any;
    /**
     * Style class of the table element.
     */
    tableClass?: any;
}

export interface DataTableSlots {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
    /**
     * Custom paginator start template.
     */
    paginatorstart: () => VNode[];
    /**
     * Custom paginator end template.
     */
    paginatorend: () => VNode[];
    /**
     * Custom empty template.
     */
    empty: () => VNode[];
    /**
     * Custom group header template.
     * @param {Object} scope - group header slot's params.
     */
    groupheader: (scope: {
        /**
         * Row data
         */
        data: any;
        /**
         * Row index
         */
        index: number;
    }) => VNode[];
    /**
     * Custom group footer template.
     * @param {Object} scope - group footer slot's params.
     */
    groupfooter: (scope: {
        /**
         * Row data
         */
        data: any;
        /**
         * Row index
         */
        index: number;
    }) => VNode[];
    /**
     * Custom loading template.
     */
    loading: () => VNode[];
    /**
     * Custom expansion template.
     * @param {Object} scope - expansion slot's params.
     */
    expansion: (scope: {
        /**
         * Row data
         */
         data: any;
         /**
          * Row index
          */
         index: number;
    }) => VNode[];
}

export declare type DataTableEmits = {
    /**
     * Emitted when the first changes.
     * @param {number} value - New value.
     */
    'update:first': (value: number) => void;
    /**
     * Emitted when the rows changes.
     * @param {number} value - New value.
     */
    'update:rows': (value: number) => void;
    /**
     * Emitted when the sortField changes.
     * @param {string} value - New value.
     */
    'update:sortField': (value: string) => void;
    /**
     * Emitted when the sortOrder changes.
     * @param {number | undefined} value - New value.
     */
    'update:sortOrder': (value: number | undefined) => void;
    /**
     * Emitted when the multiSortMeta changes.
     * @param {DataTableMultiSortMetaType} value - New value.
     */
    'update:multiSortMeta': (value: DataTableMultiSortMetaType) => void;
    /**
     * Emitted when the selection changes.
     * @param {*} value - New value.
     */
    'update:selection': (value: any[] | any | undefined) => void;
    /**
     * Emitted when the contextMenuSelection changes.
     * @param {*} value - New value.
     */
    'update:contextMenuSelection': (value: any[] | any | undefined ) => void;
    /**
     * Emitted when the expandedRows changes.
     * @param {DataTableExpandedRows} value - New value.
     */
    'update:expandedRows': (value: any[] | DataTableExpandedRows) => void;
    /**
     * Emitted when the expandedRowGroups changes.
     * @param {DataTableExpandedRows} value - New value.
     */
    'update:expandedRowGroups': (value: any[] | DataTableExpandedRows) => void;
    /**
     * Emitted when the filters changes.
     * @param {DataTableFilterMeta} value - New value.
     */
    'update:filters': (value: DataTableFilterMeta) => void;
    /**
     * Emitted when the editingRows changes.
     * @param {DataTableEditingRows} value - New value.
     */
    'update:editingRows': (value: any[] | DataTableEditingRows) => void;
    /**
     * Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.
     * @param {DataTablePageEvent} event - Custom page event.
     */
    'page': (event: DataTablePageEvent) => void;
    /**
     * Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.
     * @param {DataTableSortEvent} event - Custom sort event.
     */
    'sort': (event: DataTableSortEvent) => void;
    /**
     * Event to emit after filtering, not triggered in lazy mode.
     * @param {DataTableFilterEvent} event - Custom filter event.
     */
    'filter': (event: DataTableFilterEvent) => void;
    /**
     * Callback to invoke after filtering, sorting, pagination and cell editing to pass the rendered value.
     * @param {*} value - Value displayed by the table.
     */
    'value-change': (value: any[]) => void;
    /**
     * Callback to invoke when a row is clicked.
     * @param {DataTableRowClickEvent} event - Custom row click event.
     */
    'row-click': (event: DataTableRowClickEvent) => void;
    /**
     * Callback to invoke when a row is double clicked.
     * @param {DataTableRowDoubleClickEvent} event - Custom row double click event.
     */
    'row-dblclick': (event: DataTableRowDoubleClickEvent) => void;
    /**
     * Callback to invoke when a row is selected with a ContextMenu.
     * @param {DataTableRowContextMenuEvent} event - Custom row context menu event.
     */
    'row-contextmenu': (event: DataTableRowContextMenuEvent) => void;
    /**
     * Callback to invoke when a row is selected.
     * @param {DataTableRowSelectEvent} event - Custom row select event.
     */
    'row-select': (event: DataTableRowSelectEvent) => void;
    /**
     * Fired when header checkbox is checked.
     * @param {DataTableRowSelectAllEvent} event - Custom row select all event.
     */
    'row-select-all': (event: DataTableRowSelectAllEvent) => void;
    /**
     * Fired when header checkbox is unchecked.
     * @param {DataTableRowUnselectAllEvent} event - Custom row unselect all event.
     */
    'row-unselect-all': (event: DataTableRowUnselectAllEvent) => void;
    /**
     * Callback to invoke when a row is unselected.
     * @param {DataTableRowUnselectEvent} event - Custom row unselect event.
     */
    'row-unselect': (event: DataTableRowUnselectEvent) => void;
    /**
     * Callback to invoke when all data is selected.
     * @param {DataTableSelectAllChangeEvent} event - Custom select all change event.
     */
    'select-all-change': (event: DataTableSelectAllChangeEvent) => void;
    /**
     * Callback to invoke when a column is resized.
     * @param {DataTableColumnResizeEndEvent} - Custom column resize event.
     */
    'column-resize-end': (event: DataTableColumnResizeEndEvent) => void;
    /**
     * Callback to invoke when a column is reordered.
     * @param {DataTableColumnReorderEvent} event - Custom column reorder event.
     */
    'column-reorder': (event: DataTableColumnReorderEvent) => void;
    /**
     * Callback to invoke when a row is reordered.
     * @param {DataTableRowReorderEvent} event - Custom row reorder event.
     */
    'row-reorder': (event: DataTableRowReorderEvent) => void;
    /**
     * Callback to invoke when a row is expanded.
     * @param {DataTableRowExpandEvent} event - Custom row expand event.
     */
    'row-expand': (event: DataTableRowExpandEvent) => void;
    /**
     * Callback to invoke when a row is collapsed.
     * @param {DataTableRowCollapseEvent} event - Custom row collapse event.
     */
    'row-collapse': (event: DataTableRowCollapseEvent) => void;
    /**
     * Callback to invoke when a row group is expanded.
     * @param {DataTableRowExpandEvent} event - Custom row expand event.
     */
    'rowgroup-expand': (event: DataTableRowExpandEvent) => void;
    /**
     * Callback to invoke when a row group is collapsed.
     * @param {DataTableRowCollapseEvent} event - Custom row collapse event.
     */
    'rowgroup-collapse': (event: DataTableRowCollapseEvent) => void;
    /**
     * Callback to invoke when cell edit is initiated.
     * @param {DataTableCellEditInitEvent} event - Custom cell edit init.
     */
    'cell-edit-init': (event: DataTableCellEditInitEvent) => void;
    /**
     * Callback to invoke when cell edit is completed.
     * @param {DataTableCellEditCompleteEvent} event - Custom cell edit complete event.
     */
    'cell-edit-complete': (event: DataTableCellEditCompleteEvent) => void;
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {DataTableCellEditCancelEvent} event - Custom cell edit cancel event.
     */
    'cell-edit-cancel': (event: DataTableCellEditCancelEvent) => void;
    /**
     * Callback to invoke when row edit is initiated.
     * @param {DataTableRowEditInitEvent} event - Custom row edit init event.
     */
    'row-edit-init': (event: DataTableRowEditInitEvent) => void;
    /**
     * Callback to invoke when row edit is saved.
     * @param {DataTableRowEditSaveEvent} event - Custom row edit save event.
     */
    'row-edit-save': (event: DataTableRowEditSaveEvent) => void;
    /**
     * Callback to invoke when row edit is cancelled.
     * @param {DataTableRowEditCancelEvent} event - Custom row edit cancel event.
     */
    'row-edit-cancel': (event: DataTableRowEditCancelEvent) => void;
    /**
     * Invoked when a stateful table saves the state.
     * @param {DataTableStateEvent} event - Custom state event.
     */
    'state-restore': (event: DataTableStateEvent) => void;
    /**
     * Invoked when a stateful table restores the state.
     * @param {DataTableStateEvent} event - Custom state event.
     */
    'state-save': (event: DataTableStateEvent) => void;
}

declare class DataTable extends ClassComponent<DataTableProps, DataTableSlots, DataTableEmits> {
    /**
     * Exports the data to CSV format.
     * @param {DataTableExportCSVOptions} [options] - Export options.
     * @param {Object[]} [data] - Custom exportable data. This param can be used on lazy dataTable.
     */
    exportCSV: (options?: DataTableExportCSVOptions, data?: any[]) => void;
}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DataTable: GlobalComponentConstructor<DataTable>
    }
}

/**
 *
 * DataTable displays data in tabular format.
 *
 * Helper Components:
 *
 * - Column
 * - ColumnGroup
 *
 * Demos:
 *
 * - [DataTable](https://www.primefaces.org/primevue/showcase/#/datatable)
 * - [Edit](https://www.primefaces.org/primevue/showcase/#/datatable/edit)
 * - [Sort](https://www.primefaces.org/primevue/showcase/#/datatable/sort)
 * - [Filter](https://www.primefaces.org/primevue/showcase/#/datatable/filter)
 * etc.
 *
 */
export default DataTable;

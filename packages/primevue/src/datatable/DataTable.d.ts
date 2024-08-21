/**
 *
 * DataTable displays data in tabular format.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module datatable
 *
 */
import type { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, HintedString, Nullable, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ButtonProps } from 'primevue/button';
import type { ColumnPassThroughOptionType } from 'primevue/column';
import type { ColumnGroupPassThroughOptionType } from 'primevue/columngroup';
import type { PaginatorPassThroughOptionType } from 'primevue/paginator';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { RowPassThroughOptionType } from 'primevue/row';
import type { VirtualScrollerPassThroughOptionType, VirtualScrollerProps } from 'primevue/virtualscroller';
import { InputHTMLAttributes, TableHTMLAttributes, TransitionProps, VNode } from 'vue';

export declare type DataTablePassThroughOptionType = DataTablePassThroughAttributes | ((options: DataTablePassThroughMethodOptions) => DataTablePassThroughAttributes | string) | string | null | undefined;

export declare type DataTablePassThroughTransitionType = TransitionProps | ((options: DataTablePassThroughMethodOptions) => TransitionProps) | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DataTablePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: DataTableProps;
    /**
     * Defines current inline state.
     */
    state: DataTableState;
    /**
     * Defines current options.
     */
    context: DataTableContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface DataTableSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: DataTableProps;
    /**
     * Defines current inline state.
     */
    state: DataTableState;
}

/**
 * Custom datatable export metadata.
 */
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

/**
 * Custom datatable filter metadata.
 */
export interface DataTableFilterMetaData {
    /**
     * Filter value
     */
    value: any;
    /**
     * Filter match mode
     */
    matchMode: HintedString<'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter'> | undefined;
}

/**
 * Custom datatable operator filter metadata.
 */
export interface DataTableOperatorFilterMetaData {
    /**
     * Filter operator
     */
    operator: string;
    /**
     * Array of filter meta datas.
     */
    constraints: DataTableFilterMetaData[];
}

/**
 * Custom datatable filter metadata.
 */
export interface DataTableFilterMeta {
    /**
     * Extra options
     */
    [key: string]: string | DataTableFilterMetaData | DataTableOperatorFilterMetaData;
}

/**
 * Custom datatable sort meta.
 */
export interface DataTableSortMeta {
    /**
     * Column field
     */
    field: string | ((item: any) => string) | undefined;
    /**
     * Column sort order
     */
    order: 1 | 0 | -1 | undefined | null;
}

/**
 * Custom datatable expanded rows.
 */
export interface DataTableExpandedRows {
    [key: string]: boolean;
}

/**
 * Custom datatable editing rows.
 */
export interface DataTableEditingRows {
    [key: string]: boolean;
}

/**
 * Custom datatable export csv metadata.
 */
export interface DataTableExportCSVOptions {
    /**
     * Whether to export only selection data.
     */
    selectionOnly: boolean;
}

/**
 * Custom datatable filter inline button props options.
 */
export interface DataTableFilterButtonInlinePropsOptions {
    /**
     * Apply button props
     */
    clear: ButtonProps | undefined;
}

/**
 * Custom datatable filter popover button props options.
 */
export interface DataTableFilterButtonPopoverPropsOptions {
    /**
     * Add rule button props
     */
    addRule: ButtonProps | undefined;
    /**
     * Remove rule button props
     */
    removeRule: ButtonProps | undefined;
    /**
     * Apply button props
     */
    apply: ButtonProps | undefined;
    /**
     * Apply button props
     */
    clear: ButtonProps | undefined;
}

/**
 * Custom datatable filter buttons' props options.
 */
export interface DataTableFilterButtonPropsOptions {
    /**
     * Filter button props
     */
    filter: ButtonProps | undefined;
    /**
     * Inline filter buttons' options
     */
    inline: DataTableFilterButtonInlinePropsOptions | undefined;
    /**
     * Popover filter buttons' options
     */
    popover: DataTableFilterButtonPopoverPropsOptions | undefined;
}

/**
 * Custom datatable edit buttons' props options.
 */
export interface DataTableEditButtonPropsOptions {
    /**
     * Init button props
     */
    init: ButtonProps | undefined;
    /**
     * Save button props
     */
    save: ButtonProps | undefined;
    /**
     * Cancel button props
     */
    cancel: ButtonProps | undefined;
}

/**
 * Custom sort event.
 * @see {@link DataTableEmitsOptions.sort}
 */
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
     */
    sortField: string | ((item: any) => string) | undefined;
    /**
     * Sort order as integer
     */
    sortOrder: 1 | 0 | -1 | undefined | null;
    /**
     * MultiSort metadata
     */
    multiSortMeta: DataTableSortMeta[] | undefined;
    /**
     * Collection of active filters
     * @see DataTableFilterMeta
     */
    filters: DataTableFilterMeta;
    /**
     * Match modes per field
     */
    filterMatchModes: HintedString<'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter'> | undefined;
}

/**
 * Custom pagination event.
 * @see {@link DataTableEmitsOptions.page}
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
 * Custom filter event.
 * @see {@link DataTableEmitsOptions.filter}
 * @extends DataTableSortEvent
 */
export interface DataTableFilterEvent extends DataTableSortEvent {
    /**
     * Filtered collection (non-lazy only)
     */
    filteredValue: any;
}

/**
 * Custom row click event.
 * @see {@link DataTableEmitsOptions['row-click']}
 */
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
 * Custom row double click event.
 * @see {@link DataTableEmitsOptions['row-dblclick']]}
 * @extends DataTableRowClickEvent
 */
export interface DataTableRowDoubleClickEvent extends DataTableRowClickEvent {}

/**
 * Custom row context menu event.
 * @see {@link DataTableEmitsOptions['row-contextmenu']}
 * @extends DataTableRowClickEvent
 */
export interface DataTableRowContextMenuEvent extends DataTableRowClickEvent {}

/**
 * Custom row select event.
 * @see {@link DataTableEmitsOptions['row-select']}
 */
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
 * Custom row unselect event.
 * @see {@link DataTableEmitsOptions['row-unselect']}
 * @extends DataTableRowSelectEvent
 */
export interface DataTableRowUnselectEvent extends DataTableRowSelectEvent {}

/**
 * Custom row select all event.
 * @see {@link DataTableEmitsOptions['row-select-all']}
 */
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

/**
 * Custom row unselect all event.
 * @see {@link DataTableEmitsOptions['row-unselect-all']}
 */
export interface DataTableRowUnselectAllEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
}

/**
 * Custom row select all change event.
 * @see {@link DataTableEmitsOptions['select-all-change']}
 */
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

/**
 * Custom column resize end event.
 * @see {@link DataTableEmitsOptions['column-resize-end']}
 */
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

/**
 * Custom row column reorder event.
 * @see {@link DataTableEmitsOptions['column-reorder']}
 */
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

/**
 * Custom row reorder event.
 * @see {@link DataTableEmitsOptions['row-reorder']}
 */
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

/**
 * Custom row expand event.
 * @see {@link DataTableEmitsOptions['row-expand']}
 */
export interface DataTableRowExpandEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Expanded row data
     */
    data: any;
}

/**
 * Custom row collapse event.
 * @see {@link DataTableEmitsOptions['row-expand']}
 * @extends DataTableRowExpandEvent
 */
export interface DataTableRowCollapseEvent extends DataTableRowExpandEvent {}

/**
 * Custom cell edit init event.
 * @see {@link DataTableEmitsOptions['cell-edit-init']}
 */
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
 * Custom cell edit cancel event.
 * @see {@link DataTableEmitsOptions['cell-edit-cancel']}
 * @extends DataTableCellEditInitEvent
 */
export interface DataTableCellEditCancelEvent extends DataTableCellEditInitEvent {}

/**
 * Custom cell edit complete event.
 * @see {@link DataTableEmitsOptions['cell-edit-complete']}
 */
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

/**
 * Custom row edit init event.
 * @see {@link DataTableEmitsOptions['row-edit-init']}
 */
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
 * Custom row edit save event.
 * @see {@link DataTableEmitsOptions['row-edit-save']}
 * @extends DataTableRowEditInitEvent
 */
export interface DataTableRowEditSaveEvent extends DataTableRowEditInitEvent {}

/**
 *  Custom row edit cancel event.
 * @see {@link DataTableEmitsOptions['row-edit-cancel']}
 * @extends DataTableRowEditCancelEvent
 */
export interface DataTableRowEditCancelEvent extends DataTableRowEditInitEvent {}

/**
 * Custom state event.
 * @see {@link DataTableEmitsOptions['state-save']}
 */
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
     */
    sortOrder: 1 | 0 | -1 | undefined | null;
    /**
     * MultiSort metadata
     */
    multiSortMeta: DataTableSortMeta[] | undefined;
    /**
     * Collection of active filters
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

/**
 * Custom passthrough(pt) options.
 * @see {@link DataTableProps.pt}
 */
export interface DataTablePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the Paginator component.
     * @see {@link PaginatorPassThroughOptionType}
     */
    pcPaginator?: PaginatorPassThroughOptionType<DataTableSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the table container's DOM element.
     */
    tableContainer?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the VirtualScroller component.
     * @see {@link VirtualScrollerPassThroughOptionType}
     */
    virtualScroller?: VirtualScrollerPassThroughOptionType;
    /**
     * Used to pass attributes to the table's DOM element.
     */
    table?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the virtual scroller spacer's DOM element.
     */
    virtualScrollerSpacer?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the thead's DOM element.
     */
    thead?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the header row's DOM element.
     */
    headerRow?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the tbody's DOM element.
     */
    tbody?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the rowg roup header's DOM element.
     */
    rowGroupHeader?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row group header cell's DOM element.
     */
    rowGroupHeaderCell?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the body row's DOM element.
     */
    bodyRow?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row expansion's DOM element.
     */
    rowExpansion?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row expansion cell's DOM element.
     */
    rowExpansionCell?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row group footer's DOM element.
     */
    rowGroupFooter?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row group footer cell's DOM element.
     */
    rowGroupFooterCell?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the empty message cell's DOM element.
     */
    emptyMessageCell?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the tfoot's DOM element.
     */
    tfoot?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the footer row's DOM element.
     */
    footerRow?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the column resize indicator's DOM element.
     */
    columnResizeIndicator?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row reorder indicator up's DOM element.
     */
    rowReorderIndicatorUp?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row reorder indicator down's DOM element.
     */
    rowReorderIndicatorDown?: DataTablePassThroughOptionType;
    /**
     * Used to pass attributes to the ColumnGroup helper components.
     */
    columnGroup?: ColumnGroupPassThroughOptionType;
    /**
     * Used to pass attributes to the Row helper components.
     */
    row?: RowPassThroughOptionType;
    /**
     * Used to pass attributes to the Column helper components.
     */
    column?: ColumnPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
    /**
     * Used to control Vue Transition API.
     */
    transition?: DataTablePassThroughTransitionType;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DataTablePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in DataTable component.
 */
export interface DataTableState {
    /**
     * Current index of first record as a number.
     */
    d_first: number;
    /**
     * Current number of rows to display in new page as a number.
     */
    d_rows: number;
    /**
     * Current sort field.
     */
    d_sortField: string | ((item: any) => string) | undefined;
    /**
     * Current order to sort the data by default.
     */
    d_sortOrder: number;
    /**
     * Current sortmeta objects to sort the data.
     */
    d_multiSortMeta: DataTableSortMeta[];
    /**
     * Current group sortmeta objects to sort the data.
     */
    d_groupRowsSortMeta: DataTableSortMeta;
    /**
     * Current keys of selected rows.
     */
    d_selectionKeys: any[];
    /**
     * Current keys of rows in expanded state.
     */
    d_expandedRowKeys: any[];
    /**
     * Current order of the columns.
     */
    d_columnOrder: string[];
    /**
     * Current keys of editing rows.
     */
    d_editingRowKeys: any;
    /**
     * Current editing meta data.
     */
    d_editingMeta: object;
    /**
     * Current filters object.
     */
    d_filters: DataTableFilterMeta;
    /**
     * Current editing as a boolean.
     * @defaultValue false
     */
    d_editing: boolean;
}

/**
 * Defines current options in DataTable component.
 */
export interface DataTableContext {
    /**
     * Current index of the row.
     */
    index: number;
    /**
     * Current selectable state of row as a boolean.
     * @defaultValue false
     */
    selectable: boolean;
    /**
     * Current selected state of row as a boolean.
     * @defaultValue false
     */
    selected: boolean;
    /**
     * Current stripedRows state of row as a boolean.
     * @defaultValue false
     */
    stripedRows: boolean;
}

/**
 * Defines valid properties in DataTable component.
 */
export interface DataTableProps {
    /**
     * An array of objects to display.
     */
    value?: any[] | undefined | null;
    /**
     * Name of the field that uniquely identifies the a record in the data.
     */
    dataKey?: string | ((item: any) => string) | undefined;
    /**
     * Number of rows to display per page.
     * @defaultValue 0
     */
    rows?: number | undefined;
    /**
     * Index of the first row to be displayed.
     * @defaultValue 0
     */
    first?: number | undefined;
    /**
     * Number of total records, defaults to length of value when not defined.
     * @defaultValue 0
     */
    totalRecords?: number | undefined;
    /**
     * When specified as true, enables the pagination.
     * @defaultValue false
     */
    paginator?: boolean | undefined;
    /**
     * Position of the paginator, options are 'top','bottom' or 'both'.
     * @defaultValue bottom
     */
    paginatorPosition?: 'top' | 'bottom' | 'both' | undefined;
    /**
     * Whether to show it even there is only one page.
     * @defaultValue true
     */
    alwaysShowPaginator?: boolean | undefined;
    /**
     * Template of the paginator. It can be customized using the template property using the predefined keys.
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
     * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
     */
    paginatorTemplate?: any | string;
    /**
     * Number of page links to display.
     * @defaultValue 5
     */
    pageLinkSize?: number | undefined;
    /**
     * Array of integer values to display inside rows per page dropdown.
     */
    rowsPerPageOptions?: number[] | undefined;
    /**
     * Template of the current page report element. It displays information about the pagination state. Available placeholders are the following;
     *
     * - {currentPage}
     * - {totalPages}
     * - {rows}
     * - {first}
     * - {last}
     * - {totalRecords}
     * @defaultValue '({currentPage} of {totalPages})'
     */
    currentPageReportTemplate?: string | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * Displays a loader to indicate data load is in progress.
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * The icon to show while indicating data load is in progress.
     */
    loadingIcon?: string | undefined;
    /**
     * Property name or a getter function of a row data used for sorting by default
     */
    sortField?: string | ((item: any) => string) | undefined;
    /**
     * Order to sort the data by default.
     */
    sortOrder?: number | undefined;
    /**
     * Determines how null values are sorted.
     * @defaultValue 1
     */
    nullSortOrder?: number;
    /**
     * Default sort order of an unsorted column.
     * @defaultValue 1
     */
    defaultSortOrder?: number | undefined;
    /**
     * An array of SortMeta objects to sort the data.
     */
    multiSortMeta?: DataTableSortMeta[] | undefined;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @defaultValue single
     */
    sortMode?: 'single' | 'multiple' | undefined;
    /**
     * When enabled, columns can have an un-sorted state.
     * @defaultValue false
     */
    removableSort?: boolean | undefined;
    /**
     * Filters object with key-value pairs to define the filters.
     * @see DataTableFilterMeta
     */
    filters?: DataTableFilterMeta;
    /**
     * Layout of the filter elements.
     */
    filterDisplay?: 'menu' | 'row' | undefined;
    /**
     * 	An array of fields as string or function to use in global filtering.
     */
    globalFilterFields?: (string | ((data: any) => string))[] | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     */
    filterLocale?: string | undefined;
    /**
     * Selected row in single mode or an array of values in multiple mode.
     */
    selection?: any[] | any | undefined;
    /**
     * Specifies the selection mode.
     */
    selectionMode?: 'single' | 'multiple' | undefined;
    /**
     * Algorithm to define if a row is selected.
     * @defaultValue deepEquals
     */
    compareSelectionBy?: 'equals' | 'deepEquals' | undefined;
    /**
     * Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and
     * when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @defaultValue false
     */
    metaKeySelection?: boolean | undefined;
    /**
     * Enables context menu integration.
     * @defaultValue false
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
     * @defaultValue false
     */
    rowHover?: boolean | undefined;
    /**
     * Character to use as the csv separator.
     * @defaultValue ,
     */
    csvSeparator?: string | undefined;
    /**
     * Name of the exported file.
     * @defaultValue download
     */
    exportFilename?: string | undefined;
    /**
     * Custom function to export data.
     */
    exportFunction?: (options: DataTableExportFunctionOptions) => any;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @defaultValue false
     */
    resizableColumns?: boolean | undefined;
    /**
     * Defines whether the overall table width.
     * @defaultValue fit
     */
    columnResizeMode?: 'fit' | 'expand' | undefined;
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @defaultValue false
     */
    reorderableColumns?: boolean | undefined;
    /**
     * A collection of row data display as expanded.
     */
    expandedRows?: any[] | DataTableExpandedRows | null;
    /**
     * Icon of the row toggler to display the row as expanded.
     */
    expandedRowIcon?: string | undefined;
    /**
     * Icon of the row toggler to display the row as collapsed.
     */
    collapsedRowIcon?: string | undefined;
    /**
     * Defines the row group mode.
     */
    rowGroupMode?: 'subheader' | 'rowspan' | undefined;
    /**
     * One or more field names to use in row grouping.
     */
    groupRowsBy?: ((field: string) => object) | string[] | string | undefined;
    /**
     * Whether the row groups can be expandable.
     * @defaultValue false
     */
    expandableRowGroups?: boolean | undefined;
    /**
     * An array of group field values whose groups would be rendered as expanded.
     */
    expandedRowGroups?: any[] | DataTableExpandedRows;
    /**
     * Defines where a stateful table keeps its state.
     * @defaultValue session
     */
    stateStorage?: 'session' | 'local' | undefined;
    /**
     * Unique identifier of a stateful table to use in state storage.
     */
    stateKey?: string | undefined;
    /**
     * Defines the incell editing mode.
     */
    editMode?: 'cell' | 'row' | undefined;
    /**
     * A collection of rows to represent the current editing data in row edit mode.
     */
    editingRows?: any[] | DataTableEditingRows;
    /**
     * A function that takes the row data as a parameter and returns a string to apply a particular class for the row.
     * The return value is added to the row's :classes array (see Vue.js class bindings).
     */
    rowClass?: (data: any) => string | object | undefined;
    /**
     * A function that takes the row data as a parameter and returns the inline style object for the corresponding row.
     * The function may also return an array of style objects which will be merged.
     * The return value of this function is directly applied as a Vue.js style-binding on the table row.
     */
    rowStyle?: (data: any) => object | object[] | undefined;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     * @defaultValue false
     */
    scrollable?: boolean | undefined;
    /**
     * Height of the scroll viewport in fixed pixels or the 'flex' keyword for a dynamic size.
     */
    scrollHeight?: HintedString<'flex'> | undefined;
    /**
     * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
     * Note: Currently only vertical orientation mode is supported.
     */
    virtualScrollerOptions?: VirtualScrollerProps;
    /**
     * Items of the frozen part in scrollable DataTable.
     */
    frozenValue?: any[] | undefined | null;
    /**
     * The breakpoint to define the maximum width boundary when using stack responsive layout.
     * @defaultValue 960px
     */
    breakpoint?: string | undefined;
    /**
     * Whether to show grid lines between cells.
     * @defaultValue false
     */
    showGridlines?: boolean | undefined;
    /**
     * Whether to displays rows with alternating colors.
     * @defaultValue false
     */
    stripedRows?: boolean | undefined;
    /**
     *  Highlights automatically the first item.
     *  @defaultValue false
     */
    highlightOnSelect?: boolean | undefined;
    /**
     * Defines the size of the table.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Inline style of the table element.
     */
    tableStyle?: string | object | undefined;
    /**
     * Style class of the table element.
     */
    tableClass?: string | object | undefined;
    /**
     * Used to pass all properties of the TableHTMLAttributes to table element inside the component.
     */
    tableProps?: TableHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLInputElement to the focusable filter input element inside the component.
     */
    filterInputProps?: InputHTMLAttributes | undefined;
    /**
     * Used to pass all filter button property object
     * @defaultValue {
            filter: { severity: 'secondary', text: true, rounded: true },
            inline: {
                clear: { severity: 'secondary', text: true, rounded: true }
            },
            popover: {
                addRule: { severity: 'info', text: true, size: 'small' },
                removeRule: { severity: 'danger', text: true, size: 'small' },
                apply: { size: 'small' },
                clear: { outlined: true, size: 'small' }
            }
        }
     */
    filterButtonProps?: DataTableFilterButtonPropsOptions | undefined;
    /**
     * Used to pass all edit button property object
     * @defaultValue {
            init: { severity: 'secondary', text: true, rounded: true },
            save: { severity: 'secondary', text: true, rounded: true },
            cancel: { severity: 'secondary', text: true, rounded: true }
        }
     */
    editButtonProps?: DataTableEditButtonPropsOptions | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {DataTablePassThroughOptions}
     */
    pt?: PassThrough<DataTablePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in DataTable component.
 */
export interface DataTableSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
    /**
     * Custom paginator start template.
     */
    paginatorstart(): VNode[];
    /**
     * Custom paginator end template.
     */
    paginatorend(): VNode[];
    /**
     * Custom empty template.
     */
    empty(): VNode[];
    /**
     * Custom group header template.
     * @param {Object} scope - group header slot's params.
     */
    groupheader(scope: {
        /**
         * Row data
         */
        data: any;
        /**
         * Row index
         */
        index: number;
    }): VNode[];
    /**
     * Custom group footer template.
     * @param {Object} scope - group footer slot's params.
     */
    groupfooter(scope: {
        /**
         * Row data
         */
        data: any;
        /**
         * Row index
         */
        index: number;
    }): VNode[];
    /**
     * Custom loading template.
     * @param {Object} scope - loading slot's params.
     */
    loading(): VNode[];
    /**
     * Custom expansion template.
     * @param {Object} scope - expansion slot's params.
     */
    expansion(scope: {
        /**
         * Row data
         */
        data: any;
        /**
         * Row index
         */
        index: number;
    }): VNode[];
    /**
     * Custom loading icon template.
     */
    loadingicon(): VNode[];
    /**
     * Custom row reorder indicator up icon template.
     * @deprecated since v4.0. Use 'rowreorderindicatorupicon' slot.
     */
    reorderindicatorupicon(): VNode[];
    /**
     * Custom row reorder indicator up icon template.
     */
    rowreorderindicatorupicon(): VNode[];
    /**
     * Custom reorder indicator down icon template.
     * @deprecated since v4.0. Use 'rowreorderindicatordownicon' slot.
     */
    reorderindicatordownicon(): VNode[];
    /**
     * Custom reorder indicator down icon template.
     */
    rowreorderindicatordownicon(): VNode[];
    /**
     * Custom rowgroup toggler icon template.
     * @param {Object} scope - rowgroup toggler icon slot's params.
     */
    rowgrouptogglericon(scope: {
        /**
         * Current rowgroup's expanded state.
         */
        expanded: boolean;
    }): VNode[];
    /**
     * Custom paginator first page link icon template.
     */
    paginatorfirstpagelinkicon(scope: {
        /**
         * Style class of the paginator first page link icon.
         * @param {Object} scope - paginatorfirstpagelinkicon's params.
         */
        class: string;
    }): VNode[];
    /**
     * Custom paginator previous page link icon template.
     */
    paginatorprevpagelinkicon(scope: {
        /**
         * Style class of the paginator prev page link icon.
         * @param {Object} scope - paginatorprevpagelinkicon's params.
         */
        class: string;
    }): VNode[];
    /**
     * Custom paginator next page link icon template.
     */
    paginatornextpagelinkicon(scope: {
        /**
         * Style class of the paginator next page link icon.
         * @param {Object} scope - paginatornextpagelinkicon's params.
         */
        class: string;
    }): VNode[];
    /**
     * Custom paginator last page link icon template.
     */
    paginatorlastpagelinkicon(scope: {
        /**
         * Style class of the paginator last page link icon.
         * @param {Object} scope - paginatorlastpagelinkicon's params.
         */
        class: string;
    }): VNode[];
    /**
     * Custom paginatorrowsperpagedropdownicon template.
     * @param {Object} scope - paginatorrowsperpagedropdownicon's params.
     */
    paginatorrowsperpagedropdownicon(scope: {
        /**
         * Style class of the paginator rows per page dropdown icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom paginatorjumptopagedropdownicon template.
     * @param {Object} scope - paginatorjumptopagedropdownicon's params.
     */
    paginatorjumptopagedropdownicon(scope: {
        /**
         * Style class of the paginator jump to page dropdown icon.
         */
        class: string;
    }): VNode[];
}
/**
 * Defines valid emits in Datatable component.
 */
export interface DataTableEmitsOptions {
    /**
     * Emitted when the first changes.
     * @param {number} value - New value.
     */
    'update:first'(value: number): void;
    /**
     * Emitted when the rows changes.
     * @param {number} value - New value.
     */
    'update:rows'(value: number): void;
    /**
     * Emitted when the sortField changes.
     * @param {string} value - New value.
     */
    'update:sortField'(value: string): void;
    /**
     * Emitted when the sortOrder changes.
     * @param {number | undefined} value - New value.
     */
    'update:sortOrder'(value: number | undefined): void;
    /**
     * Emitted when the multiSortMeta changes.
     * @param {DataTableSortMeta[] | undefined | null} value - New value.
     */
    'update:multiSortMeta'(value: DataTableSortMeta[] | undefined | null): void;
    /**
     * Emitted when the selection changes.
     * @param {*} value - New value.
     */
    'update:selection'(value: any[] | any | undefined): void;
    /**
     * Emitted when the contextMenuSelection changes.
     * @param {*} value - New value.
     */
    'update:contextMenuSelection'(value: any[] | any | undefined): void;
    /**
     * Emitted when the expandedRows changes.
     * @param {DataTableExpandedRows} value - New value.
     */
    'update:expandedRows'(value: any[] | DataTableExpandedRows): void;
    /**
     * Emitted when the expandedRowGroups changes.
     * @param {DataTableExpandedRows} value - New value.
     */
    'update:expandedRowGroups'(value: any[] | DataTableExpandedRows): void;
    /**
     * Emitted when the filters changes.
     * @param {DataTableFilterMeta} value - New value.
     */
    'update:filters'(value: DataTableFilterMeta): void;
    /**
     * Emitted when the editingRows changes.
     * @param {DataTableEditingRows} value - New value.
     */
    'update:editingRows'(value: any[] | DataTableEditingRows): void;
    /**
     * Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.
     * @param {DataTablePageEvent} event - Custom page event.
     */
    page(event: DataTablePageEvent): void;
    /**
     * Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.
     * @param {DataTableSortEvent} event - Custom sort event.
     */
    sort(event: DataTableSortEvent): void;
    /**
     * Event to emit after filtering, not triggered in lazy mode.
     * @param {DataTableFilterEvent} event - Custom filter event.
     */
    filter(event: DataTableFilterEvent): void;
    /**
     * Callback to invoke after filtering, sorting, pagination and cell editing to pass the rendered value.
     * @param {*} value - Value displayed by the table.
     */
    'value-change'(value: any[]): void;
    /**
     * Callback to invoke when a row is clicked.
     * @param {DataTableRowClickEvent} event - Custom row click event.
     */
    'row-click'(event: DataTableRowClickEvent): void;
    /**
     * Callback to invoke when a row is double clicked.
     * @param {DataTableRowDoubleClickEvent} event - Custom row double click event.
     */
    'row-dblclick'(event: DataTableRowDoubleClickEvent): void;
    /**
     * Callback to invoke when a row is selected with a ContextMenu.
     * @param {DataTableRowContextMenuEvent} event - Custom row context menu event.
     */
    'row-contextmenu'(event: DataTableRowContextMenuEvent): void;
    /**
     * Callback to invoke when a row is selected.
     * @param {DataTableRowSelectEvent} event - Custom row select event.
     */
    'row-select'(event: DataTableRowSelectEvent): void;
    /**
     * Fired when header checkbox is checked.
     * @param {DataTableRowSelectAllEvent} event - Custom row select all event.
     */
    'row-select-all'(event: DataTableRowSelectAllEvent): void;
    /**
     * Fired when header checkbox is unchecked.
     * @param {DataTableRowUnselectAllEvent} event - Custom row unselect all event.
     */
    'row-unselect-all'(event: DataTableRowUnselectAllEvent): void;
    /**
     * Callback to invoke when a row is unselected.
     * @param {DataTableRowUnselectEvent} event - Custom row unselect event.
     */
    'row-unselect'(event: DataTableRowUnselectEvent): void;
    /**
     * Callback to invoke when all data is selected.
     * @param {DataTableSelectAllChangeEvent} event - Custom select all change event.
     */
    'select-all-change'(event: DataTableSelectAllChangeEvent): void;
    /**
     * Callback to invoke when a column is resized.
     * @param {DataTableColumnResizeEndEvent} - Custom column resize event.
     */
    'column-resize-end'(event: DataTableColumnResizeEndEvent): void;
    /**
     * Callback to invoke when a column is reordered.
     * @param {DataTableColumnReorderEvent} event - Custom column reorder event.
     */
    'column-reorder'(event: DataTableColumnReorderEvent): void;
    /**
     * Callback to invoke when a row is reordered.
     * @param {DataTableRowReorderEvent} event - Custom row reorder event.
     */
    'row-reorder'(event: DataTableRowReorderEvent): void;
    /**
     * Callback to invoke when a row is expanded.
     * @param {DataTableRowExpandEvent} event - Custom row expand event.
     */
    'row-expand'(event: DataTableRowExpandEvent): void;
    /**
     * Callback to invoke when a row is collapsed.
     * @param {DataTableRowCollapseEvent} event - Custom row collapse event.
     */
    'row-collapse'(event: DataTableRowCollapseEvent): void;
    /**
     * Callback to invoke when a row group is expanded.
     * @param {DataTableRowExpandEvent} event - Custom row expand event.
     */
    'rowgroup-expand'(event: DataTableRowExpandEvent): void;
    /**
     * Callback to invoke when a row group is collapsed.
     * @param {DataTableRowCollapseEvent} event - Custom row collapse event.
     */
    'rowgroup-collapse'(event: DataTableRowCollapseEvent): void;
    /**
     * Callback to invoke when cell edit is initiated.
     * @param {DataTableCellEditInitEvent} event - Custom cell edit init.
     */
    'cell-edit-init'(event: DataTableCellEditInitEvent): void;
    /**
     * Callback to invoke when cell edit is completed.
     * @param {DataTableCellEditCompleteEvent} event - Custom cell edit complete event.
     */
    'cell-edit-complete'(event: DataTableCellEditCompleteEvent): void;
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {DataTableCellEditCancelEvent} event - Custom cell edit cancel event.
     */
    'cell-edit-cancel'(event: DataTableCellEditCancelEvent): void;
    /**
     * Callback to invoke when row edit is initiated.
     * @param {DataTableRowEditInitEvent} event - Custom row edit init event.
     */
    'row-edit-init'(event: DataTableRowEditInitEvent): void;
    /**
     * Callback to invoke when row edit is saved.
     * @param {DataTableRowEditSaveEvent} event - Custom row edit save event.
     */
    'row-edit-save'(event: DataTableRowEditSaveEvent): void;
    /**
     * Callback to invoke when row edit is cancelled.
     * @param {DataTableRowEditCancelEvent} event - Custom row edit cancel event.
     */
    'row-edit-cancel'(event: DataTableRowEditCancelEvent): void;
    /**
     * Invoked when a stateful table saves the state.
     * @param {DataTableStateEvent} event - Custom state event.
     */
    'state-restore'(event: DataTableStateEvent): void;
    /**
     * Invoked when a stateful table restores the state.
     * @param {DataTableStateEvent} event - Custom state event.
     */
    'state-save'(event: DataTableStateEvent): void;
}

export declare type DataTableEmits = EmitFn<DataTableEmitsOptions>;

export interface DataTableMethods {
    /**
     * Exports the data to CSV format.
     * @param {DataTableExportCSVOptions} [options] - Export options.
     * @param {Object[]} [data] - Custom exportable data. This param can be used on lazy dataTable.
     */
    exportCSV(options?: DataTableExportCSVOptions, data?: any[]): void;
}

/**
 * **PrimeVue - DataTable**
 *
 *  * _DataTable displays data in tabular format._
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const DataTable: DefineComponent<DataTableProps, DataTableSlots, DataTableEmits, DataTableMethods>;

declare module 'vue' {
    export interface GlobalComponents {
        DataTable: GlobalComponentConstructor<DataTableProps, DataTableSlots, DataTableEmits>;
    }
}

export default DataTable;

import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
import { TreeNode } from '../tree';

type TreeTablePaginatorPositionType = 'top' | 'bottom' | 'both' | undefined;

type TreeTableSortFieldType = string | ((item: any) => string) | undefined;

type TreeTableMultiSortMetaType = TreeTableSortMeta[] | undefined | null;

type TreeTableSortOrderType = 1 | 0 | -1 | undefined | null;

type TreeTableSortModeType = 'single' | 'multiple' | undefined;

type TreeTableFilterMatchModeType = 'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter' | undefined;

type TreeTableSelectionModeType = 'single' | 'multiple' | 'checkbox' | undefined;

type TreeTableFilterModeType = 'lenient' | 'strict' | undefined;

type TreeTableColumnResizeModeType = 'fit' | 'expand' | undefined;

type TreeTableScrollDirectionType = 'vertical' | 'horizontal' | 'both' | undefined;

type TreeTableScrollHeightType = 'flex' | string | undefined;

type TreeTableResponsiveLayoutType = 'stack' | 'scroll' | undefined;

export interface TreeTableFilterMetaData {
    /**
     * Filter value
     */
    value: any;
    /**
     * Filter match mode
     * @see TreeTableFilterMatchModeType
     */
    matchMode: TreeTableFilterMatchModeType;
}

export interface TreeTableOperatorFilterMetaData {
    /**
     * Filter operator
     */
    operator: string;
    /**
     * Array of filter meta datas.
     * @see TreeTableFilterMetaData
     */
    constraints: TreeTableFilterMetaData[];
}

export interface TreeTableFilterMeta {
    /**
     * Filter keys
     * @see TreeTableFilterMetaData
     */
    [key: string]: string | TreeTableFilterMetaData | TreeTableOperatorFilterMetaData;
}

export interface TreeTableSortEvent {
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
     * @see TreeTableSortFieldType
     */
    sortField: TreeTableSortFieldType;
    /**
     * Sort order as integer
     * @see TreeTableSortOrderType
     */
    sortOrder: TreeTableSortOrderType;
    /**
     * MultiSort metadata
     * @see TreeTableMultiSortMetaType
     */
    multiSortMeta: TreeTableMultiSortMetaType;
    /**
     * Collection of active filters
     * @see TreeTableFilterMeta
     */
    filters: TreeTableFilterMeta;
    /**
     * Match modes per field
     * @see TreeTableFilterMatchModeType
     */
    filterMatchModes: TreeTableFilterMatchModeType;
}

/**
 * @extends TreeTableSortEvent
 */
export interface TreeTablePageEvent extends TreeTableSortEvent {
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
 * @extends TreeTableSortEvent
 */
export interface TreeTableFilterEvent extends TreeTableSortEvent {
    /**
     * Filtered collection (non-lazy only)
     */
    filteredValue: any;
}

export interface TreeTableSortMeta {
    /**
     * Column field
     */
    field: string;
    /**
     * Column sort order
     */
    order: TreeTableSortOrderType;
}

export interface TreeTableExpandedKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

export interface TreeTableSelectionKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

export interface TreeTableProps {
    /**
     * An array of treenodes.
     */
    value?: TreeNode[] | undefined;
    /**
     * A map of keys to represent the state of the tree expansion state in controlled mode.
     * @see TreeTableExpandedKeys
     */
    expandedKeys?: TreeTableExpandedKeys;
    /**
     * A map of keys to control the selection state.
     * @see TreeTableSelectionKeys
     */
    selectionKeys?: TreeTableSelectionKeys;
    /**
     * Defines the selection mode.
     * @see TreeTableSelectionModeType
     */
    selectionMode?: TreeTableSelectionModeType;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
     * Default value is true.
     */
    metaKeySelection?: boolean | undefined;
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
     * @see TreeTablePaginatorPositionType
     * Default value is 'bottom'.
     */
    paginatorPosition?: TreeTablePaginatorPositionType;
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
     * When enabled, background of the rows change on hover.
     */
    rowHover?: boolean | undefined;
    /**
     * Whether the cell widths scale according to their content or not.
     */
    autoLayout?: boolean | undefined;
    /**
     * Property name or a getter function of a row data used for sorting by default.
     * @see TreeTableSortFieldType
     */
    sortField?: TreeTableSortFieldType | undefined;
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
     * @see TreeTableMultiSortMetaType
     */
    multiSortMeta?: TreeTableMultiSortMetaType;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @see TreeTableSortModeType
     * Default value is 'single'.
     */
    sortMode?: TreeTableSortModeType;
    /**
     * When enabled, columns can have an un-sorted state.
     */
    removableSort?: boolean | undefined;
    /**
     * Filters object with key-value pairs to define the filters.
     * @see TreeTableFilterMeta
     */
    filters?: TreeTableFilterMeta;
    /**
     * Mode for filtering.
     * @see TreeTableFilterModeType
     *
     */
    filterMode?: TreeTableFilterModeType;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     */
    filterLocale?: string | undefined;
    /**
     * When enabled, columns can be resized using drag and drop.
     */
    resizableColumns?: boolean | undefined;
    /**
     * Defines whether the overall table width should change on column resize.
     * @see TreeTableColumnResizeModeType
     * Default value is 'fit'.
     */
    columnResizeMode?: TreeTableColumnResizeModeType;
    /**
     * Indentation factor as rem value for children nodes.
     * Default value is 1.
     */
    indentation?: number | undefined;
    /**
     * Whether to show grid lines between cells.
     */
    showGridlines?: boolean | undefined;
    /**
     * When specified, enables horizontal and/or vertical scrolling.
     */
    scrollable?: boolean | undefined;
    /**
     * Height of the scroll viewport in fixed pixels or the 'flex' keyword for a dynamic size.
     * @see TreeTableScrollHeightType
     */
    scrollHeight?: TreeTableScrollHeightType;
    /**
     * Orientation of the scrolling.
     * @see TreeTableScrollDirectionType
     * Default value is 'vertical'.
     */
    scrollDirection?: TreeTableScrollDirectionType;
    /**
     * Defines the responsive mode, currently only option is scroll.
     * @see TreeTableResponsiveLayoutType
     * Default value is 'stack'.
     */
    responsiveLayout?: TreeTableResponsiveLayoutType;
}

export interface TreeTableSlots {
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
}

export declare type TreeTableEmits = {
    /**
     * Emitted when the expanded keys change.
     * @param {TreeNode} value - New expanded keys.
     */
    'update:expandedKeys': (value: TreeTableExpandedKeys) => void;
    /**
     * Emitted when the selection keys change.
     * @param {TreeSelectionKeys} value - New selection keys.
     */
    'update:selectionKeys': (event: TreeTableSelectionKeys) => void;
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
     * @param {TreeTableMultiSortMetaType} value - New value.
     */
    'update:multiSortMeta': (value: TreeTableMultiSortMetaType) => void;
    /**
     * Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.
     * @param {TreeTablePageEvent} event - Custom page event.
    */
    'page': (event: TreeTablePageEvent) => void;
    /**
     * Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.
     * @param {TreeTableSortEvent} event - Custom sort event.
     */
    'sort': (event: TreeTableSortEvent) => void;
    /**
     * Event to emit after filtering, not triggered in lazy mode.
     * @param {TreeTableFilterEvent} event - Custom filter event.
     */
    'filter': (event: TreeTableFilterEvent) => void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNode} node - Node instance.
     */
    'node-select': (node: TreeNode) => void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNode} node - Node instance.
     */
    'node-unselect': (node: TreeNode) => void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeNode} node - Node instance.
     */
    'node-expand': (node: TreeNode) => void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeNode} node - Node instance.
     */
    'node-collapse': (node: TreeNode) => void;
    /**
     * Callback to invoke when a column is resized.
     * @param {Event} event - Browser event.
     */
    'column-resize-end': (event: Event) => void;
}

declare class TreeTable extends ClassComponent<TreeTableProps, TreeTableSlots, TreeTableEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TreeTable: GlobalComponentConstructor<TreeTable>
    }
}

/**
 *
 * TreeTable is used to display hierarchical data in tabular format.
 *
 * Helper Components:
 *
 * - Column
 *
 * Demos:
 *
 * - [TreeTable](https://www.primefaces.org/primevue/showcase/#/treetable)
 *
 */
export default TreeTable;

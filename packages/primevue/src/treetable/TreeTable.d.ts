/**
 *
 * TreeTable is used to display hierarchical data in tabular format.
 *
 * [Live Demo](https://www.primevue.org/treetable/)
 *
 * @module treetable
 *
 */
import type { DefineComponent, DesignToken, EmitFn, HintedString, PassThrough } from '@primevue/core';
import type { ComponentHooks } from '@primevue/core/basecomponent';
import type { ColumnPassThroughOptionType } from 'primevue/column';
import type { PaginatorPassThroughOptionType } from 'primevue/paginator';
import type { PassThroughOptions } from 'primevue/passthrough';
import type { TreeNode } from 'primevue/treenode';
import { VNode } from 'vue';

export declare type TreeTablePassThroughOptionType = TreeTablePassThroughAttributes | ((options: TreeTablePassThroughMethodOptions) => TreeTablePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TreeTablePassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TreeTableProps;
    /**
     * Defines current inline state.
     */
    state: TreeTableState;
    /**
     * Defines current options.
     */
    context: TreeTableContext;
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
export interface TreeTableSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: TreeTableProps;
    /**
     * Defines current inline state.
     */
    state: TreeTableState;
}

/**
 * Custom treetable filter metadata.
 */
export interface TreeTableFilterMetaData {
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
 * Custom operator filter metadata.
 */
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

/**
 * Custom filter metadata.
 */
export interface TreeTableFilterMeta {
    /**
     * Filter keys
     * @see TreeTableFilterMetaData
     */
    [key: string]: string | TreeTableFilterMetaData | TreeTableOperatorFilterMetaData;
}

/**
 * Custom sort event.
 * @see {@link TreeTableEmitsOptions.sort}
 */
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
     */
    sortField: string | ((item: any) => string) | undefined;
    /**
     * Sort order as integer
     */
    sortOrder: 1 | 0 | -1 | undefined | null;
    /**
     * MultiSort metadata
     */
    multiSortMeta: TreeTableSortMeta[] | undefined | null;
    /**
     * Collection of active filters
     * @see TreeTableFilterMeta
     */
    filters: TreeTableFilterMeta;
    /**
     * Match modes per field
     */
    filterMatchModes: HintedString<'startsWith' | 'contains' | 'notContains' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | 'between' | 'dateIs' | 'dateIsNot' | 'dateBefore' | 'dateAfter'> | undefined;
}

/**
 * Custom page event.
 * @see {@link TreeTableEmitsOptions.sort}
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
 * Custom filter event.
 * @see {@link TreeTableEmitsOptions.sort}
 * @extends TreeTableSortEvent
 */
export interface TreeTableFilterEvent extends TreeTableSortEvent {
    /**
     * Filtered collection (non-lazy only)
     */
    filteredValue: any;
}

/**
 * Custom row context menu event.
 * @see {@link TreeTableEmitsOptions['row-contextmenu']}
 */
export interface TreeTableRowContextMenuEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Selected row data.
     */
    node: TreeNode;
}

/**
 * Custom sort metadata.
 */
export interface TreeTableSortMeta {
    /**
     * Column field
     */
    field: string;
    /**
     * Column sort order
     */
    order: 1 | 0 | -1 | undefined | null;
}

/**
 * Custom expanded keys metadata.
 */
export interface TreeTableExpandedKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

/**
 * Custom selection keys metadata.
 */
export interface TreeTableSelectionKeys {
    /**
     * Optional
     */
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TreeTableProps.pt}
 */
export interface TreeTablePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the loading wrapper's DOM element.
     */
    loading?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the loading icon's DOM element.
     */
    loadingIcon?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the Paginator component.
     * @see {@link PaginatorPassThroughOptionType}
     */
    pcPaginator?: PaginatorPassThroughOptionType<TreeTableSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the table container's DOM element.
     */
    tableContainer?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the table's DOM element.
     */
    table?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the thead's DOM element.
     */
    thead?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the header row's DOM element.
     */
    headerRow?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the tbody's DOM element.
     */
    tbody?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the row's DOM element.
     */
    row?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the empty message cell's DOM element.
     */
    emptyMessageCell?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the tfoot's DOM element.
     */
    tfoot?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the footer row's DOM element.
     */
    footerRow?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the column resize indicator's DOM element.
     */
    columnResizeIndicator?: TreeTablePassThroughOptionType;
    /**
     * Used to pass attributes to the Column helper components.
     */
    column?: ColumnPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TreeTablePassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in TreeTable component.
 */
export interface TreeTableState {
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
    d_multiSortMeta: TreeTableSortMeta[];
    /**
     * Current group sortmeta objects to sort the data.
     */
    d_groupRowsSortMeta: TreeTableSortMeta;
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
    d_filters: TreeTableFilterMeta;
    /**
     * Current editing as a boolean.
     * @defaultValue false
     */
    d_editing: boolean;
}

/**
 * Defines current options in TreeTable component.
 */
export interface TreeTableContext {
    /**
     * Current node of the item.
     */
    node: TreeNode;
    /**
     * Current index state of the item.
     */
    index: number;
    /**
     * Current frozen state of the row as a boolean.
     * @defaultValue false
     */
    frozen: boolean;
    /**
     * Current selectable state of the row as a boolean.
     * @defaultValue false
     */
    selectable: boolean;
    /**
     * Current selected state of the row as a boolean.
     * @defaultValue false
     */
    selected: boolean;
    /**
     * Current horizontal and/or vertical scrolling state.
     * @defaultValue false
     */
    scrollable: boolean;
    /**
     * Current show gridlines state.
     * @defaultValue false
     */
    showGridlines: boolean;
    /**
     * Current size of the table.
     * @defaultValue null
     */
    size: string | null;
    /**
     * Current check state of the node as a boolean.
     * @defaultValue false
     */
    checked: boolean;
    /**
     * Current partial check state of the node as a boolean.
     * @defaultValue false
     */
    partialChecked: boolean;
}

/**
 * Defines valid properties in TreeTable component.
 */
export interface TreeTableProps {
    /**
     * An array of treenodes.
     */
    value?: TreeNode[] | undefined;
    /**
     * Name of the field that uniquely identifies the a record in the data.
     * @defaultValue "key"
     */
    dataKey?: string | ((item: any) => string) | undefined;
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
     */
    selectionMode?: HintedString<'single' | 'multiple' | 'checkbox'> | undefined;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually.
     * On touch enabled devices, metaKeySelection is turned off automatically.
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
     * Number of rows to display per page.
     */
    rows?: number | undefined;
    /**
     * Index of the first row to be displayed.
     * @defaultValue 0
     */
    first?: number | undefined;
    /**
     * Number of total records, defaults to length of value when not defined.
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
    paginatorPosition?: HintedString<'top' | 'bottom' | 'both'> | undefined;
    /**
     * Whether to show it even there is only one page.
     * @defaultValue true
     */
    alwaysShowPaginator?: boolean | undefined;
    /**
     * Template of the paginator. It can be customized using the template property using the predefined keys. Here are the available elements that can be placed inside a paginator in any order.
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
     *
     * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
     */
    paginatorTemplate?: string | undefined;
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
     * Template of the current page report element. It displays information about the pagination state.
     *
     * - {currentPage}
     * - {totalPages}
     * - {rows}
     * - {first}
     * - {last}
     * - {totalRecords}
     *
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
     * Loading mode display.
     * @defaultValue mask
     */
    loadingMode?: HintedString<'mask' | 'icon'> | undefined;
    /**
     * When enabled, background of the rows change on hover.
     * @defaultValue false
     */
    rowHover?: boolean | undefined;
    /**
     * Whether the cell widths scale according to their content or not.
     * @defaultValue false
     */
    autoLayout?: boolean | undefined;
    /**
     * Property name or a getter function of a row data used for sorting by default.
     */
    sortField?: string | ((item: any) => string) | undefined | undefined;
    /**
     * Order to sort the data by default.
     */
    sortOrder?: number | undefined;
    /**
     * Default sort order of an unsorted column.
     * @defaultValue 1
     */
    defaultSortOrder?: number | undefined;
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     */
    multiSortMeta?: TreeTableSortMeta[] | undefined | null;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @defaultValue single
     */
    sortMode?: HintedString<'single' | 'multiple'> | undefined;
    /**
     * When enabled, columns can have an un-sorted state.
     * @defaultValue false
     */
    removableSort?: boolean | undefined;
    /**
     * Filters object with key-value pairs to define the filters.
     * @see TreeTableFilterMeta
     */
    filters?: TreeTableFilterMeta;
    /**
     * Mode for filtering.
     * @defaultValue lenient
     */
    filterMode?: HintedString<'lenient' | 'strict'> | undefined;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     */
    filterLocale?: string | undefined;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @defaultValue false
     */
    resizableColumns?: boolean | undefined;
    /**
     * Defines whether the overall table width should change on column resize.
     * @defaultValue fit
     */
    columnResizeMode?: HintedString<'fit' | 'expand'> | undefined;
    /**
     * Indentation factor as rem value for children nodes.
     * @defaultValue 1
     */
    indentation?: number | undefined;
    /**
     * Whether to show grid lines between cells.
     * @defaultValue false
     */
    showGridlines?: boolean | undefined;
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
     * Defines the size of the table.
     */
    size?: HintedString<'small' | 'large'> | undefined;
    /**
     * Inline style of the table element.
     */
    tableStyle?: string | object | undefined;
    /**
     * Style class of the table element.
     */
    tableClass?: string | object | undefined;
    /**
     * Props to pass to the table element.
     */
    tableProps?: any | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TreeTablePassThroughOptions}
     */
    pt?: PassThrough<TreeTablePassThroughOptions>;
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
 * Defines valid slots in TreeTable component.
 */
export interface TreeTableSlots {
    /**
     * Custom header template.
     */
    header(): VNode[];
    /**
     * Custom footer template.
     */
    footer(): VNode[];
    /**
     * Custom empty template.
     */
    empty(): VNode[];
    /**
     * Custom loading icon template.
     */
    loadingicon(): VNode[];
    /**
     * Custom checkbox icon template.
     */
    checkboxicon(): VNode[];
    paginatorcontainer(scope: {
        /**
         * Index of first record
         */
        first: number;
        /**
         * Index of last record
         */
        last: number;
        /**
         * Number of rows to display in new page
         */
        rows: number;
        /**
         * New page number
         */
        page: number;
        /**
         * Total number of pages
         */
        pageCount?: number;
        /**
         * Direct page links
         */
        pageLinks?: number;
        /**
         * Total records
         */
        totalRecords?: number;
        /**
         * First page function.
         * @param {Event} event - Browser event
         */
        firstPageCallback: (event: Event) => void;
        /**
         * Last page function.
         * @param {Event} event - Browser event
         */
        lastPageCallback: (event: Event) => void;
        /**
         * Previous page function.
         * @param {Event} event - Browser event
         */
        prevPageCallback: (event: Event) => void;
        /**
         * Next page function.
         * @param {Event} event - Browser event
         */
        nextPageCallback: (event: Event) => void;
        /**
         * Row change function.
         */
        rowChangeCallback: (value: number) => void;
        /**
         * Page change function.
         */
        changePageCallback: (value: number) => void;
    }): VNode[];
    /**
     * Custom paginator start template.
     */
    paginatorstart(): VNode[];
    /**
     * Custom paginator end template.
     */
    paginatorend(): VNode[];
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
 * Defines valid emits in TreeTable component.
 */
export interface TreeTableEmitsOptions {
    /**
     * Emitted when the expanded keys change.
     * @param {TreeNode} value - New expanded keys.
     */
    'update:expandedKeys'(value: TreeTableExpandedKeys): void;
    /**
     * Emitted when the selection keys change.
     * @param {TreeSelectionKeys} value - New selection keys.
     */
    'update:selectionKeys'(event: TreeTableSelectionKeys): void;
    /**
     * Emitted when the contextMenuSelection changes.
     * @param {*} value - New value.
     */
    'update:contextMenuSelection'(value: any[] | any | undefined): void;
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
     * @param {TreeTableSortMeta[] | undefined | null} value - New value.
     */
    'update:multiSortMeta'(value: TreeTableSortMeta[] | undefined | null): void;
    /**
     * Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.
     * @param {TreeTablePageEvent} event - Custom page event.
     */
    page(event: TreeTablePageEvent): void;
    /**
     * Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.
     * @param {TreeTableSortEvent} event - Custom sort event.
     */
    sort(event: TreeTableSortEvent): void;
    /**
     * Event to emit after filtering, not triggered in lazy mode.
     * @param {TreeTableFilterEvent} event - Custom filter event.
     */
    filter(event: TreeTableFilterEvent): void;
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNode} node - Node instance.
     */
    'node-select'(node: TreeNode): void;
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNode} node - Node instance.
     */
    'node-unselect'(node: TreeNode): void;
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeNode} node - Node instance.
     */
    'node-expand'(node: TreeNode): void;
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeNode} node - Node instance.
     */
    'node-collapse'(node: TreeNode): void;
    /**
     * Callback to invoke when a column is resized.
     * @param {Event} event - Browser event.
     */
    'column-resize-end'(event: Event): void;
    /**
     * Callback to invoke when a row is selected with a ContextMenu.
     * @param {TreeTableRowContextMenuEvent} event - Custom row context menu event.
     */
    'row-contextmenu'(event: TreeTableRowContextMenuEvent): void;
}

export declare type TreeTableEmits = EmitFn<TreeTableEmitsOptions>;

/**
 * **PrimeVue - TreeTable**
 *
 * _TreeTable is used to display hierarchical data in tabular format._
 *
 * [Live Demo](https://www.primevue.org/treetable/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const TreeTable: DefineComponent<TreeTableProps, TreeTableSlots, TreeTableEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        TreeTable: DefineComponent<TreeTableProps, TreeTableSlots, TreeTableEmits>;
    }
}

export default TreeTable;

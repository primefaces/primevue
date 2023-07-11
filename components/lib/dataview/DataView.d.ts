/**
 *
 * DataView displays data in grid or list layout with pagination and sorting features.
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 *
 * @module dataview
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PaginatorPassThroughOptionType } from '../paginator';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export declare type DataViewPassThroughOptionType = DataViewPassThroughAttributes | ((options: DataViewPassThroughMethodOptions) => DataViewPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface DataViewPassThroughMethodOptions {
    instance: any;
    props: DataViewProps;
    state: DataViewState;
}
/**
 * Custom page event.
 * @see {@link DataViewEmits.page}
 */
export interface DataViewPageEvent {
    /**
     * New page number
     */
    page: number;
    /**
     * Index of first record
     */
    first: number;
    /**
     * Number of rows to display in new page
     */
    rows: number;
    /**
     * Total number of pages
     */
    pageCount: number;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link DataViewProps.pt}
 */
export interface DataViewPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: DataViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the header's DOM element.
     */
    header?: DataViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the Paginator component.
     * @see {@link PaginatorPassThroughOptionType}
     */
    paginator?: PaginatorPassThroughOptionType;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: DataViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the grid's DOM element.
     */
    grid?: DataViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the column's DOM element.
     */
    column?: DataViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the empty message's DOM element.
     */
    emptyMessage?: DataViewPassThroughOptionType;
    /**
     * Uses to pass attributes to the footer's DOM element.
     */
    footer?: DataViewPassThroughOptionType;
    /**
     * Uses to manage all lifecycle hooks
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface DataViewPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in DataView component.
 */
export interface DataViewState {
    /**
     * Current index of first record as a number.
     */
    d_first: number;
    /**
     * Current number of rows to display in new page as a number.
     */
    d_rows: number;
}

/**
 * Defines valid properties in DataView component. In addition to these, all properties of HTMLDivElement can be used in this component.
 */
export interface DataViewProps {
    /**
     * An array of objects to display.
     */
    value?: any[] | undefined;
    /**
     * Layout of the items, valid values are 'list' and 'grid'.
     * @defaultValue list
     */
    layout?: 'list' | 'grid' | undefined;
    /**
     * Number of rows to display per page.
     * @defaultValue 0
     */
    rows?: number | undefined;
    /**
     * Index of the first record to render.
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
    paginatorPosition?: 'top' | 'bottom' | 'both' | undefined;
    /**
     * Whether to show it even there is only one page.
     * @defaultValue true
     */
    alwaysShowPaginator?: boolean | undefined;
    /**
     * Template of the paginator. It can be customized using the template property using the predefined keys,
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
     * Property name or a getter function of data to use in sorting by default.
     */
    sortField?: string | ((item: any) => string) | undefined;
    /**
     * Order to sort the data by default.
     */
    sortOrder?: number | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * Name of the data that uniquely identifies the a record in the data.
     */
    dataKey: string | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {DataViewPassThroughOptions}
     */
    pt?: DataViewPassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in DataView component.
 */
export interface DataViewSlots {
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
     * Custom paginator start template.
     */
    paginatorstart(): VNode[];
    /**
     * Custom paginator end template.
     */
    paginatorend(): VNode[];
    /**
     * Custom list template.
     * @param {Object} scope - list slot's params.
     */
    list(scope: {
        /**
         * Value of the component
         */
        data: any;
        /**
         * Index of the grid
         */
        index: number;
    }): VNode[];
    /**
     * Custom list template.
     * @param {Object} scope - list slot's params.
     */
    grid(scope: {
        /**
         * Value of the component
         */
        data: any;
        /**
         * Index of the grid
         */
        index: number;
    }): VNode[];
}

/**
 * Defines valid slots in DataView component.
 */
export interface DataViewEmits {
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
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {DataViewPageEvent} event - Custom page event.
     */
    page(event: DataViewPageEvent): void;
}

/**
 * **PrimeVue - DataViewLayoutOptions**
 *
 * _DataView displays data in grid or list layout with pagination and sorting features._
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class DataView extends ClassComponent<DataViewProps, DataViewSlots, DataViewEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DataView: GlobalComponentConstructor<DataView>;
    }
}

export default DataView;

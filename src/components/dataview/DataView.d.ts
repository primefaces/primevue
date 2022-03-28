import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type DataViewLayoutType = 'list' | 'grid' | undefined;

type DataTablePositionType = 'top' | 'bottom' | 'both' | undefined;

type DataViewSortFieldType = string | ((item: any) => string) | undefined;

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

export interface DataViewProps {
    /**
     * An array of objects to display.
     */
    value?: any[] | undefined;
    /**
     * Layout of the items, valid values are 'list' and 'grid'.
     * @see DataViewLayoutType
     * Default value is 'list'.
     */
    layout?: any;
    /**
     * Number of rows to display per page.
     * Default value is 0.
     */
    rows?: number | undefined;
    /**
     * Index of the first record to render.
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
     * @see DataTablePositionType
     * Default value is 'bottom'.
     */
    paginatorPosition?: DataTablePositionType;
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
     * Property name or a getter function of data to use in sorting by default.
     * @see DataViewSortFieldType
     */
    sortField?: DataViewSortFieldType;
    /**
     * Order to sort the data by default.
     */
    sortOrder?: number | undefined;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     */
    lazy?: boolean | undefined;
    /**
     * Name of the data that uniquely identifies the a record in the data.
     */
    dataKey: string | undefined;
}

export interface DataViewSlots {
    /**
     * Custom header template.
     */
    header: () => VNode[];
    /**
     * Custom footer template.
     */
    footer: () => VNode[];
     /**
     * Custom empty template.
     */
    empty: () => VNode[];
    /**
     * Custom paginator start template.
     */
    paginatorstart: () => VNode[];
     /**
     * Custom paginator end template.
     */
    paginatorend: () => VNode[];
    /**
     * Custom list template.
     * @param {Object} scope - list slot's params.
     */
    list: (scope: {
        /**
         * Value of the component
         */
        data: any;
        /**
         * Index of the grid
         */
        index: number;
    }) => VNode[];
    /**
     * Custom list template.
     * @param {Object} scope - list slot's params.
     */
    grid: (scope: {
        /**
         * Value of the component
         */
        data: any;
        /**
         * Index of the grid
         */
        index: number;
    }) => VNode[];
}

export declare type DataViewEmits = {
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
     * Callback to invoke when page changes, the event object contains information about the new state.
     * @param {DataViewPageEvent} event - Custom page event.
     */
    'page': (event: DataViewPageEvent) => void;
}

declare class DataView extends ClassComponent<DataViewProps, DataViewSlots, DataViewEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        DataView: GlobalComponentConstructor<DataView>
    }
}

/**
 *
 * DataView displays data in grid or list layout with pagination and sorting features.
 *
 * Helper API:
 *
 * - PrimeFlex
 *
 * Demos:
 *
 * - [DataView](https://www.primefaces.org/primevue/showcase/#/dataview)
 *
 */
export default DataView;

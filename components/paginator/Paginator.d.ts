import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

export interface PageState {
    /**
     * Index of first record
     */
    first: number;
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
}

export interface PaginatorProps {
    /**
     * Number of total records.
     * Default value is 0.
     */
    totalRecords?: number | undefined;
    /**
     * Data count to display per page.
     * Default value is 0.
     */
    rows?: number | undefined;
    /**
     * Zero-relative number of the first row to be displayed.
     * Default value is 0.
     */
    first?: number | undefined;
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
    template?: string | undefined;
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
     * Whether to show the paginator even there is only one page.
     * Default value is true.
     */
    alwaysShow?: boolean | undefined;
}

export interface PaginatorSlots {
    /**
     * Custom start template.
     * @param {Object} scope - start slot's params.
     */
    start: (scope: {
        /**
         * Current state
         * @see PageState
         */
        state: PageState;
    }) => VNode[];
    /**
     * Custom end template.
     * @param {Object} scope - end slot's params.
     */
    end: (scope: {
        /**
         * Current state
         * @see PageState
         */
        state: PageState;
    }) => VNode[];
}

export declare type PaginatorEmits = {
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
     * @param {PageState} event - New page state.
     */
    'page': (event: PageState) => void;
}

declare class Paginator extends ClassComponent<PaginatorProps, PaginatorSlots, PaginatorEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Paginator: GlobalComponentConstructor<Paginator>
    }
}

/**
 *
 * Paginator is a generic component to display content in paged format.
 *
 * Demos:
 *
 * - [Paginator](https://www.primefaces.org/primevue/showcase/#/paginator)
 *
 */
export default Paginator;

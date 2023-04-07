/**
 *
 * Paginator is a generic component to display content in paged format.
 *
 * [Live Demo](https://primevue.org/paginator)
 *
 * @module paginator
 *
 */
import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Paginator page state metadata.
 */
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

/**
 * Defines valid properties in Paginator component.
 */
export interface PaginatorProps {
    /**
     * Number of total records.
     * @defaultValue 0
     */
    totalRecords?: number | undefined;
    /**
     * Data count to display per page.
     * @defaultValue 0
     */
    rows?: number | undefined;
    /**
     * Zero-relative number of the first row to be displayed.
     * @defaultValue 0
     */
    first?: number | undefined;
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
     * Template of the paginator, can either be a string or an object with key-value pairs to define templates per breakpoint.
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
    template?: any | string;
    /**
     * Template of the current page report element. It displays information about the pagination state. Available placeholders are the following;
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
     * Whether to show the paginator even there is only one page.
     * @defaultValue true
     */
    alwaysShow?: boolean | undefined;
}

/**
 * Defines valid slots in Paginator component.
 */
export interface PaginatorSlots {
    /**
     * Custom start template.
     * @param {Object} scope - start slot's params.
     */
    start(scope: {
        /**
         * Current state
         * @see PageState
         */
        state: PageState;
    }): VNode[];
    /**
     * Custom end template.
     * @param {Object} scope - end slot's params.
     */
    end(scope: {
        /**
         * Current state
         * @see PageState
         */
        state: PageState;
    }): VNode[];
    /**
     * Custom first page link icon template.
     */
    firstpagelinkicon(): VNode[];
    /**
     * Custom previous page link icon template.
     */
    prevpagelinkicon(): VNode[];
    /**
     * Custom finextrst page link icon template.
     */
    nextpagelinkicon(): VNode[];
    /**
     * Custom last page link icon template.
     */
    lastpagelinkicon(): VNode[];
}

/**
 * Defines valid emits in Paginator component.
 */
export interface PaginatorEmits {
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
     * @param {PageState} event - New page state.
     */
    page(event: PageState): void;
}

/**
 * **PrimeVue - Paginator**
 *
 * _Paginator is a generic widget to display content in paged format._
 *
 * [Live Demo](https://www.primevue.org/paginator/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Paginator extends ClassComponent<PaginatorProps, PaginatorSlots, PaginatorEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Paginator: GlobalComponentConstructor<Paginator>;
    }
}

export default Paginator;

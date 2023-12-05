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
import { ComponentHooks } from '../basecomponent';
import { DropdownPassThroughOptions } from '../dropdown';
import { InputNumberPassThroughOptions } from '../inputnumber';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type PaginatorPassThroughOptionType<T = any> = PaginatorPassThroughAttributes | ((options: PaginatorPassThroughMethodOptions<T>) => PaginatorPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface PaginatorPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: PaginatorProps;
    /**
     * Defines current inline state.
     */
    state: PaginatorState;
    /**
     * Defines parent instance.
     */
    parent: T;
    /**
     * Defines current options.
     */
    context: PaginatorContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface PaginatorSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: PaginatorProps;
    /**
     * Defines current inline state.
     */
    state: PaginatorState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link PaginatorProps.pt}
 */
export interface PaginatorPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the paginator wrapper's DOM element.
     */
    paginatorWrapper?: PaginatorPassThroughOptionType<T> | any;
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the start's DOM element.
     */
    start?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the first page button's DOM element.
     */
    firstPageButton?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the first page icon's DOM element.
     */
    firstPageIcon?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the prev page button's DOM element.
     */
    previousPageButton?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the prev page icon's DOM element.
     */
    previousPageIcon?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the next page button's DOM element.
     */
    nextPageButton?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the next page icon's DOM element.
     */
    nextPageIcon?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the last page button's DOM element.
     */
    lastPageButton?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the last page icon's DOM element.
     */
    lastPageIcon?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the pages's DOM element.
     */
    pages?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the page button's DOM element.
     */
    pageButton?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the current's DOM element.
     */
    current?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the Dropdown component.
     * @see {@link DropdownPassThroughOptions}
     */
    rowPerPageDropdown?: DropdownPassThroughOptions<PaginatorSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Dropdown component.
     * @see {@link DropdownPassThroughOptions}
     */
    jumpToPageDropdown?: DropdownPassThroughOptions<PaginatorSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the Dropdown component.
     * @see {@link InputNumberPassThroughOptions}
     */
    jumpToPageInput?: InputNumberPassThroughOptions<PaginatorSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the end's DOM element.
     */
    end?: PaginatorPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface PaginatorPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Paginator component.
 */
export interface PaginatorState {
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
 * Defines current options in Paginator component.
 */
export interface PaginatorContext {
    /**
     * Current active state as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current disabled state of the button as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

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
     * Template of the paginator, can either be a string or an object with key-value pairs to define templates per breakpoint. Available templates are the following;
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
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {PaginatorPassThroughOptions}
     */
    pt?: PassThrough<PaginatorPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
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
    /**
     * Custom rowsperpagedropdownicon template.
     * @param {Object} scope - rowsperpagedropdownicon's params.
     */
    rowsperpagedropdownicon(scope: {
        /**
         * Style class of the rowsperpagedropdown icon.
         */
        class: string;
    }): VNode[];
    /**
     * Custom jumptopagedropdownicon template.
     * @param {Object} scope - jumptopagedropdownicon's params.
     */
    jumptopagedropdownicon(scope: {
        /**
         * Style class of the jumptopagedropdown icon.
         */
        class: string;
    }): VNode[];
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

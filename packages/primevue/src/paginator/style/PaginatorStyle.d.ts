/**
 *
 * Paginator is a generic component to display content in paged format.
 *
 * [Live Demo](https://primevue.org/paginator)
 *
 * @module paginatorstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum PaginatorClasses {
    /**
     * Class name of the paginator element
     */
    paginator = 'p-paginator',
    /**
     * Class name of the content start element
     */
    contentStart = 'p-paginator-content-start',
    /**
     * Class name of the content end element
     */
    contentEnd = 'p-paginator-content-end',
    /**
     * Class name of the first element
     */
    first = 'p-paginator-first',
    /**
     * Class name of the first icon element
     */
    firstIcon = 'p-paginator-first-icon',
    /**
     * Class name of the prev element
     */
    prev = 'p-paginator-prev',
    /**
     * Class name of the prev icon element
     */
    prevIcon = 'p-paginator-prev-icon',
    /**
     * Class name of the next element
     */
    next = 'p-paginator-next',
    /**
     * Class name of the next icon element
     */
    nextIcon = 'p-paginator-next-icon',
    /**
     * Class name of the last element
     */
    last = 'p-paginator-last',
    /**
     * Class name of the last icon element
     */
    lastIcon = 'p-paginator-last-icon',
    /**
     * Class name of the pages element
     */
    pages = 'p-paginator-pages',
    /**
     * Class name of the page element
     */
    page = 'p-paginator-page',
    /**
     * Class name of the current element
     */
    current = 'p-paginator-current',
    /**
     * Class name of the row per page dropdown element
     */
    pcRowPerPageDropdown = 'p-paginator-rpp-dropdown',
    /**
     * Class name of the jump to page dropdown element
     */
    pcJumpToPageDropdown = 'p-paginator-jtp-dropdown',
    /**
     * Class name of the jump to page input element
     */
    pcJumpToPageInputText = 'p-paginator-jtp-input'
}

export interface PaginatorStyle extends BaseStyle {}

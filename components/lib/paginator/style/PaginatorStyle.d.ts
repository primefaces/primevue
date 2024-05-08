/**
 *
 * Paginator is a generic component to display content in paged format.
 *
 * [Live Demo](https://primevue.org/paginator)
 *
 * @module paginatorstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum PaginatorClasses {
    paginator = 'p-paginator',
    contentStart = 'p-paginator-content-start',
    contentEnd = 'p-paginator-content-end',
    first = 'p-paginator-first',
    firstIcon = 'p-paginator-first-icon',
    prev = 'p-paginator-prev',
    prevIcon = 'p-paginator-prev-icon',
    next = 'p-paginator-next',
    nextIcon = 'p-paginator-next-icon',
    last = 'p-paginator-last',
    lastIcon = 'p-paginator-last-icon',
    pages = 'p-paginator-pages',
    page = 'p-paginator-page',
    current = 'p-paginator-current',
    pcRowPerPageDropdown = 'p-paginator-rpp-dropdown',
    pcJumpToPageDropdown = 'p-paginator-jtp-dropdown',
    pcJumpToPageInput = 'p-paginator-jtp-input'
}

export interface PaginatorStyle extends BaseStyle {}

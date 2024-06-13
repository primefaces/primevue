/**
 *
 * DataView displays data in grid or list layout with pagination and sorting features.
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 *
 * @module dataviewstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum DataViewClasses {
    /**
     * Class name of the root element
     */
    root = 'p-dataview',
    /**
     * Class name of the header element
     */
    header = 'p-dataview-header',
    /**
     * Class name of the paginator element
     */
    pcPaginator = 'p-dataview-paginator-[position]',
    /**
     * Class name of the content element
     */
    content = 'p-dataview-content',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-dataview-empty-message', // TODO: remove?
    /**
     * Class name of the footer element
     */
    footer = 'p-dataview-footer'
}

export interface DataViewStyle extends BaseStyle {}

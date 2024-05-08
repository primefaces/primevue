/**
 *
 * DataView displays data in grid or list layout with pagination and sorting features.
 *
 * [Live Demo](https://www.primevue.org/dataview/)
 *
 * @module dataviewstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum DataViewClasses {
    root = 'p-dataview',
    header = 'p-dataview-header',
    pcPaginator = 'p-dataview-paginator-[position]',
    content = 'p-dataview-content',
    emptyMessage = 'p-dataview-empty-message', // TODO: remove?
    footer = 'p-dataview-footer'
}

export interface DataViewStyle extends BaseStyle {}

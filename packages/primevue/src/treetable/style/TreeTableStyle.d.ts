/**
 *
 * TreeTable is used to display hierarchical data in tabular format.
 *
 * [Live Demo](https://www.primevue.org/treetable/)
 *
 * @module treetablestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum TreeTableClasses {
    /**
     * Class name of the root element
     */
    root = 'p-treetable',
    /**
     * Class name of the loading element
     */
    loading = 'p-treetable-loading',
    /**
     * Class name of the mask element
     */
    mask = 'p-treetable-mask',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-treetable-loading-icon',
    /**
     * Class name of the header element
     */
    header = 'p-treetable-header',
    /**
     * Class name of the paginator element
     */
    paginator = 'p-treetable-paginator-[position]',
    /**
     * Class name of the table container element
     */
    tableContainer = 'p-treetable-table-container',
    /**
     * Class name of the table element
     */
    table = 'p-treetable-table',
    /**
     * Class name of the thead element
     */
    thead = 'p-treetable-thead',
    /**
     * Class name of the column resizer element
     */
    columnResizer = 'p-treetable-column-resizer',
    /**
     * Class name of the column title element
     */
    columnTitle = 'p-treetable-column-title',
    /**
     * Class name of the sort icon element
     */
    sortIcon = 'p-treetable-sort-icon',
    /**
     * Class name of the sort badge element
     */
    pcSortBadge = 'p-treetable-sort-badge',
    /**
     * Class name of the tbody element
     */
    tbody = 'p-treetable-tbody',
    /**
     * Class name of the node toggle button element
     */
    nodeToggleButton = 'p-treetable-node-toggle-button',
    /**
     * Class name of the node toggle icon element
     */
    nodeToggleIcon = 'p-treetable-node-toggle-icon',
    /**
     * Class name of the node checkbox element
     */
    pcNodeCheckbox = 'p-treetable-node-checkbox',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-treetable-empty-message',
    /**
     * Class name of the tfoot element
     */
    tfoot = 'p-treetable-tfoot',
    /**
     * Class name of the footer element
     */
    footer = 'p-treetable-footer',
    /**
     * Class name of the column resize indicator element
     */
    columnResizeIndicator = 'p-treetable-column-resize-indicator'
}

export interface TreeTableStyle extends BaseStyle {}

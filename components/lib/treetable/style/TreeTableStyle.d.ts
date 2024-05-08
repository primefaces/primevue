/**
 *
 * TreeTable is used to display hierarchical data in tabular format.
 *
 * [Live Demo](https://www.primevue.org/treetable/)
 *
 * @module treetablestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TreeTableClasses {
    root = 'p-treetable',
    loading = 'p-treetable-loading',
    mask = 'p-treetable-mask',
    loadingIcon = 'p-treetable-loading-icon',
    header = 'p-treetable-header',
    paginator = 'p-treetable-paginator-[position]',
    tableContainer = 'p-treetable-table-container',
    table = 'p-treetable-table',
    thead = 'p-treetable-thead',
    columnResizer = 'p-treetable-column-resizer',
    columnTitle = 'p-treetable-column-title',
    sortIcon = 'p-treetable-sort-icon',
    sortBadge = 'p-treetable-sort-badge',
    tbody = 'p-treetable-tbody',
    nodeToggleButton = 'p-treetable-node-toggle-button',
    nodeToggleIcon = 'p-treetable-node-toggle-icon',
    pcNodeCheckbox = 'p-treetable-node-checkbox',
    emptyMessage = 'p-treetable-empty-message',
    tfoot = 'p-treetable-tfoot',
    footer = 'p-treetable-footer',
    columnResizeIndicator = 'p-treetable-column-resize-indicator'
}

export interface TreeTableStyle extends BaseStyle {}

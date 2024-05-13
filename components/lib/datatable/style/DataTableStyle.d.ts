/**
 *
 * DataTable displays data in tabular format.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module datatablestyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum DataTableClasses {
    root = 'p-datatable',
    mask = 'p-datatable-mask',
    loadingIcon = 'p-datatable-loading-icon',
    header = 'p-datatable-header',
    pcPaginator = 'p-datatable-paginator-[position]',
    tableContainer = 'p-datatable-table-container',
    table = 'p-datatable-table',
    thead = 'p-datatable-thead',
    columnResizer = 'p-datatable-column-resizer',
    columnHeaderContent = 'p-datatable-column-header-content',
    columnTitle = 'p-datatable-column-title',
    sortIcon = 'p-datatable-sort-icon',
    pcSortBadge = 'p-datatable-sort-badge',
    filter = 'p-datatable-filter',
    filterElementContainer = 'p-datatable-filter-element-container',
    pcColumnFilterButton = 'p-datatable-column-filter-button',
    pcColumnFilterClearButton = 'p-datatable-column-filter-clear-button',
    filterOverlay = 'p-datatable-filter-overlay',
    filterConstraintList = 'p-datatable-filter-constraint-list',
    filterConstraint = 'p-datatable-filter-constraint',
    filterConstraintSeparator = 'p-datatable-filter-constraint-separator',
    filterOperator = 'p-datatable-filter-operator',
    pcFilterOperatorDropdown = 'p-datatable-filter-operator-dropdown',
    filterRuleList = 'p-datatable-filter-rule-list',
    filterRule = 'p-datatable-filter-rule',
    pcFilterConstraintDropdown = 'p-datatable-filter-constraint-dropdown',
    pcFilterRemoveRuleButton = 'p-datatable-filter-remove-rule-button',
    pcFilterAddButton = 'p-column-filter-add-button',
    filterButtonbar = 'p-datatable-filter-buttonbar',
    pcFilterClearButton = 'p-datatable-filter-clear-button',
    pcFilterApplyButton = 'p-datatable-filter-apply-button',
    tbody = 'p-datatable-tbody',
    rowGroupHeader = 'p-datatable-row-group-header',
    rowToggleButton = 'p-datatable-row-toggle-button',
    rowToggleIcon = 'p-datatable-row-toggle-icon',
    rowExpansion = 'p-datatable-row-expansion',
    rowGroupFooter = 'p-datatable-row-group-footer',
    emptyMessage = 'p-datatable-empty-message',
    reorderableRowHandle = 'p-datatable-reorderable-row-handle',
    pcRowEditorInit = 'p-datatable-row-editor-init',
    pcRowEditorSave = 'p-datatable-row-editor-save',
    pcRowEditorCancel = 'p-datatable-row-editor-cancel',
    tfoot = 'p-datatable-tfoot',
    virtualScrollerSpacer = 'p-datatable-virtualscroller-spacer',
    footer = 'p-datatable-footer',
    columnResizeIndicator = 'p-datatable-column-resize-indicator',
    rowReorderIndicatorUp = 'p-datatable-row-reorder-indicator-up',
    rowReorderIndicatorDown = 'p-datatable-row-reorder-indicator-down'
}

export interface DataTableStyle extends BaseStyle {}

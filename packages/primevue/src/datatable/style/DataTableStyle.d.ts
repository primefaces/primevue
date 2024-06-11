/**
 *
 * DataTable displays data in tabular format.
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module datatablestyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum DataTableClasses {
    /**
     * Class name of the root element
     */
    root = 'p-datatable',
    /**
     * Class name of the mask element
     */
    mask = 'p-datatable-mask',
    /**
     * Class name of the loading icon element
     */
    loadingIcon = 'p-datatable-loading-icon',
    /**
     * Class name of the header element
     */
    header = 'p-datatable-header',
    /**
     * Class name of the paginator element
     */
    pcPaginator = 'p-datatable-paginator-[position]',
    /**
     * Class name of the table container element
     */
    tableContainer = 'p-datatable-table-container',
    /**
     * Class name of the table element
     */
    table = 'p-datatable-table',
    /**
     * Class name of the thead element
     */
    thead = 'p-datatable-thead',
    /**
     * Class name of the column resizer element
     */
    columnResizer = 'p-datatable-column-resizer',
    /**
     * Class name of the column header content element
     */
    columnHeaderContent = 'p-datatable-column-header-content',
    /**
     * Class name of the column title element
     */
    columnTitle = 'p-datatable-column-title',
    /**
     * Class name of the sort icon element
     */
    sortIcon = 'p-datatable-sort-icon',
    /**
     * Class name of the sort badge element
     */
    pcSortBadge = 'p-datatable-sort-badge',
    /**
     * Class name of the filter element
     */
    filter = 'p-datatable-filter',
    /**
     * Class name of the filter element container element
     */
    filterElementContainer = 'p-datatable-filter-element-container',
    /**
     * Class name of the column filter button element
     */
    pcColumnFilterButton = 'p-datatable-column-filter-button',
    /**
     * Class name of the column filter clear button element
     */
    pcColumnFilterClearButton = 'p-datatable-column-filter-clear-button',
    /**
     * Class name of the filter overlay element
     */
    filterOverlay = 'p-datatable-filter-overlay',
    /**
     * Class name of the filter constraint list element
     */
    filterConstraintList = 'p-datatable-filter-constraint-list',
    /**
     * Class name of the filter constraint element
     */
    filterConstraint = 'p-datatable-filter-constraint',
    /**
     * Class name of the filter constraint separator element
     */
    filterConstraintSeparator = 'p-datatable-filter-constraint-separator',
    /**
     * Class name of the filter operator element
     */
    filterOperator = 'p-datatable-filter-operator',
    /**
     * Class name of the filter operator dropdown element
     */
    pcFilterOperatorDropdown = 'p-datatable-filter-operator-dropdown',
    /**
     * Class name of the filter rule list element
     */
    filterRuleList = 'p-datatable-filter-rule-list',
    /**
     * Class name of the filter rule element
     */
    filterRule = 'p-datatable-filter-rule',
    /**
     * Class name of the filter constraint dropdown element
     */
    pcFilterConstraintDropdown = 'p-datatable-filter-constraint-dropdown',
    /**
     * Class name of the filter remove rule button element
     */
    pcFilterRemoveRuleButton = 'p-datatable-filter-remove-rule-button',
    /**
     * Class name of the filter add rule button element
     */
    pcFilterAddRuleButton = 'p-datatable-filter-add-rule-button',
    /**
     * Class name of the filter buttonbar element
     */
    filterButtonbar = 'p-datatable-filter-buttonbar',
    /**
     * Class name of the filter clear button element
     */
    pcFilterClearButton = 'p-datatable-filter-clear-button',
    /**
     * Class name of the filter apply button element
     */
    pcFilterApplyButton = 'p-datatable-filter-apply-button',
    /**
     * Class name of the tbody element
     */
    tbody = 'p-datatable-tbody',
    /**
     * Class name of the row group header element
     */
    rowGroupHeader = 'p-datatable-row-group-header',
    /**
     * Class name of the row toggle button element
     */
    rowToggleButton = 'p-datatable-row-toggle-button',
    /**
     * Class name of the row toggle icon element
     */
    rowToggleIcon = 'p-datatable-row-toggle-icon',
    /**
     * Class name of the row expansion element
     */
    rowExpansion = 'p-datatable-row-expansion',
    /**
     * Class name of the row group footer element
     */
    rowGroupFooter = 'p-datatable-row-group-footer',
    /**
     * Class name of the empty message element
     */
    emptyMessage = 'p-datatable-empty-message',
    /**
     * Class name of the reorderable row handle element
     */
    reorderableRowHandle = 'p-datatable-reorderable-row-handle',
    /**
     * Class name of the row editor init element
     */
    pcRowEditorInit = 'p-datatable-row-editor-init',
    /**
     * Class name of the row editor save element
     */
    pcRowEditorSave = 'p-datatable-row-editor-save',
    /**
     * Class name of the row editor cancel element
     */
    pcRowEditorCancel = 'p-datatable-row-editor-cancel',
    /**
     * Class name of the tfoot element
     */
    tfoot = 'p-datatable-tfoot',
    /**
     * Class name of the virtual scroller spacer element
     */
    virtualScrollerSpacer = 'p-datatable-virtualscroller-spacer',
    /**
     * Class name of the footer element
     */
    footer = 'p-datatable-footer',
    /**
     * Class name of the column resize indicator element
     */
    columnResizeIndicator = 'p-datatable-column-resize-indicator',
    /**
     * Class name of the row reorder indicator up element
     */
    rowReorderIndicatorUp = 'p-datatable-row-reorder-indicator-up',
    /**
     * Class name of the row reorder indicator down element
     */
    rowReorderIndicatorDown = 'p-datatable-row-reorder-indicator-down'
}

export interface DataTableStyle extends BaseStyle {}

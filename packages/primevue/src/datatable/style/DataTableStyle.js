import { style } from '@primeuix/styles/datatable';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-datatable p-component',
        {
            'p-datatable-hoverable': props.rowHover || props.selectionMode,
            'p-datatable-resizable': props.resizableColumns,
            'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-datatable-scrollable': props.scrollable,
            'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-datatable-striped': props.stripedRows,
            'p-datatable-gridlines': props.showGridlines,
            'p-datatable-sm': props.size === 'small',
            'p-datatable-lg': props.size === 'large'
        }
    ],
    mask: 'p-datatable-mask p-overlay-mask',
    loadingIcon: 'p-datatable-loading-icon',
    header: 'p-datatable-header',
    pcPaginator: ({ position }) => 'p-datatable-paginator-' + position,
    tableContainer: 'p-datatable-table-container',
    table: ({ props }) => [
        'p-datatable-table',
        {
            'p-datatable-scrollable-table': props.scrollable,
            'p-datatable-resizable-table': props.resizableColumns,
            'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
        }
    ],
    thead: 'p-datatable-thead',
    headerCell: ({ instance, props, column }) =>
        column && !instance.columnProp('hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field'))
            ? [
                  'p-datatable-header-cell',
                  {
                      'p-datatable-frozen-column': instance.columnProp('frozen')
                  }
              ]
            : [
                  'p-datatable-header-cell',
                  {
                      'p-datatable-sortable-column': instance.columnProp('sortable'),
                      'p-datatable-resizable-column': instance.resizableColumns,
                      'p-datatable-column-sorted': instance.isColumnSorted(),
                      'p-datatable-frozen-column': instance.columnProp('frozen'),
                      'p-datatable-reorderable-column': props.reorderableColumns
                  }
              ],
    columnResizer: 'p-datatable-column-resizer',
    columnHeaderContent: 'p-datatable-column-header-content',
    columnTitle: 'p-datatable-column-title',
    columnFooter: 'p-datatable-column-footer',
    sortIcon: 'p-datatable-sort-icon',
    pcSortBadge: 'p-datatable-sort-badge',
    filter: ({ props }) => [
        'p-datatable-filter',
        {
            'p-datatable-inline-filter': props.display === 'row',
            'p-datatable-popover-filter': props.display === 'menu'
        }
    ],
    filterElementContainer: 'p-datatable-filter-element-container',
    pcColumnFilterButton: 'p-datatable-column-filter-button',
    pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
    filterOverlay: ({ props }) => [
        'p-datatable-filter-overlay p-component',
        {
            'p-datatable-filter-overlay-popover': props.display === 'menu'
        }
    ],
    filterConstraintList: 'p-datatable-filter-constraint-list',
    filterConstraint: ({ instance, matchMode }) => [
        'p-datatable-filter-constraint',
        {
            'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
        }
    ],
    filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
    filterOperator: 'p-datatable-filter-operator',
    pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
    filterRuleList: 'p-datatable-filter-rule-list',
    filterRule: 'p-datatable-filter-rule',
    pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
    pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
    pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
    filterButtonbar: 'p-datatable-filter-buttonbar',
    pcFilterClearButton: 'p-datatable-filter-clear-button',
    pcFilterApplyButton: 'p-datatable-filter-apply-button',
    tbody: ({ props }) => (props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody'),
    rowGroupHeader: 'p-datatable-row-group-header',
    rowToggleButton: 'p-datatable-row-toggle-button',
    rowToggleIcon: 'p-datatable-row-toggle-icon',
    row: ({ instance, props, index, columnSelectionMode }) => {
        let rowStyleClass = [];

        if (props.selectionMode) {
            rowStyleClass.push('p-datatable-selectable-row');
        }

        if (props.selection) {
            rowStyleClass.push({
                'p-datatable-row-selected': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
            });
        }

        if (props.contextMenuSelection) {
            rowStyleClass.push({
                'p-datatable-contextmenu-row-selected': instance.isSelectedWithContextMenu
            });
        }

        rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');

        return rowStyleClass;
    },
    rowExpansion: 'p-datatable-row-expansion',
    rowGroupFooter: 'p-datatable-row-group-footer',
    emptyMessage: 'p-datatable-empty-message',
    bodyCell: ({ instance }) => [
        {
            'p-datatable-frozen-column': instance.columnProp('frozen')
        }
    ],
    reorderableRowHandle: 'p-datatable-reorderable-row-handle',
    pcRowEditorInit: 'p-datatable-row-editor-init',
    pcRowEditorSave: 'p-datatable-row-editor-save',
    pcRowEditorCancel: 'p-datatable-row-editor-cancel',
    tfoot: 'p-datatable-tfoot',
    footerCell: ({ instance }) => [
        {
            'p-datatable-frozen-column': instance.columnProp('frozen')
        }
    ],
    virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
    footer: 'p-datatable-footer',
    columnResizeIndicator: 'p-datatable-column-resize-indicator',
    rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
    rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};

const inlineStyles = {
    tableContainer: { overflow: 'auto' },
    thead: { position: 'sticky' },
    tfoot: { position: 'sticky' }
};

export default BaseStyle.extend({
    name: 'datatable',
    style,
    classes,
    inlineStyles
});

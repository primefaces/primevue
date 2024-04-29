import BaseStyle from 'primevue/base/style';

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
    loadingOverlay: 'p-datatable-mask p-component-overlay',
    loadingIcon: 'p-datatable-loading-icon',
    header: 'p-datatable-header',
    paginator: ({ position }) => 'p-datatable-paginator-' + position,
    wrapper: 'p-datatable-table-container',
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
        column && !instance.columnProp(column, 'hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field'))
            ? [
                  {
                      'p-datatable-frozen-column': instance.columnProp(column, 'frozen')
                  }
              ]
            : [
                  {
                      'p-datatable-sortable-column': instance.columnProp('sortable'),
                      'p-datatable-resizable-column': instance.resizableColumns,
                      'p-datatable-column-sorted': instance.isColumnSorted(),
                      'p-datatable-frozen-column': instance.columnProp('frozen'),
                      'p-datatable-reorderable-column': props.reorderableColumns
                  }
              ],
    columnResizer: 'p-datatable-column-resizer',
    headerContent: 'p-datatable-column-header-content',
    headerTitle: 'p-datatable-column-title',
    sortIcon: 'p-datatable-sort-icon',
    sortBadge: 'p-datatable-sort-badge',
    columnFilter: ({ props }) => [
        'p-datatable-filter',
        {
            'p-datatable-inline-filter': props.display === 'row',
            'p-datatable-popover-filter': props.display === 'menu'
        }
    ],
    filterInput: 'p-datatable-filter-element-container',
    filterMenuButton: 'p-datatable-column-filter-button',
    headerFilterClearButton: 'p-datatable-column-filter-clear-button',
    filterOverlay: ({ instance, props }) => [
        'p-datatable-filter-overlay p-component',
        {
            'p-datatable-filter-overlay-popover': props.display === 'menu',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    filterRowItems: 'p-datatable-filter-constraint-list',
    filterRowItem: ({ instance, matchMode }) => [
        'p-datatable-filter-constraint',
        {
            'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
        }
    ],
    filterSeparator: 'p-datatable-filter-constraint-separator',
    filterOperator: 'p-datatable-filter-operator',
    filterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
    filterConstraints: 'p-datatable-filter-rule-list',
    filterConstraint: 'p-datatable-filter-rule',
    filterMatchModeDropdown: 'p-datatable-filter-constraint-dropdown',
    filterRemoveButton: 'p-datatable-filter-remove-rule-button',
    filterAddRule: 'p-datatable-filter-add-rule-button', //TODO: Remove
    filterAddRuleButton: 'p-column-filter-add-button',
    filterButtonbar: 'p-datatable-filter-buttonbar',
    filterClearButton: 'p-datatable-filter-clear-button',
    filterApplyButton: 'p-datatable-filter-apply-button',
    tbody: ({ props }) => (props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody'),
    rowgroupHeader: 'p-datatable-row-group-header',
    rowGroupToggler: 'p-datatable-row-toggle-button',
    rowGroupTogglerIcon: 'p-datatable-row-toggle-icon',
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
    rowgroupFooter: 'p-datatable-row-group-footer',
    emptyMessage: 'p-datatable-empty-message',
    bodyCell: ({ instance }) => [
        {
            'p-datatable-frozen-column': instance.columnProp('frozen')
        }
    ],
    columnTitle: 'p-column-title', //TODO: Remove due to stacked mode
    rowReorderIcon: 'p-datatable-reorderable-row-handle',
    rowToggler: 'p-datatable-row-toggle-button',
    rowTogglerIcon: 'p-datatable-row-toggle-icon',
    rowEditorInitButton: 'p-datatable-row-editor-init',
    rowEditorInitIcon: 'p-row-editor-init-icon', //TODO: Remove
    rowEditorSaveButton: 'p-datatable-row-editor-save',
    rowEditorSaveIcon: 'p-row-editor-save-icon', //TODO: Remove
    rowEditorCancelButton: 'p-datatable-row-editor-cancel',
    rowEditorCancelIcon: 'p-row-editor-cancel-icon', //TODO: Remove
    tfoot: 'p-datatable-tfoot',
    footerCell: ({ instance }) => [
        {
            'p-datatable-frozen-column': instance.columnProp('frozen')
        }
    ],
    virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
    footer: 'p-datatable-footer',
    resizeHelper: 'p-datatable-column-resize-indicator',
    reorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
    reorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};

const inlineStyles = {
    wrapper: { overflow: 'auto' },
    thead: { position: 'sticky' },
    tfoot: { position: 'sticky' }
};

export default BaseStyle.extend({
    name: 'datatable',
    classes,
    inlineStyles
});

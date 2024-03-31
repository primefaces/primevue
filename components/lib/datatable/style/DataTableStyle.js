import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-datatable p-component',
        {
            'p-datatable-hoverable-rows': props.rowHover || props.selectionMode,
            'p-datatable-resizable': props.resizableColumns,
            'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-datatable-scrollable': props.scrollable,
            'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
            'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
            'p-datatable-striped': props.stripedRows,
            'p-datatable-gridlines': props.showGridlines,
            'p-datatable-grouped-header': instance.headerColumnGroup != null,
            'p-datatable-grouped-footer': instance.footerColumnGroup != null,
            'p-datatable-sm': props.size === 'small',
            'p-datatable-lg': props.size === 'large'
        }
    ],
    loadingOverlay: 'p-datatable-loading-overlay p-component-overlay',
    loadingIcon: 'p-datatable-loading-icon',
    header: 'p-datatable-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : ''),
    wrapper: 'p-datatable-wrapper',
    table: ({ props }) => [
        'p-datatable-table',
        {
            'p-datatable-scrollable-table': props.scrollable,
            'p-datatable-resizable-table': props.resizableColumns,
            'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
        }
    ],
    //tablehead
    thead: 'p-datatable-thead',
    // headercell
    headerCell: ({ instance, props, column }) =>
        column && !instance.columnProp(column, 'hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field'))
            ? [
                  'p-filter-column',
                  {
                      'p-frozen-column': instance.columnProp(column, 'frozen')
                  }
              ]
            : [
                  {
                      'p-sortable-column': instance.columnProp('sortable'),
                      'p-resizable-column': instance.resizableColumns,
                      'p-highlight': instance.isColumnSorted(),
                      'p-filter-column': props.filterColumn,
                      'p-frozen-column': instance.columnProp('frozen'),
                      'p-reorderable-column': props.reorderableColumns
                  }
              ],
    columnResizer: 'p-column-resizer',
    headerContent: 'p-column-header-content',
    headerTitle: 'p-column-title',
    sortIcon: 'p-sortable-column-icon',
    sortBadge: 'p-sortable-column-badge',
    // columnfilter
    columnFilter: ({ props }) => [
        'p-column-filter p-fluid',
        {
            'p-column-filter-row': props.display === 'row',
            'p-column-filter-menu': props.display === 'menu'
        }
    ],
    filterInput: 'p-fluid p-column-filter-element',
    filterMenuButton: ({ instance }) => [
        'p-column-filter-menu-button p-link',
        {
            'p-column-filter-menu-button-open': instance.overlayVisible,
            'p-column-filter-menu-button-active': instance.hasFilter()
        }
    ],
    headerFilterClearButton: ({ instance }) => [
        'p-column-filter-clear-button p-link',
        {
            'p-hidden-space': !instance.hasRowFilter()
        }
    ],
    filterOverlay: ({ instance, props }) => [
        {
            'p-column-filter-overlay p-component p-fluid': true,
            'p-column-filter-overlay-menu': props.display === 'menu',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    filterRowItems: 'p-column-filter-row-items',
    filterRowItem: ({ instance, matchMode }) => [
        'p-column-filter-row-item',
        {
            'p-highlight': matchMode && instance.isRowMatchModeSelected(matchMode.value)
        }
    ],
    filterSeparator: 'p-column-filter-separator',
    filterOperator: 'p-column-filter-operator',
    filterOperatorDropdown: 'p-column-filter-operator-dropdown',
    filterConstraints: 'p-column-filter-constraints',
    filterConstraint: 'p-column-filter-constraint',
    filterMatchModeDropdown: 'p-column-filter-matchmode-dropdown',
    filterRemoveButton: 'p-column-filter-remove-button p-button-text p-button-danger p-button-sm',
    filterAddRule: 'p-column-filter-add-rule',
    filterAddRuleButton: 'p-column-filter-add-button p-button-text p-button-sm',
    filterButtonbar: 'p-column-filter-buttonbar',
    filterClearButton: 'p-button-outlined p-button-sm',
    filterApplyButton: 'p-button-sm',
    //tablebody
    tbody: ({ props }) => (props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody'),
    rowgroupHeader: 'p-rowgroup-header',
    rowGroupToggler: 'p-row-toggler p-link',
    rowGroupTogglerIcon: 'p-row-toggler-icon',
    row: ({ instance, props, index, columnSelectionMode }) => {
        let rowStyleClass = [];

        if (props.selectionMode) {
            rowStyleClass.push('p-selectable-row');
        }

        if (props.selection) {
            rowStyleClass.push({
                'p-highlight': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
            });
        }

        if (props.contextMenuSelection) {
            rowStyleClass.push({
                'p-highlight-contextmenu': instance.isSelectedWithContextMenu
            });
        }

        rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');

        return rowStyleClass;
    },
    rowExpansion: 'p-datatable-row-expansion',
    rowgroupFooter: 'p-rowgroup-footer',
    emptyMessage: 'p-datatable-emptymessage',
    //bodycell
    bodyCell: ({ instance }) => [
        {
            'p-selection-column': instance.columnProp('selectionMode') != null,
            'p-editable-column': instance.isEditable(),
            'p-cell-editing': instance.d_editing,
            'p-frozen-column': instance.columnProp('frozen')
        }
    ],
    columnTitle: 'p-column-title',
    rowReorderIcon: 'p-datatable-reorderablerow-handle',
    rowToggler: 'p-row-toggler p-link',
    rowTogglerIcon: 'p-row-toggler-icon',
    rowEditorInitButton: 'p-row-editor-init p-link',
    rowEditorInitIcon: 'p-row-editor-init-icon',
    rowEditorSaveButton: 'p-row-editor-save p-link',
    rowEditorSaveIcon: 'p-row-editor-save-icon',
    rowEditorCancelButton: 'p-row-editor-cancel p-link',
    rowEditorCancelIcon: 'p-row-editor-cancel-icon',
    //tablefooter
    tfoot: 'p-datatable-tfoot',
    //footercell
    footerCell: ({ instance }) => [
        {
            'p-frozen-column': instance.columnProp('frozen')
        }
    ],
    //datatable
    virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
    footer: 'p-datatable-footer',
    resizeHelper: 'p-column-resizer-helper',
    reorderIndicatorUp: 'p-datatable-reorder-indicator-up',
    reorderIndicatorDown: 'p-datatable-reorder-indicator-down'
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

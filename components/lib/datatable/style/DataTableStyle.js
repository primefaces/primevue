import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-datatable {
        position: relative;
    }

    .p-datatable-table {
        border-spacing: 0px;
        width: 100%;
    }

    .p-datatable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }

    .p-datatable .p-sortable-column .p-column-title,
    .p-datatable .p-sortable-column .p-sortable-column-icon,
    .p-datatable .p-sortable-column .p-sortable-column-badge {
        vertical-align: middle;
    }

    .p-datatable .p-sortable-column .p-sortable-column-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .p-datatable-hoverable-rows .p-selectable-row {
        cursor: pointer;
    }

    /* Scrollable */
    .p-datatable-scrollable > .p-datatable-wrapper {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        top: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        bottom: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-frozen-column {
        position: sticky;
        background: inherit;
    }

    .p-datatable-scrollable th.p-frozen-column {
        z-index: 1;
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-rowgroup-header {
        position: sticky;
        z-index: 1;
    }

    /* Resizable */
    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
        display: none;
    }

    .p-datatable .p-column-resizer {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        width: 0.5rem;
        height: 100%;
        padding: 0px;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable .p-column-header-content {
        display: flex;
        align-items: center;
    }

    .p-datatable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }

    .p-datatable .p-row-editor-init,
    .p-datatable .p-row-editor-save,
    .p-datatable .p-row-editor-cancel {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Expand */
    .p-datatable .p-row-toggler {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    /* Reorder */
    .p-datatable-reorder-indicator-up,
    .p-datatable-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-reorderable-column,
    .p-datatable-reorderablerow-handle {
        cursor: move;
    }

    /* Loader */
    .p-datatable .p-datatable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    /* Filter */
    .p-column-filter-row {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .p-column-filter-menu {
        display: inline-flex;
        margin-left: auto;
    }

    .p-column-filter-row .p-column-filter-element {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-column-filter-menu-button,
    .p-column-filter-clear-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-column-filter-row-items {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-column-filter-row-item {
        cursor: pointer;
    }

    .p-column-filter-add-button,
    .p-column-filter-remove-button {
        justify-content: center;
    }

    .p-column-filter-add-button .p-button-label,
    .p-column-filter-remove-button .p-button-label {
        flex-grow: 0;
    }

    .p-column-filter-buttonbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    /* Responsive */
    .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
        display: none;
    }

    /* VirtualScroller */
    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        top: 0;
        left: 0;
    }
}
`;

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
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
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
    row: ({ instance, props, index }) => {
        let rowStyleClass = [];

        if (props.selectionMode) {
            rowStyleClass.push('p-selectable-row');
        }

        if (props.selection) {
            rowStyleClass.push({
                'p-highlight': instance.isSelected
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
    css,
    classes,
    inlineStyles
});

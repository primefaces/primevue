import { style } from '@primeuix/styles/treetable';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-treetable p-component',
        {
            'p-treetable-hoverable': props.rowHover || instance.rowSelectionMode,
            'p-treetable-resizable': props.resizableColumns,
            'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-treetable-scrollable': props.scrollable,
            'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-treetable-gridlines': props.showGridlines,
            'p-treetable-sm': props.size === 'small',
            'p-treetable-lg': props.size === 'large'
        }
    ],
    loading: 'p-treetable-loading', //TODO: required?
    mask: 'p-treetable-mask p-overlay-mask',
    loadingIcon: 'p-treetable-loading-icon',
    header: 'p-treetable-header',
    paginator: ({ position }) => 'p-treetable-paginator-' + position,
    tableContainer: 'p-treetable-table-container',
    table: ({ props }) => [
        'p-treetable-table',
        {
            'p-treetable-scrollable-table': props.scrollable,
            'p-treetable-resizable-table': props.resizableColumns,
            'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
        }
    ],
    thead: 'p-treetable-thead',
    headerCell: ({ instance, props }) => [
        'p-treetable-header-cell',
        {
            'p-treetable-sortable-column': instance.columnProp('sortable'),
            'p-treetable-resizable-column': props.resizableColumns,
            'p-treetable-column-sorted': instance.columnProp('sortable') ? instance.isColumnSorted() : false,
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    columnResizer: 'p-treetable-column-resizer',
    columnHeaderContent: 'p-treetable-column-header-content',
    columnTitle: 'p-treetable-column-title',
    sortIcon: 'p-treetable-sort-icon',
    pcSortBadge: 'p-treetable-sort-badge',
    tbody: 'p-treetable-tbody',
    row: ({ props, instance }) => [
        {
            'p-treetable-selectable-row': instance.$parentInstance.rowSelectionMode,
            'p-treetable-row-selected': instance.selected,
            'p-treetable-contextmenu-row-selected': props.contextMenuSelection && instance.isSelectedWithContextMenu
        }
    ],
    bodyCell: ({ instance }) => [
        {
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    bodyCellContent: ({ instance }) => [
        'p-treetable-body-cell-content',
        {
            'p-treetable-body-cell-content-expander': instance.columnProp('expander')
        }
    ],
    nodeToggleButton: 'p-treetable-node-toggle-button',
    nodeToggleIcon: 'p-treetable-node-toggle-icon',
    pcNodeCheckbox: 'p-treetable-node-checkbox',
    emptyMessage: 'p-treetable-empty-message',
    tfoot: 'p-treetable-tfoot',
    footerCell: ({ instance }) => [
        {
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    footer: 'p-treetable-footer',
    columnResizeIndicator: 'p-treetable-column-resize-indicator'
};

const inlineStyles = {
    tableContainer: { overflow: 'auto' },
    thead: { position: 'sticky' },
    tfoot: { position: 'sticky' }
};

export default BaseStyle.extend({
    name: 'treetable',
    style,
    classes,
    inlineStyles
});

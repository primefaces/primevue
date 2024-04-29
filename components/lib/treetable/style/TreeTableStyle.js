import BaseStyle from 'primevue/base/style';

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
    loadingWrapper: 'p-treetable-loading', //TODO: required?
    loadingOverlay: 'p-treetable-mask p-component-overlay',
    loadingIcon: 'p-treetable-loading-icon',
    header: 'p-treetable-header',
    paginator: ({ position }) => 'p-treetable-paginator-' + position,
    wrapper: 'p-treetable-table-container',
    thead: 'p-treetable-thead',
    headerCell: ({ instance, props }) => [
        {
            'p-treetable-sortable-column': instance.columnProp('sortable'),
            'p-treetable-resizable-column': props.resizableColumns,
            'p-treetable-column-sorted': instance.isColumnSorted(),
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    columnResizer: 'p-treetable-column-resizer',
    headerTitle: 'p-treetable-column-title',
    sortIcon: 'p-treetable-sort-icon',
    sortBadge: 'p-treetable-sort-badge',
    tbody: 'p-treetable-tbody',
    row: ({ instance }) => [
        {
            'p-treetable-row-selected': instance.selected
        }
    ],
    bodyCell: ({ instance }) => [
        {
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    rowToggler: 'p-treetable-row-toggle-button',
    rowTogglerIcon: 'p-treetable-row-toggle-icon',
    rowCheckbox: ({ instance }) => 'p-treetable-row-checkbox',
    emptyMessage: 'p-treetable-empty-message',
    tfoot: 'p-treetable-tfoot',
    footerCell: ({ instance }) => [
        {
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    //treetable
    footer: 'p-treetable-footer',
    resizeHelper: 'p-treetable-column-resize-indicator'
};

export default BaseStyle.extend({
    name: 'treetable',
    classes
});

import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-treetable p-component',
        {
            'p-treetable-hoverable-rows': props.rowHover || instance.rowSelectionMode,
            'p-treetable-auto-layout': props.autoLayout,
            'p-treetable-resizable': props.resizableColumns,
            'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
            'p-treetable-gridlines': props.showGridlines,
            'p-treetable-scrollable': props.scrollable,
            'p-treetable-scrollable-vertical': props.scrollable && props.scrollDirection === 'vertical',
            'p-treetable-scrollable-horizontal': props.scrollable && props.scrollDirection === 'horizontal',
            'p-treetable-scrollable-both': props.scrollable && props.scrollDirection === 'both',
            'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
            'p-treetable-responsive-scroll': props.responsiveLayout === 'scroll',
            'p-treetable-sm': props.size === 'small',
            'p-treetable-lg': props.size === 'large'
        }
    ],
    loadingWrapper: 'p-treetable-loading',
    loadingOverlay: 'p-treetable-loading-overlay p-component-overlay',
    loadingIcon: 'p-treetable-loading-icon',
    header: 'p-treetable-header',
    paginator: ({ instance }) => (instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : ''),
    wrapper: 'p-treetable-wrapper',
    thead: 'p-treetable-thead',
    //headercell
    headerCell: ({ instance, props, column }) =>
        column && instance.hasColumnFilter()
            ? [
                  'p-filter-column',
                  {
                      'p-frozen-column': instance.columnProp(column, 'frozen')
                  }
              ]
            : [
                  {
                      'p-sortable-column': instance.columnProp('sortable'),
                      'p-resizable-column': props.resizableColumns,
                      'p-highlight': instance.isColumnSorted(),
                      'p-frozen-column': instance.columnProp('frozen')
                  }
              ],
    columnResizer: 'p-column-resizer',
    headerTitle: 'p-column-title',
    sortIcon: 'p-sortable-column-icon',
    sortBadge: 'p-sortable-column-badge',
    tbody: 'p-treetable-tbody',
    //ttrow
    row: ({ instance }) => [
        {
            'p-highlight': instance.selected
        }
    ],
    //bodycell
    bodyCell: ({ instance }) => [
        {
            'p-frozen-column': instance.columnProp('frozen')
        }
    ],
    rowToggler: 'p-treetable-toggler p-link',
    rowTogglerIcon: 'p-tree-toggler-icon',
    rowCheckbox: ({ instance }) => [
        'p-treetable-checkbox',
        {
            'p-indeterminate': instance.partialChecked
        }
    ],
    //treetable
    emptyMessage: 'p-treetable-emptymessage',
    tfoot: 'p-treetable-tfoot',
    //footercell
    footerCell: ({ instance }) => [
        {
            'p-frozen-column': instance.columnProp('frozen')
        }
    ],
    //treetable
    footer: 'p-treetable-footer',
    resizeHelper: 'p-column-resizer-helper p-highlight'
};

export default BaseStyle.extend({
    name: 'treetable',
    classes
});

import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-treetable {
    position: relative;
}

.p-treetable-table {
    border-spacing: 0;
    width: 100%;
}

.p-treetable-scrollable > .p-treetable-table-container {
    position: relative;
}

.p-treetable-scrollable-table > .p-treetable-thead {
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable-table > .p-treetable-frozen-tbody {
    position: sticky;
    z-index: 1;
}

.p-treetable-scrollable-table>.p-treetable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-treetable-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-thead {
    background: ${dt('treetable.header.cell.background')};
}

.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-tfoot  {
    background: ${dt('treetable.footer.cell.background')};
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable > .p-treetable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable-scrollable-table > .p-treetable-tbody > .p-treetable-row-group-header {
    position: sticky;
    z-index: 1;
}

.p-treetable-resizable-table > .p-treetable-thead > tr > th,
.p-treetable-resizable-table > .p-treetable-tfoot > tr > td,
.p-treetable-resizable-table > .p-treetable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-treetable-resizable-table > .p-treetable-thead > tr > th.p-treetable-resizable-column:not(.p-treetable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-table-fit > .p-treetable-thead > tr > th.p-treetable-resizable-column:last-child .p-treetable-column-resizer {
    display: none;
}

.p-treetable-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    width: ${dt('treetable.column.resizer.width')};
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-treetable-column-header-content {
    display: flex;
    align-items: center;
    gap: ${dt('treetable.header.cell.gap')};
}

.p-treetable-column-resize-indicator {
    width: ${dt('treetable.resize.indicator.width')};
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt('treetable.resize.indicator.color')};
}

.p-treetable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-treetable-paginator-top {
    border-color: ${dt('treetable.paginator.top.border.color')};
    border-style: solid;
    border-width: ${dt('treetable.paginator.top.border.width')};
}

.p-treetable-paginator-bottom {
    border-color: ${dt('treetable.paginator.bottom.border.color')};
    border-style: solid;
    border-width: ${dt('treetable.paginator.bottom.border.width')};
}

.p-treetable-header {
    background: ${dt('treetable.header.background')};
    color: ${dt('treetable.header.color')};
    border-color: ${dt('treetable.header.border.color')};
    border-style: solid;
    border-width: ${dt('treetable.header.border.width')};
    padding: ${dt('treetable.header.padding')};
}

.p-treetable-footer {
    background: ${dt('treetable.footer.background')};
    color: ${dt('treetable.footer.color')};
    border-color: ${dt('treetable.footer.border.color')};
    border-style: solid;
    border-width: ${dt('treetable.footer.border.width')};
    padding: ${dt('treetable.footer.padding')};
}

.p-treetable-header-cell {
    padding: ${dt('treetable.header.cell.padding')};
    background: ${dt('treetable.header.cell.background')};
    border-color: ${dt('treetable.header.cell.border.color')};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt('treetable.header.cell.color')};
    font-weight: normal;
    text-align: left;
    transition: background ${dt('treetable.transition.duration')}, color ${dt('treetable.transition.duration')}, border-color ${dt('treetable.transition.duration')},
            outline-color ${dt('treetable.transition.duration')}, box-shadow ${dt('treetable.transition.duration')};
}

.p-treetable-column-title {
    font-weight: ${dt('treetable.column.title.font.weight')};
}

.p-treetable-tbody > tr {
    outline-color: transparent;
    background: ${dt('treetable.row.background')};
    color: ${dt('treetable.row.color')};
    transition: background ${dt('treetable.transition.duration')}, color ${dt('treetable.transition.duration')}, border-color ${dt('treetable.transition.duration')},
            outline-color ${dt('treetable.transition.duration')}, box-shadow ${dt('treetable.transition.duration')};
}

.p-treetable-tbody > tr > td {
    text-align: left;
    border-color: ${dt('treetable.body.cell.border.color')};
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: ${dt('treetable.body.cell.padding')};
}

.p-treetable-hoverable .p-treetable-tbody > tr:not(.p-treetable-row-selected):hover {
    background: ${dt('treetable.row.hover.background')};
    color: ${dt('treetable.row.hover.color')};
}

.p-treetable-tbody > tr.p-treetable-row-selected {
    background: ${dt('treetable.row.selected.background')};
    color: ${dt('treetable.row.selected.color')};
}

.p-treetable-tbody > tr:has(+ .p-treetable-row-selected) > td {
    border-bottom-color: ${dt('treetable.body.cell.selected.border.color')};
}

.p-treetable-tbody > tr.p-treetable-row-selected > td {
    border-bottom-color: ${dt('treetable.body.cell.selected.border.color')};
}

.p-treetable-tbody > tr:focus-visible,
.p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {
    box-shadow: ${dt('treetable.body.cell.focus.ring.shadow')};
    outline: ${dt('treetable.body.cell.focus.ring.width')} ${dt('treetable.body.cell.focus.ring.style')} ${dt('treetable.body.cell.focus.ring.color')};
    outline-offset: ${dt('treetable.body.cell.focus.ring.offset')};
}

.p-treetable-tfoot > tr > td {
    text-align: left;
    padding: ${dt('treetable.footer.cell.padding')};
    border-color: ${dt('treetable.footer.cell.border.color')};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt('treetable.footer.cell.color')};
    background: ${dt('treetable.footer.cell.background')};
}

.p-treetable-column-footer {
    font-weight: ${dt('treetable.column.footer.font.weight')};
}

.p-treetable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable-column-title,
.p-treetable-sort-icon,
.p-treetable-sort-badge {
    vertical-align: middle;
}

.p-treetable-sort-icon {
    color: ${dt('treetable.sort.icon.color')};
    transition: color ${dt('treetable.transition.duration')};
}

.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover {
    background: ${dt('treetable.header.cell.hover.background')};
    color: ${dt('treetable.header.cell.hover.color')};
}

.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover .p-treetable-sort-icon {
    color: ${dt('treetable.sort.icon.hover.color')};
}

.p-treetable-column-sorted {
    background: ${dt('treetable.header.cell.selected.background')};
    color: ${dt('treetable.header.cell.selected.color')};
}

.p-treetable-column-sorted .p-treetable-sort-icon {
    color: ${dt('treetable.header.cell.selected.color')};
}

.p-treetable-sortable-column:focus-visible {
    box-shadow: ${dt('treetable.header.cell.focus.ring.shadow')};
    outline: ${dt('treetable.header.cell.focus.ring.width')} ${dt('treetable.header.cell.focus.ring.style')} ${dt('treetable.header.cell.focus.ring.color')};
    outline-offset: ${dt('treetable.header.cell.focus.ring.offset')};
}

.p-treetable-hoverable .p-treetable-selectable-row {
    cursor: pointer;
}

.p-treetable-loading-icon {
    font-size: ${dt('treetable.loading.icon.size')};
    width: ${dt('treetable.loading.icon.size')};
    height: ${dt('treetable.loading.icon.size')};
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-paginator-top {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-treetable-gridlines .p-treetable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot >tr > td {
    border-width: 1px 0 1px 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-body-cell-content {
    display: flex;
    align-items: center;
    gap: ${dt('treetable.body.cell.gap')};
}

.p-treetable-node-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt('treetable.node.toggle.button.size')};
    height: ${dt('treetable.node.toggle.button.size')};
    color: ${dt('treetable.node.toggle.button.color')};
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: ${dt('treetable.node.toggle.button.border.radius')};
    transition: background ${dt('treetable.transition.duration')}, color ${dt('treetable.transition.duration')}, border-color ${dt('treetable.transition.duration')},
            outline-color ${dt('treetable.transition.duration')}, box-shadow ${dt('treetable.transition.duration')};
    outline-color: transparent;
    user-select: none;
}

.p-treetable-node-toggle-button:enabled:hover {
    color: ${dt('treetable.node.toggle.button.hover.color')};
    background: ${dt('treetable.node.toggle.button.hover.background')};
}

.p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button:hover {
    background: ${dt('treetable.node.toggle.button.selected.hover.background')};
    ${dt('treetable.node.toggle.button.selected.hover.color')};
}

.p-treetable-node-toggle-button:focus-visible {
    box-shadow: ${dt('treetable.node.toggle.button.focus.ring.shadow')};
    outline: ${dt('treetable.node.toggle.button.focus.ring.width')} ${dt('treetable.node.toggle.button.focus.ring.style')} ${dt('treetable.node.toggle.button.focus.ring.color')};
    outline-offset: ${dt('treetable.node.toggle.button.focus.ring.offset')};
}
`;

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
    headerCell: ({ instance, props, context }) => [
        'p-treetable-header-cell',
        {
            'p-treetable-sortable-column': instance.columnProp('sortable'),
            'p-treetable-resizable-column': props.resizableColumns,
            'p-treetable-column-sorted': context?.sorted,
            'p-treetable-frozen-column': instance.columnProp('frozen')
        }
    ],
    columnResizer: 'p-treetable-column-resizer',
    columnHeaderContent: 'p-treetable-column-header-content',
    columnTitle: 'p-treetable-column-title',
    sortIcon: 'p-treetable-sort-icon',
    pcSortBadge: 'p-treetable-sort-badge',
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
    theme,
    classes,
    inlineStyles
});

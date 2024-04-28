export default {
    css: ({ dt }) => `
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0px;
    width: 100%;
}

.p-datatable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-datatable-column-title,
.p-datatable-sortable-column-icon,
.p-datatable-sortable-column-badge {
    vertical-align: middle;
}

.p-datatable-sortable-column-icon {
    color: ${dt('datatable.sort.icon.color')};
    margin-left: 0.5rem;
    transition: color ${dt('transition.duration')};
}

.p-datatable-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
    background: ${dt('datatable.header.cell.hover.background')};
    color: ${dt('datatable.header.cell.hover.color')};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sortable-column-icon {
    color: ${dt('datatable.sort.icon.hover.color')};
}

.p-datatable-column-sorted {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-datatable-sortable-column:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-datatable-column-sorted .p-datatable-sortable-column-icon {
    color: ${dt('highlight.color')};
}

.p-datatable-hoverable .p-datatable-selectable-row {
    cursor: pointer;
}

.p-datatable-scrollable > .p-datatable-table-container {
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

.p-datatable-scrollable-table>.p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable .p-datatable-frozen-column {
    position: sticky;
    background: inherit;
}

.p-datatable-scrollable th.p-datatable-frozen-column {
    z-index: 1;
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: ${dt('datatable.header.cell.background')};
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: ${dt('datatable.footer.cell.background')};
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable>.p-datatable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
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

.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
    display: none;
}

.p-datatable-column-resizer {
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

.p-datatable-column-header-content {
    display: flex;
    align-items: center;
}

.p-datatable-column-resize-indicator {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt('datatable.resizer.color')};
}

.p-datatable-row-reorder-indicator-up,
.p-datatable-row-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-datatable-reorderable-column,
.p-datatable-reorderable-row-handle {
    cursor: move;
}

.p-datatable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.p-datatable-inline-filter {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
}

.p-datatable-inline-filter .p-datatable-filter-element-container {
    flex: 1 1 auto;
    width: 1%;
}

.p-datatable-filter-overlay {
    background: ${dt('datatable.filter.overlay.background')};
    color: ${dt('datatable.filter.overlay.color')};
    border: 1px solid ${dt('datatable.filter.overlay.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
}

.p-datatable-filter-constraint-list {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
}

.p-datatable-filter-constraint {
    margin: 2px 0;
    padding: 0.5rem 0.75rem;
    border: 0 none;
    color: ${dt('datatable.filter.matchmode.item.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')},;
    border-radius: ${dt('rounded.sm')};
    cursor: pointer;
}

.p-datatable-filter-constraint:first-child {
    margin-top: 0;
}

.p-datatable-filter-constraint:last-child {
    margin-bottom: 0;
}

.p-datatable-filter-constraint-selected {
    background: ${dt('datatable.filter.matchmode.item.selected.background')};
    color: ${dt('datatable.filter.matchmode.item.selected.color')};
}

.p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
    background: ${dt('datatable.filter.matchmode.item.focus.background')};
    color: ${dt('datatable.filter.matchmode.item.focus.color')};
}

.p-datatable-filter-constraint:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: 2px;
    box-shadow: 0 none;
}

.p-datatable-filter-constraint-separator {
    border-top: 1px solid ${dt('datatable.filter.matchmode.item.separator.border.color')};
    margin: 2px 0;
}

.p-datatable-popover-filter {
    display: inline-flex;
    margin-left: auto;
}

.p-datatable-filter-operator {
    padding: 0;
}

.p-datatable-filter-rule-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-datatable-filter-rule {
    padding: 0;
    border-bottom: 1px solid ${dt('datatable.filter.constraint.border.color')};
}

.p-datatable-filter-rule:last-child {
    border-bottom: 0 none;
}

.p-datatable-filter-constraint-dropdown {
    margin-bottom: 0.5rem;
}

.p-datatable-filter-remove-rule-button {
    margin-top: 0.5rem;
}

.p-datatable-filter-constraint:last-child .p-datatable-filter-remove-button {
    margin-bottom: 0;
}

.p-datatable-filter-overlay-popover {
    background: ${dt('datatable.filter.overlay.background')};
    color: ${dt('datatable.filter.overlay.color')};
    border: 1px solid ${dt('datatable.filter.overlay.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    min-width: 12.5rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.p-datatable-filter-add-rule-button {
    padding: 0;
}

.p-datatable-filter-buttonbar {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

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

.p-datatable-paginator-top {
    border: solid ${dt('datatable.header.border.color')};
    border-width: 0 0 1px 0;
}

.p-datatable-header {
    background: ${dt('datatable.header.background')};
    color: ${dt('datatable.header.color')};
    border: 1px solid ${dt('datatable.header.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-footer {
    background: ${dt('datatable.footer.background')};
    color: ${dt('datatable.footer.color')};
    border: 1px solid ${dt('datatable.footer.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: ${dt('datatable.header.cell.background')};
    border: 1px solid ${dt('datatable.header.cell.border.color')};
    border-width: 0 0 1px 0;
    color: ${dt('datatable.header.cell.color')};
    font-weight: 600;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: ${dt('datatable.row.background')};
    color: ${dt('datatable.row.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid ${dt('datatable.body.cell.border.color')};
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
    background: ${dt('datatable.row.hover.background')};
    color: ${dt('datatable.row.hover.color')};
}

.p-datatable-tbody > tr.p-datatable-row-selected {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
    border-bottom-color: ${dt('datatable.body.cell.selected.border.color')};
}

.p-datatable-tbody > tr.p-datatable-row-selectedt > td {
    border-bottom-color: ${dt('datatable.body.cell.selected.border.color')};
}

.p-datatable-tbody > tr:focus-visible {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
    outline: 1px solid ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid ${dt('datatable.footer.cell.border.color')};
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: ${dt('datatable.footer.cell.color')};
    background: ${dt('datatable.footer.cell.background')};
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 ${dt('datatable.drop.point.color')};
}

.p-datatable-tbody>tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 ${dt('datatable.drop.point.color')};
}

.p-datatable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-datatable-gridlines .p-datatable-header {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-paginator-top {
    border-width: 0 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-paginator-bottom {
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: ${dt('datatable.footer.border.color')};
}

.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-datatable-gridlines .p-datatable-tbody > tr:last-child>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tfoot>tr>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead +.p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: ${dt('datatable.row.striped.background')});
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: ${dt('highlight.background')});
    color: ${dt('highlight.color')});
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 0.9375rem 1.25rem;
}
`
};

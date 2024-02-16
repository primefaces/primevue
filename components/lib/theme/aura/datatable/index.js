export default {
    variables: {
        colorScheme: {
            light: {
                header: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                headerCell: {
                    background: '{surface.0}',
                    backgroundHover: '{surface.100}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                row: {
                    background: '{surface.0}',
                    backgroundStriped: '{surface.50}',
                    backgroundHover: '{surface.100}',
                    textColor: '{surface.700}',
                    textColorHover: '{surface.800}'
                },
                bodyCell: {
                    borderColor: '{surface.200}',
                    borderColorSelected: '{primary.100}'
                },
                footerCell: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                footer: {
                    background: '{surface.0}',
                    borderColor: '{surface.200}',
                    textColor: '{surface.700}'
                },
                dropPointColor: '{primary.color}',
                resizerColor: '{primary.color}',
                sortIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                },
                rowAction: {
                    backgroundHover: '{surface.100}',
                    backgroundHoverHighlight: '{surface.0}',
                    color: '{surface.500}',
                    colorHover: '{surface.500}'
                }
            },
            dark: {
                header: {
                    background: '{surface.900}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}'
                },
                headerCell: {
                    background: '{surface.900}',
                    backgroundHover: '{surface.800}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                row: {
                    background: '{surface.900}',
                    backgroundStriped: '{surface.950}',
                    backgroundHover: '{surface.800}',
                    textColor: '{surface.0}',
                    textColorHover: '{surface.0}'
                },
                bodyCell: {
                    borderColor: '{surface.800}',
                    borderColorSelected: '{primary.900}'
                },
                footerCell: {
                    background: '{surface.900}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}'
                },
                footer: {
                    background: '{surface.900}',
                    borderColor: '{surface.800}',
                    textColor: '{surface.0}'
                },
                dropPointColor: '{primary.color}',
                resizerColor: '{primary.color}',
                sortIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                },
                rowAction: {
                    backgroundHover: '{surface.800}',
                    backgroundHoverHighlight: '{surface.900}',
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                }
            }
        }
    },
    css: `
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
    outline-color: transparent;
}

.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-datatable .p-sortable-column .p-sortable-column-icon {
    color: var(--p-datatable-sort-icon-color);
    margin-left: 0.5rem;
    transition: color var(--p-transition-duration);
}

.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover {
    background: var(--p-datatable-header-cell-background-hover);
    color: var(--p-datatable-header-cell-text-color-hover);
}

.p-datatable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: var(--p-datatable-sort-icon-color-hover);
}

.p-datatable .p-sortable-column.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
}

.p-datatable .p-sortable-column:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: var(--p-highlight-text-color);
}

.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

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

.p-datatable-scrollable-table>.p-datatable-tfoot {
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

.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: var(--p-datatable-header-cell-background);
}

.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: var(--p-datatable-footer-cell-background);
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable>.p-datatable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header {
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

.p-datatable-resizable-table>.p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
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
    background: var(--p-datatable-resizer-color);
}

.p-datatable .p-row-toggler,
.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: var(--p-datatable-row-action-color);
    border: 0 none;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-datatable .p-row-toggler:enabled:hover,
.p-datatable .p-row-editor-init:enabled:hover,
.p-datatable .p-row-editor-save:enabled:hover,
.p-datatable .p-row-editor-cancel:enabled:hover {
    color: var(--p-datatable-row-action-color-hover);
    background: var(--p-datatable-row-action-background-hover);
}

.p-datatable .p-row-toggler:focus-visible,
.p-datatable .p-row-editor-init:focus-visible,
.p-datatable .p-row-editor-save:focus-visible,
.p-datatable .p-row-editor-cancel:focus-visible {
    outline: 1px solid var(--p-focus-ring-color);
    outline-offset: 2px;
}

.p-datatable .p-row-editor-save {
    margin-right: 0.5rem;
}

.p-datatable-tbody > tr.p-highlight .p-row-toggler:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-init:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-save:hover,
.p-datatable-tbody > tr.p-highlight .p-row-editor-cancel:hover {
    background: var(--p-datatable-row-action-background-hover-highlight);
    color: inherit;
}

.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-reorderable-column,
.p-datatable-reorderablerow-handle {
    cursor: move;
}

.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

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

.p-datatable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-datatable-header {
    background: var(--p-datatable-header-background);
    color: var(--p-datatable-header-text-color);
    border: 1px solid var(--p-datatable-header-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-footer {
    background: var(--p-datatable-header-background);
    color: var(--p-datatable-header-text-color);
    border: 1px solid var(--p-datatable-header-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-datatable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: var(--p-datatable-header-cell-background);
    border: 1px solid var(--p-datatable-header-cell-border-color);
    border-width: 0 0 1px 0;
    color: var(--p-datatable-header-cell-text-color);
    font-weight: 600;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: var(--p-datatable-row-background);
    color: var(--p-datatable-row-text-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid var(--p-datatable-body-cell-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):hover {
    background: var(--p-datatable-row-background-hover);
    color: var(--p-datatable-row-text-color-hover);
}

.p-datatable-tbody > tr.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
}

.p-datatable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: var(--p-datatable-body-cell-border-color-selected);
}

.p-datatable-tbody > tr.p-highlight > td {
    border-bottom-color: var(--p-datatable-body-cell-border-color-selected);
}

.p-datatable-tbody > tr:focus-visible {
    outline: 1px solid var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 1px solid var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid var(--p-datatable-footer-cell-border-color);
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: var(--p-datatable-footer-cell-text-color);
    background: var(--p-datatable-footer-cell-background);
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 var(--p-datatable-drop-point-color);
}

.p-datatable-tbody>tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 var(--p-datatable-drop-point-color);
}

.p-datatable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead>tr>th:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td {
    border-width: 1px 0 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr>td:last-child {
    border-width: 1px 1px 0 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tbody>tr:last-child>td:last-child {
    border-width: 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td {
    border-width: 1px 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-tfoot>tr>td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead+.p-datatable-tfoot > tr > td:last-child {
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

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody >tr:last-child >td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: var(--p-datatable-row-background-striped);
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
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

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
                resizerColor: '{primary.color}',
                sortIcon: {
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                },
                toggle: {
                    backgroundHover: '{surface.100}',
                    backgroundHoverHighlight: '{surface.0}',
                    color: '{surface.500}',
                    colorHover: '{surface.600}'
                },
                indeterminate: {
                    color: '{surface.500}'
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
                resizerColor: '{primary.color}',
                sortIcon: {
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                },
                toggle: {
                    backgroundHover: '{surface.800}',
                    backgroundHoverHighlight: '{surface.900}',
                    color: '{surface.400}',
                    colorHover: '{surface.300}'
                },
                indeterminate: {
                    color: '{surface.400}'
                }
            }
        }
    },
    css: `
.p-treetable {
    position: relative;
}

.p-treetable table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.p-treetable .p-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-treetable .p-sortable-column .p-column-title,
.p-treetable .p-sortable-column .p-sortable-column-icon,
.p-treetable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-treetable .p-sortable-column .p-sortable-column-icon {
    color: var(--p-treetable-sort-icon-color);
    margin-left: 0.5rem;
    transition: color var(--p-transition-duration);
}

.p-treetable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 1rem;
    min-width: 1rem;
    line-height: 1rem;
    margin-left: 0.5rem;
}

.p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: var(--p-treetable-header-cell-background-hover);
    color: var(--p-treetable-header-cell-text-color-hover);
}

.p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: var(--p-treetable-sort-icon-color-hover);
}

.p-treetable .p-sortable-column.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
}

.p-treetable .p-sortable-column:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: var(--p-highlight-text-color);
}

.p-treetable-responsive-scroll > .p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-responsive-scroll > .p-treetable-wrapper > table,
.p-treetable-auto-layout > .p-treetable-wrapper > table {
    table-layout: auto;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr {
    cursor: pointer;
}

.p-treetable-resizable>.p-treetable-wrapper {
    overflow-x: auto;
}

.p-treetable-resizable .p-treetable-thead>tr>th,
.p-treetable-resizable .p-treetable-tfoot>tr>td,
.p-treetable-resizable .p-treetable-tbody>tr>td {
    overflow: hidden;
}

.p-treetable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-treetable .p-column-resizer {
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

.p-treetable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
    background: var(--p-treetable-resizer-color);
}

.p-treetable .p-treetable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Scrollable */
.p-treetable-scrollable .p-treetable-wrapper {
    position: relative;
    overflow: auto;
}

.p-treetable-scrollable .p-treetable-table {
    display: block;
}



.p-treetable-scrollable .p-treetable-thead,
.p-treetable-scrollable .p-treetable-tbody,
.p-treetable-scrollable .p-treetable-tfoot {
    display: block;
}

.p-treetable-scrollable .p-treetable-thead>tr,
.p-treetable-scrollable .p-treetable-tbody>tr,
.p-treetable-scrollable .p-treetable-tfoot>tr {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}

.p-treetable-scrollable .p-treetable-thead>tr>th,
.p-treetable-scrollable .p-treetable-tbody>tr>td,
.p-treetable-scrollable .p-treetable-tfoot>tr>td {
    display: flex;
    flex: 1 1 0;
    align-items: center;
}

.p-treetable-scrollable .p-treetable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-treetable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}

.p-treetable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-treetable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-treetable-scrollable-both .p-treetable-thead>tr>th,
.p-treetable-scrollable-both .p-treetable-tbody>tr>td,
.p-treetable-scrollable-both .p-treetable-tfoot>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-thead>tr>th .p-treetable-scrollable-horizontal .p-treetable-tbody>tr>td,
.p-treetable-scrollable-horizontal .p-treetable-tfoot>tr>td {
    flex: 0 0 auto;
}

.p-treetable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-treetable-flex-scrollable .p-treetable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-treetable .p-treetable-scrollable-header {
    background: var(--p-treetable-header-background);
}

.p-treetable .p-treetable-scrollable-footer {
    background: var(--p-treetable-footer-background);
} 

.p-treetable .p-paginator-top {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable .p-paginator-bottom {
    border-width: 0 0 1px 0;
    border-radius: 0;
}

.p-treetable-header {
    background: var(--p-treetable-header-background);
    color: var(--p-treetable-header-text-color);
    border: 1px solid var(--p-treetable-header-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-footer {
    background: var(--p-treetable-header-background);
    color: var(--p-treetable-header-text-color);
    border: 1px solid var(--p-treetable-header-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
    font-weight: 600;
}

.p-treetable-thead > tr > th {
    text-align: left;
    padding: 0.75rem 1rem;
    background: var(--p-treetable-header-cell-background);
    border: 1px solid var(--p-treetable-header-cell-border-color);
    border-width: 0 0 1px 0;
    color: var(--p-treetable-header-cell-text-color);
    font-weight: 600;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-treetable-tbody > tr {
    outline-color: transparent;
    background: var(--p-treetable-row-background);
    color: var(--p-treetable-row-text-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid var(--p-treetable-body-cell-border-color);
    border-width: 0 0 1px 0;
    padding: 0.75rem 1rem;
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: var(--p-treetable-row-background-hover);
    color: var(--p-treetable-row-text-color-hover);
}

.p-treetable-tbody > tr.p-highlight {
    background: var(--p-highlight-background);
    color: var(--p-highlight-text-color);
}

.p-treetable-tbody > tr:has(+ .p-highlight) > td {
    border-bottom-color: var(--p-treetable-body-cell-border-color-selected);
}

.p-treetable-tbody > tr.p-highlight > td {
    border-bottom-color: var(--p-treetable-body-cell-border-color-selected);
}

.p-treetable-tbody > tr:focus-visible {
    outline: 1px solid var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-treetable-toggler {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    width: 1.75rem;
    height: 1.75rem;
    color: var(--p-treetable-toggle-color);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox {
    vertical-align: middle;
    margin-right: 0.5rem;
}

.p-treetable-toggler + .p-checkbox + span {
    vertical-align: middle;
}

.p-treetable-toggler + .p-checkbox.p-indeterminate .p-checkbox-icon {
    color: var(--p-treetable-indeterminate-color);
}

.p-treetable-toggler:enabled:hover {
    background: var(--p-treetable-toggle-background-hover);
    color: var(--p-treetable-toggle-color-hover);
}

.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: var(--p-treetable-toggle-color-hover);
    background: transparent;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: inherit;
}

.p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    background: var(--p-treetable-toggle-background-hover-highlight);
    color: inherit;
}

.p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid var(--p-treetable-footer-cell-border-color);
    border-width: 0 0 1px 0;
    font-weight: 600;
    color: var(--p-treetable-footer-cell-text-color);
    background: var(--p-treetable-footer-cell-background);
}

.p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
}

.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
}

.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
}

.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
}

.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
}

.p-treetable-sm .p-treetable-header {
    padding: 0.65625rem 0.875rem;
}

.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-treetable-sm .p-treetable-footer {
    padding: 0.375rem 0.5rem;
}

.p-treetable-lg .p-treetable-header {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 0.9375rem 1.25rem;
}

.p-treetable-lg .p-treetable-footer {
    padding: 0.9375rem 1.25rem;
}
`
};

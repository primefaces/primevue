const DataTableProps = [
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display.'
    },
    {
        name: 'dataKey',
        type: 'string|function',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'rows',
        type: 'number',
        default: 'null',
        description: 'Number of rows to display per page.'
    },
    {
        name: 'first',
        type: 'number',
        default: '0',
        description: 'Index of the first row to be displayed.'
    },
    {
        name: 'totalRecords',
        type: 'number',
        default: 'null',
        description: 'Number of total records, defaults to length of value when not defined.'
    },
    {
        name: 'paginator',
        type: 'boolean',
        default: 'false',
        description: 'When specified as true, enables the pagination.'
    },
    {
        name: 'paginatorPosition',
        type: 'string',
        default: 'bottom',
        description: 'Position of the paginator, options are "top","bottom" or "both".'
    },
    {
        name: 'alwaysShowPaginator',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show it even there is only one page.'
    },
    {
        name: 'paginatorTemplate',
        type: 'string',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown',
        description: 'emplate of the paginator.'
    },
    {
        name: 'pageLinkSize',
        type: 'number',
        default: '5',
        description: 'Number of page links to display.'
    },
    {
        name: 'rowsPerPageOptions',
        type: 'array',
        default: 'null',
        description: 'Array of integer values to display inside rows per page dropdown.'
    },
    {
        name: 'currentPageReportTemplate',
        type: 'string',
        default: '({currentPage} of {totalPages})',
        description: 'Template of the current page report element.'
    },
    {
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'Defines if data is loaded and interacted with in lazy manner.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Displays a loader to indicate data load is in progress.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'pi pi-spinner',
        description: 'The icon to show while indicating data load is in progress.'
    },
    {
        name: 'sortField',
        type: 'string',
        default: 'null',
        description: 'Property name or a getter function of a row data used for sorting by default'
    },
    {
        name: 'sortOrder',
        type: 'number',
        default: 'null',
        description: 'Order to sort the data by default.'
    },
    {
        name: 'defaultSortOrder',
        type: 'number',
        default: '1',
        description: 'Default sort order of an unsorted column.'
    },
    {
        name: 'multiSortMeta',
        type: 'array',
        default: 'null',
        description: 'An array of SortMeta objects to sort the data by default in multiple sort mode.'
    },
    {
        name: 'sortMode',
        type: 'string',
        default: 'single',
        description: 'Defines whether sorting works on single column or on multiple columns.'
    },
    {
        name: 'removableSort',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, columns can have an un-sorted state.'
    },
    {
        name: 'filters',
        type: 'object',
        default: 'null',
        description: 'Filters object with key-value pairs to define the filters.'
    },
    {
        name: 'filterDisplay',
        type: 'string',
        default: 'null',
        description: 'Layout of the filter elements, valid values are "row" and "menu".'
    },
    {
        name: 'filterLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
    },
    {
        name: 'selection',
        type: 'any',
        default: 'null',
        description: 'Selected row in single mode or an array of values in multiple mode.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Specifies the selection mode, valid values are "single" and "multiple".'
    },
    {
        name: 'compareSelectionBy',
        type: 'string',
        default: 'deepEquals',
        description: 'Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'contextMenu',
        type: 'boolean',
        default: 'false',
        description: 'Enables context menu integration.'
    },
    {
        name: 'contextMenuSelection',
        type: 'object',
        default: 'null',
        description: 'Selected row instance with the ContextMenu.'
    },
    {
        name: 'rowHover',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, background of the rows change on hover.'
    },
    {
        name: 'selectAll',
        type: 'boolean',
        default: 'null',
        description: 'Whether all data is selected.'
    },
    {
        name: 'csvSeparator',
        type: 'string',
        default: ',',
        description: 'Character to use as the csv separator.'
    },
    {
        name: 'exportFilename',
        type: 'string',
        default: 'download',
        description: 'Name of the exported file.'
    },
    {
        name: 'exportFunction',
        type: 'function',
        default: 'null',
        description: 'Custom function to export data.'
    },
    {
        name: 'autoLayout',
        type: 'boolean',
        default: 'false',
        description: 'Whether the cell widths scale according to their content or not. Does not apply to scrollable tables.'
    },
    {
        name: 'resizableColumns',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, columns can be resized using drag and drop.'
    },
    {
        name: 'columnResizeMode',
        type: 'string',
        default: 'fit',
        description: 'Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".'
    },
    {
        name: 'reorderableColumns',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, columns can be reordered using drag and drop.'
    },
    {
        name: 'expandedRows',
        type: 'array',
        default: 'null',
        description: 'A collection of row data display as expanded.'
    },
    {
        name: 'expandedRowIcon',
        type: 'string',
        default: 'pi-chevron-down',
        description: 'Icon of the row toggler to display the row as expanded.'
    },
    {
        name: 'collapsedRowIcon',
        type: 'string',
        default: 'pi pi-chevron-right',
        description: 'Icon of the row toggler to display the row as collapsed.'
    },
    {
        name: 'rowGroupMode',
        type: 'string',
        default: 'null',
        description: 'Defines the row group mode, valid options are "subheader" and "rowspan".'
    },
    {
        name: 'groupRowsBy',
        type: 'string|array',
        default: 'null',
        description: 'One or more field names to use in row grouping.'
    },
    {
        name: 'expandableRowGroups',
        type: 'boolean',
        default: 'false',
        description: 'Whether the row groups can be expandable.'
    },
    {
        name: 'expandedRowGroups',
        type: 'array',
        default: 'null',
        description: 'An array of group field values whose groups would be rendered as expanded.'
    },
    {
        name: 'stateStorage',
        type: 'string',
        default: 'session',
        description: 'Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.'
    },
    {
        name: 'stateKey',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of a stateful table to use in state storage.'
    },
    {
        name: 'editMode',
        type: 'string',
        default: 'null',
        description: 'Defines the incell editing mode, valid options are "cell" and "row".'
    },
    {
        name: 'editingRows',
        type: 'array',
        default: 'null',
        description: 'A collection of rows to represent the current editing data in row edit mode.'
    },
    {
        name: 'rowClass',
        type: 'function',
        default: 'null',
        description: 'A function that takes the row data and returns a string to apply a particular class for the row.'
    },
    {
        name: 'rowStyle',
        type: 'object',
        default: 'null',
        description: 'A function that takes the row data as a parameter and returns the inline style for the corresponding row.'
    },
    {
        name: 'scrollable',
        type: 'boolean',
        default: 'false',
        description: 'When specified, enables horizontal and/or vertical scrolling.'
    },
    {
        name: 'scrollDirection',
        type: 'string',
        default: 'vertical',
        description: 'Orientation of the scrolling, options are "vertical", "horizontal" and "both".'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: 'null',
        description: 'Height of the scroll viewport in fixed units or the "flex" keyword for a dynamic size.'
    },
    {
        name: 'virtualScrollerOptions',
        type: 'object',
        default: 'null',
        description: 'Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it. Note: Currently only vertical orientation mode is supported.'
    },
    {
        name: 'frozenValue',
        type: 'array',
        default: 'null',
        description: 'Items of the frozen part in scrollable DataTable.'
    },
    {
        name: 'breakpoint',
        type: 'string',
        default: '960px',
        description: 'The breakpoint to define the maximum width boundary when using stack responsive layout.'
    },
    {
        name: 'showGridlines',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show grid lines between cells.'
    },
    {
        name: 'stripedRows',
        type: 'boolean',
        default: 'false',
        description: 'Whether to displays rows with alternating colors.'
    },
    {
        name: 'highlightOnSelect',
        type: 'boolean',
        default: 'false',
        description: 'Highlights automatically the first item.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Defines the size of the table.'
    },
    {
        name: 'tableStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the table element.'
    },
    {
        name: 'tableClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the table element.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const DataTableEvents = [
    {
        name: 'page',
        description: 'Callback to invoke on pagination. Sort and Filter information is also available for lazy loading implementation.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.page',
                type: 'number',
                description: 'New page number'
            },
            {
                name: 'event.pageCount',
                type: 'number',
                description: 'Total page count'
            },
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of first record'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Number of rows to display in new page'
            },
            {
                name: 'event.sortField',
                type: 'object',
                description: 'Field to sort against'
            },
            {
                name: 'event.sortOrder',
                type: 'number',
                description: 'Sort order as integer'
            },
            {
                name: 'event.multiSortMeta',
                type: 'object',
                description: 'MultiSort metadata'
            },
            {
                name: 'event.filters',
                type: 'object',
                description: 'Collection of active filters'
            },
            {
                name: 'event.filterMatchModes',
                type: 'object',
                description: 'Match modes per field'
            }
        ]
    },
    {
        name: 'sort',
        description: 'Callback to invoke on sort. Page and Filter information is also available for lazy loading implementation.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of first record'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Number of rows to display in new page'
            },
            {
                name: 'event.sortField',
                type: 'object',
                description: 'Field to sort against'
            },
            {
                name: 'event.sortOrder',
                type: 'number',
                description: 'Sort order as integer'
            },
            {
                name: 'event.multiSortMeta',
                type: 'object',
                description: 'MultiSort metadata'
            },
            {
                name: 'event.filters',
                type: 'object',
                description: 'Collection of active filters'
            },
            {
                name: 'event.filterMatchModes',
                type: 'object',
                description: 'Match modes per field'
            }
        ]
    },
    {
        name: 'filter',
        description: 'Event to emit after filtering, not triggered in lazy mode.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of first record'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Number of rows to display in new page'
            },
            {
                name: 'event.sortField',
                type: 'object',
                description: 'Field to sort against'
            },
            {
                name: 'event.sortOrder',
                type: 'number',
                description: 'Sort order as integer'
            },
            {
                name: 'event.multiSortMeta',
                type: 'object',
                description: 'MultiSort metadata'
            },
            {
                name: 'event.filters',
                type: 'object',
                description: 'Collection of active filters'
            },
            {
                name: 'event.filteredValue',
                type: 'string',
                description: 'Filtered collection'
            },
            {
                name: 'event.filterMatchModes',
                type: 'object',
                description: 'Match modes per field'
            }
        ]
    },
    {
        name: 'value-change',
        description: 'Invoked after filtering, sorting, pagination and cell editing to pass the rendered value.',
        arguments: [
            {
                name: 'value',
                type: 'array',
                description: 'Value displayed by the table.'
            }
        ]
    },
    {
        name: 'row-click',
        description: 'Callback to invoke when a row is clicked.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Selected row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Row index'
            }
        ]
    },
    {
        name: 'row-contextmenu',
        description: 'Callback to invoke when a row is selected with a ContextMenu',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Selected row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Row index'
            }
        ]
    },
    {
        name: 'row-select',
        description: 'Callback to invoke when a row is selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Selected row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Row index'
            },
            {
                name: 'event.type',
                type: 'string',
                description: 'Type of the selection, valid values are "row", "radio" or "checkbox".'
            }
        ]
    },
    {
        name: 'row-unselect',
        description: 'Callback to invoke when a row is unselected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Selected row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Row index'
            },
            {
                name: 'event.type',
                type: 'string',
                description: 'Type of the selection, valid values are "row", "radio" or "checkbox".'
            }
        ]
    },
    {
        name: 'select-all-change',
        description: 'Callback to invoke when all data is selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event.'
            },
            {
                name: 'event.checked',
                type: 'object',
                description: 'Whether all data is selected.'
            }
        ]
    },
    {
        name: 'column-resize-end',
        description: 'Callback to invoke when a column is resized.',
        arguments: [
            {
                name: 'event.element',
                type: 'object',
                description: 'DOM element of the resized column.'
            },
            {
                name: 'event.delta',
                type: 'number',
                description: 'Change in column width'
            }
        ]
    },
    {
        name: 'column-reorder',
        description: 'Callback to invoke when a column is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.dragIndex',
                type: 'number',
                description: 'Index of the dragged column'
            },
            {
                name: 'event.dropIndex',
                type: 'number',
                description: 'Index of the dropped column'
            }
        ]
    },
    {
        name: 'row-reorder',
        description: 'Callback to invoke when a row is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.dragIndex',
                type: 'number',
                description: 'Index of the dragged row'
            },
            {
                name: 'event.dropIndex',
                type: 'number',
                description: 'Index of the dropped row'
            },
            {
                name: 'value',
                type: 'array',
                description: 'Reordered value'
            }
        ]
    },
    {
        name: 'row-expand',
        description: 'Callback to invoke when a row is expanded.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Expanded row data.'
            }
        ]
    },
    {
        name: 'row-collapse',
        description: 'Callback to invoke when a row is collapsed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Collapsed row data.'
            }
        ]
    },
    {
        name: 'rowgroup-expand',
        description: 'Callback to invoke when a row group is expanded.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Expanded group value.'
            }
        ]
    },
    {
        name: 'rowgroup-collapse',
        description: 'Callback to invoke when a row group is collapsed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Collapsed group value.'
            }
        ]
    },
    {
        name: 'cell-edit-init',
        description: 'Callback to invoke when cell edit is initiated.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Row data to edit.'
            },
            {
                name: 'event.field',
                type: 'string',
                description: 'Field name of the row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the row data to edit.'
            }
        ]
    },
    {
        name: 'cell-edit-complete',
        description: 'Callback to invoke when cell edit is completed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Row data to edit.'
            },
            {
                name: 'event.newData',
                type: 'object',
                description: 'New row data after editing.'
            },
            {
                name: 'event.value',
                type: 'object',
                description: 'Field value of row data to edit.'
            },
            {
                name: 'event.newValue',
                type: 'object',
                description: 'Field value of new row data after editing'
            },
            {
                name: 'event.field',
                type: 'string',
                description: 'Field name of the row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the row data to edit.'
            },
            {
                name: 'event.type',
                type: 'string',
                description: 'Type of completion such as "enter", "outside" or "tab".'
            }
        ]
    },
    {
        name: 'cell-edit-cancel',
        description: 'Callback to invoke when cell edit is cancelled with escape key.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Row data to edit.'
            },
            {
                name: 'event.field',
                type: 'string',
                description: 'Field name of the row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the row data to edit.'
            }
        ]
    },
    {
        name: 'row-edit-init',
        description: 'Callback to invoke when row edit is initiated.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Row data to edit.'
            },
            {
                name: 'event.newData',
                type: 'object',
                description: 'New row data after editing.'
            },
            {
                name: 'event.field',
                type: 'string',
                description: 'Field name of the row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the row data to edit.'
            }
        ]
    },
    {
        name: 'row-edit-save',
        description: 'Callback to invoke when row edit is saved.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Row data to edit.'
            },
            {
                name: 'event.newData',
                type: 'object',
                description: 'New row data after editing.'
            },
            {
                name: 'event.field',
                type: 'string',
                description: 'Field name of the row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the row data to edit.'
            }
        ]
    },
    {
        name: 'row-edit-cancel',
        description: 'Callback to invoke when row edit is cancelled.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.data',
                type: 'object',
                description: 'Row data to edit.'
            },
            {
                name: 'event.newData',
                type: 'object',
                description: 'New row data after editing.'
            },
            {
                name: 'event.field',
                type: 'string',
                description: 'Field name of the row data.'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the row data to edit.'
            }
        ]
    },
    {
        name: 'state-save',
        description: 'Invoked when a stateful table saves the state.',
        arguments: [
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of first record'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Number of rows to display in new page'
            },
            {
                name: 'event.sortField',
                type: 'object',
                description: 'Field to sort against'
            },
            {
                name: 'event.sortOrder',
                type: 'number',
                description: 'Sort order as integer'
            },
            {
                name: 'event.multiSortMeta',
                type: 'number',
                description: 'MultiSort metadata'
            },
            {
                name: 'event.filters',
                type: 'object',
                description: 'Collection of active filters'
            },
            {
                name: 'event.columnWidths',
                type: 'number',
                description: 'Comma separated list of column widths'
            },
            {
                name: 'event.columnOrder',
                type: 'number',
                description: 'Order of the columns'
            },
            {
                name: 'event.expandedRows',
                type: 'array',
                description: 'Instances of rows in expanded state'
            },
            {
                name: 'event.expandedRowKeys',
                type: 'array',
                description: 'Keys of rows in expanded state'
            },
            {
                name: 'event.expandedRowGroups',
                type: 'array',
                description: 'Instances of row groups in expanded state'
            },
            {
                name: 'event.selection',
                type: 'object',
                description: 'Selected rows'
            },
            {
                name: 'event.selectionKeys',
                type: 'object',
                description: 'Keys of selected rows'
            }
        ]
    },
    {
        name: 'state-restore',
        description: 'Invoked when a stateful table restores the state.',
        arguments: [
            {
                name: 'event.first',
                type: 'number',
                description: 'Index of first record'
            },
            {
                name: 'event.rows',
                type: 'number',
                description: 'Number of rows to display in new page'
            },
            {
                name: 'event.sortField',
                type: 'object',
                description: 'Field to sort against'
            },
            {
                name: 'event.sortOrder',
                type: 'number',
                description: 'Sort order as integer'
            },
            {
                name: 'event.multiSortMeta',
                type: 'number',
                description: 'MultiSort metadata'
            },
            {
                name: 'event.filters',
                type: 'object',
                description: 'Collection of active filters'
            },
            {
                name: 'event.columnWidths',
                type: 'number',
                description: 'Comma separated list of column widths'
            },
            {
                name: 'event.columnOrder',
                type: 'number',
                description: 'Order of the columns'
            },
            {
                name: 'event.expandedRows',
                type: 'array',
                description: 'Instances of rows in expanded state'
            },
            {
                name: 'event.expandedRowKeys',
                type: 'array',
                description: 'Keys of rows in expanded state'
            },
            {
                name: 'event.expandedRowGroups',
                type: 'array',
                description: 'Instances of row groups in expanded state'
            },
            {
                name: 'event.selection',
                type: 'object',
                description: 'Selected rows'
            },
            {
                name: 'event.selectionKeys',
                type: 'object',
                description: 'Keys of selected rows'
            }
        ]
    }
];

const DataTableSlots = [
    {
        name: 'header',
        description: "Custom content for the component's header."
    },
    {
        name: 'paginatorstart',
        description: "Custom content for the component paginator's left side."
    },
    {
        name: 'paginatorend',
        description: "Custom content for the component paginator's right side."
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer."
    },
    {
        name: 'groupheader',
        description: "Custom content for the component's subgroup header."
    },
    {
        name: 'groupfooter',
        description: "Custom content for the component's subgroup footer."
    },
    {
        name: 'loading',
        description: 'Custom loading template.'
    },
    {
        name: 'loadingicon',
        description: 'Custom loading icon template.'
    },
    {
        name: 'reorderindicatorupicon',
        description: 'Custom reorder indicator up icon template.'
    },
    {
        name: 'reorderindicatordownicon',
        description: 'Custom reorder indicator down icon template.'
    },
    {
        name: 'rowgrouptoggleicon',
        description: 'Custom rowgroup toggler icon template.'
    },
    {
        name: 'paginatorfirstpagelinkicon',
        description: 'Custom paginator first page link icon template.'
    },
    {
        name: 'paginatorprevpagelinkicon',
        description: 'Custom paginator prev page link icon template.'
    },
    {
        name: 'paginatornextpagelinkicon',
        description: 'Custom paginator next page link icon template.'
    },
    {
        name: 'paginatorlastpagelinkicon',
        description: 'Custom paginator last page link icon template.'
    },
    {
        name: 'empty',
        description: 'Custom empty template.'
    }
];

module.exports = {
    datatable: {
        name: 'DataTable',
        description: 'DataTable displays data in tabular format.',
        props: DataTableProps,
        events: DataTableEvents,
        slots: DataTableSlots
    }
};

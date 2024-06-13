const TreeTableProps = [
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of treenodes.'
    },
    {
        name: 'dataKey',
        type: 'string|function',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'expandedKeys',
        type: 'array',
        default: 'null',
        description: 'A map of keys to represent the state of the tree expansion state in controlled mode.'
    },
    {
        name: 'selectionKeys',
        type: 'any',
        default: 'null',
        description: 'A map of keys to control the selection state.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
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
        description: 'Position of the paginator, options are "top", "bottom" or "both".'
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
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        description: 'Template of the paginator.'
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
        name: 'rowHover',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, background of the rows change on hover.'
    },
    {
        name: 'autoLayout',
        type: 'boolean',
        default: 'false',
        description: 'Whether the cell widths scale according to their content or not.'
    },
    {
        name: 'sortField',
        type: 'string',
        default: 'null',
        description: 'Property name or a getter function of a row data used for sorting by default.'
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
        name: 'filterMode',
        type: 'string',
        default: 'lenient',
        description: 'Mode for filtering valid values are "lenient" and "strict". Default is lenient.'
    },
    {
        name: 'filterLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
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
        name: 'indentation',
        type: 'number',
        default: '1',
        description: 'Indentation factor as rem value for children nodes. Defaults to 1rem.'
    },
    {
        name: 'showGridlines',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show grid lines between cells.'
    },
    {
        name: 'scrollable',
        type: 'boolean',
        default: 'false',
        description: 'When specified, enables horizontal and/or vertical scrolling.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: 'null',
        description: 'Height of the scroll viewport in fixed units or the "flex" keyword for a dynamic size.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Defines the size of the table.'
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

const TreeTableEvents = [
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
        name: 'node-select',
        description: 'Callback to invoke when a node is selected.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    },
    {
        name: 'node-unselect',
        description: 'Callback to invoke when a node is unselected.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    },
    {
        name: 'node-expand',
        description: 'Callback to invoke when a node is expanded.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    },
    {
        name: 'node-collapse',
        description: 'Callback to invoke when a node is collapsed.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
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
    }
];

const TreeTableSlots = [
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
        name: 'empty',
        description: 'Custom content when there is no data to display.'
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer."
    },
    {
        name: 'loadingicon',
        description: 'Custom loading icon template.'
    },
    {
        name: 'toggleicon',
        description: 'Custom toggler icon template.'
    },
    {
        name: 'checkboxicon',
        description: 'Custom checkbox icon template.'
    },
    {
        name: 'sorticon',
        description: 'Custom sort icon template.'
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
    }
];

module.exports = {
    treetable: {
        name: 'TreeTable',
        description: 'TreeTable is used to display hierarchical data in tabular format.',
        props: TreeTableProps,
        events: TreeTableEvents,
        slots: TreeTableSlots
    }
};

const DataViewProps = [
    {
        name: 'value',
        type: 'array',
        default: 'null',
        description: 'An array of objects to display.'
    },
    {
        name: 'layout',
        type: 'string',
        default: 'list',
        description: 'Layout of the items, valid values are "list" and "grid".'
    },
    {
        name: 'rows',
        type: 'number',
        default: '0',
        description: 'Number of rows to display per page.'
    },
    {
        name: 'first',
        type: 'number',
        default: '0',
        description: 'ndex of the first record to render.'
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
        name: 'sortField',
        type: 'string',
        default: 'null',
        description: 'Property name or a getter function of data to use in sorting by default.'
    },
    {
        name: 'sortOrder',
        type: 'number',
        default: 'null',
        description: 'Order to sort the data by default.'
    },
    {
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'Defines if data is loaded and interacted with in lazy manner.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'Name of the data that uniquely identifies the a record in the data.'
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

const DataViewEvents = [
    {
        name: 'page',
        description: 'Callback to invoke when page changes, the event object contains information about the new state.',
        arguments: [
            {
                name: 'event.page',
                type: 'number',
                description: 'New page number'
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
                name: 'event.pageCount',
                type: 'number',
                description: 'Total number of pages'
            }
        ]
    }
];

const DataViewSlots = [
    {
        name: 'header',
        description: "Custom content for the component's header"
    },
    {
        name: 'paginatorstart',
        description: "Custom content for the component paginator's left side"
    },
    {
        name: 'paginatorend',
        description: "Custom content for the component paginator's right side"
    },
    {
        name: 'list',
        description: 'Content for the list layout'
    },
    {
        name: 'grid',
        description: 'Content for the grid layout'
    },
    {
        name: 'empty',
        description: 'Custom content when there is no data to display'
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer"
    }
];

module.exports = {
    dataview: {
        name: 'DataView',
        description: 'DataView displays data in grid or list layout with pagination and sorting features.',
        props: DataViewProps,
        events: DataViewEvents,
        slots: DataViewSlots
    }
};

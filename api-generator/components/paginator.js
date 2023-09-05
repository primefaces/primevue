const PaginatorProps = [
    {
        name: 'totalRecords',
        type: 'number',
        default: '0',
        description: 'Number of total records.'
    },
    {
        name: 'rows',
        type: 'number',
        default: '0',
        description: 'Data count to display per page.'
    },
    {
        name: 'first',
        type: 'number',
        default: '0',
        description: 'Zero-relative number of the first row to be displayed.'
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
        name: 'template',
        type: 'string',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        description: 'Template of the paginator.'
    },
    {
        name: 'currentPageReportTemplate',
        type: 'string',
        default: '({currentPage} of {totalPages})',
        description: 'Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}'
    },
    {
        name: 'alwaysShow',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the paginator even there is only one page.'
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

const PaginatorEvents = [
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

const PaginatorSlots = [
    {
        name: 'start',
        description: "Custom content for the component's left side."
    },
    {
        name: 'end',
        description: "Custom content for the component's right side."
    },
    {
        name: 'firstpagelinkicon',
        description: 'Custom first page link icon template.'
    },
    {
        name: 'prevpagelinkicon',
        description: 'Custom previous page link icon template.'
    },
    {
        name: 'nextpagelinkicon',
        description: 'Custom next page link icon template.'
    },
    {
        name: 'lastpagelinkicon',
        description: 'Custom last page link icon template.'
    }
];

module.exports = {
    paginator: {
        name: 'Paginator',
        description: 'Paginator is a generic component to display content in paged format.',
        props: PaginatorProps,
        events: PaginatorEvents,
        slots: PaginatorSlots
    }
};

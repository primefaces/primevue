const PaginatorProps = [
    {
        name: "totalRecords",
        type: "number",
        default: "0",
        description: "Number of total records."
    },
    {
        name: "rows",
        type: "number",
        default: "0",
        description: "Data count to display per page."
    },
    {
        name: "first",
        type: "number",
        default: "0",
        description: "Zero-relative number of the first row to be displayed."
    },
    {
        name: "pageLinkSize",
        type: "number",
        default: "5",
        description: "Number of page links to display."
    },
    {
        name: "rowsPerPageOptions",
        type: "array",
        default: "null",
        description: "Array of integer values to display inside rows per page dropdown."
    },
    {
        name: "template",
        type: "string",
        default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
        description: "Template of the paginator."
    },
    {
        name: "currentPageReportTemplate",
        type: "string",
        default: "({currentPage} of {totalPages})",
        description:  "Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}"
    },
    {
        name: "alwaysShow",
        type: "boolean",
        default: "true",
        description: "Whether to show the paginator even there is only one page."
    }
];

const PaginatorEvents = [
    {
        name: "page",
        description: "Callback to invoke when page changes, the event object contains information about the new state.",
        arguments: [
            {
                name: "event.page",
                type: "number",
                description: "New page number"
            },
            {
                name: "event.first",
                type: "number",
                description: "Index of first record"
            },
            {
                name: "event.rows",
                type: "number",
                description: "Number of rows to display in new page"
            },
            {
                name: "event.pageCount",
                type: "number",
                description: "Total number of pages"
            }
        ]
    }
];

const PaginatorSlots = [
    {
        name: "left",
        description: "Custom content for the component's left side"
    },
    {
        name: "right",
        description: "Custom content for the component's right side"
    }
];

module.exports = {
    paginator: {
        name: "Paginator",
        description: "Paginator is a generic component to display content in paged format.",
        props: PaginatorProps,
        events: PaginatorEvents,
        slots: PaginatorSlots
    }
};

const ColumnProps = [
    {
        name: "columnKey",
        type: "any",
        default: "null",
        description: "Identifier of a column if field property is not defined."
    },
    {
        name: "field",
        type: "string",
        default: "null",
        description: "Property represented by the column."
    },
    {
        name: "sortField",
        type: "string",
        default: "null",
        description: "Property name to use in sorting, defaults to field."
    },
    {
        name: "filterField",
        type: "string",
        default: "null",
        description: "Property name to use in filtering, defaults to field."
    },
    {
        name: "sortable",
        type: "any",
        default: "false",
        description: "Defines if a column is sortable."
    },
    {
        name: "header",
        type: "any",
        default: "null",
        description: "Header content of the column."
    },
    {
        name: "footer",
        type: "any",
        default: "null",
        description: "Footer content of the column."
    },
    {
        name: "headerStyle",
        type: "object",
        default: "null",
        description: "Inline style of the column header."
    },
    {
        name: "headerClass",
        type: "string",
        default: "null",
        description: "Style class of the column header."
    },
    {
        name: "bodyStyle",
        type: "object",
        default: "null",
        description: "Inline style of the column body."
    },
    {
        name: "bodyClass",
        type: "string",
        default: "null",
        description: "Style class of the column body."
    },
    {
        name: "footerStyle",
        type: "object",
        default: "null",
        description: "Inline style of the column footer."
    },
    {
        name: "footerClass",
        type: "string",
        default: "null",
        description: "Style class of the footer body."
    },
    {
        name: "filterHeaderStyle",
        type: "object",
        default: "null",
        description: "Inline style of the column filter header in row filter display."
    },
    {
        name: "filterHeaderClass",
        type: "string",
        default: "null",
        description: "Style class of the column filter header in row filter display."
    },
    {
        name: "filterMatchMode",
        type: "string",
        default: "startsWith",
        description: 'Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".'
    },
    {
        name: "filterFunction",
        type: "function",
        default: "null",
        description: 'A function that takes a value and a filter to compare against by returning either true or false. filterMatchMode must be set to "custom" for this function to be triggered.'
    },
    {
        name: "excludeGlobalFilter",
        type: "boolean",
        default: "false",
        description: "Whether to exclude from global filtering or not."
    },
    {
        name: "selectionMode",
        type: "string",
        default: "null",
        description: 'Defines column based selection mode, options are "single" and "multiple".'
    },
    {
        name: "expander",
        type: "boolean",
        default: "false",
        description: "Displays an icon to toggle row expansion."
    },
    {
        name: "colspan",
        type: "number",
        default: "null",
        description: "Number of columns to span for grouping."
    },
    {
        name: "rowspan",
        type: "number",
        default: "null",
        description: "Number of rows to span for grouping."
    },
    {
        name: "rowReorder",
        type: "boolean",
        default: "false",
        description: "Whether this column displays an icon to reorder the rows."
    },
    {
        name: "rowReorderIcon",
        type: "string",
        default: "pi pi-bars",
        description: "Icon of the drag handle to reorder rows."
    },
    {
        name: "reorderableColumn",
        type: "boolean",
        default: "true",
        description: "Defines if the column itself can be reordered with dragging."
    },
    {
        name: "rowEditor",
        type: "boolean",
        default: "false",
        description: "When enabled, column displays row editor controls."
    },
    {
        name: "frozen",
        type: "boolean",
        default: "false",
        description: "Whether the column is fixed in horizontal scrolling."
    },
    {
        name: "alignFrozen",
        type: "string",
        default: "left",
        description: "Position of a frozen column, valid values are left and right."
    }
];

const ColumnSlots = [
    {
        name: "header",
        description: "Custom content for the component's header"
    },
    {
        name: "body",
        description: "Custom content for the component's body"
    },
    {
        name: "footer",
        description: "Custom content for the component's footer"
    },
    {
        name: "editor",
        description: "Custom content for the editing cell"
    }
];

module.exports = {
    column: {
        name: "Column",
        description: "DataTable requires a value as an array of objects and columns defined with Column component.",
        "doc-url": "datatable",
        props: ColumnProps,
        slots: ColumnSlots
    }
};

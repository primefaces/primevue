const ColumnProps = [
    {
        name: 'columnKey',
        type: 'any',
        default: 'null',
        description: 'Identifier of a column if field property is not defined.'
    },
    {
        name: 'field',
        type: 'string',
        default: 'null',
        description: 'Property represented by the column.'
    },
    {
        name: 'sortField',
        type: 'string',
        default: 'null',
        description: 'Property name to use in sorting, defaults to field.'
    },
    {
        name: 'filterField',
        type: 'string',
        default: 'null',
        description: 'Property name to use in filtering, defaults to field.'
    },
    {
        name: 'sortable',
        type: 'any',
        default: 'false',
        description: 'Defines if a column is sortable.'
    },
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Header content of the column.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the column.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of header, body and footer cells.'
    },
    {
        name: 'class',
        type: 'string',
        default: 'null',
        description: 'Style class of header, body and footer cells.'
    },
    {
        name: 'headerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the column header.'
    },
    {
        name: 'headerClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the column header.'
    },
    {
        name: 'bodyStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the column body.'
    },
    {
        name: 'bodyClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the column body.'
    },
    {
        name: 'footerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the column footer.'
    },
    {
        name: 'footerClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the footer body.'
    },
    {
        name: 'showFilterMenu',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display the filter overlay.'
    },
    {
        name: 'showFilterOperator',
        type: 'boolean',
        default: 'true',
        description: 'When enabled, match all and match any operator selector is displayed.'
    },
    {
        name: 'showClearButton',
        type: 'boolean',
        default: 'true',
        description: 'Displays a button to clear the column filtering.'
    },
    {
        name: 'showApplyButton',
        type: 'boolean',
        default: 'true',
        description: 'Displays a button to apply the column filtering.'
    },
    {
        name: 'showFilterMatchModes',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the match modes selector.'
    },
    {
        name: 'showAddButton',
        type: 'boolean',
        default: 'true',
        description: 'When enabled, a button is displayed to add more rules.'
    },
    {
        name: 'filterMatchModeOptions',
        type: 'array',
        default: 'null',
        description: 'An array of label-value pairs to override the global match mode options.'
    },
    {
        name: 'maxConstraints',
        type: 'number',
        default: '2',
        description: 'Maximum number of constraints for a column filter.'
    },
    {
        name: 'excludeGlobalFilter',
        type: 'boolean',
        default: 'false',
        description: 'Whether to exclude from global filtering or not.'
    },
    {
        name: 'filterHeaderStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the column filter header in row filter display.'
    },
    {
        name: 'filterHeaderClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the column filter header in row filter display.'
    },
    {
        name: 'filterMenuStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the column filter overlay.'
    },
    {
        name: 'filterMenuClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the column filter overlay.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines column based selection mode, options are "single" and "multiple".'
    },
    {
        name: 'expander',
        type: 'boolean',
        default: 'false',
        description: 'Displays an icon to toggle row expansion.'
    },
    {
        name: 'colspan',
        type: 'number',
        default: 'null',
        description: 'Number of columns to span for grouping.'
    },
    {
        name: 'rowspan',
        type: 'number',
        default: 'null',
        description: 'Number of rows to span for grouping.'
    },
    {
        name: 'rowReorder',
        type: 'boolean',
        default: 'false',
        description: 'Whether this column displays an icon to reorder the rows.'
    },
    {
        name: 'rowReorderIcon',
        type: 'string',
        default: 'pi pi-bars',
        description: 'Icon of the drag handle to reorder rows.'
    },
    {
        name: 'reorderableColumn',
        type: 'boolean',
        default: 'true',
        description: 'Defines if the column itself can be reordered with dragging.'
    },
    {
        name: 'rowEditor',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, column displays row editor controls.'
    },
    {
        name: 'frozen',
        type: 'boolean',
        default: 'false',
        description: 'Whether the column is fixed in horizontal scrolling.'
    },
    {
        name: 'alignFrozen',
        type: 'string',
        default: 'left',
        description: 'Position of a frozen column, valid values are left and right.'
    },
    {
        name: 'exportable',
        type: 'boolean',
        default: 'true',
        description: 'Whether the column is included in data export.'
    },
    {
        name: 'exportHeader',
        type: 'string',
        default: 'null',
        description: 'Custom export header of the column to be exported as CSV.'
    },
    {
        name: 'exportFooter',
        type: 'string',
        default: 'null',
        description: 'Custom export footer of the column to be exported as CSV.'
    },
    {
        name: 'hidden',
        type: 'boolean',
        default: 'false',
        description: 'Whether the column is rendered.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    }
];

const ColumnSlots = [
    {
        name: 'header',
        description: "Custom content for the component's header"
    },
    {
        name: 'body',
        description: "Custom content for the component's body"
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer"
    },
    {
        name: 'editor',
        description: 'Custom content for the editing cell'
    },
    {
        name: 'filter',
        description: 'Custom content for the filtering items'
    },
    {
        name: 'filterheader',
        description: "Custom content for the filter menu's header"
    },
    {
        name: 'filterfooter',
        description: "Custom content for the filter menu's footer"
    },
    {
        name: 'filterclear',
        description: "Custom content for the filter menu's clear section"
    },
    {
        name: 'filterapply',
        description: "Custom content for the filter menu's apply section"
    },
    {
        name: 'loading',
        description: 'Custom loading template.'
    },
    {
        name: 'rowtoggleicon',
        description: 'Custom row toggler icon template.'
    },
    {
        name: 'rowcheckboxicon',
        description: 'Custom row checkbox icon template.'
    },
    {
        name: 'roweditoriniticon',
        description: 'Custom row editor init icon template.'
    },
    {
        name: 'roweditorsaveicon',
        description: 'Custom row editor save icon template.'
    },
    {
        name: 'roweditorcancelicon',
        description: 'Custom row editor cancel icon template.'
    },
    {
        name: 'filtericon',
        description: 'Custom filter icon template.'
    },
    {
        name: 'filterclearicon',
        description: 'Custom filter clear icon template.'
    },
    {
        name: 'filterremoveicon',
        description: 'Custom filter remove icon template.'
    },
    {
        name: 'filteraddicon',
        description: 'Custom filter add icon template.'
    },
    {
        name: 'sorticon',
        description: 'Custom sort icon template.'
    },
    {
        name: 'headercheckboxicon',
        description: 'Custom header checkbox icon template.'
    },
    {
        name: 'rowreordericon',
        description: 'Custom row reorder icon template.'
    }
];

module.exports = {
    column: {
        name: 'Column',
        description: 'DataTable requires a value as an array of objects and columns defined with Column component.',
        'doc-url': 'datatable',
        props: ColumnProps,
        slots: ColumnSlots
    }
};

const OrganizationChartProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "selectionKeys",
        type: "object",
        default: "null",
        description: "A map instance of key-value pairs to represented the selected nodes."
    },
    {
        name: "selectionMode",
        type: "string",
        default: "null",
        description: 'Type of the selection, valid values are "single" and "multiple".'
    },
    {
        name: "collapsible",
        type: "boolean",
        default: "false",
        description: "Whether the nodes can be expanded or toggled."
    },
    {
        name: "collapsedKeys",
        type: "object",
        default: "null",
        description: "A map instance of key-value pairs to represented the collapsed nodes."
    }
];

const OrganizationChartEvents = [
    {
        name: "node-select",
        description: "Callback to invoke when a node is selected.",
        arguments: [
            {
                name: "node",
                type: "object",
                description: "Node instance"
            }
        ]
    },
    {
        name: "node-unselect",
        description: "Callback to invoke when a node is unselected.",
        arguments: [
            {
                name: "node",
                type: "object",
                description: "Node instance"
            }
        ]
    },
    {
        name: "node-expand",
        description: "Callback to invoke when a node is expanded.",
        arguments: [
            {
                name: "node",
                type: "object",
                description: "Node instance"
            }
        ]
    },
    {
        name: "node-collapse",
        description: "Callback to invoke when a node is collapsed.",
        arguments: [
            {
                name: "node",
                type: "object",
                description: "Node instance"
            }
        ]
    }
];

module.exports = {
    organizationchart: {
        name: "OrganizationChart",
        description: "OrganizationChart visualizes hierarchical organization data.",
        props: OrganizationChartProps,
        events: OrganizationChartEvents
    }
};

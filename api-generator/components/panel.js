const PanelProps = [
    {
        name: "header",
        type: "string",
        default: "null",
        description: "Header text of the panel."
    },
    {
        name: "toggleable",
        type: "boolean",
        default: "null",
        description: "Defines if content of panel can be expanded and collapsed."
    },
    {
        name: "collapsed",
        type: "boolean",
        default: "null",
        description: "Defines the initial state of panel content."
    }
];

const PanelEvents = [
    {
        name: "toggle",
        description: "Callback to invoke when a tab toggle.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.value",
                type: "boolean",
                description: "collapsed state as a boolean"
            }
        ]
    }
];

const PanelSlots = [
    {
        name: "header",
        description: "Custom content for the component's header"
    },
    {
        name: "icons",
        description: "Custom content for the header's icon"
    }
];

module.exports = {
    panel: {
        name: "Panel",
        description: "Panel is a container with the optional content toggle feature.",
        props: PanelProps,
        events: PanelEvents,
        slots: PanelSlots
    }
};

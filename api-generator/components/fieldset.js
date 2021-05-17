const FieldsetProps = [
    {
        name: "legend",
        type: "string",
        default: "null",
        description: "Header text of the fieldset."
    },
    {
        name: "toggleable",
        type: "boolean",
        default: "null",
        description:
            "When specified, content can toggled by clicking the legend."
    },
    {
        name: "collapsed",
        type: "boolean",
        default: "true",
        description: "Defines the default visibility state of the content."
    }
];

const FieldsetEvents = [
    {
        name: "toggle",
        description: "Callback to invoke when a tab gets expanded or collapsed.",
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

const FieldsetSlots = [
    {
        name: "legend",
        description: "Custom content for the component's header"
    }
];

module.exports = {
    fieldset: {
        name: "Fieldset",
        description: "Fieldset is a grouping component with the optional content toggle feature.",
        props: FieldsetProps,
        events: FieldsetEvents,
        slots: FieldsetSlots
    }
};

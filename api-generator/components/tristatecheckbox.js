const TriStateCheckboxProps = [
    {
        name: "value",
        type: "boolean",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "ariaLabelledBy",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
    }
];

const TriStateCheckboxEvents = [
    {
        name: "change",
        description: "Callback to invoke on value change.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    },
    {
        name: "input",
        description: "Callback to invoke click.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Value of checkbox"
            }
        ]
    },
    {
        name: "click",
        description: "Callback to invoke click.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    },
    {
        name: "focus",
        description: "Callback to invoke on focus.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    },
    {
        name: "blur",
        description: "Callback to invoke on blur.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    }
];

module.exports = {
    tristatecheckbox: {
        name: "TriStateCheckbox",
        description: 'TriStateCheckbox is used to select either "true", "false" or "null" as the value.',
        props: TriStateCheckboxProps,
        events: TriStateCheckboxEvents
    }
};

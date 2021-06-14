const CheckboxProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the checkbox."
    },
    {
        name: "modelValue",
        type: "any",
        default: "null",
        description: "Value binding of the checkbox."
    },
    {
        name: "binary",
        type: "boolean",
        default: "false",
        description: "Allows to select a boolean value instead of multiple values."
    },
    {
        name: "class",
        type: "string",
        default: "null",
        description: "Style class of the component."
    },
    {
        name: "style",
        type: "any",
        default: "null",
        description: "Inline of the component."
    }
];

const CheckboxEvents = [
    {
        "name": "click",
        "description": "Callback to invoke on value click.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    },
    {
        "name": "change",
        "description": "Callback to invoke on value change.",
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
    checkbox: {
        name: "Checkbox",
        description: "Checkbox is an extension to standard checkbox element with theming.",
        props: CheckboxProps,
        events: CheckboxEvents
    }
};

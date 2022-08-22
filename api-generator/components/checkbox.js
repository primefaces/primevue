const CheckboxProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the checkbox."
    },
    {
        name: "binary",
        type: "boolean",
        default: "false",
        description: "Allows to select a boolean value instead of multiple values."
    },
    {
        name: "trueValue",
        type: "any",
        default: "true",
        description: "Value in checked state."
    },
    {
        name: "falseValue",
        type: "any",
        default: "true",
        description: "Value in unchecked state."
    }
];

const CheckboxEvents = [
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
        description: "Callback to invoke on click.",
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
    checkbox: {
        name: "Checkbox",
        description: "Checkbox is an extension to standard checkbox element with theming.",
        props: CheckboxProps,
        events: CheckboxEvents
    }
};

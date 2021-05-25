const RadioButtonProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the checkbox."
    }
];

const RadioButtonEvents = [
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
        description: "Callback to invoke on value change.",
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
    radiobutton: {
        name: "RadioButton",
        description: "RadioButton is an extension to standard radio button element with theming.",
        props: RadioButtonProps,
        events: RadioButtonEvents
    }
};

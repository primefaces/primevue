const RadioButtonProps = [
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

const RadioButtonEvents = [
    {
        name: "click",
        description: "Callback to invoke on radio button click.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    },
    {
        name: "change",
        description: "Callback to invoke on radio button value change.",
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

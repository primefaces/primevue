const ToggleButtonProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "onIcon",
        type: "string",
        default: "null",
        description: "Icon for the on state."
    },
    {
        name: "offIcon",
        type: "string",
        default: "null",
        description: "Icon for the off state."
    },
    {
        name: "onLabel",
        type: "string",
        default: "yes",
        description: "Label for the on state."
    },
    {
        name: "offLabel",
        type: "string",
        default: "no",
        description: "Label for the off state."
    },
    {
        name: "iconPos",
        type: "string",
        default: "left",
        description: 'Position of the icon, valid values are "left" and "right".'
    },
    {
        name: "ariaLabelledBy",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
    }
];

const ToggleButtonEvents = [
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
                description: "Value as the checked state."
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
    togglebutton: {
        name: "ToggleButton",
        description: "ToggleButton is used to select a boolean value using a button.",
        props: ToggleButtonProps,
        events: ToggleButtonEvents
    }
};

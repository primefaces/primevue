const ToggleButtonProps = [
    {
        name: "modelValue",
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
        name: "tabindex",
        type: "number",
        default: "null",
        description: "Index of the element in tabbing order."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the element should be disabled."
    },
    {
        name: "inputId",
        type: "string",
        default: "null",
        description: "Identifier of the focus input to match a label defined for the chips."
    },
    {
        name: "inputClass",
        type: "string",
        default: "null",
        description: "Style class of the input field."
    },
    {
        name: "inputStyle",
        type: "any",
        default: "null",
        description: "Inline style of the input field."
    },
    {
        name: "inputProps",
        type: "object",
        default: "null",
        description: "Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component."
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
        name: "focus",
        description: "Callback to invoke when the component receives focus.",
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
        description: "Callback to invoke when the component loses focus.",
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

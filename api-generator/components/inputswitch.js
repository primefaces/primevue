const InputSwitchProps = [
    {
        name: "value",
        type: "boolean",
        default: "null",
        description: "Specifies whether a inputswitch should be checked or not."
    },
    {
        name: "inputId",
        type: "string",
        default: "null",
        description: "Identifier of the input element."
    },
    {
        name: "name",
        type: "string",
        default: "null",
        description: "Name of the input element."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the component should be disabled."
    },
    {
        name: "ariaLabelledBy",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
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

const InputSwitchEvents = [
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
        description: "Checked state as a boolean.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "New value"
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
    inputswitch: {
        name: "InputSwitch",
        description: "InputSwitch is used to select a boolean value.",
        props: InputSwitchProps,
        events: InputSwitchEvents
    }
};

const ChipsProps = [
    {
        name: "modelValue",
        type: "array",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "max",
        type: "number",
        default: "null",
        description: "Maximum number of entries allowed."
    },
    {
        name: "separator",
        type: "string",
        default: "null",
        description: 'Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","'
    },
    {
        name: "addOnBlur",
        type: "boolean",
        default: "false",
        description: "Whether to add an item when the input loses focus."
    },
    {
        name: "allowDuplicate",
        type: "boolean",
        default: "false",
        description: "Whether to allow duplicate values or not."
    },
    {
        name: "inputId",
        type: "string",
        default: "null",
        description: "Identifier of the focus input to match a label defined for the chips."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the element should be disabled."
    },
    {
        name: "'aria-labelledby'",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
    },
    {
        name: "'aria-label'",
        type: "string",
        default: "null",
        description: "Establishes a string value that labels the component."
    }
];

const ChipsEvents = [
    {
        name: "add",
        description: "Callback to invoke when a chip is added.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "value",
                type: "array",
                description: "Added item value"
            }
        ]
    },
    {
        name: "remove",
        description: "Callback to invoke when a chip is removed.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "value",
                type: "array",
                description: "Removed item value"
            }
        ]
    }
];

const ChipsSlots = [
    {
        name: "chips",
        description: "Custom content for the chips"
    }
];

module.exports = {
    chips: {
        name: "chips",
        description: "Chips is used to enter multiple values on an input field.",
        props: ChipsProps,
        events: ChipsEvents,
        slots: ChipsSlots
    }
};

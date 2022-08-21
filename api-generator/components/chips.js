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
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the element should be disabled."
    },
    {
        name: "placeholder",
        type: "string",
        default: "null",
        description: "Placeholder text for the input."
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

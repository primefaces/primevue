const ColorPickerProps = [
    {
        name: "value",
        type: "string",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "defaultColor",
        type: "string",
        default: "ff0000",
        description: "Initial color to display when value is not defined."
    },
    {
        name: "inline",
        type: "boolean",
        default: "false",
        description: "Whether to display as an overlay or not."
    },
    {
        name: "format",
        type: "string",
        default: "hex",
        description: 'Format to use in value binding, supported formats are "hex", "rgb" and "hsb".'
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the component should be disabled."
    },
    {
        name: "tabIndex",
        type: "string",
        default: "null",
        description: "Index of the element in tabbing order."
    },
    {
        name: "baseZIndex",
        type: "number",
        default: "0",
        description: "Base zIndex value to use in layering."
    },
    {
        name: "autoZIndex",
        type: "boolean",
        default: "true",
        description: "Whether to automatically manage layering."
    },
    {
        name: "ariaLabelledBy",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
    }
];

const ColorPickerEvents = [
    {
        name: "input",
        description: "Callback to invoke on value change.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "New value"
            }
        ]
    }
];

module.exports = {
    colorpicker: {
        name: "ColorPicker",
        description: "ColorPicker is an input component to select a color.",
        props: ColorPickerProps,
        events: ColorPickerEvents
    }
};

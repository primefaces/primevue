const ColorPickerProps = [
    {
        name: 'modelValue',
        type: 'string',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'defaultColor',
        type: 'string',
        default: 'ff0000',
        description: 'Initial color to display when value is not defined.'
    },
    {
        name: 'inline',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display as an overlay or not.'
    },
    {
        name: 'format',
        type: 'string',
        default: 'hex',
        description: 'Format to use in value binding, supported formats are "hex", "rgb" and "hsb".'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'tabindex',
        type: 'string',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'panelClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the overlay panel.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Used to define a string that labels the element.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const ColorPickerEvents = [
    {
        name: 'change',
        description: 'Callback to invoke when a color is selected.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.value',
                type: 'any',
                description: 'Selected color'
            }
        ]
    },
    {
        name: 'show',
        description: 'Callback to invoke when popup is shown.'
    },
    {
        name: 'hide',
        description: 'Callback to invoke when popup is hidden.'
    }
];

module.exports = {
    colorpicker: {
        name: 'ColorPicker',
        description: 'ColorPicker is an input component to select a color.',
        props: ColorPickerProps,
        events: ColorPickerEvents
    }
};

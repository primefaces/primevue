const SliderProps = [
    {
        name: 'modelValue',
        type: 'number',
        default: '0',
        description: 'Value of the component.'
    },
    {
        name: 'min',
        type: 'number',
        default: '0',
        description: 'Mininum boundary value.'
    },
    {
        name: 'max',
        type: 'number',
        default: '100',
        description: 'Maximum boundary value.'
    },
    {
        name: 'orientation',
        type: 'string',
        default: 'horizontal',
        description: 'Orientation of the slider, valid values are horizontal and vertical.'
    },
    {
        name: 'step',
        type: 'number',
        default: '1',
        description: 'Step factor to increment/decrement the value.'
    },
    {
        name: 'range',
        type: 'boolean',
        default: 'false',
        description: 'When speficed, allows two boundary values to be picked.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
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

const SliderEvents = [
    {
        name: 'change',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'value',
                type: 'number',
                description: 'Selected option value'
            }
        ]
    },
    {
        name: 'slideend',
        description: 'Callback to invoke when slide ends.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'number',
                description: 'New value.'
            }
        ]
    }
];

module.exports = {
    slider: {
        name: 'Slider',
        description: 'Slider is an input component to provide a numerical input',
        props: SliderProps,
        events: SliderEvents
    }
};

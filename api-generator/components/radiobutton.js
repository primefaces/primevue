const RadioButtonProps = [
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value of the checkbox.'
    },
    {
        name: 'modelValue',
        type: 'any',
        default: 'null',
        description: 'Value binding of the checkbox.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the input element.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying input element.'
    },
    {
        name: 'inputClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the input field.'
    },
    {
        name: 'inputStyle',
        type: 'any',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.'
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
    }
];

const RadioButtonEvents = [
    {
        name: 'click',
        description: 'Callback to invoke on radio button click.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'change',
        description: 'Callback to invoke on radio button value change.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

module.exports = {
    radiobutton: {
        name: 'RadioButton',
        description: 'RadioButton is an extension to standard radio button element with theming.',
        props: RadioButtonProps,
        events: RadioButtonEvents
    }
};

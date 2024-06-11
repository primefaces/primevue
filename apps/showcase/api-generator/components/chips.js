const ChipsProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'max',
        type: 'number',
        default: 'null',
        description: 'Maximum number of entries allowed.'
    },
    {
        name: 'separator',
        type: 'string',
        default: 'null',
        description: 'Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","'
    },
    {
        name: 'addOnBlur',
        type: 'boolean',
        default: 'false',
        description: 'Whether to add an item when the input loses focus.'
    },
    {
        name: 'allowDuplicate',
        type: 'boolean',
        default: 'false',
        description: 'Whether to allow duplicate values or not.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should have invalid state style.'
    },
    {
        name: 'variant',
        type: 'string',
        default: 'null',
        description: 'Specifies the input variant of the component.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text for the input.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the focus input to match a label defined for the chips.'
    },
    {
        name: 'inputClass',
        type: 'string | object',
        default: 'null',
        description: 'Style class of the input field.'
    },
    {
        name: 'inputStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.'
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

const ChipsEvents = [
    {
        name: 'add',
        description: 'Callback to invoke when a chip is added.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'array',
                description: 'Added item value'
            }
        ]
    },
    {
        name: 'remove',
        description: 'Callback to invoke when a chip is removed.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'array',
                description: 'Removed item value'
            }
        ]
    }
];

const ChipsSlots = [
    {
        name: 'chips',
        description: 'Custom content for the chips'
    },
    {
        name: 'removetokenicon',
        description: 'Custom remove token icon template.'
    }
];

module.exports = {
    chips: {
        name: 'chips',
        description: 'Chips is used to enter multiple values on an input field.',
        props: ChipsProps,
        events: ChipsEvents,
        slots: ChipsSlots
    }
};

const TriStateCheckboxProps = [
    {
        name: 'modelValue',
        type: 'boolean',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
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
        name: 'tabindex',
        type: 'string',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying input element.'
    },
    {
        name: 'inputProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.'
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

const TriStateCheckboxSlots = [
    {
        name: 'checkicon',
        description: 'Custom check icon template.'
    },
    {
        name: 'uncheckicon',
        description: 'Custom uncheck icon template.'
    },
    {
        name: 'nullableicon',
        description: 'Custom nullable icon template.'
    }
];

module.exports = {
    tristatecheckbox: {
        name: 'TriStateCheckbox',
        description: 'TriStateCheckbox is used to select either "true", "false" or "null" as the value.',
        props: TriStateCheckboxProps,
        slots: TriStateCheckboxSlots
    }
};

const CheckboxProps = [
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
        name: 'binary',
        type: 'boolean',
        default: 'false',
        description: 'Allows to select a boolean value instead of multiple values.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field is read-only.'
    },
    {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element is required.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: 'null',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'trueValue',
        type: 'any',
        default: 'null',
        description: 'Value in checked state.'
    },
    {
        name: 'falseValue',
        type: 'any',
        default: 'null',
        description: 'Value in unchecked state.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying input element.'
    },
    {
        name: 'inputClass',
        type: 'any',
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

const CheckboxEvents = [
    {
        name: 'click',
        description: 'Callback to invoke on value click.'
    },
    {
        name: 'change',
        description: 'Callback to invoke on value change.'
    },
    {
        name: 'input',
        description: 'Callback to invoke on value change.'
    }
];

module.exports = {
    checkbox: {
        name: 'Checkbox',
        description: 'Checkbox is an extension to standard checkbox element with theming.',
        props: CheckboxProps,
        events: CheckboxEvents
    }
};

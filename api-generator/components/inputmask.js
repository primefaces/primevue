const InputMaskProps = [
    {
        name: 'modelValue',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'mask',
        type: 'string',
        default: 'null',
        description: 'Mask pattern.'
    },
    {
        name: 'slotChar',
        type: 'string',
        default: '-',
        description: 'Placeholder character in mask, default is underscore.'
    },
    {
        name: 'autoClear',
        type: 'boolean',
        default: 'true',
        description: 'Clears the incomplete value on blur.'
    },
    {
        name: 'unmask',
        type: 'boolean',
        default: 'false',
        description: 'Defines if model sets the raw unmasked value to bound value or the formatted mask value.'
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

module.exports = {
    inputmask: {
        name: 'InputMask',
        description: 'InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.',
        props: InputMaskProps
    }
};

const InputTextProps = [
    {
        name: 'modelValue',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Defines the size of the component, valid values are "small" and "large".'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

module.exports = {
    inputtext: {
        name: 'InputText',
        description: 'InputText renders a text field to enter data.',
        props: InputTextProps
    }
};

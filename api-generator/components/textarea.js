const TextareaProps = [
    {
        name: 'modelValue',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'autoResize',
        type: 'boolean',
        default: 'false',
        description: 'When present, height of textarea changes as being typed.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    }
];

module.exports = {
    textarea: {
        name: 'Textarea',
        description: 'Textarea is a multi-line text input element.',
        props: TextareaProps
    }
};

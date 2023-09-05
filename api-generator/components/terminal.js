const TerminalProps = [
    {
        name: 'welcomeMessage',
        type: 'string',
        default: 'null',
        description: 'Initial text to display on terminal.'
    },
    {
        name: 'prompt',
        type: 'string',
        default: 'null',
        description: 'Prompt text for each command.'
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
    terminal: {
        name: 'Terminal',
        description: 'Terminal is a text based user interface.',
        props: TerminalProps
    }
};

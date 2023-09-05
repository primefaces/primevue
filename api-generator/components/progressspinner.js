const ProgressSpinnerProps = [
    {
        name: 'strokeWidth',
        type: 'string',
        default: '2',
        description: 'Width of the circle stroke.'
    },
    {
        name: 'fill',
        type: 'string',
        default: 'null',
        description: 'Color for the background of the circle.'
    },
    {
        name: 'animationDuration',
        type: 'string',
        default: '2s',
        description: 'Duration of the rotate animation.'
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
    progressspinner: {
        name: 'ProgressSpinner',
        description: 'ProgressSpinner is a process status indicator',
        props: ProgressSpinnerProps
    }
};

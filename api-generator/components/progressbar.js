const ProgressbarProps = [
    {
        name: 'value',
        type: 'number',
        default: 'null',
        description: 'Current value of the progress.'
    },
    {
        name: 'mode',
        type: 'string',
        default: 'determinate',
        description: 'Defines the mode of the progress, valid values are "determinate" and "indeterminate".'
    },
    {
        name: 'showValue',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display the progress bar value.'
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
    progressbar: {
        name: 'ProgressBar',
        description: 'ProgressBar is a process status indicator.',
        props: ProgressbarProps
    }
};

const SplitterProps = [
    {
        name: 'layout',
        type: 'string',
        default: 'horizontal',
        description: 'Orientation of the panels, valid values are "horizontal" and "vertical".'
    },
    {
        name: 'gutterSize',
        type: 'number',
        default: '4',
        description: 'Size of the divider in pixels.'
    },
    {
        name: 'stateKey',
        type: 'string',
        default: 'null',
        description: 'Storage identifier of a stateful Splitter.'
    },
    {
        name: 'stateStorage',
        type: 'string',
        default: 'storage',
        description: 'Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.'
    },
    {
        name: 'step',
        type: 'number',
        default: '5',
        description: 'Step factor to increment/decrement the size of the panels while pressing the arrow keys.'
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

const SplitterEvents = [
    {
        name: 'resizened',
        description: 'Callback to invoke when resize ends.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.sizes',
                type: 'array',
                description: 'Sizes of the panels as an array'
            }
        ]
    }
];

module.exports = {
    splitter: {
        name: 'Splitter',
        description: 'Splitter is utilized to separate and resize panels',
        props: SplitterProps,
        events: SplitterEvents
    }
};

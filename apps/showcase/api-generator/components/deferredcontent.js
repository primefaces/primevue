const DeferredContentProps = [
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

const DeferredContentEvents = [
    {
        name: 'load',
        description: 'Callback to invoke when deferred content is loaded..',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Event object'
            }
        ]
    }
];

module.exports = {
    deferredcontent: {
        name: 'DeferredContent',
        description: 'DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.',
        props: DeferredContentProps,
        events: DeferredContentEvents
    }
};

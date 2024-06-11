const InplaceProps = [
    {
        name: 'active',
        type: 'boolean',
        default: 'false',
        description: 'Whether the content is displayed or not.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
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

const InplaceEvents = [
    {
        name: 'open',
        description: 'Callback to invoke when inplace is opened.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'close',
        description: 'Callback to invoke when inplace is closed.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const InplaceSlots = [
    {
        name: 'display',
        description: 'Custom display template.'
    },
    {
        name: 'content',
        description: 'Custom content template.'
    }
];

module.exports = {
    inplace: {
        name: 'Inplace',
        description: 'Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.',
        props: InplaceProps,
        events: InplaceEvents,
        slots: InplaceSlots
    }
};

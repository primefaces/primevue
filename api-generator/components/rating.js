const RatingProps = [
    {
        name: 'modelValue',
        type: 'number',
        default: 'null',
        description: 'Value of the rating.'
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
        description: 'When present, it specifies that component is read-only.'
    },
    {
        name: 'stars',
        type: 'number',
        default: '5',
        description: 'Number of stars.'
    },
    {
        name: 'cancel',
        type: 'boolean',
        default: 'true',
        description: 'When specified a cancel icon is displayed to allow clearing the value.'
    },
    {
        name: 'onIcon',
        type: 'string',
        default: 'null',
        description: 'Icon for the on state.'
    },
    {
        name: 'offIcon',
        type: 'string',
        default: 'null',
        description: 'Icon for the off state.'
    },
    {
        name: 'cancelIcon',
        type: 'string',
        default: 'null',
        description: 'Icon for the cancelable state.'
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

const RatingSlots = [
    {
        name: 'cancelicon',
        description: 'Custom cancel icon template.'
    },
    {
        name: 'onicon',
        description: 'Custom on icon template.'
    },
    {
        name: 'officon',
        description: 'Custom off icon template.'
    }
];

const RatingEvents = [
    {
        name: 'change',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'number',
                description: 'Selected option value'
            }
        ]
    }
];

module.exports = {
    rating: {
        name: 'rating',
        description: 'Rating component is a star based selection input.',
        props: RatingProps,
        slots: RatingSlots,
        events: RatingEvents
    }
};

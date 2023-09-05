const ChipProps = [
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Defines the text to display.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Defines the icon to display.'
    },
    {
        name: 'image',
        type: 'string',
        default: 'null',
        description: 'Defines the image to display.'
    },
    {
        name: 'removable',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display a remove icon.'
    },
    {
        name: 'removeIconClass',
        type: 'string',
        default: 'pi pi-times-circle',
        description: 'Icon of the remove element.'
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

const ChipEvents = [
    {
        name: 'remove',
        description: 'Callback to invoke when a chip is removed.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const ChipSlots = [
    {
        name: 'icon',
        description: 'Custom icon template of chip component.'
    },
    {
        name: 'removeicon',
        description: 'Custom remove icon template of chip component.'
    }
];

module.exports = {
    chip: {
        name: 'Chip',
        description: 'Chip represents entities using icons, labels and images',
        props: ChipProps,
        events: ChipEvents,
        slots: ChipSlots
    }
};

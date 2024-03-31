const MessageProps = [
    {
        name: 'severity',
        type: 'string',
        default: 'info',
        description: 'Severity level of the message. Valid severities are "success", "info", "warn", "error", "secondary" and "contrast".'
    },
    {
        name: 'closable',
        type: 'boolean',
        default: 'true',
        description: 'Whether the message can be closed manually using the close icon.'
    },
    {
        name: 'sticky',
        type: 'boolean',
        default: 'null',
        description: 'When enabled, message is not removed automatically.'
    },
    {
        name: 'life',
        type: 'number',
        default: '300',
        description: 'Delay in milliseconds to close the message automatically.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'undefined',
        description: 'Display a custom icon for the message.'
    },
    {
        name: 'closeIcon',
        type: 'string',
        default: 'undefined',
        description: 'Display a custom close icon for the message.'
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

const MessageSlots = [
    {
        name: 'messageicon',
        description: 'Custom message icon template.'
    },
    {
        name: 'closeicon',
        description: 'Custom close icon template.'
    },
    {
        name: 'container',
        description: 'Custom container template.'
    }
];

const MessageEvents = [
    {
        name: 'close',
        description: 'Callback to invoke when a message is closed.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'life-end',
        description: "Callback to invoke when the message's timeout is over."
    }
];

module.exports = {
    message: {
        name: 'Message',
        description: 'Messages is used to display inline messages with various severities.',
        props: MessageProps,
        slots: MessageSlots,
        events: MessageEvents
    }
};

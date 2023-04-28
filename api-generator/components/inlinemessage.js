const InlineMessageProps = [
    {
        name: 'severity',
        type: 'string',
        default: 'error',
        description: 'Severity level of the message. Valid severities are "success", "info", "warn" and "error".'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'undefined',
        description: 'Display a custom icon for the message.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Uses to pass attributes to DOM elements inside the component.'
    }
];

const MessageSlots = [
    {
        name: 'icon',
        description: 'Custom icon template.'
    }
];

module.exports = {
    inlinemessage: {
        name: 'InlineMessage',
        description: 'InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms',
        'doc-url': 'message',
        props: InlineMessageProps,
        slots: MessageSlots
    }
};

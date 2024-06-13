const InlineMessageProps = [
    {
        name: 'severity',
        type: 'string',
        default: 'error',
        description: 'Severity level of the message. Valid severities are "success", "info", "warn", "error", "secondary" and "contrast".'
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

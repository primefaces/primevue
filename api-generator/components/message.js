const MessageProps = [
    {
        name: "severity",
        type: "string",
        default: "info",
        description: 'Severity level of the message. Valid severities are "success", "info", "warn" and "error".'
    },
    {
        name: "closable",
        type: "boolean",
        default: "true",
        description: "Whether the message can be closed manually using the close icon."
    },
    {
        name: "sticky",
        type: "boolean",
        default: "null",
        description: "When enabled, message is not removed automatically."
    },
    {
        name: "life",
        type: "number",
        default: "300",
        description: "Delay in milliseconds to close the message automatically."
    },
    {
        name: "icon",
        type: "string",
        default: "null",
        description: "Display a custom icon for the message."
    }
];

const MessageEvents = [
    {
        name: "close",
        description: "Callback to invoke when a message is closed.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
            }
        ]
    }
];

module.exports = {
    message: {
        name: "Message",
        description: "Messages is used to display inline messages with various severities.",
        props: MessageProps,
        events: MessageEvents
    }
};

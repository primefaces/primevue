const InlineMessageProps = [
    {
        name: "severity",
        type: "string",
        default: "error",
        description: 'Severity level of the message. Valid severities are "success", "info", "warn" and "error".'
    }
];

module.exports = {
    inlinemessage: {
        name: "InlineMessage",
        description: "InlineMessage component is useful in cases where a single message needs to be displayed related to an element such as forms",
        "doc-url": "message",
        props: InlineMessageProps
    }
};

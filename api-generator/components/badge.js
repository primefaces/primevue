const BadgeProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value to display inside the badge."
    },
    {
        name: "severity",
        type: "string",
        default: "null",
        description: "Severity type of the badge."
    },
    {
        name: "size",
        type: "string",
        default: "null",
        description: 'Size of the badge, valid options are "large" and "xlarge".'
    }
];

module.exports = {
    badge: {
        name: "Badge",
        description: "Badge is a small status indicator for another element.",
        props: BadgeProps
    }
};

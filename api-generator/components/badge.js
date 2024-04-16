const BadgeProps = [
    {
        name: 'value',
        type: 'string | number',
        default: 'null',
        description: 'Value to display inside the badge.'
    },
    {
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Severity type of the badge. Valid severities are "secondary", "success", "info", "warn", "danger" and "contrast".'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Size of the badge, valid options are "large" and "xlarge".'
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

module.exports = {
    badge: {
        name: 'Badge',
        description: 'Badge is a small status indicator for another element.',
        props: BadgeProps
    }
};

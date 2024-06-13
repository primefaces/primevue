const TagProps = [
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Value to display inside the tag.'
    },
    {
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Severity type of the tag. Valid severities are "secondary", "success", "info", "warn", "danger" and "contrast".'
    },
    {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        description: 'Whether the corners of the tag are rounded.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Icon of the tag to display next to the value.'
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

const TagSlots = [
    {
        name: 'icon',
        description: 'custom icon template.'
    }
];

module.exports = {
    tag: {
        name: 'Tag',
        description: 'Tag component is used to categorize content.',
        props: TagProps,
        slots: TagSlots
    }
};

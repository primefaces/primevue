const ToolbarProps = [
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
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

const ToolbarSlots = [
    {
        name: 'start',
        description: "Custom content for the component's left side"
    },
    {
        name: 'end',
        description: "Custom content for the component's right side"
    },
    {
        name: 'center',
        description: "Custom content for the component's center"
    }
];

module.exports = {
    toolbar: {
        name: 'Toolbar',
        description: 'Toolbar is a grouping component for buttons and other content.',
        props: ToolbarProps,
        slots: ToolbarSlots
    }
};

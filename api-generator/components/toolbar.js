const ToolbarProps = [
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
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

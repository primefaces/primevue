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
        description: 'Uses to pass attributes to DOM elements inside the component.'
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

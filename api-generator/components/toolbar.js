const ToolbarSlots = [
    {
        name: "start",
        description: "Custom content for the component's left side"
    },
    {
        name: "end",
        description: "Custom content for the component's right side"
    }
];

module.exports = {
    toolbar: {
        name: "Toolbar",
        description: "Toolbar is a grouping component for buttons and other content.",
        slots: ToolbarSlots
    }
};

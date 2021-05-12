const ToolbarSlots = [
    {
        name: "left",
        description: "Custom content for the component's left side"
    },
    {
        name: "right",
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

const DockProps = [
    {
        name: "model",
        type: "object",
        default: "null",
        description: "MenuModel instance to define the action items."
    },
    {
        name: "position",
        type: "string",
        default: "bottom",
        description: "Position of element. Valid values are 'bottom', 'top', 'left' and 'right'."
    },
    {
        name: "className",
        type: "string",
        default: "null",
        description: "Style class of the element."
    },
    {
        name: "styles",
        type: "object",
        default: "null",
        description: "Inline style of the element."
    }
];

const DockSlots = [
    {
        name: "item",
        description: "Custom content for the item."
    }
];

module.exports = {
    dock: {
        name: "Dock",
        description: "Dock is a navigation component consisting of menuitems.",
        props: DockProps,
        slots: DockSlots
    }
}
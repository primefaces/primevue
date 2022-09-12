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
        name: "class",
        type: "string",
        default: "null",
        description: "Style class of the element."
    },
    {
        name: "style",
        type: "object",
        default: "null",
        description: "Inline style of the element."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: "tooltipOptions",
        type: "object",
        default: "null",
        description: "Whether to display the tooltip on items. The modifiers of tooltip can be used like an object in it. Valid keys are 'event' and 'position'."
    }
];

const DockSlots = [
    {
        name: "item",
        description: "Custom content for the item."
    },
    {
        name: "icon",
        description: "Custom content for the icon."
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

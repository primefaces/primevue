const MegaMenuProps = [
    {
        name: "modelValue",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "orientation",
        type: "string",
        default: "horizontal",
        description: "Defines the orientation, valid values are horizontal and vertical."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

const MegaMenuSlots = [
    {
        name: "start",
        description: "Custom content before the content"
    },
    {
        name: "end",
        description: "Custom content after the content"
    },
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    megamenu: {
        name: "MegaMenu",
        description: "MegaMenu is navigation component that displays submenus together.",
        props: MegaMenuProps,
        slots: MegaMenuSlots
    }
};

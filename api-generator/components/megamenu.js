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
    }
];

const MegaMenuSlots = [
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

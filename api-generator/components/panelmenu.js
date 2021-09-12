const PanelMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "expandedKeys",
        type: "array",
        default: "null",
        description: "A map of keys to represent the expansion state in controlled mode."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

const PanelMenuSlots = [
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    panelmenu: {
        name: "PanelMenu",
        description: "PanelMenu is a hybrid of Accordion and Tree components",
        props: PanelMenuProps,
        slots: PanelMenuSlots
    }
};

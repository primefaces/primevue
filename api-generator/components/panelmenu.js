const PanelMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
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

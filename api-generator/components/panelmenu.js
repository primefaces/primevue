const PanelMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

module.exports = {
    panelmenu: {
        name: "PanelMenu",
        description: "PanelMenu is a hybrid of Accordion and Tree components",
        props: PanelMenuProps
    }
};

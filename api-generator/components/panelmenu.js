const PanelMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    }
];

module.exports = {
    panelmenu: {
        name: "PanelMenu",
        description: "PanelMenu is a hybrid of Accordion and Tree components",
        props: PanelMenuProps
    }
};

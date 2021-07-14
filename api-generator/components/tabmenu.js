const TabMenuProps = [
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
        description: "Defines if active route highlight should match the exact route path."
    }
];

const TabMenuSlots = [
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    tabmenu: {
        name: "TabMenu",
        description: "TabMenu is a navigation component that displays items as tab headers.",
        props: TabMenuProps,
        slots: TabMenuSlots
    }
};

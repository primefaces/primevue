const TabMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "activeIndex",
        type: "number",
        default: "0",
        description: "Active index of menuitem."
    }
];

module.exports = {
    tabmenu: {
        name: "TabMenu",
        description: "TabMenu is a navigation component that displays items as tab headers.",
        props: TabMenuProps
    }
};

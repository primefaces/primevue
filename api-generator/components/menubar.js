const MenubarProps = [
    {
        name: "value",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    }
];

const MenubarSlots = [
    {
        name: "start",
        description: "Custom content before the content"
    },
    {
        name: "end",
        description: "Custom content after the content"
    }
];

module.exports = {
    menubar: {
        name: "Menubar",
        description: "Menubar is a horizontal menu component.",
        props: MenubarProps,
        slots: MenubarSlots
    }
};

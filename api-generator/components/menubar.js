const MenubarProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'buttonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the menu button.'
    }
];

const MenubarSlots = [
    {
        name: 'start',
        description: 'Custom content before the content'
    },
    {
        name: 'end',
        description: 'Custom content after the content'
    },
    {
        name: 'item',
        description: 'Template of a menuitem.'
    }
];

module.exports = {
    menubar: {
        name: 'Menubar',
        description: 'Menubar is a horizontal menu component.',
        props: MenubarProps,
        slots: MenubarSlots
    }
};

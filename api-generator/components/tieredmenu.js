const TieredMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "popup",
        type: "boolean",
        default: "false",
        description: "Defines if menu would displayed as a popup."
    },
    {
        name: "appendTo",
        type: "string",
        default: "body",
        description: "A valid query selector or an HTMLElement to specify where the overlay gets attached."
    },
    {
        name: "baseZIndex",
        type: "number",
        default: "0",
        description: "Base zIndex value to use in layering."
    },
    {
        name: "autoZIndex",
        type: "boolean",
        default: "true",
        description: "Whether to automatically manage layering."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    }
];

const TieredMenuSlots = [
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    tieredmenu: {
        name: "TieredMenu",
        description: "TieredMenu displays submenus in nested overlays.",
        props: TieredMenuProps,
        slots: TieredMenuSlots
    }
};

const MenuProps = [
    {
        name: "modelValue",
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

const MenuEvents = [
    {
        name: "show",
        description: "Callback to invoke when the overlay is shown."
    },
    {
        name: "hide",
        description: "Callback to invoke when the overlay is hidden."
    }
];

const MenuSlots = [
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    menu: {
        name: "Menu",
        description: "Menu is a navigation / command component that supports dynamic and static positioning.",
        props: MenuProps,
        events: MenuEvents,
        slots: MenuSlots
    }
};

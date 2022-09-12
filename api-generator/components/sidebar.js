const SidebarProps = [
    {
        name: "visible",
        type: "boolean",
        default: "false",
        description: "Specifies the visibility of the dialog."
    },
    {
        name: "position",
        type: "string",
        default: "left",
        description: 'Specifies the position of the sidebar, valid values are "left", "right", "top", "bottom" and "full".'
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
        name: "dismissable",
        type: "boolean",
        default: "true",
        description: "Whether clicking outside closes the panel."
    },
    {
        name: "showCloseIcon",
        type: "boolean",
        default: "true",
        description: "Whether to display a close icon inside the panel."
    },
    {
        name: "modal",
        type: "boolean",
        default: "true",
        description: "Whether to a modal layer behind the sidebar."
    },
    {
        name: "ariaCloseLabel",
        type: "string",
        default: "close",
        description: "Aria label of the close icon."
    }
];

const SidebarEvents = [
    {
        name: "hide",
        description: "Callback to invoke when sidebar gets hidden."
    },
    {
        name: "show",
        description: "Callback to invoke when sidebar gets shown."
    }
];

const SidebarSlots = [
    {
        name: "header",
        description: "Custom content for the component header."
    }
];

module.exports = {
    sidebar: {
        name: "Sidebar",
        description: "Sidebar is a panel component displayed as an overlay at the edges of the screen.",
        props: SidebarProps,
        events: SidebarEvents,
        slots: SidebarSlots
    }
};

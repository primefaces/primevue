const OverlayPanelProps = [
    {
        name: "dismissable",
        type: "boolean",
        default: "true",
        description: "Enables to hide the overlay when outside is clicked."
    },
    {
        name: "showCloseIcon",
        type: "boolean",
        default: "false",
        description: "When enabled, displays a close icon at top right corner."
    },
    {
        name: "appendTo",
        type: "string",
        default: "null",
        description: 'Id of the element or "body" for document where the overlay should be appended to.'
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
        name: "ariaCloseLabel",
        type: "string",
        default: "close",
        description: "Aria label of the close icon."
    }
];

module.exports = {
    overlaypanel: {
        name: "OverlayPanel",
        description: "OverlayPanel is a container component positioned as connected to its target.",
        props: OverlayPanelProps
    }
};

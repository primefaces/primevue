const DialogProps = [
    {
        name: "header",
        type: "any",
        default: "null",
        description: "Title content of the dialog."
    },
    {
        name: "footer",
        type: "any",
        default: "null",
        description: "Footer content of the dialog."
    },
    {
        name: "visible",
        type: "boolean",
        default: "false",
        description: "Specifies the visibility of the dialog."
    },
    {
        name: "modal",
        type: "boolean",
        default: "null",
        description: "Defines if background should be blocked when dialog is displayed."
    },
    {
        name: "closeOnEscape",
        type: "boolean",
        default: "true",
        description: "Specifies if pressing escape key should hide the dialog."
    },
    {
        name: "dismissableMask",
        type: "boolean",
        default: "false",
        description: "Specifies if clicking the modal background should hide the dialog."
    },
    {
        name: "position",
        type: "string",
        default: "center",
        description: 'Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".'
    },
    {
        name: "contentStyle",
        type: "object",
        default: "null",
        description: "Style of the content section."
    },
    {
        name: "contentClass",
        type: "string",
        default: "null",
        description: "Style class of the content section."
    },
    {
        name: "rtl",
        type: "boolean",
        default: "null",
        description: "When enabled dialog is displayed in RTL direction."
    },
    {
        name: "closable",
        type: "boolean",
        default: "true",
        description: "Adds a close icon to the header to hide the dialog."
    },
    {
        name: "showHeader",
        type: "boolean",
        default: "true",
        description: "Whether to show the header or not."
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
    },
    {
        name: "maximizable",
        type: "boolean",
        default: "false",
        description: "Whether the dialog can be displayed full screen."
    }
];

const DialogEvents = [
    {
        name: "hide",
        description: "Callback to invoke when dialog is hidden.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Event Object"
            }
        ]
    },
    {
        name: "show",
        description: "Callback to invoke when dialog is showed.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Event Object"
            }
        ]
    }
];

const DialogSlots = [
    {
        name: "header",
        description: "Custom content for the component's header"
    },
    {
        name: "footer",
        description: "Custom content for the component's footer"
    }
];

module.exports = {
    dialog: {
        name: "Dialog",
        description: "Dialog is a container to display content in an overlay window.",
        props: DialogProps,
        events: DialogEvents,
        slots: DialogSlots
    }
};

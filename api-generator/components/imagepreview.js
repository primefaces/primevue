const ImagePreviewProps = [
    {
        name: "preview",
        type: "boolean",
        default: "false",
        description: "Controls the preview functionality."
    },
    {
        name: "imageStyle",
        type: "any",
        default: "null",
        description: "Inline style of the image element."
    },
    {
        name: "imageClass",
        type: "string",
        default: "null",
        description: "Style class of the image element."
    },
    {
        name: "className",
        type: "string",
        default: "null",
        description: "Style class of the element."
    },
    {
        name: "styles",
        type: "any",
        default: "null",
        description: "Inline style of the element."
    }
];

const ImagePreviewEvents = [
    {
        name: "show",
        description: "Triggered when the preview overlay is shown."
    },
    {
        name: "hide",
        description: "Triggered when the preview overlay is hidden."
    }
];

const ImagePreviewSlots = [
    {
        name: "indicator",
        description: "Custom content for the preview indicator"
    }
];

module.exports = {
    image: {
        name: "Image",
        description: "Displays an image with preview and tranformation options.",
        props: ImagePreviewProps,
        events: ImagePreviewEvents,
        slots: ImagePreviewSlots
    }
};

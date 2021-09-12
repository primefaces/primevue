const ImageProps = [
    {
        name: "preview",
        type: "boolean",
        default: "false",
        description: "Controls the preview functionality."
    }
];

const ImageEvents = [
    {
        name: "show",
        description: "Triggered when the preview overlay is shown."
    },
    {
        name: "hide",
        description: "Triggered when the preview overlay is hidden."
    }
];

const ImageSlots = [
    {
        name: "indicator",
        description: "Custom content for the preview indicator"
    }
];

module.exports = {
    image: {
        name: "Image",
        description: "Displays an image with preview and tranformation options.",
        props: ImageProps,
        events: ImageEvents,
        slots: ImageSlots
    }
};

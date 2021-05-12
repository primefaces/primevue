const BlockUIProps = [
    {
        name: "blocked",
        type: "array",
        default: "null",
        description: "Controls the blocked state."
    },
    {
        name: "fullscreen",
        type: "menuitem",
        default: "null",
        description: "When enabled, the whole document gets blocked."
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
    }
];

const BlockUIEvents = [
    {
        name: "block",
        description: "Fired when the element gets blocked."
    },
    {
        name: "unblock",
        description: "Fired when the element gets unblocked."
    }
];

module.exports = {
    blockui: {
        name: "BlockUI",
        description: "BlockUI can either block other components or the whole page.",
        props: BlockUIProps,
        events: BlockUIEvents
    }
};

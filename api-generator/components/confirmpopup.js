const ConfirmPopupProps = [
    {
        name: "group",
        type: "string",
        default: "null",
        description: "Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance."
    }
];

module.exports = {
    confirmpopup: {
        name: "ConfirmPopup",
        description: "ConfirmPopup displays a confirmation overlay displayed relatively to its target.",
        props: ConfirmPopupProps
    }
};

const ConfirmDialogProps = [
    {
        name: "group",
        type: "string",
        default: "null",
        description: "Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance."
    }
];

module.exports = {
    confirmdialog: {
        name: "ConfirmDialog",
        description: "ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.",
        props: ConfirmDialogProps
    }
};

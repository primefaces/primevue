const ConfirmDialogProps = [
    {
        name: "group",
        type: "string",
        default: "null",
        description: "Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance."
    },
    {
        name: "breakpoints",
        type: "object",
        default: "null",
        description: "Object literal to define widths per screen size."
    }
];

const ConfirmDialogSlots = [
    {
        name: "message",
        description: "Custom content for the component."
    }
];

module.exports = {
    confirmdialog: {
        name: "ConfirmDialog",
        description: "ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.",
        props: ConfirmDialogProps,
        slots: ConfirmDialogSlots
    }
};

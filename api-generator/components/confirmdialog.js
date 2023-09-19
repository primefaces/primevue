const ConfirmDialogProps = [
    {
        name: 'group',
        type: 'string',
        default: 'null',
        description: 'Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.'
    },
    {
        name: 'breakpoints',
        type: 'object',
        default: 'null',
        description: 'Object literal to define widths per screen size.'
    },
    {
        name: 'draggable',
        type: 'boolean',
        default: 'true',
        description: 'Whether the dialog can be relocated by dragging.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const ConfirmDialogSlots = [
    {
        name: 'message',
        description: 'Custom icon template.'
    },
    {
        name: 'icon',
        description: 'Custom icon template.'
    },
    {
        name: 'accepticon',
        description: 'Custom accept icon template.'
    },
    {
        name: 'rejecticon',
        description: 'Custom reject icon template.'
    },
    {
        name: 'container',
        description: 'Custom container template.'
    }
];

module.exports = {
    confirmdialog: {
        name: 'ConfirmDialog',
        description: 'ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.',
        props: ConfirmDialogProps,
        slots: ConfirmDialogSlots
    }
};

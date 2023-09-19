const ConfirmPopupProps = [
    {
        name: 'group',
        type: 'string',
        default: 'null',
        description: 'Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.'
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

const ConfirmPopupSlots = [
    {
        name: 'message',
        description: 'Custom content for the component.'
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
    confirmpopup: {
        name: 'ConfirmPopup',
        description: 'ConfirmPopup displays a confirmation overlay displayed relatively to its target.',
        props: ConfirmPopupProps,
        slots: ConfirmPopupSlots
    }
};

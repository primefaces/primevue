const ToastProps = [
    {
        name: 'group',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of a message group.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'top-right',
        description: 'Position of the toast in viewport. Other valid values are "top-left", "top-center", "bottom-left", "bottom-center", "bottom-right" and "center".'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'breakpoints',
        type: 'object',
        default: 'null',
        description: 'Object literal to define widths per screen size.'
    },
    {
        name: 'closeIcon',
        type: 'string',
        default: 'pi pi-times',
        description: 'Icon to display in the toast close button.'
    },
    {
        name: 'infoIcon',
        type: 'string',
        default: 'pi pi-info-circle',
        description: 'Icon to display in the toast with info severity.'
    },
    {
        name: 'warnIcon',
        type: 'string',
        default: 'pi pi-exclamation-triangle',
        description: 'Icon to display in the toast with warn severity.'
    },
    {
        name: 'errorIcon',
        type: 'string',
        default: 'pi pi-times',
        description: 'Icon to display in the toast with error severity.'
    },
    {
        name: 'successIcon',
        type: 'string',
        default: 'pi pi-check',
        description: 'Icon to display in the toast with success severity.'
    },
    {
        name: 'closeButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the close button.'
    }
];

const ToastSlots = [
    {
        name: 'message',
        description: 'Custom content for the toast message'
    }
];

module.exports = {
    toast: {
        name: 'Toast',
        description: 'Toast is used to display messages in an overlay.',
        props: ToastProps,
        slots: ToastSlots
    }
};

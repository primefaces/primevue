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

const ToastEvents = [
    {
        name: 'close',
        description: 'Callback to invoke when the toast is closed.',
        arguments: [
            {
                name: 'message',
                type: 'any',
                description: 'Message of toast.'
            }
        ]
    },
    {
        name: 'life-end',
        description: 'Callback to invoke when the toast timeout is over.',
        arguments: [
            {
                name: 'message',
                type: 'any',
                description: 'Message of toast.'
            }
        ]
    }
];

const ToastSlots = [
    {
        name: 'message',
        description: 'Custom content for the toast message'
    },
    {
        name: 'icon',
        description: 'Custom icon template.'
    },
    {
        name: 'closeicon',
        description: 'Custom close icon template.'
    },
    {
        name: 'container',
        description: 'Custom container template.'
    }
];

module.exports = {
    toast: {
        name: 'Toast',
        description: 'Toast is used to display messages in an overlay.',
        props: ToastProps,
        events: ToastEvents,
        slots: ToastSlots
    }
};

const DialogProps = [
    {
        name: 'header',
        type: 'any',
        default: 'null',
        description: 'Title content of the dialog.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the dialog.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the dialog.'
    },
    {
        name: 'modal',
        type: 'boolean',
        default: 'null',
        description: 'Defines if background should be blocked when dialog is displayed.'
    },
    {
        name: 'closeOnEscape',
        type: 'boolean',
        default: 'true',
        description: 'Specifies if pressing escape key should hide the dialog.'
    },
    {
        name: 'dismissableMask',
        type: 'boolean',
        default: 'false',
        description: 'Specifies if clicking the modal background should hide the dialog.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'center',
        description: 'Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".'
    },
    {
        name: 'contentStyle',
        type: 'object',
        default: 'null',
        description: 'Style of the content section.'
    },
    {
        name: 'contentClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the content section.'
    },
    {
        name: 'closable',
        type: 'boolean',
        default: 'true',
        description: 'Adds a close icon to the header to hide the dialog.'
    },
    {
        name: 'showHeader',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show the header or not.'
    },
    {
        name: 'blockScroll',
        type: 'boolean',
        default: 'false',
        description: 'Whether background scroll should be blocked when dialog is visible.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'ariaCloseLabel',
        type: 'string',
        default: 'close',
        description: 'Aria label of the close icon.'
    },
    {
        name: 'maximizable',
        type: 'boolean',
        default: 'false',
        description: 'Whether the dialog can be displayed full screen.'
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
        name: 'minX',
        type: 'number',
        default: '0',
        description: 'Minimum value for the left coordinate of dialog in dragging.'
    },
    {
        name: 'minY',
        type: 'number',
        default: '0',
        description: 'Minimum value for the top coordinate of dialog in dragging.'
    },
    {
        name: 'keepInViewport',
        type: 'boolean',
        default: 'true',
        description: 'Keeps dialog in the viewport when dragging.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the dialog gets attached. Special keywords are "body" for document body and "self" for the element itself.'
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

const DialogEvents = [
    {
        name: 'hide',
        description: 'Callback to invoke when dialog is hidden.'
    },
    {
        name: 'after-hide',
        description: 'Callback to invoke after dialog is hidden.'
    },
    {
        name: 'show',
        description: 'Callback to invoke when dialog is showed.'
    },
    {
        name: 'maximize',
        description: 'Fired when a dialog gets maximized.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Event Object'
            }
        ]
    },
    {
        name: 'unmaximize',
        description: 'Fired when a dialog gets unmaximized.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Event Object'
            }
        ]
    },
    {
        name: 'dragend',
        description: 'Fired when a dialog drag completes.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Event Object'
            }
        ]
    }
];

const DialogSlots = [
    {
        name: 'header',
        description: "Custom content for the component's header"
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer"
    },
    {
        name: 'closeicon',
        description: 'Custom close icon template.'
    },
    {
        name: 'maximizeicon',
        description: 'Custom maximizeicon icon template of dialog.'
    },
    {
        name: 'container',
        description: 'Custom container template.'
    }
];

module.exports = {
    dialog: {
        name: 'Dialog',
        description: 'Dialog is a container to display content in an overlay window.',
        props: DialogProps,
        events: DialogEvents,
        slots: DialogSlots
    }
};

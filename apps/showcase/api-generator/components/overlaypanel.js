const OverlayPanelProps = [
    {
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Enables to hide the overlay when outside is clicked.'
    },
    {
        name: 'showCloseIcon',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, displays a close icon at top right corner.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached.'
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
        name: 'breakpoints',
        type: 'object',
        default: 'null',
        description: 'Object literal to define widths per screen size.'
    },
    {
        name: 'closeIcon',
        type: 'string',
        default: 'undefined',
        description: 'Display a custom close icon for the message.'
    },
    {
        name: 'closeOnEscape',
        type: 'boolean',
        default: 'true',
        description: 'Specifies if pressing escape key should hide the dialog.'
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

const OverlayPanelSlots = [
    {
        name: 'closeicon',
        description: 'Custom close icon template.'
    }
];

const OverlayPanelEvents = [
    {
        name: 'show',
        description: 'Callback to invoke before the overlay is shown.'
    },
    {
        name: 'hide',
        description: 'Callback to invoke before the overlay is hidden.'
    },
    {
        name: 'container',
        description: 'Custom container template.'
    }
];

module.exports = {
    overlaypanel: {
        name: 'OverlayPanel',
        description: 'OverlayPanel is a container component positioned as connected to its target.',
        props: OverlayPanelProps,
        slots: OverlayPanelSlots,
        events: OverlayPanelEvents
    }
};

const DrawerProps = [
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the dialog.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'left',
        description: 'Specifies the position of the sidebar, valid values are "left", "right", "top", "bottom" and "full".'
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
        name: 'dismissable',
        type: 'boolean',
        default: 'true',
        description: 'Whether clicking outside closes the panel.'
    },
    {
        name: 'showCloseIcon',
        type: 'boolean',
        default: 'true',
        description: 'Whether to display a close icon inside the panel.'
    },
    {
        name: 'modal',
        type: 'boolean',
        default: 'true',
        description: 'Whether to a modal layer behind the sidebar.'
    },
    {
        name: 'ariaCloseLabel',
        type: 'string',
        default: 'close',
        description: 'Aria label of the close icon.'
    },
    {
        name: 'blockScroll',
        type: 'boolean',
        default: 'false',
        description: 'Whether background scroll should be blocked when sidebar is visible.'
    },
    {
        name: 'closeIcon',
        type: 'string',
        default: 'undefined',
        description: 'Icon to display in the sidebar close button.'
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

const DrawerEvents = [
    {
        name: 'hide',
        description: 'Callback to invoke when sidebar gets hidden.'
    },
    {
        name: 'show',
        description: 'Callback to invoke when sidebar gets shown.'
    },
    {
        name: 'closeicon',
        description: 'Custom close icon template.'
    }
];

const DrawerSlots = [
    {
        name: 'header',
        description: 'Custom content for the component header.'
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
    sidebar: {
        name: 'Drawer',
        description: 'Drawer is a panel component displayed as an overlay at the edges of the screen.',
        props: DrawerProps,
        events: DrawerEvents,
        slots: DrawerSlots
    }
};

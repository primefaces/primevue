const MenuProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'popup',
        type: 'boolean',
        default: 'false',
        description: 'Defines if menu would displayed as a popup.'
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

const MenuEvents = [
    {
        name: 'show',
        description: 'Callback to invoke when the overlay is shown.'
    },
    {
        name: 'hide',
        description: 'Callback to invoke when the overlay is hidden.'
    }
];

const MenuSlots = [
    {
        name: 'start',
        description: 'Custom start content.'
    },
    {
        name: 'end',
        description: 'Custom end content.'
    },
    {
        name: 'item',
        description: 'Custom item template.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    },
    {
        name: 'submenuheader',
        description: 'Custom submenu header template.'
    }
];

module.exports = {
    menu: {
        name: 'Menu',
        description: 'Menu is a navigation / command component that supports dynamic and static positioning.',
        props: MenuProps,
        events: MenuEvents,
        slots: MenuSlots
    }
};

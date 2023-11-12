const TieredMenuProps = [
    {
        name: 'model',
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

const TieredMenuSlots = [
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
        description: 'Template of a menuitem.'
    },
    {
        name: 'submenuicon',
        description: 'Custom submenu icon template.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    }
];

module.exports = {
    tieredmenu: {
        name: 'TieredMenu',
        description: 'TieredMenu displays submenus in nested overlays.',
        props: TieredMenuProps,
        slots: TieredMenuSlots
    }
};

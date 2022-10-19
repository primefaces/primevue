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
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying menu element.'
    }
];

const TieredMenuEvents = [
    {
        name: 'focus',
        description: 'Callback to invoke when component receives focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'blur',
        description: 'Callback to invoke when component loses focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'before-show',
        description: 'Callback to invoke before the popup is shown.'
    },
    {
        name: 'before-hide',
        description: 'Callback to invoke before the popup is hidden.'
    },
    {
        name: 'show',
        description: 'Callback to invoke when the popup is shown.'
    },
    {
        name: 'hide',
        description: 'Callback to invoke when the popup is hidden.'
    }
];

const TieredMenuSlots = [
    {
        name: 'item',
        description: 'Template of a menuitem.'
    }
];

module.exports = {
    tieredmenu: {
        name: 'TieredMenu',
        description: 'TieredMenu displays submenus in nested overlays.',
        props: TieredMenuProps,
        events: TieredMenuEvents,
        slots: TieredMenuSlots
    }
};

const ContextMenuProps = [
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
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
        name: 'global',
        type: 'boolean',
        default: 'false',
        description: 'Attaches the menu to document instead of a particular item.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
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
        description: 'Identifier of the underlying input element.'
    }
];

const ContextMenuSlots = [
    {
        name: 'item',
        description: 'Template of a menuitem.'
    }
];

module.exports = {
    contextmenu: {
        name: 'ContextMenu',
        description: 'ContextMenu displays an overlay menu on right click of its target.',
        props: ContextMenuProps,
        slots: ContextMenuSlots
    }
};

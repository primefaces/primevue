const TabMenuProps = [
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'activeIndex',
        type: 'number',
        default: '0',
        description: 'Active index of menuitem.'
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

const TabMenuEvents = [
    {
        name: 'tab-change',
        description: 'Callback to invoke when an active tab is changed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'event.index',
                type: 'number',
                description: 'Index of the selected tab'
            }
        ]
    }
];

const TabMenuSlots = [
    {
        name: 'item',
        description: 'Template of a menuitem.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    }
];

module.exports = {
    tabmenu: {
        name: 'TabMenu',
        description: 'TabMenu is a navigation component that displays items as tab headers.',
        props: TabMenuProps,
        events: TabMenuEvents,
        slots: TabMenuSlots
    }
};

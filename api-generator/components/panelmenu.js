const PanelMenuProps = [
    {
        name: 'model',
        type: 'array',
        default: 'null',
        description: 'An array of menuitems.'
    },
    {
        name: 'expandedKeys',
        type: 'object',
        default: 'null',
        description: 'A map of keys to represent the expansion state in controlled mode.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    }
];

const PanelMenuEvents = [
    {
        name: 'panel-open',
        description: 'Callback to invoke when a panel gets expanded.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'item',
                type: 'any',
                description: 'Current item'
            }
        ]
    },
    {
        name: 'panel-close',
        description: 'Callback to invoke when an active panel is collapsed by clicking on the header.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'item',
                type: 'any',
                description: 'Current item'
            }
        ]
    }
];

const PanelMenuSlots = [
    {
        name: 'item',
        description: 'Template of a menuitem.'
    }
];

module.exports = {
    panelmenu: {
        name: 'PanelMenu',
        description: 'PanelMenu is a hybrid of Accordion and Tree components',
        props: PanelMenuProps,
        events: PanelMenuEvents,
        slots: PanelMenuSlots
    }
};

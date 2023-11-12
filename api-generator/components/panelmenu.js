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

const PanelMenuSlots = [
    {
        name: 'item',
        description: 'Custom item template.'
    },
    {
        name: 'submenuicon',
        description: 'Custom submenu icon template.'
    },
    {
        name: 'headericon',
        description: 'Custom header icon template.'
    },
    {
        name: 'itemicon',
        description: 'Custom item icon template.'
    }
];

module.exports = {
    panelmenu: {
        name: 'PanelMenu',
        description: 'PanelMenu is a hybrid of Accordion and Tree components',
        props: PanelMenuProps,
        slots: PanelMenuSlots
    }
};

const DockProps = [
    {
        name: 'model',
        type: 'object',
        default: 'null',
        description: 'MenuModel instance to define the action items.'
    },
    {
        name: 'position',
        type: 'string',
        default: 'bottom',
        description: "Position of element. Valid values are 'bottom', 'top', 'left' and 'right'."
    },
    {
        name: 'class',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'exact',
        type: 'boolean',
        default: 'true',
        description: "Whether to apply 'router-link-active-exact' class if route exactly matches the item path."
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: "Whether to display the tooltip on items. The modifiers of tooltip can be used like an object in it. Valid keys are 'event' and 'position'."
    },
    {
        name: 'menuId',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the menu.'
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
        description: 'Identifier of the underlying input element.'
    }
];

const DockEvents = [
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
    }
];

const DockSlots = [
    {
        name: 'item',
        description: 'Custom content for the item.'
    },
    {
        name: 'icon',
        description: 'Custom content for the icon.'
    }
];

module.exports = {
    dock: {
        name: 'Dock',
        description: 'Dock is a navigation component consisting of menuitems.',
        props: DockProps,
        events: DockEvents,
        slots: DockSlots
    }
};

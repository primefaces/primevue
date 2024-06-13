const PickListProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'Value of the component as a multidimensional array.'
    },
    {
        name: 'selection',
        type: 'array',
        default: 'null',
        description: 'Selected items in the list as a multidimensional array.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'autoOptionFocus',
        type: 'boolean',
        default: 'false',
        description: 'Whether to focus on the first visible or selected element when the overlay panel is shown.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'listStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the the list element.'
    },
    {
        name: 'responsive',
        type: 'boolean',
        default: 'true',
        description: 'Whether the list optimizes layout based on screen size.'
    },
    {
        name: 'breakpoint',
        type: 'string',
        default: '960px',
        description: 'The breakpoint to define the maximum width boundary when responsiveness is enabled.'
    },
    {
        name: 'striped',
        type: 'boolean',
        default: 'false',
        description: 'Whether to displays rows with alternating colors.'
    },
    {
        name: 'showSourceControls',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show buttons of source list.'
    },
    {
        name: 'showTargetControls',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show buttons of target list.'
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

const PickListEvents = [
    {
        name: 'reorder',
        description: 'Callback to invoke when the list is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'array',
                description: 'Ordered list'
            },
            {
                name: 'event.direction',
                type: 'string',
                description: 'Direction of the change; "up", "down", "bottom", "top"'
            },
            {
                name: 'event.listIndex',
                type: 'number',
                description: 'Index of the list that is ordered, 0 represents the source and 1 represents the target list.'
            }
        ]
    },
    {
        name: 'move-to-target',
        description: 'Callback to invoke when one or more items are moved to the target list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'move-all-to-target',
        description: 'Callback to invoke when all items are moved to the target list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'move-to-source',
        description: 'Callback to invoke when one or more items are moved to the source list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'move-all-to-source',
        description: 'Callback to invoke when all items are moved to the source list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'selection-change',
        description: 'Callback to invoke when one or more items are moved to the other list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'array',
                description: 'Selected items'
            }
        ]
    }
];

const PickListSlots = [
    {
        name: 'header',
        description: 'Custom header template.'
    },
    {
        name: 'sourceheader',
        description: "Custom content for the component's source header."
    },
    {
        name: 'item',
        description: 'Custom content for the item.'
    },
    {
        name: 'targetheader',
        description: "Custom content for the component's target header."
    },
    {
        name: 'sourcecontrolsstart',
        description: 'Custom content before source control buttons.'
    },
    {
        name: 'sourcecontrolsend',
        description: 'Custom content after source control buttons.'
    },
    {
        name: 'movecontrolsstart',
        description: 'Custom content before move buttons.'
    },
    {
        name: 'movecontrolsend',
        description: 'Custom content after move buttons.'
    },
    {
        name: 'targetcontrolsstart',
        description: 'Custom content before target control buttons.'
    },
    {
        name: 'targetcontrolsend',
        description: 'Custom content after target control buttons.'
    },
    {
        name: 'moveupicon',
        description: 'Custom move up icon template.'
    },
    {
        name: 'movetopicon',
        description: 'Custom move top icon template.'
    },
    {
        name: 'movedownicon',
        description: 'Custom move down icon template.'
    },
    {
        name: 'movebottomicon',
        description: 'Custom move bottom icon template.'
    },
    {
        name: 'movetotargeticon',
        description: 'Custom move to target icon template.'
    },
    {
        name: 'movealltotargeticon',
        description: 'Custom move all to target icon template.'
    },
    {
        name: 'movetosourceicon',
        description: 'Custom move to source icon template.'
    },
    {
        name: 'movealltosourceicon',
        description: 'Custom move all to source icon template.'
    }
];

module.exports = {
    picklist: {
        name: 'PickList',
        description: 'PickList is used to reorder items between different lists.',
        props: PickListProps,
        events: PickListEvents,
        slots: PickListSlots
    }
};

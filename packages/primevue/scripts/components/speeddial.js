const SpeedDialProps = [
    {
        name: 'model',
        type: 'object',
        default: 'any',
        description: 'MenuModel instance to define the action items.'
    },
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the overlay.'
    },
    {
        name: 'direction',
        type: 'string',
        default: 'up',
        description: "Specifies the opening direction of actions. Valid values are 'up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and 'down-right'"
    },
    {
        name: 'transitionDelay',
        type: 'number',
        default: '30',
        description: 'Transition delay step for each action item.'
    },
    {
        name: 'type',
        type: 'string',
        default: 'linear',
        description: 'Specifies the opening type of actions.'
    },
    {
        name: 'radius',
        type: 'number',
        default: '0',
        description: 'Radius for *circle types.'
    },
    {
        name: 'mask',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show a mask element behind the speeddial'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the component is disabled.'
    },
    {
        name: 'hideOnClickOutside',
        type: 'boolean',
        default: 'true',
        description: 'Whether the actions close when clicked outside.'
    },
    {
        name: 'buttonClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the button element.'
    },
    {
        name: 'maskClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the mask element.'
    },
    {
        name: 'maskStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the mask element.'
    },
    {
        name: 'showIcon',
        type: 'string',
        default: 'pi pi-plus',
        description: 'Show icon of the button element.'
    },
    {
        name: 'hideIcon',
        type: 'string',
        default: 'null',
        description: '	Hide icon of the button element.'
    },
    {
        name: 'rotateAnimation',
        type: 'boolean',
        default: 'true',
        description: 'Defined to rotate showIcon when hideIcon is not present.'
    },
    {
        name: 'class',
        type: 'object',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'any',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'tooltipOptions',
        type: 'object',
        default: 'null',
        description: "Whether to display the tooltip on items. The modifiers of tooltip can be used like an object in it. Valid keys are 'event' and 'position'."
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

const SpeedDialEvents = [
    {
        name: 'click',
        description: 'Fired when the button element clicked.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'show',
        description: 'Fired when the actions are visible.'
    },
    {
        name: 'hide',
        description: 'Fired when the actions are hidden.'
    }
];

const SpeedDialSlots = [
    {
        name: 'item',
        description: 'Custom content for the item'
    },
    {
        name: 'button',
        description: 'Custom button template.'
    },
    {
        name: 'icon',
        description: 'Custom icon template.'
    }
];

module.exports = {
    speeddial: {
        name: 'SpeedDial',
        description: 'When pressed, a floating action button can display multiple primary actions that can be performed on a page.',
        props: SpeedDialProps,
        events: SpeedDialEvents,
        slots: SpeedDialSlots
    }
};

const TooltipModifiers = [
    {
        name: 'right',
        description: 'Positions the tooltip on the right of the trigger element (default)'
    },
    {
        name: 'top',
        description: 'Positions the tooltip on the top of the trigger element'
    },
    {
        name: 'bottom',
        description: 'Positions the tooltip on the bottom of the trigger element'
    },
    {
        name: 'left',
        description: 'Positions the tooltip on the left of the trigger element'
    },
    {
        name: 'focus',
        description: 'Focus on the trigger element'
    },
    {
        name: 'blur',
        description: 'Blur the trigger element'
    }
];

module.exports = {
    tooltip: {
        name: 'Tooltip',
        description: 'Tooltip directive provides advisory information for a component.',
        'vue-modifiers': TooltipModifiers
    }
};

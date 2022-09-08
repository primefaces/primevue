const AccordionProps = [
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, multiple tabs can be activated at the same time.'
    },
    {
        name: 'activeIndex',
        type: 'number|array',
        default: 'null',
        description: 'Index of the active tab or an array of indexes in multiple mode.'
    },
    {
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.'
    },
    {
        name: 'expandIcon',
        type: 'string',
        default: 'pi-chevron-right',
        description: 'Icon of a collapsed tab.'
    },
    {
        name: 'collapseIcon',
        type: 'string',
        default: 'pi-chevron-down',
        description: 'Icon of a expanded tab.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'selectOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the focused tab is activated.'
    }
];

const AccordionEvents = [
    {
        name: 'tab-open',
        description: 'Callback to invoke when a tab gets expanded.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'index',
                type: 'number',
                description: 'Opened tab index'
            }
        ]
    },
    {
        name: 'tab-close',
        description: 'Callback to invoke when an active tab is collapsed by clicking on the header.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'index',
                type: 'number',
                description: 'Closed tab index'
            }
        ]
    },
    {
        name: 'tab-click',
        description: 'Callback to invoke when an active tab is clicked.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'index',
                type: 'number',
                description: 'Index of the clicked tab'
            }
        ]
    }
];

module.exports = {
    accordion: {
        name: 'Accordion',
        description: 'Accordion groups a collection of contents in tabs.',
        props: AccordionProps,
        events: AccordionEvents
    }
};

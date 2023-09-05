const TabPanelProps = [
    {
        name: 'header',
        type: 'string',
        default: 'null',
        description: 'Orientation of tab headers.'
    },
    {
        name: 'headerStyle',
        type: 'any',
        default: 'null',
        description: 'Inline style of the tab header.'
    },
    {
        name: 'headerClass',
        type: 'any',
        default: 'null',
        description: 'Style class of the tab header.'
    },
    {
        name: 'headerProps',
        type: 'any',
        default: 'null',
        description: 'Used to pass all properties of the HTMLLiElement to the tab header.'
    },
    {
        name: 'headerActionProps',
        type: 'any',
        default: 'null',
        description: 'Used to pass all properties of the HTMLAnchorElement to the focusable anchor element inside the tab header.'
    },
    {
        name: 'contentStyle',
        type: 'any',
        default: 'null',
        description: 'Inline style of the tab content.'
    },
    {
        name: 'contentClass',
        type: 'any',
        default: 'null',
        description: 'Style class of the tab content.'
    },
    {
        name: 'contentProps',
        type: 'any',
        default: 'null',
        description: 'Used to pass all properties of the HTMLDivElement to the tab content.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'null',
        description: 'Whether the tab is disabled.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    }
];

const TabPanelEvents = [
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
    },
    {
        name: 'tab-click',
        description: 'Callback to invoke when an active tab is clicked.',
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

module.exports = {
    tabpanel: {
        name: 'TabPanel',
        description: 'TabView element consists of one or more TabPanel elements.',
        'doc-url': 'tabview',
        props: TabPanelProps,
        events: TabPanelEvents
    }
};

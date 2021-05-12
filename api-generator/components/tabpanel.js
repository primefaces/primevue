const TabPanelProps = [
    {
        name: "header",
        type: "string",
        default: "null",
        description: "Orientation of tab headers."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "null",
        description: "Whether the tab is disabled."
    }
];

const TabPanelEvents = [
    {
        name: "tab-change",
        description: "Callback to invoke when an active tab is changed.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "event.index",
                type: "number",
                description: "Index of the selected tab"
            }
        ]
    },
    {
        name: "tab-click",
        description: "Callback to invoke when an active tab is clicked.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "event.index",
                type: "number",
                description: "Index of the selected tab"
            }
        ]
    }
];

module.exports = {
    tabpanel: {
        name: "TabPanel",
        description: "TabView element consists of one or more TabPanel elements.",
        "doc-url": "tabview",
        props: TabPanelProps,
        events: TabPanelEvents
    }
};

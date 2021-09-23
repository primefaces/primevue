const TabViewProps = [
    {
        name: "activeIndex",
        type: "number",
        default: "0",
        description: "Index of the active tab."
    },
    {
        name: "scrollable",
        type: "boolean",
        default: "false",
        description: "When enabled displays buttons at each side of the tab headers to scroll the tab list."
    }
];

const TabViewEvents = [
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
    tabview: {
        name: "TabView",
        description: "TabView is a container component to group content with tabs.",
        props: TabViewProps,
        events: TabViewEvents
    }
};

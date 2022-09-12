const TabViewProps = [
    {
        name: "activeIndex",
        type: "number",
        default: "0",
        description: "Index of the active tab."
    },
    {
        name: "lazy",
        type: "boolean",
        default: "false",
        description: "When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css."
    },
    {
        name: "scrollable",
        type: "boolean",
        default: "false",
        description: "When enabled displays buttons at each side of the tab headers to scroll the tab list."
    },
    {
        name: "tabindex",
        type: "number",
        default: "0",
        description: "Index of the element in tabbing order."
    },
    {
        name: "selectOnFocus",
        type: "boolean",
        default: "false",
        description: "When enabled, the focused tab is activated."
    },
    {
        name: "previousButtonProps",
        type: "any",
        default: "null",
        description: "Uses to pass all properties of the HTMLButtonElement to the previous button."
    },
    {
        name: "nextButtonProps",
        type: "any",
        default: "null",
        description: "Uses to pass all properties of the HTMLButtonElement to the next button."
    }
];

const TabViewEvents = [
    {
        name: "tab-change",
        description: "Callback to invoke when an active tab is changed.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "index",
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
                name: "originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "index",
                type: "number",
                description: "Index of the clicked tab"
            }
        ]
    }
];

module.exports = {
    tabview: {
        name: "TabView",
        description: "TabView is a container component to group content with tabs.",
        props: TabViewProps,
        event: TabViewEvents
    }
};

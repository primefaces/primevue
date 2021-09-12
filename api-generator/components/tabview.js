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
    }
];

module.exports = {
    tabview: {
        name: "TabView",
        description: "TabView is a container component to group content with tabs.",
        props: TabViewProps
    }
};

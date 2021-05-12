const TabViewProps = [
    {
        name: "activeIndex",
        type: "number",
        default: "0",
        description: "Index of the active tab."
    }
];

module.exports = {
    tabview: {
        name: "TabView",
        description: "TabView is a container component to group content with tabs.",
        props: TabViewProps
    }
};

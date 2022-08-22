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

module.exports = {
    tabpanel: {
        name: "TabPanel",
        description: "TabView element consists of one or more TabPanel elements.",
        "doc-url": "tabview",
        props: TabPanelProps
    }
};

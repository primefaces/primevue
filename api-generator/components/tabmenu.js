const TabMenuProps = [
    {
        name: "model",
        type: "array",
        default: "null",
        description: "An array of menuitems."
    },
    {
        name: "exact",
        type: "boolean",
        default: "true",
        description: "Defines if active route highlight should match the exact route path."
    },
    {
        name: "activeIndex",
        type: "number",
        default: "0",
        description: "Active index of menuitem."
    }
];

const TabMenuEvents = [
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
    }
];

const TabMenuSlots = [
    {
        name: "item",
        description: "Template of a menuitem."
    }
];

module.exports = {
    tabmenu: {
        name: "TabMenu",
        description: "TabMenu is a navigation component that displays items as tab headers.",
        props: TabMenuProps,
        events: TabMenuEvents,
        slots: TabMenuSlots
    }
};

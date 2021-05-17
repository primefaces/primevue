const PickListProps = [
    {
        name: "modelValue",
        type: "array",
        default: "null",
        description: "Value of the component as a multidimensional array."
    },
    {
        name: "selection",
        type: "array",
        default: "null",
        description: "Selected items in the list as a multidimensional array."
    },
    {
        name: "metaKeySelection",
        type: "boolean",
        default: "true",
        description: "Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically."
    },
    {
        name: "dataKey",
        type: "string",
        default: "null",
        description: "Name of the field that uniquely identifies the a record in the data."
    },
    {
        name: "listStyle",
        type: "object",
        default: "null",
        description: "Inline style of the the list element."
    },
    {
        name: "responsive",
        type: "boolean",
        default: "true",
        description: "Whether the list optimizes layout based on screen size."
    },
    {
        name: "breakpoint",
        type: "string",
        default: "960px",
        description: "The breakpoint to define the maximum width boundary when responsiveness is enabled."
    }
];

const PickListEvents = [
    {
        name: "reorder",
        description: "Callback to invoke when the list is reordered.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.value",
                type: "array",
                description: "Ordered list"
            },
            {
                name: "event.direction",
                type: "string",
                description: 'Direction of the change; "up", "down", "bottom", "top"'
            },
            {
                name: "event.listIndex",
                type: "number",
                description: "Index of the list that is ordered, 0 represents the source and 1 represents the target list."
            }
        ]
    },
    {
        name: "move-to-target",
        description: "Callback to invoke when one or more items are moved to the target list.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.items",
                type: "object",
                description: "Moved items"
            }
        ]
    },
    {
        name: "move-all-to-target",
        description: "Callback to invoke when all items are moved to the target list.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.items",
                type: "object",
                description: "Moved items"
            }
        ]
    },
    {
        name: "move-to-source",
        description: "Callback to invoke when one or more items are moved to the source list.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.items",
                type: "object",
                description: "Moved items"
            }
        ]
    },
    {
        name: "move-all-to-source",
        description: "Callback to invoke when all items are moved to the source list.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.items",
                type: "object",
                description: "Moved items"
            }
        ]
    }
];

const PickListSlots = [
    {
        name: "sourceHeader",
        description: "Custom content for the component's source header"
    },
    {
        name: "item",
        description: "Custom content for the item"
    },
    {
        name: "targetHeader",
        description: "Custom content for the component's target header"
    }
];

module.exports = {
    picklist: {
        name: "PickList",
        description: "PickList is used to reorder items between different lists.",
        props: PickListProps,
        events: PickListEvents,
        slots: PickListSlots
    }
};

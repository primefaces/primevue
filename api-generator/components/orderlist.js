const OrderListProps = [
    {
        name: "modelValue",
        type: "array",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "selection",
        type: "any",
        default: "null",
        description: "Selected items in the list."
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
    },
    {
        name: "stripedRows",
        type: "boolean",
        default: "false",
        description: "Whether to displays rows with alternating colors."
    }
];

const OrderListEvents = [
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
                description:
                    'Direction of the change; "up", "down", "bottom", "top"'
            }
        ]
    },
    {
        name: "selection-change",
        description: "Callback to invoke when selection changes.",
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
            }
        ]
    }
];

const OrderListSlots = [
    {
        name: "header",
        description: "Custom content for the component's header"
    },
    {
        name: "item",
        description: "Custom content for the item"
    },
    {
        name: "controlsstart",
        description: "Custom content before the buttons"
    },
    {
        name: "controlsend",
        description: "Custom content after the buttons"
    }
];

module.exports = {
    orderlist: {
        name: "OrderList",
        description: "OrderList is used to managed the order of a collection.",
        props: OrderListProps,
        events: OrderListEvents,
        slots: OrderListSlots
    }
};

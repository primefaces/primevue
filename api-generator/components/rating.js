const RatingProps = [
    {
        name: "modelValue",
        type: "number",
        default: "null",
        description: "Value of the rating."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the element should be disabled."
    },
    {
        name: "readonly",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that component is read-only."
    },
    {
        name: "stars",
        type: "number",
        default: "5",
        description: "Number of stars."
    },
    {
        name: "cancel",
        type: "boolean",
        default: "true",
        description: "When specified a cancel icon is displayed to allow clearing the value."
    }
];

const RatingEvents = [
    {
        name: "change",
        description: "Callback to invoke on value change.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.value",
                type: "number",
                description: "Selected option value"
            }
        ]
    }
];

module.exports = {
    rating: {
        name: "rating",
        description: "Rating component is a star based selection input.",
        props: RatingProps,
        events: RatingEvents
    }
};

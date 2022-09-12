const DeferredContentEvents = [
    {
        name: "load",
        description: "Callback to invoke when deferred content is loaded..",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Event object"
            }
        ]
    }
];

module.exports = {
    deferredcontent: {
        name: "DeferredContent",
        description: "DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.",
        events: DeferredContentEvents
    }
};

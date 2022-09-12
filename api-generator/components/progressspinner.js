const ProgressSpinnerProps = [
    {
        name: "strokeWidth",
        type: "string",
        default: "2",
        description: "Width of the circle stroke."
    },
    {
        name: "fill",
        type: "string",
        default: "null",
        description: "Color for the background of the circle."
    },
    {
        name: "animationDuration",
        type: "string",
        default: "2s",
        description: "Duration of the rotate animation."
    }
];

module.exports = {
    progressspinner: {
        name: "ProgressSpinner",
        description: "ProgressSpinner is a process status indicator",
        props: ProgressSpinnerProps
    }
};

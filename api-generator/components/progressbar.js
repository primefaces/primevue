const ProgressbarProps = [
    {
        name: "value",
        type: "number",
        default: "null",
        description: "Current value of the progress."
    },
    {
        name: "mode",
        type: "string",
        default: "determinate",
        description: 'Defines the mode of the progress, valid values are "determinate" and "indeterminate".'
    },
    {
        name: "showValue",
        type: "boolean",
        default: "true",
        description: "Whether to display the progress bar value."
    }
];

module.exports = {
    progressbar: {
        name: "ProgressBar",
        description: "ProgressBar is a process status indicator.",
        props: ProgressbarProps
    }
};

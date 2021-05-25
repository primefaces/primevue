const TagProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value to display inside the tag."
    },
    {
        name: "severity",
        type: "string",
        default: "null",
        description: 'Severity type of the tag. Valid severities are "success", "info", "warning" and "danger".'
    },
    {
        name: "rounded",
        type: "boolean",
        default: "false",
        description: "Whether the corners of the tag are rounded."
    },
    {
        name: "icon",
        type: "string",
        default: "null",
        description: "Icon of the tag to display next to the value."
    }
];

module.exports = {
    tag: {
        name: "Tag",
        description: "Tag component is used to categorize content.",
        props: TagProps
    }
};

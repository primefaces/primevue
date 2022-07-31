const TriStateCheckboxProps = [
    {
        name: "modelValue",
        type: "boolean",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "class",
        type: "string",
        default: "null",
        description: "Style class of the component."
    },
    {
        name: "style",
        type: "any",
        default: "null",
        description: "Inline of the component."
    },
    {
        name: "aria-labelledby",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
    },
    {
        name: "aria-label",
        type: "string",
        default: "null",
        description: "Used to define a string that labels the element."
    }
];

module.exports = {
    tristatecheckbox: {
        name: "TriStateCheckbox",
        description: 'TriStateCheckbox is used to select either "true", "false" or "null" as the value.',
        props: TriStateCheckboxProps
    }
};

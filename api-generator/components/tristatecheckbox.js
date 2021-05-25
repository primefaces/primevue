const TriStateCheckboxProps = [
    {
        name: "modelValue",
        type: "boolean",
        default: "null",
        description: "Value of the component."
    }
];

module.exports = {
    tristatecheckbox: {
        name: "TriStateCheckbox",
        description: 'TriStateCheckbox is used to select either "true", "false" or "null" as the value.',
        props: TriStateCheckboxProps
    }
};

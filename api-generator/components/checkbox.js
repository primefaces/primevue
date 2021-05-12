const CheckboxProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the checkbox."
    },
    {
        name: "modelValue",
        type: "any",
        default: "null",
        description: "Value binding of the checkbox."
    },
    {
        name: "binary",
        type: "boolean",
        default: "false",
        description: "Allows to select a boolean value instead of multiple values."
    }
];

module.exports = {
    checkbox: {
        name: "Checkbox",
        description: "Checkbox is an extension to standard checkbox element with theming.",
        props: CheckboxProps
    }
};

const RadioButtonProps = [
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
    }
];

module.exports = {
    radiobutton: {
        name: "RadioButton",
        description: "RadioButton is an extension to standard radio button element with theming.",
        props: RadioButtonProps
    }
};

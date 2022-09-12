const InputTextProps = [
    {
        name: "modelValue",
        type: "any",
        default: "null",
        description: "Value of the component."
    }
];

module.exports = {
    inputtext: {
        name: "InputText",
        description: "InputText renders a text field to enter data.",
        props: InputTextProps
    }
};

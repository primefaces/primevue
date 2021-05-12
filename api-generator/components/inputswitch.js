const InputSwitchProps = [
    {
        name: "modelValue",
        type: "boolean",
        default: "null",
        description: "Specifies whether a inputswitch should be checked or not."
    }
];

module.exports = {
    inputswitch: {
        name: "InputSwitch",
        description: "InputSwitch is used to select a boolean value.",
        props: InputSwitchProps
    }
};

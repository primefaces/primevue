const InputSwitchProps = [
    {
        name: "modelValue",
        type: "boolean",
        default: "null",
        description: "Specifies whether a inputswitch should be checked or not."
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
    }
];

const InputSwitchEvents = [
    {
        name: "click",
        description: "Callback to invoke on click."
    },
    {
        name: "change",
        description: "Callback to invoke on value change."
    },
    {
        name: "input",
        description: "Callback to invoke on value change."
    },
    {
        name: "focus",
        description: "Callback to invoke when element receives focus."
    },
    {
        name: "blur",
        description: "Callback to invoke when element loses focus."
    }
];

module.exports = {
    inputswitch: {
        name: "InputSwitch",
        description: "InputSwitch is used to select a boolean value.",
        props: InputSwitchProps,
        events: InputSwitchEvents
    }
};

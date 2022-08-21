const InputSwitchProps = [
    {
        name: "modelValue",
        type: "boolean",
        default: "null",
        description: "Specifies whether a inputswitch should be checked or not."
    },
    {
        name: "trueValue",
        type: "any",
        default: "null",
        description: "Value in checked state."
    },
    {
        name: "falseValue",
        type: "any",
        default: "null",
        description: "Value in unchecked state."
    },
    {
        name: "inputId",
        type: "string",
        default: "null",
        description: "Identifier of the underlying input element."
    },
    {
        name: "inputStyle",
        type: "any",
        default: "null",
        description: "Inline style of the input field."
    },
    {
        name: "inputClass",
        type: "string",
        default: "null",
        description: "Style class of the input field."
    },
    {
        name: "inputProps",
        type: "object",
        default: "null",
        description: "Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component."
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

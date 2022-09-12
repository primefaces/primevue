const TriStateCheckboxProps = [
    {
        name: "modelValue",
        type: "boolean",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the component should be disabled."
    },
    {
        name: "tabindex",
        type: "string",
        default: "null",
        description: "Index of the element in tabbing order."
    },
    {
        name: "inputId",
        type: "string",
        default: "null",
        description: "Identifier of the underlying input element."
    },
    {
        name: "inputProps",
        type: "object",
        default: "null",
        description: "Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component."
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

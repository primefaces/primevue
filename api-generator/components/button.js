const ButtonProps = [
    {
        name: "label",
        type: "string",
        default: "null",
        description: "Text of the button."
    },
    {
        name: "icon",
        type: "string",
        default: "null",
        description: "Name of the icon."
    },
    {
        name: "iconPos",
        type: "string",
        default: "left",
        description: 'Position of the icon, valid values are "left", "right", "bottom" and "top".'
    },
    {
        name: "badge",
        type: "string",
        default: "null",
        description: "Value of the badge."
    },
    {
        name: "badgeClass",
        type: "string",
        default: "null",
        description: "Style class of the badge."
    }
];

module.exports = {
    button: {
        name: "Button",
        description: "Button is an extension to standard button element with icons and theming.",
        props: ButtonProps
    }
};

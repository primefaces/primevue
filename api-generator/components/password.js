const PasswordProps = [
    {
        name: "modelValue",
        type: "any",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "promptLabel",
        type: "string",
        default: "null",
        description: "Text to prompt password entry. Defaults to PrimeVue Locale configuration."
    },
    {
        name: "mediumRegex",
        type: "string",
        default: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
        description: "Regex for a medium level password."
    },
    {
        name: "strongRegex",
        type: "string",
        default: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
        description: "Regex for a strong level password."
    },
    {
        name: "weakLabel",
        type: "string",
        default: "null",
        description: "Text for a weak password. Defaults to PrimeVue Locale configuration."
    },
    {
        name: "mediumLabel",
        type: "string",
        default: "null",
        description: "Text for a medium password. Defaults to PrimeVue Locale configuration."
    },
    {
        name: "strongLabel",
        type: "string",
        default: "null",
        description: "Text for a strong password. Defaults to PrimeVue Locale configuration."
    },
    {
        name: "feedback",
        type: "boolean",
        default: "true",
        description: "Whether to show the strength indicator or not."
    },
    {
        name: "toogleMask",
        type: "boolean",
        default: "false",
        description: "Whether to show an icon to display the password as plain text."
    },
    {
        name: "appendTo",
        type: "string",
        default: "body",
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: "hideIcon",
        type: "string",
        default: "pi pi-eye-slash",
        description: "Icon to hide displaying the password as plain text."
    },
    {
        name: "showIcon",
        type: "string",
        default: "pi pi-eye",
        description: "Icon to show displaying the password as plain text."
    },
    {
        name: "inputStyle",
        type: "any",
        default: "null",
        description: "Inline style of the input field."
    },
    {
        name: "inputClass",
        type: "any",
        default: "null",
        description: "Style class of the input field."
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
        name: "panelClass",
        type: "string",
        default: "null",
        description: "Style class of the overlay panel."
    }
];

const PasswordSlots = [
    {
        name: "header",
        description: "Custom content for the component's header"
    },
    {
        name: "content",
        description: "Custom content for the component"
    },
    {
        name: "footer",
        description: "Custom content for the component's footer"
    }
];

module.exports = {
    password: {
        name: "Password",
        description: "Password displays strength indicator for password fields.",
        props: PasswordProps,
        slots: PasswordSlots
    }
};

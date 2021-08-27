const CascadeSelectProps = [
    {
        name: "modelValue",
        type: "any",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "options",
        type: "array",
        default: "null",
        description: "An array of selectitems to display as the available options."
    },
    {
        name: "optionLabel",
        type: "string",
        default: "null",
        description: "Property name or getter function to use as the label of an option."
    },
    {
        name: "optionValue",
        type: "string",
        default: "null",
        description: "Property name or getter function to use as the value of an option, defaults to the option itself when not defined."
    },
    {
        name: "optionGroupLabel",
        type: "string",
        default: "null",
        description: "Property name or getter function to use as the label of an option group."
    },
    {
        name: "optionGroupChildren",
        type: "array",
        default: "null",
        description: "Property name or getter function to retrieve the items of a group."
    },
    {
        name: "placeholder",
        type: "string",
        default: "null",
        description: "Default text to display when no option is selected."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When present, it specifies that the component should be disabled."
    },
    {
        name: "dataKey",
        type: "string",
        default: "null",
        description: "A property to uniquely identify an option."
    },
    {
        name: "tabindex",
        type: "number",
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
        name: "ariaLabelledBy",
        type: "string",
        default: "null",
        description: "Establishes relationships between the component and label(s) where its value should be one or more element IDs."
    },
    {
        name: "appendTo",
        type: "string",
        default: "body",
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: "panelClass",
        type: "string",
        default: "null",
        description: "Style class of the overlay panel."
    },
    {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Whether the multiselect is in loading state."
    },
    {
        name: "loadingIcon",
        type: "string",
        default: "pi pi-spinner pi-spin",
        description: "Icon to display in loading state."
    }
];

const CascadeSelectEvents = [
    {
        name: "change",
        description: "Callback to invoke on value change.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "value",
                type: "object",
                description: "Selected option value"
            }
        ]
    },
    {
        name: "group-change",
        description: "Callback to invoke when a group changes.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "value",
                type: "object",
                description: "Selected option value"
            }
        ]
    },
    {
        name: "before-show",
        description: "Callback to invoke before the overlay is shown."
    },
    {
        name: "before-hide",
        description: "Callback to invoke before the overlay is hidden."
    },
    {
        name: "show",
        description: "Callback to invoke when the overlay is shown."
    },
    {
        name: "hide",
        description: "Callback to invoke when the overlay is hidden."
    }
];

const CascadeSelectSlots = [
    {
        name: "value",
        description: "Custom content for the item's value"
    },
    {
        name: "option",
        description: "Custom content for the item's option"
    },
    {
        name: "indicator",
        description: "Custom content for the dropdown indicator"
    }
];

module.exports = {
    cascadeselect: {
        name: "CascadeSelect",
        description: "CascadeSelect displays a nested structure of options.",
        props: CascadeSelectProps,
        events: CascadeSelectEvents,
        slots: CascadeSelectSlots
    }
};

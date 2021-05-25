const DropdownProps = [
    {
        name: "value",
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
        name: "optionDisabled",
        type: "boolean",
        default: "null",
        description: "Property name or getter function to use as the disabled flag of an option, defaults to false when not defined."
    },
    {
        name: "scrollHeight",
        type: "string",
        default: "200px",
        description: "Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value."
    },
    {
        name: "filter",
        type: "boolean",
        default: "false",
        description: "When specified, displays a filter input at header."
    },
    {
        name: "filterPlaceholder",
        type: "string",
        default: "null",
        description: "Placeholder text to show when filter input is empty."
    },
    {
        name: "filterLocale",
        type: "string",
        default: "undefined",
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
    },
    {
        name: "editable",
        type: "boolean",
        default: "false",
        description: "When present, custom value instead of predefined options can be entered using the editable input field."
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
        name: "showClear",
        type: "boolean",
        default: "false",
        description: "When enabled, a clear icon is displayed to clear the value."
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
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: "emptyFilterMessage",
        type: "string",
        default: "No results found",
        description: "Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration."
    },
    {
        name: "appendTo",
        type: "string",
        default: "null",
        description: 'Id of the element or "body" for document where the overlay should be appended to.'
    }
];

const DropdownEvents = [
    {
        name: "change",
        description: "Callback to invoke on value change.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.value",
                type: "string",
                description: "Selected option value"
            }
        ]
    },
    {
        name: "input",
        description: "Callback to invoke on value change.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Browser event"
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
    },
    {
        name: "filter",
        description: "Callback to invoke when the overlay is shown.",
        arguments: [
            {
                name: "event.originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "event.value",
                type: "string",
                description: "Filter value"
            }
        ]
    }
];

const DropdownSlots = [
    {
        name: "option",
        description: "Custom content for the item's option"
    },
    {
        name: "value",
        description: "Custom content for the item's value"
    }
];

module.exports = {
    dropdown: {
        name: "Dropdown",
        description: "Dropdown is used to select an item from a list of options.",
        props: DropdownProps,
        events: DropdownEvents,
        slots: DropdownSlots
    }
};

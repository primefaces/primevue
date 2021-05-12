const MultiSelectProps = [
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
        name: "optionDisabled",
        type: "boolean",
        default: "null",
        description: "Property name or getter function to use as the disabled flag of an option, defaults to false when not defined."
    },
    {
        name: "optionGroupLabel",
        type: "string",
        default: "null",
        description: "Property name or getter function to use as the label of an option group."
    },
    {
        name: "optionGroupChildren",
        type: "string",
        default: "null",
        description: "Property name or getter function that refers to the children options of option group."
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
        name: "filterMatchMode",
        type: "string",
        default: "contains",
        description: 'Defines the filtering algorithm to use when searching the options. Valid values are "contains" (default), "startsWith" and "endsWith"'
    },
    {
        name: "filterFields",
        type: "array",
        default: "null",
        description: "Fields used when filtering the options, defaults to optionLabel."
    },
    {
        name: "placeholder",
        type: "string",
        default: "null",
        description: "Label to display when there are no selections."
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
        name: "dataKey",
        type: "string",
        default: "null",
        description: "A property to uniquely identify an option."
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
        name: "emptyMessage",
        type: "string",
        default: "No results found",
        description: "Text to display when there are no options available. Defaults to value from PrimeVue locale configuration."
    },
    {
        name: "display",
        type: "string",
        default: "comma",
        description: 'Defines how the selected items are displayed, valid values are "comma" and "chip".'
    },
    {
        name: "panelClass",
        type: "string",
        default: "null",
        description: "Style class of the overlay panel."
    }
];

const MultiSelectEvents = [
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
                type: "array",
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
    },
    {
        name: "filter",
        description: "Callback to invoke on filter input.",
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

const MultiSelectSlots = [
    {
        name: "option",
        description: "Custom content for the item's option"
    },
    {
        name: "optiongroup",
        description: "Custom content for the item's optiongroup"
    },
    {
        name: "value",
        description: "Custom content for the item value"
    },
    {
        name: "header",
        description: "Custom content for the component's header"
    },
    {
        name: "footer",
        description: "Custom content for the component's footer"
    },
    {
        name: "emptyfilter",
        description: "Custom content when there is no filtered data to display"
    },
    {
        name: "empty",
        description: "Custom content when there is no data to display"
    }
];

module.exports = {
    multiselect: {
        name: "MultiSelect",
        description: "MultiSelect is used to multiple values from a list of options.",
        props: MultiSelectProps,
        events: MultiSelectEvents,
        slots: MultiSelectSlots
    }
};

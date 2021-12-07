const ListboxProps = [
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
        type: "string | function",
        default: "null",
        description: "Property name or getter function to use as the label of an option."
    },
    {
        name: "optionValue",
        type: "string | function",
        default: "null",
        description: "Property name or getter function to use as the value of an option, defaults to the option itself when not defined."
    },
    {
        name: "optionDisabled",
        type: "boolean | function",
        default: "null",
        description: "Property name or getter function to use as the disabled flag of an option, defaults to false when not defined."
    },
    {
        name: "optionGroupLabel",
        type: "string | function",
        default: "null",
        description: "Property name or getter function to use as the label of an option group."
    },
    {
        name: "optionGroupChildren",
        type: "string | function",
        default: "null",
        description: "Property name or getter function that refers to the children options of option group."
    },
    {
        name: "listStyle",
        type: "string",
        default: "null",
        description: "Inline style of inner list element."
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When specified, disables the component."
    },
    {
        name: "dataKey",
        type: "string",
        default: "null",
        description: "A property to uniquely identify an option."
    },
    {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "When specified, allows selecting multiple values."
    },
    {
        name: "metaKeySelection",
        type: "boolean",
        default: "true",
        description: "Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically."
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
    }
];

const ListboxEvents = [
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
                type: "object",
                description: "Selected option value"
            }
        ]
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
    },
    {
        name: "virtualScrollerOptions",
        type: "object",
        default: "null",
        description: "Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it."
    }
];

const ListboxSlots = [
    {
        name: "option",
        description: "Custom content for the item's option"
    },
    {
        name: "optiongroup",
        description: "Custom content for the item's optiongroup"
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
    },
    {
        name: "content",
        description: "Custom content for the virtual scroller"
    },
    {
        name: "loader",
        description: "Custom content for the virtual scroller loader items"
    }
];

module.exports = {
    listbox: {
        name: "Listbox",
        description: "Listbox is used to select one or more values from a list of items.",
        props: ListboxProps,
        events: ListboxEvents,
        slots: ListboxSlots
    }
};

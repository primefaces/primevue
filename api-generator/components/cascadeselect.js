const CascadeSelectProps = [
    {
        name: 'modelValue',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'options',
        type: 'array',
        default: 'null',
        description: 'An array of selectitems to display as the available options.'
    },
    {
        name: 'optionLabel',
        type: 'string | function',
        default: 'null',
        description: 'Property name or getter function to use as the label of an option.'
    },
    {
        name: 'optionValue',
        type: 'string | function',
        default: 'null',
        description: 'Property name or getter function to use as the value of an option, defaults to the option itself when not defined.'
    },
    {
        name: 'optionDisabled',
        type: 'boolean',
        default: 'null',
        description: 'Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.'
    },
    {
        name: 'optionGroupLabel',
        type: 'string | function',
        default: 'null',
        description: 'Property name or getter function to use as the label of an option group.'
    },
    {
        name: 'optionGroupChildren',
        type: 'array | function',
        default: 'null',
        description: 'Property name or getter function to retrieve the items of a group.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Default text to display when no option is selected.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should be disabled.'
    },
    {
        name: 'invalid',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the component should have invalid state style.'
    },
    {
        name: 'variant',
        type: 'string',
        default: 'null',
        description: 'Specifies the input variant of the component.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'A property to uniquely identify an option.'
    },
    {
        name: 'inputStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the input field.'
    },
    {
        name: 'inputClass',
        type: 'string | object',
        default: 'null',
        description: 'Style class of the input field.'
    },
    {
        name: 'inputProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLInputElement/HTMLSpanElement to the focusable input element inside the component.'
    },
    {
        name: 'panelStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the overlay panel.'
    },
    {
        name: 'panelClass',
        type: 'string | object',
        default: 'null',
        description: 'Style class of the overlay panel.'
    },
    {
        name: 'panelProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLDivElement to the overlay panel inside the component.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether the multiselect is in loading state.'
    },
    {
        name: 'dropdownIcon',
        type: 'string',
        default: 'null',
        description: 'Icon to display in the dropdown.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'null',
        description: 'Icon to display in loading state.'
    },
    {
        name: 'optionGroupIcon',
        type: 'string',
        default: 'null',
        description: 'Icon to display in the option group.'
    },
    {
        name: 'autoOptionFocus',
        type: 'boolean',
        default: 'false',
        description: 'Whether to focus on the first visible or selected element when the overlay panel is shown.'
    },
    {
        name: 'selectOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the focused option is selected/opened.'
    },
    {
        name: 'searchLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in searching. The default locale is the host environment's current locale."
    },
    {
        name: 'searchMessage',
        type: 'string',
        default: '{0} results are available',
        description: 'Text to be displayed in hidden accessible field when filtering returns any results. Defaults to value from PrimeVue locale configuration.'
    },
    {
        name: 'selectionMessage',
        type: 'string',
        default: '{0} items selected',
        description: 'Text to be displayed in hidden accessible field when options are selected. Defaults to value from PrimeVue locale configuration.'
    },
    {
        name: 'emptySelectionMessage',
        type: 'string',
        default: 'No selected item',
        description: 'Text to be displayed in hidden accessible field when any option is not selected. Defaults to value from PrimeVue locale configuration.'
    },
    {
        name: 'emptySearchMessage',
        type: 'string',
        default: 'No results found',
        description: 'Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying input element.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const CascadeSelectEvents = [
    {
        name: 'change',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'object',
                description: 'Selected option value'
            }
        ]
    },
    {
        name: 'focus',
        description: 'Callback to invoke when component receives focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'blur',
        description: 'Callback to invoke when component loses focus.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'click',
        description: 'Callback to invoke on click.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    },
    {
        name: 'group-change',
        description: 'Callback to invoke when a group changes.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'value',
                type: 'object',
                description: 'Selected option value'
            }
        ]
    },
    {
        name: 'before-show',
        description: 'Callback to invoke before the overlay is shown.'
    },
    {
        name: 'before-hide',
        description: 'Callback to invoke before the overlay is hidden.'
    },
    {
        name: 'show',
        description: 'Callback to invoke when the overlay is shown.'
    },
    {
        name: 'hide',
        description: 'Callback to invoke when the overlay is hidden.'
    }
];

const CascadeSelectSlots = [
    {
        name: 'value',
        description: "Custom content for the item's value."
    },
    {
        name: 'option',
        description: "Custom content for the item's option."
    },
    {
        name: 'indicator',
        description: 'Custom content for the dropdown indicator.'
    },
    {
        name: 'dropdownicon',
        description: 'Custom dropdown icon template.'
    },
    {
        name: 'loadingicon',
        description: 'Custom loading icon template.'
    },
    {
        name: 'optiongroupicon',
        description: 'Custom content for the option group icon.'
    }
];

module.exports = {
    cascadeselect: {
        name: 'CascadeSelect',
        description: 'CascadeSelect displays a nested structure of options.',
        props: CascadeSelectProps,
        events: CascadeSelectEvents,
        slots: CascadeSelectSlots
    }
};

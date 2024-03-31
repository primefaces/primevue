const DropdownProps = [
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
        type: 'string | function',
        default: 'null',
        description: 'Property name or getter function that refers to the children options of option group.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Height of the viewport, a scrollbar is defined if height of list exceeds this value.'
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'false',
        description: 'When specified, displays a filter input at header.'
    },
    {
        name: 'filterPlaceholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text to show when filter input is empty.'
    },
    {
        name: 'filterLocale',
        type: 'string',
        default: 'undefined',
        description: "Locale to use in filtering. The default locale is the host environment's current locale."
    },
    {
        name: 'filterMatchMode',
        type: 'string',
        default: 'contains',
        description: 'Defines the filtering algorithm to use when searching the options. Valid values are "contains" (default), "startsWith" and "endsWith"'
    },
    {
        name: 'filterFields',
        type: 'array',
        default: 'null',
        description: 'Fields used when filtering the options, defaults to optionLabel.'
    },
    {
        name: 'editable',
        type: 'boolean',
        default: 'false',
        description: 'When present, custom value instead of predefined options can be entered using the editable input field.'
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
        name: 'showClear',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, a clear icon is displayed to clear the value.'
    },
    {
        name: 'inputId',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying input element.'
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
        type: 'string',
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
        name: 'filterInputProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLInputElement to the filter input inside the component.'
    },
    {
        name: 'clearIconProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLElement to the clear icon inside the component.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: "A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are 'body' for document body and 'self' for the element itself."
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether the multiselect is in loading state.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'pi pi-spinner pi-spin',
        description: 'Icon to display in loading state.'
    },
    {
        name: 'resetFilterOnHide',
        type: 'boolean',
        default: 'false',
        description: 'Clears the filter value when hiding the dropdown.'
    },
    {
        name: 'resetFilterOnClear',
        type: 'boolean',
        default: 'false',
        description: 'Clears the filter value when clicking on the clear icon.'
    },
    {
        name: 'virtualScrollerOptions',
        type: 'object',
        default: 'null',
        description: 'Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.'
    },
    {
        name: 'autoOptionFocus',
        type: 'boolean',
        default: 'false',
        description: 'Whether to focus on the first visible or selected element when the overlay panel is shown.'
    },
    {
        name: 'autoFilterFocus',
        type: 'boolean',
        default: 'false',
        description: 'Whether to focus on the filter element when the overlay panel is shown.'
    },
    {
        name: 'selectOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the focused option is selected.'
    },
    {
        name: 'filterMessage',
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
        name: 'emptyFilterMessage',
        type: 'string',
        default: 'No results found',
        description: 'Text to display when filtering does not return any results. Defaults to value from PrimeVue locale configuration.'
    },
    {
        name: 'emptyMessage',
        type: 'string',
        default: 'No results found',
        description: 'Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.'
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

const DropdownEvents = [
    {
        name: 'change',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'string',
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
    },
    {
        name: 'filter',
        description: 'Callback to invoke when the overlay is shown.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'string',
                description: 'Filter value'
            }
        ]
    }
];

const DropdownSlots = [
    {
        name: 'value',
        description: "Custom content for the item's value"
    },
    {
        name: 'indicator',
        description: 'Custom content for the dropdown indicator'
    },
    {
        name: 'header',
        description: "Custom content for the component's header"
    },
    {
        name: 'footer',
        description: "Custom content for the component's footer"
    },
    {
        name: 'option',
        description: "Custom content for the item's option"
    },
    {
        name: 'optiongroup',
        description: "Custom content for the item's optiongroup"
    },
    {
        name: 'emptyfilter',
        description: 'Custom content when there is no filtered data to display'
    },
    {
        name: 'empty',
        description: 'Custom content when there is no data to display'
    },
    {
        name: 'content',
        description: 'Custom content for the virtual scroller'
    },
    {
        name: 'loader',
        description: 'Custom content for the virtual scroller loader items'
    },
    {
        name: 'clearicon',
        description: 'Custom clear icon template.'
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
        name: 'filtericon',
        description: 'Custom filter icon template.'
    }
];

module.exports = {
    dropdown: {
        name: 'Dropdown',
        description: 'Dropdown is used to select an item from a list of options.',
        props: DropdownProps,
        events: DropdownEvents,
        slots: DropdownSlots
    }
};

const AutoCompleteProps = [
    {
        name: 'modelValue',
        type: 'any',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'suggestions',
        type: 'array',
        default: 'null',
        description: 'An array of suggestions to display.'
    },
    {
        name: 'field',
        type: 'any',
        default: 'null',
        description: 'Property name or getter function of a suggested object to resolve and display.'
    },
    {
        name: 'optionLabel',
        type: 'string | function',
        default: 'null',
        description: 'Property name or getter function to use as the label of an option.'
    },
    {
        name: 'optionDisabled',
        type: 'boolean',
        default: 'null',
        description: 'Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.'
    },
    {
        name: 'optionGroupLabel',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function to use as the label of an option group.'
    },
    {
        name: 'optionGroupChildren',
        type: 'string',
        default: 'null',
        description: 'Property name or getter function that refers to the children options of option group.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Maximum height of the suggestions panel.'
    },
    {
        name: 'dropdown',
        type: 'boolean',
        default: 'false',
        description: 'Displays a button next to the input field when enabled.'
    },
    {
        name: 'dropdownMode',
        type: 'string',
        default: 'blank',
        description: 'Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.'
    },
    {
        name: 'autoHighlight',
        type: 'boolean',
        default: false,
        description: 'Highlights automatically the first item of the dropdown to be selected.'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Specifies if multiple values can be selected.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Default text to display when no option is selected.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether the multiselect is in loading state.'
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
        name: 'minLength',
        type: 'number',
        default: '1',
        description: 'Minimum number of characters to initiate a search.'
    },
    {
        name: 'delay',
        type: 'number',
        default: '300',
        description: 'Delay between keystrokes to wait before sending a query.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: 'forceSelection',
        type: 'boolean',
        default: 'false',
        description: 'When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.'
    },
    {
        name: 'completeOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'Whether to run a query when input receives focus.'
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
        name: 'dropdownIcon',
        type: 'string',
        default: 'null',
        description: 'Icon to display in the dropdown.'
    },
    {
        name: 'dropdownClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the dropdown button.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'null',
        description: 'Icon to display in loading state.'
    },
    {
        name: 'removeTokenIcon',
        type: 'string',
        default: 'null',
        description: 'Icon to display in chip remove action.'
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
        name: 'selectOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the focused option is selected.'
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

const AutoCompleteEvents = [
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
        name: 'item-select',
        description: 'Callback to invoke when a suggestion is selected.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'value',
                type: 'object',
                description: 'Selected item'
            }
        ]
    },
    {
        name: 'item-unselect',
        description: 'Callback to invoke when a selected value is removed.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'value',
                type: 'object',
                description: 'Unselected item'
            }
        ]
    },
    {
        name: 'dropdown-click',
        description: 'Callback to invoke to when dropdown button is clicked.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'query',
                type: 'string',
                description: 'Current value of the input field'
            }
        ]
    },
    {
        name: 'clear',
        description: 'Callback to invoke when input is cleared by the user.'
    },
    {
        name: 'complete',
        description: 'Callback to invoke to search for suggestions.',
        arguments: [
            {
                name: 'originalEvent',
                type: 'object',
                description: 'Original event'
            },
            {
                name: 'query',
                type: 'string',
                description: 'Value to search with'
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

const AutoCompleteSlots = [
    {
        name: 'chip',
        description: 'Custom content for the chip display.'
    },
    {
        name: 'header',
        description: 'Custom content for the component header.'
    },
    {
        name: 'footer',
        description: 'Custom content for the component footer.'
    },
    {
        name: 'item',
        description: 'Custom content for the item.'
    },
    {
        name: 'option',
        description: 'Custom content for the item.'
    },
    {
        name: 'optiongroup',
        description: 'Custom content for the optiongroup item.'
    },
    {
        name: 'content',
        description: 'Custom content for the virtual scroller.'
    },
    {
        name: 'loader',
        description: 'Custom content for the virtual scroller loader items.'
    },
    {
        name: 'empty',
        description: 'Custom empty template when there is no data to display.'
    },
    {
        name: 'dropdownicon',
        description: 'Custom dropdown icon template.'
    },
    {
        name: 'removetokenicon',
        description: 'Custom remove token icon template.'
    },
    {
        name: 'loadingicon',
        description: 'Custom loading icon template.'
    }
];

module.exports = {
    autocomplete: {
        name: 'AutoComplete',
        description: 'AutoComplete is an input component that provides real-time suggestions when being typed.',
        props: AutoCompleteProps,
        events: AutoCompleteEvents,
        slots: AutoCompleteSlots
    }
};

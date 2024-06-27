const InputNumberProps = [
    {
        name: 'modelValue',
        type: 'number',
        default: 'null',
        description: 'Value of the component.'
    },
    {
        name: 'format',
        type: 'boolean',
        default: 'true',
        description: 'Whether to format the value.'
    },
    {
        name: 'showButtons',
        type: 'boolean',
        default: 'false',
        description: 'Displays spinner buttons.'
    },
    {
        name: 'buttonLayout',
        type: 'string',
        default: 'stacked',
        description: 'Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".'
    },
    {
        name: 'incrementButtonClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the increment button.'
    },
    {
        name: 'decrementButtonClass',
        type: 'string',
        default: 'null',
        description: 'Style class of the decrement button.'
    },
    {
        name: 'incrementButtonIcon',
        type: 'string',
        default: 'pi pi-angle-up',
        description: 'Style class of the increment button.'
    },
    {
        name: 'decrementButtonIcon',
        type: 'string',
        default: 'pi pi-angle-down',
        description: 'Style class of the decrement button.'
    },
    {
        name: 'locale',
        type: 'string',
        default: 'null',
        description: 'Locale to be used in formatting.'
    },
    {
        name: 'localeMatcher',
        type: 'string',
        default: 'best fit',
        description: 'The locale matching algorithm to use. Possible values are "lookup" and "best fit".'
    },
    {
        name: 'mode',
        type: 'string',
        default: 'decimal',
        description: 'Defines the behavior of the component, valid values are "decimal" and "currency".'
    },
    {
        name: 'prefix',
        type: 'string',
        default: 'null',
        description: 'Text to display before the value.'
    },
    {
        name: 'suffix',
        type: 'string',
        default: 'decimal',
        description: 'Text to display after the value.'
    },
    {
        name: 'currency',
        type: 'string',
        default: 'null',
        description:
            'The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.'
    },
    {
        name: 'currencyDisplay',
        type: 'string',
        default: 'symbol',
        description:
            'How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, "code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".'
    },
    {
        name: 'useGrouping',
        type: 'boolean',
        default: 'true',
        description: 'Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.'
    },
    {
        name: 'minFractionDigits',
        type: 'number',
        default: 'null',
        description:
            "The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information)."
    },
    {
        name: 'maxFractionDigits',
        type: 'number',
        default: 'null',
        description:
            "The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information)."
    },
    {
        name: 'min',
        type: 'number',
        default: 'null',
        description: 'Mininum boundary value.'
    },
    {
        name: 'max',
        type: 'number',
        default: 'null',
        description: 'Maximum boundary value.'
    },
    {
        name: 'step',
        type: 'number',
        default: '1',
        description: 'Step factor to increment/decrement the value.'
    },
    {
        name: 'allowEmpty',
        type: 'boolean',
        default: 'true',
        description: 'Determines whether the input field is empty.'
    },
    {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that an input field is read-only.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text for the input.'
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
        description: 'Used to pass all properties of the HTMLInputElement to the focusable input element inside the component.'
    },
    {
        name: 'incrementButtonProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLButtonElement to increment button inside the component.'
    },
    {
        name: 'decrementButtonProps',
        type: 'object',
        default: 'null',
        description: 'Used to pass all properties of the HTMLButtonElement to decrement button inside the component.'
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

const InputNumberEvents = [
    {
        name: 'input',
        description: 'Callback to invoke when the value is entered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'number',
                description: 'New value'
            }
        ]
    },
    {
        name: 'focus',
        description: 'Callback to invoke on focus of input field.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Focus event'
            }
        ]
    },
    {
        name: 'blur',
        description: 'Callback to invoke on blur of input field.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'string',
                description: 'Input value'
            }
        ]
    }
];

const InputNumberSlots = [
    {
        name: 'incrementbuttonicon',
        description: 'Custom increment button icon template.'
    },
    {
        name: 'decrementbuttonicon',
        description: 'Custom decrement button icon template.'
    }
];

module.exports = {
    inputnumber: {
        name: 'InputNumber',
        description: 'InputNumber is an input component to provide numerical input.',
        props: InputNumberProps,
        events: InputNumberEvents,
        slots: InputNumberSlots
    }
};

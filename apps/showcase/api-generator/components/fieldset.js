const FieldsetProps = [
    {
        name: 'legend',
        type: 'string',
        default: 'null',
        description: 'Header text of the fieldset.'
    },
    {
        name: 'toggleable',
        type: 'boolean',
        default: 'null',
        description: 'When specified, content can toggled by clicking the legend.'
    },
    {
        name: 'collapsed',
        type: 'boolean',
        default: 'true',
        description: 'Defines the default visibility state of the content.'
    },
    {
        name: 'toggleButtonProps',
        type: 'string',
        default: 'null',
        description: 'Used to pass the custom value to read for the AnchorHTMLAttributes inside the component.'
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

const FieldsetEvents = [
    {
        name: 'toggle',
        description: 'Callback to invoke when a tab gets expanded or collapsed.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'boolean',
                description: 'collapsed state as a boolean'
            }
        ]
    }
];

const FieldsetSlots = [
    {
        name: 'legend',
        description: 'Custom legend template.'
    },
    {
        name: 'toggleicon',
        description: 'Custom toggler icon template.'
    }
];

module.exports = {
    fieldset: {
        name: 'Fieldset',
        description: 'Fieldset is a grouping component with the optional content toggle feature.',
        props: FieldsetProps,
        events: FieldsetEvents,
        slots: FieldsetSlots
    }
};

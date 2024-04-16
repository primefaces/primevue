const SplitButtonProps = [
    {
        name: 'label',
        type: 'string',
        default: 'null',
        description: 'Text of the button.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Name of the icon.'
    },
    {
        name: 'model',
        type: 'object',
        default: 'null',
        description: 'MenuModel instance to define the overlay items.'
    },
    {
        name: 'autoZIndex',
        type: 'boolean',
        default: 'true',
        description: 'Whether to automatically manage layering.'
    },
    {
        name: 'baseZIndex',
        type: 'number',
        default: '0',
        description: 'Base zIndex value to use in layering.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached.'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'When present, it specifies that the element should be disabled.'
    },
    {
        name: 'class',
        type: 'string',
        default: 'null',
        description: 'Style class of the component.'
    },
    {
        name: 'style',
        type: 'any',
        default: 'null',
        description: 'Inline of the component.'
    },
    {
        name: 'menuButtonIcon',
        type: 'string',
        default: 'null',
        description: 'Name of the menu button icon.'
    },
    {
        name: 'severity',
        type: 'string',
        default: 'null',
        description: 'Defines the style of the button, valid values are "secondary", "success", "info", "warn", "help", "danger", "contrast".'
    },
    {
        name: 'raised',
        type: 'boolean',
        default: 'false',
        description: 'Add a shadow to indicate elevation.'
    },
    {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        description: 'Add a circular border radius to the button.'
    },
    {
        name: 'text',
        type: 'boolean',
        default: 'false',
        description: 'Add a textual class to the button without a background initially.'
    },
    {
        name: 'outlined',
        type: 'boolean',
        default: 'false',
        description: 'Add a border class without a background initially.'
    },
    {
        name: 'size',
        type: 'string',
        default: 'null',
        description: 'Defines the size of the button, valid values are "small" and "large".'
    },
    {
        name: 'plain',
        type: 'boolean',
        default: 'false',
        description: 'Add a plain textual class to the button without a background initially.'
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

const SplitButtonEvents = [
    {
        name: 'click',
        description: 'Callback to invoke when main button is clicked.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Browser event'
            }
        ]
    }
];

const SplitButtonSlots = [
    {
        name: 'icon',
        description: 'Custom icon template.'
    },
    {
        name: 'menubuttonicon',
        description: 'Custom menu button icon template.'
    },
    {
        name: 'menuitemicon',
        description: 'Custom menu item icon template.'
    }
];

module.exports = {
    splitbutton: {
        name: 'SplitButton',
        description: 'SplitButton groups a set of commands in an overlay with a default command.',
        props: SplitButtonProps,
        events: SplitButtonEvents,
        slots: SplitButtonSlots
    }
};

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

module.exports = {
    splitbutton: {
        name: 'SplitButton',
        description: 'SplitButton groups a set of commands in an overlay with a default command.',
        props: SplitButtonProps,
        events: SplitButtonEvents
    }
};

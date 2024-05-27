const TreeSelectProps = [
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
        description: 'An array of treenodes.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: '200px',
        description: 'Height of the viewport, a scrollbar is defined if height of list exceeds this value.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Label to display when there are no selections.'
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
        name: 'tabindex',
        type: 'string',
        default: 'null',
        description: 'Index of the element in tabbing order.'
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
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".'
    },
    {
        name: 'panelClass',
        type: 'string | object',
        default: 'null',
        description: 'Style class of the overlay panel.'
    },
    {
        name: 'appendTo',
        type: 'string',
        default: 'body',
        description: 'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.'
    },
    {
        name: 'emptyMessage',
        type: 'string',
        default: 'No results found',
        description: 'Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.'
    },
    {
        name: 'display',
        type: 'string',
        default: 'comma',
        description: 'Defines how the selected items are displayed, valid values are "comma" and "chip".'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Establishes relationships between the component and label(s) where its value should be one or more element IDs.'
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Used to define a string that labels the element.'
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

const TreeSelectEvents = [
    {
        name: 'change',
        description: 'Callback to invoke on value change.',
        arguments: [
            {
                name: 'event',
                type: 'object',
                description: 'Selected node keys'
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
        name: 'node-select',
        description: 'Callback to invoke when a node is selected.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    },
    {
        name: 'node-unselect',
        description: 'Callback to invoke when a node is unselected.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    },
    {
        name: 'node-expand',
        description: 'Callback to invoke when a node is expanded.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    },
    {
        name: 'node-collapse',
        description: 'Callback to invoke when a node is collapsed.',
        arguments: [
            {
                name: 'node',
                type: 'object',
                description: 'Node instance'
            }
        ]
    }
];

const TreeSelectSlots = [
    {
        name: 'value',
        description: "Custom content for the item's value"
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
        name: 'empty',
        description: 'Custom content when there is no data to display'
    },
    {
        name: 'triggericon',
        description: 'Custom content for the dropdown indicator'
    },
    {
        name: 'itemtoggleicon',
        description: 'Custom item toggler icon template.'
    },
    {
        name: 'itemcheckboxicon',
        description: 'Custom item checkbox icon template.'
    }
];

module.exports = {
    treeselect: {
        name: 'TreeSelect',
        description: 'TreeSelect is a form component to choose from hierarchical data.',
        props: TreeSelectProps,
        events: TreeSelectEvents,
        slots: TreeSelectSlots
    }
};

const TreeProps = [
    {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'An array of treenodes.'
    },
    {
        name: 'expandedKeys',
        type: 'array',
        default: 'null',
        description: 'A map of keys to represent the expansion state in controlled mode.'
    },
    {
        name: 'selectionMode',
        type: 'string',
        default: 'null',
        description: 'Defines the selection mode, valid values "single", "multiple", and "checkbox".'
    },
    {
        name: 'selectionKeys',
        type: 'any',
        default: 'null',
        description: 'A map of keys to control the selection state.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether to display loading indicator.'
    },
    {
        name: 'loadingIcon',
        type: 'string',
        default: 'pi pi-spin',
        description: 'Icon to display when tree is loading.'
    },
    {
        name: 'filter',
        type: 'boolean',
        default: 'false',
        description: 'When specified, displays an input field to filter the items.'
    },
    {
        name: 'filterBy',
        type: 'string',
        default: 'label',
        description: 'When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.'
    },
    {
        name: 'filterMode',
        type: 'string',
        default: 'lenient',
        description: 'Mode for filtering valid values are "lenient" and "strict". Default is lenient.'
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
        name: 'highlightOnSelect',
        type: 'boolean',
        default: 'false',
        description: 'Highlights automatically the first item.'
    },
    {
        name: 'scrollHeight',
        type: 'string',
        default: 'null',
        description: 'Height of the scroll viewport in fixed units or the "flex" keyword for a dynamic size.'
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

const TreeEvents = [
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

const TreeSlots = [
    {
        name: 'loadingicon',
        description: 'Custom loading icon template.'
    },
    {
        name: 'searchicon',
        description: 'Custom search icon template.'
    },
    {
        name: 'toggleicon',
        description: 'Custom toggler icon template.'
    },
    {
        name: 'checkboxicon',
        description: 'Custom checkbox icon template.'
    }
];

module.exports = {
    tree: {
        name: 'Tree',
        description: 'Tree is used to display hierarchical data.',
        props: TreeProps,
        events: TreeEvents,
        slots: TreeSlots
    }
};

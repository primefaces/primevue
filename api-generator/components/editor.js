const EditorProps = [
    {
        name: 'modelValue',
        type: 'string',
        default: 'null',
        description: 'Value of the content.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text to show when editor is empty.'
    },
    {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Whether to instantiate the editor to readonly mode.'
    },
    {
        name: 'formats',
        type: 'string[]',
        default: 'null',
        description: 'Whitelist of formats to display.'
    },
    {
        name: 'editorStyle',
        type: 'any',
        default: 'null',
        description: 'Inline style of the container.'
    },
    {
        name: 'modules',
        type: 'object',
        default: 'null',
        description: 'Modules configuration, see <a href="http://quilljs.com/docs/modules/">here</a> for available options.'
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

const EditorEvents = [
    {
        name: 'text-change',
        description: 'Callback to invoke when text of editor changes.',
        arguments: [
            {
                name: 'event.delta',
                type: 'object',
                description: 'Representation of the change.'
            },
            {
                name: 'event.source',
                type: 'string',
                description: 'Source of change. Will be either "user" or "api".'
            },
            {
                name: 'event.htmlValue',
                type: 'string',
                description: 'Current value as html.'
            },
            {
                name: 'event.textValue',
                type: 'string',
                description: 'Current value as text.'
            },
            {
                name: 'event.instance',
                type: 'object',
                description: 'Text editor instance.'
            }
        ]
    },
    {
        name: 'selection-change',
        description: 'Callback to invoke when selection of the text changes.',
        arguments: [
            {
                name: 'event.range',
                type: 'object',
                description: 'Representation of the selection boundaries.'
            },
            {
                name: 'event.oldRange',
                type: 'string',
                description: 'Representation of the previous selection boundaries.'
            },
            {
                name: 'event.source',
                type: 'string',
                description: 'Source of change. Will be either "user" or "api".'
            },
            {
                name: 'event.htmlValue',
                type: 'string',
                description: 'Current value as html.'
            },
            {
                name: 'event.textValue',
                type: 'string',
                description: 'Current value as text.'
            },
            {
                name: 'event.instance',
                type: 'object',
                description: 'Text editor instance.'
            }
        ]
    },
    {
        name: 'load',
        description: 'Callback to invoke when the quill modules are loaded.',
        arguments: [
            {
                name: 'event.instance',
                type: 'any',
                description: 'Quill instance'
            }
        ]
    }
];

const EditorSlots = [
    {
        name: 'toolbar',
        description: "Custom content for the component's toolbar"
    }
];

module.exports = {
    editor: {
        name: 'Editor',
        description: 'Editor is rich text editor component based on Quill.',
        props: EditorProps,
        events: EditorEvents,
        slots: EditorSlots
    }
};

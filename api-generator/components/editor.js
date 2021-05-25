const EditorProps = [
    {
        name: "value",
        type: "string",
        default: "null",
        description: "Value of the content."
    },
    {
        name: "placeholder",
        type: "string",
        default: "null",
        description: "Placeholder text to show when editor is empty."
    },
    {
        name: "readonly",
        type: "boolean",
        default: "false",
        description: "Whether to instantiate the editor to readonly mode."
    },
    {
        name: "formats",
        type: "string[]",
        default: "null",
        description: "Whitelist of formats to display."
    },
    {
        name: "editorStyle",
        type: "any",
        default: "null",
        description: "Inline style of the container."
    }
];

const EditorEvents = [
    {
        name: "text-change",
        description: "Callback to invoke when text of editor changes.",
        arguments: [
            {
                name: "event.delta",
                type: "object",
                description: "Representation of the change."
            },
            {
                name: "event.source",
                type: "string",
                description: 'Source of change. Will be either "user" or "api".'
            },
            {
                name: "event.htmlValue",
                type: "string",
                description: "Current value as html."
            },
            {
                name: "event.textValue",
                type: "string",
                description: "Current value as text."
            },
            {
                name: "event.instance",
                type: "object",
                description: "Text editor instance."
            }
        ]
    },
    {
        name: "input",
        description: "Callback to invoke when text of editor changes.",
        arguments: [
            {
                name: "event",
                type: "object",
                description: "Current value as html."
            }
        ]
    }
];

const EditorSlots = [
    {
        name: "toolbar",
        description: "Custom content for the component's toolbar"
    }
];

module.exports = {
    editor: {
        name: "Editor",
        description: "Editor is rich text editor component based on Quill.",
        props: EditorProps,
        events: EditorEvents,
        slots: EditorSlots
    }
};

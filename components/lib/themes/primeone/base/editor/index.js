export default {
    css: ({ dt }) => `
.p-editor-container .p-editor-toolbar {
    background: ${dt('editor.toolbar.background')};
    border-top-right-radius: ${dt('rounded.base')};
    border-top-left-radius: ${dt('rounded.base')};
}

.p-editor-container .p-editor-toolbar.ql-snow {
    border: 1px solid ${dt('editor.toolbar.border.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: ${dt('editor.toolbar.item.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: ${dt('editor.toolbar.item.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: ${dt('editor.toolbar.item.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: ${dt('editor.toolbar.item.hover.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: ${dt('editor.toolbar.item.hover.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: ${dt('editor.toolbar.item.hover.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: ${dt('editor.toolbar.item.active.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: ${dt('editor.toolbar.item.active.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: ${dt('editor.toolbar.item.active.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: ${dt('editor.overlay.background')};
    border: 1px solid ${dt('editor.overlay.border.color')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: ${dt('rounded.base')};
    padding: 0.25rem 0.25rem;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: ${dt('editor.overlay.item.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: ${dt('editor.overlay.item.hover.background')};
    color: ${dt('editor.overlay.item.hover.color')};
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: 0.5rem 0.75rem;
}

.p-editor-container .p-editor-content {
    border-bottom-right-radius: ${dt('rounded.base')};
    border-bottom-left-radius: ${dt('rounded.base')};
}

.p-editor-container .p-editor-content.ql-snow {
    border: 1px solid ${dt('editor.content.border.color')};
}

.p-editor-container .p-editor-content .ql-editor {
    background: ${dt('editor.content.background')};
    color: ${dt('editor.content.color')};
    border-bottom-right-radius: ${dt('rounded.base')};
    border-bottom-left-radius: ${dt('rounded.base')};
}

.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: ${dt('editor.toolbar.item.hover.color')};
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: ${dt('editor.toolbar.item.hover.color')};
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: ${dt('editor.toolbar.item.hover.color')};
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: ${dt('editor.toolbar.item.active.color')};
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: ${dt('editor.toolbar.item.active.color')};
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: ${dt('editor.toolbar.item.active.color')};
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: ${dt('editor.toolbar.item.active.color')};
}
`
};

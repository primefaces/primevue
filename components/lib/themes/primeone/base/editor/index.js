export default {
    css: `
.p-editor-container .p-editor-toolbar {
    background: var(--p-editor-toolbar-background);
    border-top-right-radius: var(--p-rounded-base);
    border-top-left-radius: var(--p-rounded-base);
}

.p-editor-container .p-editor-toolbar.ql-snow {
    border: 1px solid var(--p-editor-toolbar-border-color);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: var(--p-editor-toolbar-item-text-color);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: var(--p-editor-toolbar-item-text-color);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: var(--p-editor-toolbar-item-text-color);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: var(--p-editor-toolbar-item-text-color-hover);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: var(--p-editor-toolbar-item-text-color-hover);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: var(--p-editor-toolbar-item-text-color-hover);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: var(--p-editor-toolbar-item-text-color-active);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: var(--p-editor-toolbar-item-text-color-active);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: var(--p-editor-toolbar-item-text-color-active);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: var(--p-editor-overlay-background);
    border: 1px solid var(--p-editor-overlay-border-color);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: var(--p-rounded-base);
    padding: 0.25rem 0.25rem;
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: var(--p-editor-overlay-item-text-color);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    color: var(--p-editor-overlay-item-text-color-hover);
    background: var(--p-editor-overlay-item-background-hover);
}

.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: 0.5rem 0.75rem;
}

.p-editor-container .p-editor-content {
    border-bottom-right-radius: var(--p-rounded-base);
    border-bottom-left-radius: var(--p-rounded-base);
}

.p-editor-container .p-editor-content.ql-snow {
    border: 1px solid var(--p-editor-content-border-color);
}

.p-editor-container .p-editor-content .ql-editor {
    background: var(--p-editor-content-background);
    color: var(--p-editor-content-text-color);
    border-bottom-right-radius: var(--p-rounded-base);
    border-bottom-left-radius: var(--p-rounded-base);
}

.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
    color: var(--p-editor-toolbar-item-text-color-hover);
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: var(--p-editor-toolbar-item-text-color-hover);
}

.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: var(--p-editor-toolbar-item-text-color-hover);
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: var(--p-editor-toolbar-item-text-color-active);
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: var(--p-editor-toolbar-item-text-color-active);
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: var(--p-editor-toolbar-item-text-color-active);
}

.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: var(--p-editor-toolbar-item-text-color-active);
}
`
};

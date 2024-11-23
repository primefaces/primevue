import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
/*!
* Quill Editor v2.0.2
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/

.p-editor .ql-toolbar {
    background: ${dt('editor.toolbar.background')};
    border-start-end-radius: ${dt('editor.toolbar.border.radius')};
    border-start-start-radius: ${dt('editor.toolbar.border.radius')};

    button:hover, button:focus, .ql-picker-label:hover, .ql-picker-item:hover {
        color: ${dt('editor.toolbar.item.hover.color')};

        .ql-fill, .ql-stroke.ql-fill {
            fill: ${dt('editor.toolbar.item.hover.color')};
        }

        .ql-stroke, .ql-stroke-miter {
            stroke: ${dt('editor.toolbar.item.hover.color')};
        }
    }

    button.ql-active, .ql-picker-label.ql-active, .ql-picker-item.ql-selected {
        color: ${dt('editor.toolbar.item.active.color')};

        .ql-fill, .ql-stroke.ql-fill {
            fill: ${dt('editor.toolbar.item.active.color')};
        }

        .ql-stroke, .ql-stroke-miter {
            stroke: ${dt('editor.toolbar.item.active.color')}
        }
    }
}

.p-editor .ql-toolbar.ql-snow {
    border: 1px solid ${dt('editor.toolbar.border.color')};
}

.p-editor .ql-toolbar.ql-snow .ql-stroke {
    stroke: ${dt('editor.toolbar.item.color')};
}

.p-editor .ql-toolbar.ql-snow .ql-fill {
    fill: ${dt('editor.toolbar.item.color')};
}

.p-editor .ql-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: ${dt('editor.toolbar.item.color')};
}

.p-editor .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: ${dt('editor.overlay.background')};
    border: 1px solid ${dt('editor.overlay.border.color')};
    box-shadow: ${dt('editor.overlay.shadow')};
    border-radius: ${dt('editor.overlay.border.radius')};
    padding: ${dt('editor.overlay.padding')};
}

.p-editor .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: ${dt('editor.overlay.option.color')};
    border-radius: ${dt('editor.overlay.option.border.radius')};
}

.p-editor .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: ${dt('editor.overlay.option.focus.background')};
    color: ${dt('editor.overlay.option.focus.color')};
}

.p-editor .ql-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: ${dt('editor.overlay.option.padding')};
}

.p-editor .p-editor-content {
    border-end-end-radius: ${dt('editor.content.border.radius')};
    border-end-start-radius: ${dt('editor.content.border.radius')};
}

.p-editor .p-editor-content.ql-snow {
    border: 1px solid ${dt('editor.content.border.color')};
}

.p-editor .p-editor-content .ql-editor {
    background: ${dt('editor.content.background')};
    color: ${dt('editor.content.color')};
    border-end-end-radius: ${dt('editor.content.border.radius')};
    border-end-start-radius: ${dt('editor.content.border.radius')};
}
`;

const classes = {
    root: ({ instance }) => [
        'p-editor',
        {
            'p-invalid': instance.$invalid
        }
    ],
    toolbar: 'p-editor-toolbar',
    content: 'p-editor-content'
};

export default BaseStyle.extend({
    name: 'editor',
    theme,
    classes
});

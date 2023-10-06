import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-fileupload-content {
        position: relative;
    }

    .p-fileupload-content .p-progressbar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-button.p-fileupload-choose {
        position: relative;
        overflow: hidden;
    }

    .p-fileupload-buttonbar {
        display: flex;
        flex-wrap: wrap;
    }

    .p-fileupload > input[type='file'],
    .p-fileupload-basic input[type='file'] {
        display: none;
    }

    .p-fluid .p-fileupload .p-button {
        width: auto;
    }

    .p-fileupload-file {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }

    .p-fileupload-file-actions {
        margin-left: auto;
    }
}
`;

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    buttonbar: 'p-fileupload-buttonbar',
    chooseButton: ({ instance, props }) => [
        'p-button p-component p-fileupload-choose',
        {
            'p-fileupload-choose-selected': props.mode === 'basic' && instance.hasFiles,
            'p-disabled': props.disabled,
            'p-focus': instance.focused
        }
    ],
    chooseIcon: 'p-button-icon p-button-icon-left',
    chooseButtonLabel: 'p-button-label',
    content: 'p-fileupload-content',
    empty: 'p-fileupload-empty',
    uploadIcon: 'p-button-icon p-button-icon-left',
    label: 'p-button-label',
    file: 'p-fileupload-file',
    thumbnail: 'p-fileupload-file-thumbnail',
    details: 'p-fileupload-file-details',
    fileName: 'p-fileupload-file-name',
    fileSize: 'p-fileupload-file-size',
    badge: 'p-fileupload-file-badge',
    actions: 'p-fileupload-file-actions',
    removeButton: 'p-fileupload-file-remove'
};

export default BaseStyle.extend({
    name: 'fileupload',
    css,
    classes
});

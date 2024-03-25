import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    buttonbar: 'p-fileupload-buttonbar',
    chooseButton: ({ instance, props }) => [
        'p-fileupload-choose',
        {
            'p-fileupload-choose-selected': props.mode === 'basic' && instance.hasFiles,
            'p-focus': instance.focused
        }
    ],
    chooseIcon: 'p-fileupload-choose-icon',
    chooseButtonLabel: 'p-fileupload-choosebutton-label',
    content: 'p-fileupload-content',
    empty: 'p-fileupload-empty',
    uploadIcon: 'p-fileupload-upload-icon',
    label: 'p-fileupload-button-label',
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
    classes
});

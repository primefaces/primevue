import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    buttonbar: 'p-fileupload-header',
    chooseButton: 'p-fileupload-choose-button', // TODO: Also add upload and clear
    chooseIcon: 'p-fileupload-choose-icon', // TODO: remove
    chooseButtonLabel: 'p-fileupload-choosebutton-label', // TODO: remove
    content: 'p-fileupload-content',
    emptyContent: 'p-fileupload-empty-content', // TODO: remove
    uploadIcon: 'p-fileupload-upload-icon', // TODO: remove
    label: 'p-fileupload-button-label', // TODO: remove
    fileList: 'p-fileupload-file-list',
    file: 'p-fileupload-file',
    thumbnail: 'p-fileupload-file-thumbnail',
    details: 'p-fileupload-file-info',
    fileName: 'p-fileupload-file-name',
    fileSize: 'p-fileupload-file-size',
    badge: 'p-fileupload-file-badge',
    actions: 'p-fileupload-file-actions',
    removeButton: 'p-fileupload-file-remove-button'
};

export default BaseStyle.extend({
    name: 'fileupload',
    classes
});

import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    header: 'p-fileupload-header',
    chooseButton: 'p-fileupload-choose-button',
    uploadButton: 'p-fileupload-upload-button',
    clearButton: 'p-fileupload-clear-button',
    content: 'p-fileupload-content',
    fileList: 'p-fileupload-file-list',
    file: 'p-fileupload-file',
    fileThumbnail: 'p-fileupload-file-thumbnail',
    fileInfo: 'p-fileupload-file-info',
    fileName: 'p-fileupload-file-name',
    fileSize: 'p-fileupload-file-size',
    fileBadge: 'p-fileupload-file-badge',
    fileActions: 'p-fileupload-file-actions',
    fileRemoveButton: 'p-fileupload-file-remove-button'
};

export default BaseStyle.extend({
    name: 'fileupload',
    classes
});

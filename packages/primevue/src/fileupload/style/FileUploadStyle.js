import { style } from '@primeuix/styles/fileupload';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [`p-fileupload p-fileupload-${props.mode} p-component`],
    header: 'p-fileupload-header',
    pcChooseButton: 'p-fileupload-choose-button',
    pcUploadButton: 'p-fileupload-upload-button',
    pcCancelButton: 'p-fileupload-cancel-button',
    content: 'p-fileupload-content',
    fileList: 'p-fileupload-file-list',
    file: 'p-fileupload-file',
    fileThumbnail: 'p-fileupload-file-thumbnail',
    fileInfo: 'p-fileupload-file-info',
    fileName: 'p-fileupload-file-name',
    fileSize: 'p-fileupload-file-size',
    pcFileBadge: 'p-fileupload-file-badge',
    fileActions: 'p-fileupload-file-actions',
    pcFileRemoveButton: 'p-fileupload-file-remove-button'
};

export default BaseStyle.extend({
    name: 'fileupload',
    style,
    classes
});

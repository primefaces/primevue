/**
 *
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 *
 * [Live Demo](https://www.primevue.org/fileupload/)
 *
 * @module fileuploadstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum FileUploadClasses {
    root = 'p-fileupload',
    header = 'p-fileupload-header',
    pcChooseButton = 'p-fileupload-choose-button',
    pcUploadButton = 'p-fileupload-upload-button',
    pcCancelButton = 'p-fileupload-cancel-button',
    content = 'p-fileupload-content',
    fileList = 'p-fileupload-file-list',
    file = 'p-fileupload-file',
    fileThumbnail = 'p-fileupload-file-thumbnail',
    fileInfo = 'p-fileupload-file-info',
    fileName = 'p-fileupload-file-name',
    fileSize = 'p-fileupload-file-size',
    pcFileBadge = 'p-fileupload-file-badge',
    fileActions = 'p-fileupload-file-actions',
    pcFileRemoveButton = 'p-fileupload-file-remove-button'
}

export interface FileUploadStyle extends BaseStyle {}

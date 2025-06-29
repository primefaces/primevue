/**
 *
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 *
 * [Live Demo](https://www.primevue.org/fileupload/)
 *
 * @module fileuploadstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum FileUploadClasses {
    /**
     * Class name of the root element
     */
    root = 'p-fileupload',
    /**
     * Class name of the header element
     */
    header = 'p-fileupload-header',
    /**
     * Class name of the choose button element
     */
    pcChooseButton = 'p-fileupload-choose-button',
    /**
     * Class name of the upload button element
     */
    pcUploadButton = 'p-fileupload-upload-button',
    /**
     * Class name of the cancel button element
     */
    pcCancelButton = 'p-fileupload-cancel-button',
    /**
     * Class name of the content element
     */
    content = 'p-fileupload-content',
    /**
     * Class name of the file list element
     */
    fileList = 'p-fileupload-file-list',
    /**
     * Class name of the file element
     */
    file = 'p-fileupload-file',
    /**
     * Class name of the file thumbnail element
     */
    fileThumbnail = 'p-fileupload-file-thumbnail',
    /**
     * Class name of the file info element
     */
    fileInfo = 'p-fileupload-file-info',
    /**
     * Class name of the file name element
     */
    fileName = 'p-fileupload-file-name',
    /**
     * Class name of the file size element
     */
    fileSize = 'p-fileupload-file-size',
    /**
     * Class name of the file badge element
     */
    pcFileBadge = 'p-fileupload-file-badge',
    /**
     * Class name of the file actions element
     */
    fileActions = 'p-fileupload-file-actions',
    /**
     * Class name of the file remove button element
     */
    pcFileRemoveButton = 'p-fileupload-file-remove-button',
    /**
     * Class name of the content element in basic mode
     */
    basicContent = 'p-fileupload-basic-content'
}

export interface FileUploadStyle extends BaseStyle {}

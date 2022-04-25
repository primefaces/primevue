import { VNode } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

type FileUploadModeType = 'advanced' | 'basic' | undefined;

export interface FileUploadSelectEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * List of selected files.
     */
    files: any;
}

export interface FileUploadBeforeUploadEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * FormData object.
     */
    formData: FormData;
}

export interface FileUploadProgressEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Calculated progress value.
     */
    progress: number;
}

export interface FileUploadUploadEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * Files that are not uploaded.
     */
    files: File | File[];
}

export interface FileUploadUploaderEvent {
    /**
     * List of selected files.
     */
    files: File | File[];
}

export interface FileUploadErrorEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * Files that are not uploaded.
     */
    files: File | File[];
}

export interface FileUploadBeforeSendEvent {
    /**
     * XmlHttpRequest instance.
     */
    xhr: XMLHttpRequest;
    /**
     * FormData object.
     */
    formData: FormData;
}

export interface FileUploadRemoveEvent {
    /**
     * Removed file.
     */
    file: File;
    /**
     * Remaining files to be uploaded.
     */
    files: File[];
}

export interface FileUploadProps {
    /**
     * Name of the request parameter to identify the files at backend.
     */
    name?: string | undefined;
    /**
     * Remote url to upload the files.
     */
    url?: string | undefined;
    /**
     * Defines the UI of the component, possible values are 'advanced' and 'basic'.
     * @see FileUploadModeType
     * Default value is 'advanced'.
     */
    mode?: FileUploadModeType;
    /**
     * Used to select multiple files at once from file dialog.
     */
    multiple?: boolean | undefined;
    /**
     * Pattern to restrict the allowed file types such as 'image/*'.
     */
    accept?: string | undefined;
    /**
     * Disables the upload functionality.
     */
    disabled?: boolean | undefined;
    /**
     * When enabled, upload begins automatically after selection is completed.
     */
    auto?: boolean | undefined;
    /**
     * Maximum file size allowed in bytes.
     */
    maxFileSize?: number | undefined;
    /**
     * Message of the invalid fize size.
     * Default value is '{0}: Invalid file size, file size should be smaller than {1}.'.
     */
    invalidFileSizeMessage?: string | undefined;
    /**
     * Message to display when number of files to be uploaded exceeeds the limit.
     * Default value is 'Maximum number of files exceeded, limit is {0} at most.'.
     */
    invalidFileLimitMessage?: string | undefined;
    /**
     * Message of the invalid fize type.
     * Default value is '{0}: Invalid file type, allowed file types: {1}.'.
     */
    invalidFileTypeMessage?: string | undefined;
    /**
     * Maximum number of files that can be uploaded.
     */
    fileLimit?: number | undefined;
    /**
     * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
     */
    withCredentials?: boolean | undefined;
    /**
     * Width of the image thumbnail in pixels.
     * Default value is 50.
     */
    previewWidth?: number | undefined;
    /**
     * Label of the choose button. Defaults to PrimeVue Locale configuration.
     */
    chooseLabel?: string | undefined;
    /**
     * Label of the upload button. Defaults to PrimeVue Locale configuration.
     * Default value is 'Upload'.
     */
    uploadLabel?: string | undefined;
    /**
     * Label of the cancel button. Defaults to PrimeVue Locale configuration.
     * Default value is 'Cancel'.
     */
    cancelLabel?: string | undefined;
    /**
     * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeVue Locale configuration.
     */
    customUpload?: boolean | undefined;
    /**
     * Whether to show the upload button.
     * Default value is true.
     */
    showUploadButton?: boolean | undefined;
    /**
     * Whether to show the cancel button.
     * Default value is true.
     */
    showCancelButton?: boolean | undefined;
    /**
     * Icon of the choose button.
     */
    chooseIcon?: string | undefined;
    /**
     * Icon of the upload button.
     */
    uploadIcon?: string | undefined;
    /**
     * Icon of the cancel button.
     */
    cancelIcon?: string | undefined;
    /**
     * Inline style of the component.
     */
    style?: any;
    /**
     * Style class of the component.
     */
    class?: any;
}

export interface FileUploadSlots {
    /**
     * Custom empty template.
     */
    empty: () => VNode[];
}

export declare type FileUploadEmits = {
    /**
     * Callback to invoke when files are selected.
     * @param {FileUploadSelectEvent} event - Custom select event.
     */
    'select': (event: FileUploadSelectEvent) => void;
    /**
     * Callback to invoke before file upload begins to customize the request such as post parameters before the files.
     * @param {FileUploadBeforeUploadEvent} event - Custom before upload event.
     */
    'before-upload': (event: FileUploadBeforeUploadEvent) => void;
    /**
     * Callback to invoke when files are being uploaded.
     * @param {FileUploadProgressEvent} event - Custom progress event.
     */
    'progress': (event: FileUploadProgressEvent) => void;
    /**
     * Callback to invoke when file upload is complete.
     * @param {FileUploadUploadEvent} event - Custom upload event.
     */
    'upload': (event: FileUploadUploadEvent) => void;
    /**
     * Callback to invoke to implement a custom upload.
     * @param {FileUploadUploaderEvent} event - Custom uploader event.
     */
    'uploader': (event: FileUploadUploaderEvent) => void;
    /**
     * Callback to invoke if file upload fails.
     * @param {FileUploadErrorEvent} event - Custom error event.
     */
    'error': (event: FileUploadErrorEvent) => void;
    /**
     * Callback to invoke before file send begins to customize the request such as adding headers.
     * @param {FileUploadBeforeSendEvent} event - Custom before send event.
     */
    'before-send': (event: FileUploadBeforeSendEvent) => void;
    /**
     * Callback to invoke when files in queue are removed without uploading.
     */
    'clear': () => void;
    /**
     * Callback to invoke when a singe file is removed from the list.
     * @param {FileUploadRemoveEvent} event - Custom remove event.
     */
    'remove': (event: FileUploadRemoveEvent) => void;
}

declare class FileUpload extends ClassComponent<FileUploadProps, FileUploadSlots, FileUploadEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FileUpload: GlobalComponentConstructor<FileUpload>
    }
}

/**
 *
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 *
 * Demos:
 *
 * - [FileUpload](https://www.primefaces.org/primevue/showcase/#/fileupload)
 *
 */
export default FileUpload;

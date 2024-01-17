/**
 *
 * FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.
 *
 * [Live Demo](https://www.primevue.org/fileupload/)
 *
 * @module fileupload
 *
 */
import { VNode } from 'vue';
import { BadgePassThroughOptions } from '../badge';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { MessagePassThroughOptions } from '../message';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type FileUploadPassThroughOptionType = FileUploadPassThroughAttributes | ((options: FileUploadPassThroughMethodOptions) => FileUploadPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FileUploadPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FileUploadProps;
    /**
     * Defines current inline state.
     */
    state: FileUploadState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface FileUploadPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: FileUploadProps;
    /**
     * Defines current inline state.
     */
    state: FileUploadState;
}

/**
 * Custom select event.
 * @see {@link FileUploadEmits.select}
 */
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

/**
 * Custom before upload event.
 * @see {@link FileUploadEmits['before-upload']}
 */
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

/**
 * Custom progress event.
 * @see {@link FileUploadEmits.progress }
 */
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

/**
 * Custom upload event.
 * @see {@link FileUploadEmits.upload}
 */
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

/**
 * Custom uploader event.
 * @see {@link FileUploadEmits.uploader}
 */
export interface FileUploadUploaderEvent {
    /**
     * List of selected files.
     */
    files: File | File[];
}
/**
 * Custom error event.
 * @see {@link FileUploadEmits.error}
 */
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
/**
 * Custom before send event.
 * @see {@link FileUploadEmits['before-send']}
 */
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

/**
 * Custom remove event.
 * @see {@link FileUploadEmits.remove}
 */
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
/**
 * Custom remove upload file event.
 * @see {@link FileUploadEmits['remove-uploaded-file']}
 */
export interface FileUploadRemoveUploadedFile {
    /**
     * Removed file.
     */
    file: File;
    /**
     * Remaining files to be uploaded.
     */
    files: File[];
}

/**
 * Custom passthrough(pt) options.
 * @see {@link FileUploadProps.pt}
 */
export interface FileUploadPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the buttonbar's DOM element.
     */
    buttonbar?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the choose button's DOM element.
     */
    chooseButton?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the choose icon's DOM element.
     */
    chooseIcon?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the choose button label's DOM element.
     */
    chooseButtonLabel?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the upload button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    uploadButton?: ButtonPassThroughOptions<FileUploadPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the cancel button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    cancelButton?: ButtonPassThroughOptions<FileUploadPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the progressbar's DOM element.
     */
    progressbar?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the messages' DOM element.
     * @see {@link MessagePassThroughOptions}
     */
    message?: MessagePassThroughOptions<FileUploadPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the file's DOM element.
     */
    file?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the thumbnail's DOM element.
     */
    thumbnail?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the details's DOM element.
     */
    details?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the fileName's DOM element.
     */
    fileName?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the fileSize's DOM element.
     */
    fileSize?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the Badge component.
     * @see {@link BadgePassThroughOptions}
     */
    badge?: BadgePassThroughOptions<FileUploadPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the actions's DOM element.
     */
    actions?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the remove button's DOM element.
     * @see {@link ButtonPassThroughOptions}
     */
    removeButton?: ButtonPassThroughOptions<FileUploadPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the empty's DOM element.
     */
    empty?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: FileUploadPassThroughOptionType;
    /**
     * Used to pass attributes to the upload icon's DOM element.
     */
    uploadIcon?: FileUploadPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FileUploadPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in FileUpload component.
 */
export interface FileUploadState {
    /**
     * Current uploaded file count state as a number.
     * @defaultValue 0
     */
    uploadedFileCount: number;
    /**
     * Current files.
     */
    files: any[];
    /**
     * Current messages.
     */
    messages: any[];
    /**
     * Current progress state as a number.
     */
    progress: number;
    /**
     * Current uploaded files.
     */
    uploadedFiles: any[];
}

/**
 * Defines valid properties in FileUpload component.
 */
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
     * @defaultValue advanced
     */
    mode?: 'advanced' | 'basic' | undefined;
    /**
     * Used to select multiple files at once from file dialog.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Pattern to restrict the allowed file types such as 'image/*'.
     */
    accept?: string | undefined;
    /**
     * Disables the upload functionality.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When enabled, upload begins automatically after selection is completed.
     * @defaultValue false
     */
    auto?: boolean | undefined;
    /**
     * Maximum file size allowed in bytes.
     */
    maxFileSize?: number | undefined;
    /**
     * Message of the invalid fize size.
     * @defaultValue {0}: Invalid file size, file size should be smaller than {1.}
     */
    invalidFileSizeMessage?: string | undefined;
    /**
     * Message to display when number of files to be uploaded exceeeds the limit.
     * @defaultValue Maximum number of files to be uploaded is {0.}
     */
    invalidFileLimitMessage?: string | undefined;
    /**
     * Message of the invalid fize type.
     * @defaultValue '{0}: Invalid file type.'
     */
    invalidFileTypeMessage?: string | undefined;
    /**
     * Maximum number of files that can be uploaded.
     */
    fileLimit?: number | undefined;
    /**
     * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
     * @defaultValue false
     */
    withCredentials?: boolean | undefined;
    /**
     * Width of the image thumbnail in pixels.
     * @defaultValue 50
     */
    previewWidth?: number | undefined;
    /**
     * Label of the choose button. Defaults to PrimeVue Locale configuration.
     */
    chooseLabel?: string | undefined;
    /**
     * Label of the upload button. Defaults to PrimeVue Locale configuration.
     */
    uploadLabel?: string | undefined;
    /**
     * Label of the cancel button. Defaults to PrimeVue Locale configuration.
     * @defaultValue Cancel
     */
    cancelLabel?: string | undefined;
    /**
     * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeVue Locale configuration.
     */
    customUpload?: boolean | undefined;
    /**
     * Whether to show the upload button.
     * @defaultValue true
     */
    showUploadButton?: boolean | undefined;
    /**
     * Whether to show the cancel button.
     * @defaultValue true
     */
    showCancelButton?: boolean | undefined;
    /**
     * Icon of the choose button.
     * @deprecated since v3.27.0. Use 'chooseicon' slot.
     */
    chooseIcon?: string | undefined;
    /**
     * Icon of the upload button.
     * @deprecated since v3.27.0. Use 'updateicon' slot.
     */
    uploadIcon?: string | undefined;
    /**
     * Icon of the cancel button.
     * @deprecated since v3.27.0. Use 'cancelicon' slot.
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
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FileUploadPassThroughOptions}
     */
    pt?: PassThrough<FileUploadPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in FileUpload slots.
 */
export interface FileUploadSlots {
    /**
     * Custom header content template.
     * @param {Object} scope - header slot's params.
     */
    header(scope: {
        /**
         * Files to upload.
         */
        files: File[];
        /**
         * Uploaded files.
         */
        uploadedFiles: File[];
        /**
         * Choose function
         */
        chooseCallback: () => void;
        /**
         * Upload function
         */
        uploadCallback: () => void;
        /**
         *  Clear function
         */
        clearCallback: () => void;
    }): VNode[];
    /**
     * Custom uploaded content template.
     * @param {Object} scope - content slot's params.
     */
    content(scope: {
        /**
         * Files to upload.
         */
        files: File[];
        /**
         * Uploaded files.
         */
        uploadedFiles: File[];
        /**
         * Function to remove an uploaded file.
         * @param {number} index - Index of the uploaded file
         */
        removeUploadedFileCallback: (index: number) => void;
        /**
         * Function to remove a file.
         * @param {number} index - Index of the removed file
         */
        removeFileCallback: (index: number) => void;
        /**
         *  Uploaded progress as number.
         */
        progress: number;
        /**
         * Status messages about upload process.
         */
        messages: string | undefined;
    }): VNode[];
    /**
     * Custom content when there is no selected file.
     */
    empty(): VNode[];
    /**
     * Custom choose icon template.
     */
    chooseicon(): VNode[];
    /**
     * Custom upload icon template.
     */
    uploadicon(): VNode[];
    /**
     * Custom cancel icon template.
     */
    cancelicon(): VNode[];
    /**
     * Custom remove icon template for each file.
     * @param {Object} scope - fileremoveicon slot's params.
     */
    fileremoveicon(scope: {
        /**
         * File to upload.
         */
        file: File;
        /**
         * The index of file
         */
        index: number;
    }): VNode[];
}

export interface FileUploadEmits {
    /**
     * Callback to invoke when files are selected.
     * @param {FileUploadSelectEvent} event - Custom select event.
     */
    select(event: FileUploadSelectEvent): void;
    /**
     * Callback to invoke before file upload begins to customize the request such as post parameters before the files.
     * @param {FileUploadBeforeUploadEvent} event - Custom before upload event.
     */
    'before-upload'(event: FileUploadBeforeUploadEvent): void;
    /**
     * Callback to invoke when files are being uploaded.
     * @param {FileUploadProgressEvent} event - Custom progress event.
     */
    progress(event: FileUploadProgressEvent): void;
    /**
     * Callback to invoke when file upload is complete.
     * @param {FileUploadUploadEvent} event - Custom upload event.
     */
    upload(event: FileUploadUploadEvent): void;
    /**
     * Callback to invoke to implement a custom upload.
     * @param {FileUploadUploaderEvent} event - Custom uploader event.
     */
    uploader(event: FileUploadUploaderEvent): void;
    /**
     * Callback to invoke if file upload fails.
     * @param {FileUploadErrorEvent} event - Custom error event.
     */
    error(event: FileUploadErrorEvent): void;
    /**
     * Callback to invoke before file send begins to customize the request such as adding headers.
     * @param {FileUploadBeforeSendEvent} event - Custom before send event.
     */
    'before-send'(event: FileUploadBeforeSendEvent): void;
    /**
     * Callback to invoke when files in queue are removed without uploading.
     */
    clear(): void;
    /**
     * Callback to invoke when a singe file is removed from the list.
     * @param {FileUploadRemoveEvent} event - Custom remove event.
     */
    remove(event: FileUploadRemoveEvent): void;
    /**
     * Callback to invoke when a single uploaded file is removed from the uploaded file list.
     * @param {FileUploadRemoveUploadedFile} event - Custom uploaded file remove event.
     */
    removeUploadedFile(event: FileUploadRemoveUploadedFile): void;
}

/**
 * **PrimeVue - FileUpload**
 *
 * _FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations._
 *
 * [Live Demo](https://www.primevue.org/fileupload/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 *
 */
declare class FileUpload extends ClassComponent<FileUploadProps, FileUploadSlots, FileUploadEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        FileUpload: GlobalComponentConstructor<FileUpload>;
    }
}

export default FileUpload;

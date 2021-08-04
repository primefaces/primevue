interface FileUploadProps {
    name?: string;
    url?: string;
    mode?: string;
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
    auto?: boolean;
    maxFileSize?: number;
    invalidFileSizeMessage?: string;
    invalidFileLimitMessage?: string;
    invalidFileTypeMessage?: string;
    fileLimit?: number;
    withCredentials?: boolean;
    previewWidth?: number;
    chooseLabel?: string;
    uploadLabel?: string;
    cancelLabel?: string;
    customUpload?: boolean;
    showUploadButton?: boolean;
    showCancelButton?: boolean;
    style?: any;
    class?: string;
}

declare class FileUpload {
    $props: FileUploadProps;
    $emit(eventName: 'select', e: { originalEvent: Event, files: any }): this;
    $emit(eventName: 'before-upload', e: { xhr: XMLHttpRequest, formData: any }): this;
    $emit(eventName: 'progress', e: { originalEvent: Event, progress: any }): this;
    $emit(eventName: 'upload', e: { xhr: XMLHttpRequest, files: any }): this;
    $emit(eventName: 'uploader', e: { files: any }): this;
    $emit(eventName: 'error', e: { xhr: XMLHttpRequest, files: any }): this;
    $emit(eventName: 'before-send', e: { xhr: XMLHttpRequest, formData: any }): this;
    $emit(eventName: 'clear'): this;
    $emit(eventName: 'remove', e: { file: File, files: File[] }): this;
}

export default FileUpload;

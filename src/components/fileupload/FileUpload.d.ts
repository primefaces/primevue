import Vue from 'vue';

declare class FileUpload extends Vue {
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
    fileLimit?: number;
    withCredentials?: boolean;
    previewWidth?: number;
    chooseLabel?: string;
    uploadLabel?: string;
    cancelLabel?: string;
    customUpload?: boolean;
    $emit(eventName: 'select', e: { originalEvent: Event, files: any }): this;
    $emit(eventName: 'before-upload', e: { xhr: XMLHttpRequest, formData: any }): this;
    $emit(eventName: 'progress', e: { originalEvent: Event, progress: any }): this;
    $emit(eventName: 'upload', e: { originalEvent: Event, files: any }): this;
    $emit(eventName: 'error', e: { originalEvent: Event, files: any }): this;
    $emit(eventName: 'before-send', e: { xhr: XMLHttpRequest, formData: any }): this;
    $emit(eventName: 'clear'): this;
}

export default FileUpload;
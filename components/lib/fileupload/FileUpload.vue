<template>
    <div v-if="isAdvanced" class="p-fileupload p-fileupload-advanced p-component" v-bind="ptm('root')">
        <input ref="fileInput" type="file" @change="onFileSelect" :multiple="multiple" :accept="accept" :disabled="chooseDisabled" v-bind="ptm('input')" />
        <div class="p-fileupload-buttonbar" v-bind="ptm('buttonbar')">
            <slot name="header" :files="files" :uploadedFiles="uploadedFiles" :chooseCallback="choose" :uploadCallback="upload" :clearCallback="clear">
                <span v-ripple :class="advancedChooseButtonClass" :style="style" @click="choose" @keydown.enter="choose" @focus="onFocus" @blur="onBlur" tabindex="0" v-bind="ptm('chooseButton')">
                    <slot name="chooseicon">
                        <component :is="chooseIcon ? 'span' : 'PlusIcon'" :class="['p-button-icon p-button-icon-left', chooseIcon]" aria-hidden="true" v-bind="ptm('chooseIcon')" />
                    </slot>
                    <span class="p-button-label" v-bind="ptm('chooseButtonLabel')">{{ chooseButtonLabel }}</span>
                </span>
                <FileUploadButton v-if="showUploadButton" :label="uploadButtonLabel" @click="upload" :disabled="uploadDisabled" :pt="ptm('uploadButton')">
                    <template #icon="iconProps">
                        <slot name="uploadicon">
                            <component :is="uploadIcon ? 'span' : 'UploadIcon'" :class="[iconProps.class, uploadIcon]" aria-hidden="true" v-bind="ptm('uploadButton')['icon']" />
                        </slot>
                    </template>
                </FileUploadButton>
                <FileUploadButton v-if="showCancelButton" :label="cancelButtonLabel" @click="clear" :disabled="cancelDisabled" :pt="ptm('cancelButton')">
                    <template #icon="iconProps">
                        <slot name="cancelicon">
                            <component :is="cancelIcon ? 'span' : 'TimesIcon'" :class="[iconProps.class, cancelIcon]" aria-hidden="true" v-bind="ptm('cancelButton')['icon']" />
                        </slot>
                    </template>
                </FileUploadButton>
            </slot>
        </div>
        <div ref="content" class="p-fileupload-content" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop" v-bind="ptm('content')">
            <slot name="content" :files="files" :uploadedFiles="uploadedFiles" :removeUploadedFileCallback="removeUploadedFile" :removeFileCallback="remove" :progress="progress" :messages="messages">
                <FileUploadProgressBar v-if="hasFiles" :value="progress" :showValue="false" :pt="ptm('progressbar')" />
                <FileUploadMessage v-for="msg of messages" :key="msg" severity="error" @close="onMessageClose" :pt="ptm('message')">{{ msg }}</FileUploadMessage>
                <FileContent v-if="hasFiles" :files="files" @remove="remove" :badgeValue="pendingLabel" :previewWidth="previewWidth" :templates="$slots" :pt="pt" />
                <FileContent :files="uploadedFiles" @remove="removeUploadedFile" :badgeValue="completedLabel" badgeSeverity="success" :previewWidth="previewWidth" :templates="$slots" :pt="pt" />
            </slot>
            <div v-if="$slots.empty && !hasFiles && !hasUploadedFiles" class="p-fileupload-empty" v-bind="ptm('empty')">
                <slot name="empty"></slot>
            </div>
        </div>
    </div>
    <div v-else-if="isBasic" class="p-fileupload p-fileupload-basic p-component" v-bind="ptm('root')">
        <FileUploadMessage v-for="msg of messages" :key="msg" severity="error" @close="onMessageClose" :pt="ptm('messages')">{{ msg }}</FileUploadMessage>
        <span v-ripple :class="basicChooseButtonClass" :style="style" @mouseup="onBasicUploaderClick" @keydown.enter="choose" @focus="onFocus" @blur="onBlur" tabindex="0" v-bind="ptm('basicButton')">
            <slot v-if="!hasFiles || auto" name="uploadicon">
                <component :is="uploadIcon ? 'span' : 'UploadIcon'" :class="['p-button-icon p-button-icon-left', uploadIcon]" aria-hidden="true" v-bind="ptm('uploadIcon')" />
            </slot>
            <slot v-else name="chooseicon">
                <component :is="chooseIcon ? 'span' : 'PlusIcon'" :class="['p-button-icon p-button-icon-left', chooseIcon]" aria-hidden="true" v-bind="ptm('chooseIcon')" />
            </slot>
            <span class="p-button-label" v-bind="ptm('label')">{{ basicChooseButtonLabel }}</span>
            <input v-if="!hasFiles" ref="fileInput" type="file" :accept="accept" :disabled="disabled" :multiple="multiple" @change="onFileSelect" @focus="onFocus" @blur="onBlur" v-bind="ptm('input')" />
        </span>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import PlusIcon from 'primevue/icons/plus';
import TimesIcon from 'primevue/icons/times';
import UploadIcon from 'primevue/icons/upload';
import Message from 'primevue/message';
import ProgressBar from 'primevue/progressbar';
import Ripple from 'primevue/ripple';
import { DomHandler } from 'primevue/utils';
import FileContent from './FileContent.vue';

export default {
    name: 'FileUpload',
    extends: BaseComponent,
    emits: ['select', 'uploader', 'before-upload', 'progress', 'upload', 'error', 'before-send', 'clear', 'remove', 'remove-uploaded-file'],
    props: {
        name: {
            type: String,
            default: null
        },
        url: {
            type: String,
            default: null
        },
        mode: {
            type: String,
            default: 'advanced'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        accept: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        auto: {
            type: Boolean,
            default: false
        },
        maxFileSize: {
            type: Number,
            default: null
        },
        invalidFileSizeMessage: {
            type: String,
            default: '{0}: Invalid file size, file size should be smaller than {1}.'
        },
        invalidFileTypeMessage: {
            type: String,
            default: '{0}: Invalid file type, allowed file types: {1}.'
        },
        fileLimit: {
            type: Number,
            default: null
        },
        invalidFileLimitMessage: {
            type: String,
            default: 'Maximum number of files exceeded, limit is {0} at most.'
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        previewWidth: {
            type: Number,
            default: 50
        },
        chooseLabel: {
            type: String,
            default: null
        },
        uploadLabel: {
            type: String,
            default: null
        },
        cancelLabel: {
            type: String,
            default: null
        },
        customUpload: {
            type: Boolean,
            default: false
        },
        showUploadButton: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: true
        },
        chooseIcon: {
            type: String,
            default: undefined
        },
        uploadIcon: {
            type: String,
            default: undefined
        },
        cancelIcon: {
            type: String,
            default: undefined
        },
        style: null,
        class: null
    },
    duplicateIEEvent: false,
    data() {
        return {
            uploadedFileCount: 0,
            files: [],
            messages: [],
            focused: false,
            progress: null,
            uploadedFiles: []
        };
    },
    methods: {
        onFileSelect(event) {
            if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
                this.duplicateIEEvent = false;

                return;
            }

            this.messages = [];
            this.files = this.files || [];
            let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

            for (let file of files) {
                if (!this.isFileSelected(file)) {
                    if (this.validate(file)) {
                        if (this.isImage(file)) {
                            file.objectURL = window.URL.createObjectURL(file);
                        }

                        this.files.push(file);
                    }
                }
            }

            this.$emit('select', { originalEvent: event, files: this.files });

            if (this.fileLimit) {
                this.checkFileLimit();
            }

            if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
                this.upload();
            }

            if (event.type !== 'drop' && this.isIE11()) {
                this.clearIEInput();
            } else {
                this.clearInputElement();
            }
        },
        choose() {
            this.$refs.fileInput.click();
        },
        upload() {
            if (this.customUpload) {
                if (this.fileLimit) {
                    this.uploadedFileCount += this.files.length;
                }

                this.$emit('uploader', { files: this.files });
                this.clear();
            } else {
                let xhr = new XMLHttpRequest();
                let formData = new FormData();

                this.$emit('before-upload', {
                    xhr: xhr,
                    formData: formData
                });

                for (let file of this.files) {
                    formData.append(this.name, file, file.name);
                }

                xhr.upload.addEventListener('progress', (event) => {
                    if (event.lengthComputable) {
                        this.progress = Math.round((event.loaded * 100) / event.total);
                    }

                    this.$emit('progress', {
                        originalEvent: event,
                        progress: this.progress
                    });
                });

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        this.progress = 0;

                        if (xhr.status >= 200 && xhr.status < 300) {
                            if (this.fileLimit) {
                                this.uploadedFileCount += this.files.length;
                            }

                            this.$emit('upload', {
                                xhr: xhr,
                                files: this.files
                            });
                        } else {
                            this.$emit('error', {
                                xhr: xhr,
                                files: this.files
                            });
                        }

                        this.uploadedFiles.push(...this.files);
                        this.clear();
                    }
                };

                xhr.open('POST', this.url, true);

                this.$emit('before-send', {
                    xhr: xhr,
                    formData: formData
                });

                xhr.withCredentials = this.withCredentials;

                xhr.send(formData);
            }
        },
        clear() {
            this.files = [];
            this.messages = null;
            this.$emit('clear');

            if (this.isAdvanced) {
                this.clearInputElement();
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        isFileSelected(file) {
            if (this.files && this.files.length) {
                for (let sFile of this.files) {
                    if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) return true;
                }
            }

            return false;
        },
        isIE11() {
            return !!window['MSInputMethodContext'] && !!document['documentMode'];
        },
        validate(file) {
            if (this.accept && !this.isFileTypeValid(file)) {
                this.messages.push(this.invalidFileTypeMessage.replace('{0}', file.name).replace('{1}', this.accept));

                return false;
            }

            if (this.maxFileSize && file.size > this.maxFileSize) {
                this.messages.push(this.invalidFileSizeMessage.replace('{0}', file.name).replace('{1}', this.formatSize(this.maxFileSize)));

                return false;
            }

            return true;
        },
        isFileTypeValid(file) {
            let acceptableTypes = this.accept.split(',').map((type) => type.trim());

            for (let type of acceptableTypes) {
                let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();

                if (acceptable) {
                    return true;
                }
            }

            return false;
        },
        getTypeClass(fileType) {
            return fileType.substring(0, fileType.indexOf('/'));
        },
        isWildcard(fileType) {
            return fileType.indexOf('*') !== -1;
        },
        getFileExtension(file) {
            return '.' + file.name.split('.').pop();
        },
        isImage(file) {
            return /^image\//.test(file.type);
        },
        onDragEnter(event) {
            if (!this.disabled) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
        onDragOver(event) {
            if (!this.disabled) {
                DomHandler.addClass(this.$refs.content, 'p-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();
            }
        },
        onDragLeave() {
            if (!this.disabled) {
                DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight');
            }
        },
        onDrop(event) {
            if (!this.disabled) {
                DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();

                const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
                const allowDrop = this.multiple || (files && files.length === 1);

                if (allowDrop) {
                    this.onFileSelect(event);
                }
            }
        },
        onBasicUploaderClick() {
            if (this.hasFiles) this.upload();
            else this.$refs.fileInput.click();
        },
        remove(index) {
            this.clearInputElement();
            let removedFile = this.files.splice(index, 1)[0];

            this.files = [...this.files];
            this.$emit('remove', {
                file: removedFile,
                files: this.files
            });
        },
        removeUploadedFile(index) {
            let removedFile = this.uploadedFiles.splice(index, 1)[0];

            this.uploadedFiles = [...this.uploadedFiles];
            this.$emit('remove-uploaded-file', {
                file: removedFile,
                files: this.uploadedFiles
            });
        },
        clearInputElement() {
            this.$refs.fileInput.value = '';
        },
        clearIEInput() {
            if (this.$refs.fileInput) {
                this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
                this.$refs.fileInput.value = '';
            }
        },
        formatSize(bytes) {
            if (bytes === 0) {
                return '0 B';
            }

            let k = 1000,
                dm = 3,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
        isFileLimitExceeded() {
            if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {
                this.focused = false;
            }

            return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
        },
        checkFileLimit() {
            if (this.isFileLimitExceeded()) {
                this.messages.push(this.invalidFileLimitMessage.replace('{0}', this.fileLimit.toString()));
            }
        },
        onMessageClose() {
            this.messages = null;
        }
    },
    computed: {
        isAdvanced() {
            return this.mode === 'advanced';
        },
        isBasic() {
            return this.mode === 'basic';
        },
        advancedChooseButtonClass() {
            return [
                'p-button p-component p-fileupload-choose',
                this.class,
                {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        basicChooseButtonClass() {
            return [
                'p-button p-component p-fileupload-choose',
                this.class,
                {
                    'p-fileupload-choose-selected': this.hasFiles,
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        basicChooseButtonLabel() {
            return this.auto ? this.chooseButtonLabel : this.hasFiles ? this.files.map((f) => f.name).join(', ') : this.chooseButtonLabel;
        },
        hasFiles() {
            return this.files && this.files.length > 0;
        },
        hasUploadedFiles() {
            return this.uploadedFiles && this.uploadedFiles.length > 0;
        },
        chooseDisabled() {
            return this.disabled || (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount);
        },
        uploadDisabled() {
            return this.disabled || !this.hasFiles || (this.fileLimit && this.fileLimit < this.files.length);
        },
        cancelDisabled() {
            return this.disabled || !this.hasFiles;
        },
        chooseButtonLabel() {
            return this.chooseLabel || this.$primevue.config.locale.choose;
        },
        uploadButtonLabel() {
            return this.uploadLabel || this.$primevue.config.locale.upload;
        },
        cancelButtonLabel() {
            return this.cancelLabel || this.$primevue.config.locale.cancel;
        },
        completedLabel() {
            return this.$primevue.config.locale.completed;
        },
        pendingLabel() {
            return this.$primevue.config.locale.pending;
        }
    },
    components: {
        FileUploadButton: Button,
        FileUploadProgressBar: ProgressBar,
        FileUploadMessage: Message,
        FileContent,
        PlusIcon,
        UploadIcon,
        TimesIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

<style>
.p-fileupload-content {
    position: relative;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.p-button.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
}

.p-fileupload > input[type='file'],
.p-fileupload-basic input[type='file'] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}
</style>

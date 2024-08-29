<template>
    <div v-if="isAdvanced" :class="cx('root')" v-bind="ptmi('root')">
        <input ref="fileInput" type="file" @change="onFileSelect" :multiple="multiple" :accept="accept" :disabled="chooseDisabled" v-bind="ptm('input')" />
        <div :class="cx('header')" v-bind="ptm('header')">
            <slot name="header" :files="files" :uploadedFiles="uploadedFiles" :chooseCallback="choose" :uploadCallback="uploader" :clearCallback="clear">
                <Button
                    :label="chooseButtonLabel"
                    :class="chooseButtonClass"
                    :style="style"
                    :disabled="disabled"
                    :unstyled="unstyled"
                    @click="choose"
                    @keydown.enter="choose"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-bind="chooseButtonProps"
                    :pt="ptm('pcChooseButton')"
                >
                    <template #icon="iconProps">
                        <slot name="chooseicon">
                            <component :is="chooseIcon ? 'span' : 'PlusIcon'" :class="[iconProps.class, chooseIcon]" aria-hidden="true" v-bind="ptm('pcChooseButton')['icon']" />
                        </slot>
                    </template>
                </Button>
                <Button v-if="showUploadButton" :class="cx('pcUploadButton')" :label="uploadButtonLabel" @click="uploader" :disabled="uploadDisabled" :unstyled="unstyled" v-bind="uploadButtonProps" :pt="ptm('pcUploadButton')">
                    <template #icon="iconProps">
                        <slot name="uploadicon">
                            <component :is="uploadIcon ? 'span' : 'UploadIcon'" :class="[iconProps.class, uploadIcon]" aria-hidden="true" v-bind="ptm('pcUploadButton')['icon']" data-pc-section="uploadbuttonicon" />
                        </slot>
                    </template>
                </Button>
                <Button v-if="showCancelButton" :class="cx('pcCancelButton')" :label="cancelButtonLabel" @click="clear" :disabled="cancelDisabled" :unstyled="unstyled" v-bind="cancelButtonProps" :pt="ptm('pcCancelButton')">
                    <template #icon="iconProps">
                        <slot name="cancelicon">
                            <component :is="cancelIcon ? 'span' : 'TimesIcon'" :class="[iconProps.class, cancelIcon]" aria-hidden="true" v-bind="ptm('pcCancelButton')['icon']" data-pc-section="cancelbuttonicon" />
                        </slot>
                    </template>
                </Button>
            </slot>
        </div>
        <div ref="content" :class="cx('content')" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop" v-bind="ptm('content')" :data-p-highlight="false">
            <slot name="content" :files="files" :uploadedFiles="uploadedFiles" :removeUploadedFileCallback="removeUploadedFile" :removeFileCallback="remove" :progress="progress" :messages="messages">
                <ProgressBar v-if="hasFiles" :value="progress" :showValue="false" :unstyled="unstyled" :pt="ptm('pcProgressbar')" />
                <Message v-for="msg of messages" :key="msg" severity="error" @close="onMessageClose" :unstyled="unstyled" :pt="ptm('pcMessage')">{{ msg }}</Message>
                <div v-if="hasFiles" :class="cx('fileList')">
                    <FileContent :files="files" @remove="remove" :badgeValue="pendingLabel" :previewWidth="previewWidth" :templates="$slots" :unstyled="unstyled" :pt="pt" />
                </div>
                <div v-if="hasUploadedFiles" :class="cx('fileList')">
                    <FileContent :files="uploadedFiles" @remove="removeUploadedFile" :badgeValue="completedLabel" badgeSeverity="success" :previewWidth="previewWidth" :templates="$slots" :unstyled="unstyled" :pt="pt" />
                </div>
            </slot>
            <div v-if="$slots.empty && !hasFiles && !hasUploadedFiles" v-bind="ptm('empty')">
                <slot name="empty"></slot>
            </div>
        </div>
    </div>
    <div v-else-if="isBasic" :class="cx('root')" v-bind="ptmi('root')">
        <Message v-for="msg of messages" :key="msg" severity="error" @close="onMessageClose" :unstyled="unstyled" :pt="ptm('pcMessage')">{{ msg }}</Message>
        <Button
            :label="chooseButtonLabel"
            :class="chooseButtonClass"
            :style="style"
            :disabled="disabled"
            :unstyled="unstyled"
            @mouseup="onBasicUploaderClick"
            @keydown.enter="choose"
            @focus="onFocus"
            @blur="onBlur"
            v-bind="chooseButtonProps"
            :pt="ptm('pcChooseButton')"
        >
            <template #icon="iconProps">
                <slot name="chooseicon">
                    <component :is="chooseIcon ? 'span' : 'PlusIcon'" :class="[iconProps.class, chooseIcon]" aria-hidden="true" v-bind="ptm('pcChooseButton')['icon']" />
                </slot>
            </template>
        </Button>
        <slot v-if="!auto" name="filelabel" :class="cx('filelabel')">
            <span :class="cx('filelabel')" :files="files">
                {{ basicFileChosenLabel }}
            </span>
        </slot>
        <input ref="fileInput" type="file" :accept="accept" :disabled="disabled" :multiple="multiple" @change="onFileSelect" @focus="onFocus" @blur="onBlur" v-bind="ptm('input')" />
    </div>
</template>

<script>
import { addClass, removeClass } from '@primeuix/utils/dom';
import PlusIcon from '@primevue/icons/plus';
import TimesIcon from '@primevue/icons/times';
import UploadIcon from '@primevue/icons/upload';
import Button from 'primevue/button';
import Message from 'primevue/message';
import ProgressBar from 'primevue/progressbar';
import Ripple from 'primevue/ripple';
import BaseFileUpload from './BaseFileUpload.vue';
import FileContent from './FileContent.vue';

export default {
    name: 'FileUpload',
    extends: BaseFileUpload,
    inheritAttrs: false,
    emits: ['select', 'uploader', 'before-upload', 'progress', 'upload', 'error', 'before-send', 'clear', 'remove', 'remove-uploaded-file'],
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
        upload() {
            if (this.hasFiles) this.uploader();
        },
        onBasicUploaderClick(event) {
            if (event.button === 0) this.$refs.fileInput.click();
        },
        onFileSelect(event) {
            if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
                this.duplicateIEEvent = false;

                return;
            }

            if (this.isBasic && this.hasFiles) {
                this.files = [];
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
                this.uploader();
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
        uploader() {
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
                !this.isUnstyled && addClass(this.$refs.content, 'p-fileupload-highlight');
                this.$refs.content.setAttribute('data-p-highlight', true);
                event.stopPropagation();
                event.preventDefault();
            }
        },
        onDragLeave() {
            if (!this.disabled) {
                !this.isUnstyled && removeClass(this.$refs.content, 'p-fileupload-highlight');
                this.$refs.content.setAttribute('data-p-highlight', false);
            }
        },
        onDrop(event) {
            if (!this.disabled) {
                !this.isUnstyled && removeClass(this.$refs.content, 'p-fileupload-highlight');
                this.$refs.content.setAttribute('data-p-highlight', false);
                event.stopPropagation();
                event.preventDefault();

                const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
                const allowDrop = this.multiple || (files && files.length === 1);

                if (allowDrop) {
                    this.onFileSelect(event);
                }
            }
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
            const k = 1024;
            const dm = 3;
            const sizes = this.$primevue.config.locale?.fileSizeTypes || ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

            if (bytes === 0) {
                return `0 ${sizes[0]}`;
            }

            const i = Math.floor(Math.log(bytes) / Math.log(k));
            const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

            return `${formattedSize} ${sizes[i]}`;
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
        chooseButtonClass() {
            return [this.cx('pcChooseButton'), this.class];
        },
        basicFileChosenLabel() {
            if (this.auto) return this.chooseButtonLabel;
            else if (this.hasFiles) {
                if (this.files && this.files.length === 1) return this.files[0].name;

                return this.$primevue.config.locale?.fileChosenMessage?.replace('{0}', this.files.length);
            }

            return this.$primevue.config.locale?.noFileChosenMessage || '';
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
        Button,
        ProgressBar,
        Message,
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

<template>
    <div class="p-fileupload p-fileupload-advanced p-component" v-if="isAdvanced">
        <div class="p-fileupload-buttonbar">
            <span :class="advancedChooseButtonClass" @click="choose" @keydown.enter="choose" @focus="onFocus" @blur="onBlur" v-ripple tabindex="0">
                <input ref="fileInput" type="file" @change="onFileSelect" :multiple="multiple" :accept="accept" :disabled="chooseDisabled" />
                <span class="p-button-icon p-button-icon-left pi pi-fw pi-plus"></span>
                <span class="p-button-label">{{chooseLabel}}</span>
            </span>
            <FileUploadButton :label="uploadLabel" icon="pi pi-upload" @click="upload" :disabled="uploadDisabled" />
            <FileUploadButton :label="cancelLabel" icon="pi pi-times" @click="clear" :disabled="cancelDisabled" />
        </div>
        <div ref="content" class="p-fileupload-content" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
            <FileUploadProgressBar :value="progress" v-if="hasFiles" />
            <FileUploadMessage v-for="msg of messages" severity="error" :key="msg">{{msg}}</FileUploadMessage>
            <div class="p-fileupload-files" v-if="hasFiles">
                <div class="p-fileupload-row" v-for="(file, index) of files" :key="file.name + file.type + file.size">
                    <div>
                        <img v-if="isImage(file)" role="presentation" :alt="file.name" :src="file.objectURL" :width="previewWidth" />
                    </div>
                    <div>{{file.name}}</div>
                    <div>{{formatSize(file.size)}}</div>
                    <div>
                        <FileUploadButton type="button" icon="pi pi-times" @click="remove(index)" />
                    </div>
                </div>
            </div>
            <div class="p-fileupload-empty" v-if="$scopedSlots.empty && !hasFiles">
                <slot name="empty"></slot>
            </div>
        </div>
    </div>
    <div class="p-fileupload p-fileupload-basic p-component" v-else-if="isBasic">
        <FileUploadMessage v-for="msg of messages" severity="error" :key="msg">{{msg}}</FileUploadMessage>
        <span :class="basicChooseButtonClass" @mouseup="onBasicUploaderClick"  @keydown.enter="choose" @focus="onFocus" @blur="onBlur" v-ripple tabindex="0" >
            <span :class="basicChooseButtonIconClass"></span>
            <span class="p-button-label">{{basicChooseButtonLabel}}</span>
            <input ref="fileInput" type="file" :accept="accept" :disabled="disabled" @change="onFileSelect" @focus="onFocus" @blur="onBlur" v-if="!hasFiles" />
        </span>
    </div>
</template>

<script>
import Button from '../button/Button';
import ProgressBar from '../progressbar/ProgressBar';
import Message from '../message/Message';
import DomHandler from '../utils/DomHandler';
import Ripple from '../ripple/Ripple';

export default {
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
            default: 'Choose'
        },
        uploadLabel: {
            type: String,
            default: 'Upload'
        },
        cancelLabel: {
            type: String,
            default: 'Cancel'
        },
        customUpload: {
            type: Boolean,
            default: false
        }
    },
    duplicateIEEvent: false,
    data() {
        return {
            uploadedFileCount: 0,
            files: [],
            messages: null,
            focused: false,
            progress: null
        }
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

            this.$emit('select', {originalEvent: event, files: files});

            if (this.fileLimit) {
                this.checkFileLimit();
            }

            if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
                this.upload();
            }

            if (event.type !== 'drop' && this.isIE11()) {
                this.clearIEInput();
            }
            else {
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

                this.$emit('uploader', {files: this.files});
            }
            else {
                let xhr = new XMLHttpRequest();
                let formData = new FormData();

                this.$emit('before-upload', {
                    'xhr': xhr,
                    'formData': formData
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
                        }
                        else {
                            this.$emit('error', {
                                xhr: xhr,
                                files: this.files
                            });
                        }

                        this.clear();
                    }
                };

                xhr.open('POST', this.url, true);

                this.$emit('before-send', {
                    'xhr': xhr,
                    'formData': formData
                });

                xhr.withCredentials = this.withCredentials;

                xhr.send(formData);
            }
        },
        clear() {
            this.files = [];
            this.messages = [];
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
                    if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size))
                        return true;
                }
            }

            return false;
        },
        isIE11() {
            return !!window['MSInputMethodContext'] && !!document['documentMode'];
        },
        validate(file) {
            if (this.maxFileSize && file.size > this.maxFileSize) {
                this.messages.push(this.invalidFileSizeMessage.replace('{0}', file.name).replace('{1}', this.formatSize(this.maxFileSize)));
                return false;
            }

            return true;
        },
        onDragEnter(event) {
            if (!this.disabled) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
        onDragOver() {
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
        onDrop() {
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
            if (this.hasFiles)
                this.upload();
            else
                this.$refs.fileInput.click();
        },
        remove(index) {
            this.clearInputElement();
            this.files.splice(index, 1);
            this.files = [...this.files];
            if(this.files.length <= this.fileLimit) {
                this.messages = [];
            }
        },
        isImage(file) {
            return /^image\//.test(file.type);
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
            return ['p-button p-component p-fileupload-choose', {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        basicChooseButtonClass() {
            return ['p-button p-component p-fileupload-choose', {
                'p-fileupload-choose-selected': this.hasFiles,
                'p-disabled': this.disabled,
                'p-focus': this.focused
            }];
        },
        basicChooseButtonIconClass() {
            return ['p-button-icon p-button-icon-left pi', {
                'pi-plus': !this.hasFiles || this.auto,
                'pi-upload': this.hasFiles && !this.auto
            }];
        },
        basicChooseButtonLabel() {
            return this.auto ? this.chooseLabel : (this.hasFiles ? this.files[0].name : this.chooseLabel);
        },
        hasFiles() {
            return this.files && this.files.length > 0;
        },
        chooseDisabled() {
            return this.disabled || (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount);
        },
        uploadDisabled() {
            return this.disabled || !this.hasFiles;
        },
        cancelDisabled() {
            return this.disabled || !this.hasFiles;
        }
    },
    components: {
        'FileUploadButton': Button,
        'FileUploadProgressBar': ProgressBar,
        'FileUploadMessage': Message
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-fileupload-content {
    position: relative;
}

.p-fileupload-row {
    display: flex;
    align-items: center;
}

.p-fileupload-row > div {
    flex: 1 1 auto;
    width: 25%;
}

.p-fileupload-row > div:last-child {
    text-align: right;
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

.p-button.p-fileupload-choose input[type=file] {
    display: none;
}

.p-fileupload-choose.p-fileupload-choose-selected input[type=file] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}
</style>

<template>
    <div class="p-fileupload p-component" v-if="isAdvanced">
        <div class="p-fileupload-buttonbar">
            <span icon="pi pi-plus" :class="advancedChooseButtonClass">
                <input ref="fileInput" type="file" @change="onFileSelect" @focus="onFocus" @blur="onBlur"
                    :multiple="multiple" :accept="accept" :disabled="disabled" />
                <span class="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-plus"></span>
                <span class="p-button-text p-clickable">{{chooseLabel}}</span>
            </span>
            <FileUploadButton :label="uploadLabel" icon="pi pi-upload" @click="upload" :disabled="disabled || !hasFiles" />
            <FileUploadButton :label="cancelLabel" icon="pi pi-times" @click="clear" :disabled="disabled || !hasFiles" />
        </div>
        <div ref="content" class="p-fileupload-content" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop="onDrop">
            <FileUploadProgressBar :value="progress" v-if="hasFiles" />
            <FileUploadMessage v-for="msg of messages" severity="error" :key="msg">{{msg}}</FileUploadMessage>
            <div class="p-fileupload-files" v-if="hasFiles">
                <div class="p-fileupload-row" v-for="(file, index) of files" :key="file.name + file.type + file.size">
                    <div v-if="isImage(file)">
                        <img role="presentation" :alt="file.name" :src="file.objectURL" :width="previewWidth" />
                    </div>
                    <div>{{file.name}}</div>
                    <div>{{formatSize(file.size)}}</div>
                    <div>
                        <Button type="button" icon="pi pi-times" @click="remove(index)" />
                    </div>
                </div>
            </div>
            <div class="p-fileupload-empty" v-if="$scopedSlots.empty && !hasFiles">
                <slot name="empty">
                </slot>
            </div>
        </div>
    </div>
    <span :class="basicChooseButtonClass" @mouseup="onBasicUploaderClick" v-else-if="isBasic">
        <span :class="basicChooseButtonIconClass"></span>
        <span class="p-button-text p-clickable">{{basicChooseButtonLabel}}</span>
        <input ref="fileInput" type="file" :accept="accept" :disabled="disabled" @change="onFileSelect" @focus="onFocus" @blur="onBlur" v-if="!hasFiles" />
    </span>
</template>

<script>
import Button from '../button/Button';
import ProgressBar from '../progressbar/ProgressBar';
import Message from '../message/Message';
import DomHandler from '../utils/DomHandler';

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
        }
    },
    duplicateIEEvent: false,
    data() {
        return {
            files: null,
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

            if (this.auto && this.hasFiles) {
                this.upload();
            }

            if (event.type !== 'drop' && this.isIE11()) {
                this.clearIEInput();
            }
            else {
                this.clearInputElement();
            }
        },
        upload() {
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
        },
        clear() {
            this.files = null;
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
            console.log('enter');
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
            if (this.hasFiles) {
                this.upload();
            }
        },
        remove(index) {
            this.clearInputElement();
            this.files.splice(index, 1);
            this.files = [...this.files];
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
            return ['p-button p-fileupload-choose p-component p-button-text-icon-left', {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        basicChooseButtonClass() {
            return ['p-button p-fileupload-choose p-component p-button-text-icon-left', {
                'p-fileupload-choose-selected': this.hasFiles,
                'p-disabled': this.disabled,
                'p-focus': this.focused
            }];
        },
        basicChooseButtonIconClass() {
            return ['p-button-icon-left pi', {
                'pi-plus': !this.hasFiles || this.auto,
                'pi-upload': this.hasFiles && !this.auto
            }];
        },
        basicChooseButtonLabel() {
            return this.auto ? this.chooseLabel : (this.hasFiles ? this.files[0].name : this.chooseLabel);
        },
        hasFiles() {
            return this.files && this.files.length > 0;
        }
    },
    components: {
        'FileUploadButton': Button,
        'FileUploadProgressBar': ProgressBar,
        'FileUploadMessage': Message
    },
}
</script>

<style>
.p-fileupload-buttonbar .p-fileupload-choose.p-disabled input {
    cursor: default;
}

.p-fileupload-buttonbar {
    padding: .5em;
    border-bottom: 0 none;
}

.p-fileupload-buttonbar .p-button {
    vertical-align: middle;
    margin-right: .25em;
}

.p-fileupload-content {
    padding: 1em;
    position: relative;
    transition: border-color .3s;
}

.p-fileupload-content.p-fileupload-highlight {
    border-color: #156090;
}

.p-fileupload-files img {
    border: none;
}

.p-fileupload-files {
    display: table;
}

.p-fileupload-row {
    display: table-row;
}

.p-fileupload-row > div {
    display: table-cell;
    padding: .5em 1em;
    vertical-align: middle;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 1px;
    left: 0;
    height: .25em;
    border: 0 none;
}

.p-fileupload-content .p-progressbar-value {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0 none;
}

.p-button.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}

.p-button.p-fileupload-choose input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    opacity: 0;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    direction: ltr;
    cursor: pointer;
}

.p-fileupload-choose.p-fileupload-choose-selected input[type=file] {
    display: none;
}

.p-fluid .p-fileupload .p-button {
    width: auto;
}

.p-fluid .p-fileupload-content .p-button-icon-only {
    width: 2em;
}
</style>

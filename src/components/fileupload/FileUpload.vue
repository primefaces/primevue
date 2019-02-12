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
            <FileUploadMessage v-for="msg of messages" :severity="error" :key="msg">{{msg}}</FileUploadMessage>
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
        </div>
    </div>
</template>

<script>
import Button from '../button/Button';
import ProgressBar from '../progressbar/ProgressBar';
import Message from '../message/Message';

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
        multiple: {
            type: Boolean,
            default: false
        },
        invalidFileSizeMessage: {
            type: String,
            default: '{0}: Invalid file size, maximum upload size is {1}.'
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

            if (this.auto) {
                this.upload();
            }

            this.$emit('select', {originalEvent: event, files: files});            
            this.clearInputElement();
            
            if (this.mode === 'basic') {
                this.$refs.fileInput.style.display = 'none';
            }
        },
        upload() {
            this.messages = [];
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
            this.$emit('clear');
            this.clearInputElement();
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
        validate(file) {
            if (this.maxFileSize && file.size > this.maxFileSize) {
                this.messages.push[this.invalidFileSizeMessage.replace('{0}', file.name).replace('{0}', this.formatSize(this.maxFileSize))];
                return false;
            }
            
            return true;
        },
        onDragEnter() {

        },
        onDragLeave() {

        },
        onDragOver() {

        },
        onDrop() {

        },
        remove(index) {
            this.clearInputElement();
            this.state.files.slice(index, 1);
        },
        isImage(file) {
            return /^image\//.test(file.type);
        },
        clearInputElement() {
            this.$refs.fileInput.value = '';
            if (this.mode === 'basic') {
                this.$refs.fileInput.style.display = 'inline';
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

</style>

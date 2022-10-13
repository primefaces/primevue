<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FileUpload</h1>
                <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
                    <template #content>
                        <ul v-if="uploadedFiles && uploadedFiles[0]">
                            <li v-for="file of uploadedFiles[0]" :key="file">{{ file.name }} - {{ file.size }} bytes</li>
                        </ul>
                    </template>
                    <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                    </template>
                </FileUpload>

                <h5>Templating</h5>
                <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
                    <template #header="{ uploadDisabled, cancelDisabled, choose, upload, clear }">
                        <div class="flex justify-content-between align-items-center">
                            <div>
                                <button @click="choose()" class="p-button p-fileupload-choose p-component p-button-icon-only custom-choose-btn p-button-rounded p-button-outlined">
                                    <span class="p-button-icon p-button-icon-left p-clickable pi pi-fw pi-images"></span>
                                </button>
                                <button @click="upload()" type="button" class="p-button p-component custom-upload-btn p-button-success p-button-rounded p-button-outlined p-button-icon-only" :disabled="uploadDisabled">
                                    <span class="p-button-icon p-c pi pi-fw pi-cloud-upload"></span>
                                </button>
                                <button @click="onClearTemplatingUpload(clear)" type="button" class="p-button p-component custom-cancel-btn p-button-danger p-button-rounded p-button-outlined p-button-icon-only" :disabled="cancelDisabled">
                                    <span class="p-button-icon p-c pi pi-fw pi-times"></span>
                                </button>
                            </div>
                            <ProgressBar v-if="totalSizePercent > 100" :value="100" class="custom-progress-bar" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}B / 1Mb</ProgressBar>
                            <ProgressBar v-else-if="totalSizePercent <= 100 && totalSizePercent !== 0" :value="totalSizePercent" style="width: 300px; height: 20px; margin-left: auto">{{ totalSize }}B / 1Mb</ProgressBar>
                        </div>
                    </template>
                    <template #fileContent="{ files, uploadedFiles, onUploadedFileRemove, onFileRemove }">
                        <div v-if="files.length > 0">
                            <h5>Pending</h5>
                            <div class="grid p-5">
                                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border align-items-center">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                                    </div>

                                    <div class="mt-2 flex align-content-center">
                                        <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                                    </div>
                                    <div class="mt-3">{{ formatSize(file.size) }}</div>
                                    <Badge value="Pending" class="mt-3" severity="warning" />
                                    <div class="mt-3">
                                        <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, onFileRemove, index)" class="p-button-text p-button-secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="uploadedFiles.length > 0">
                            <h5>Completed</h5>
                            <div class="grid p-5">
                                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="col-3 mx-3 card flex flex-column border-1 surface-border align-items-center">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
                                    </div>
                                    <div class="mt-2 flex align-content-center">
                                        <span v-tooltip="file.name" class="fileinput-file-name">{{ file.name }}</span>
                                    </div>
                                    <div class="mt-3">{{ formatSize(file.size) }}</div>
                                    <Badge value="Completed" class="mt-3" severity="success" />

                                    <div class="mt-3">
                                        <Button icon="pi pi-times" @click="onUploadedFileRemove(index)" class="p-button-text p-button-secondary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #empty>
                        <div class="flex align-items-center justify-content-center flex-column">
                            <i class="pi pi-cloud-upload border-1 border-circle border-solid surface-border p-5 text-8xl text-500" />
                            <p class="mt-4">Drag and drop files to here to upload.</p>
                        </div>
                    </template>
                </FileUpload>

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
            </div>
        </div>

        <FileUploadDoc />
    </div>
</template>

<script>
import FileUploadDoc from './FileUploadDoc';
export default {
    data() {
        return {
            uploadedFiles: [],
            files: [],
            totalSize: 0,
            totalSizePercent: 0
        };
    },
    methods: {
        onRemoveTemplatingFile(file, onFileRemove, index) {
            onFileRemove(index);
            this.totalSize -= parseInt(this.formatSize(file.size));
            this.totalSizePercent = this.totalSize / 10;
        },
        onClearTemplatingUpload(clear) {
            clear();
            this.totalSize = 0;
            this.totalSizePercent = 0;
        },
        onSelectedFiles(event) {
            this.files = event.files;
            this.files.forEach((file) => {
                this.totalSize += parseInt(this.formatSize(file.size));
            });

            this.totalSizePercent = this.totalSize / 10;
        },
        onAdvancedUpload() {
            this.totalSize = 0;
            this.totalSizePercent = 0;
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
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
    components: {
        FileUploadDoc: FileUploadDoc
    }
};
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
.fileinput-file-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
@media (max-width: 1500px) {
    .fileinput-file-name {
        width: 100px;
    }
}
::v-deep(.custom-progress-bar) {
    .p-progressbar-value {
        background-color: #f44336;
    }
}
</style>

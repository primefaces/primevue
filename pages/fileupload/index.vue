<template>
    <div>
        <Head>
            <Title>Vue Upload Component</Title>
            <Meta name="description" content="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations." />
        </Head>

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
                    <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                    </template>
                </FileUpload>

                <h5>Templating</h5>
                <FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
                    <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                            <div class="flex gap-2">
                                <Button @click="chooseCallback()" icon="pi pi-images" class="p-button-rounded"></Button>
                                <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" class="p-button-rounded p-button-success" :disabled="!files || files.length === 0"></Button>
                                <Button @click="clearCallback()" icon="pi pi-times" class="p-button-rounded p-button-danger" :disabled="!files || files.length === 0"></Button>
                            </div>
                            <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
                                ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                            >
                        </div>
                    </template>
                    <template #content="{ files, uploadedFiles, removeUploadedFileCallback, fileRemoveCallback }">
                        <div v-if="files.length > 0">
                            <h5>Pending</h5>
                            <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                                    </div>
                                    <span class="font-semibold">{{ file.name }}</span>
                                    <div>{{ formatSize(file.size) }}</div>
                                    <Badge value="Pending" severity="warning" />
                                    <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, fileRemoveCallback, index)" class="p-button-outlined p-button-danger p-button-rounded" />
                                </div>
                            </div>
                        </div>

                        <div v-if="uploadedFiles.length > 0">
                            <h5>Completed</h5>
                            <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                                    </div>
                                    <span class="font-semibold">{{ file.name }}</span>
                                    <div>{{ formatSize(file.size) }}</div>
                                    <Badge value="Completed" class="mt-3" severity="success" />
                                    <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" class="p-button-outlined p-button-danger p-button-rounded" />
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #empty>
                        <div class="flex align-items-center justify-content-center flex-column">
                            <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                            <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
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
        onRemoveTemplatingFile(file, fileRemoveCallback, index) {
            fileRemoveCallback(index);
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
        },
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        uploadEvent(callback) {
            this.totalSizePercent = this.totalSize / 10;
            callback();
        },
        onTemplatedUpload() {
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
::v-deep(.custom-progress-bar) {
    .p-progressbar-value {
        background-color: var(--red-500);
    }
}
</style>

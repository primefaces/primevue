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
                <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @clear="onClearUploadFiles">
                    <template #content>
                        <ul v-if="uploadedFiles && uploadedFiles[0]">
                            <li v-for="file of uploadedFiles[0]" :key="file">{{ file.name }} - {{ file.size }} bytes</li>
                        </ul>
                    </template>
                    <template #empty>
                        <p>Drag and drop files to here to upload.</p>
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
            uploadedFiles: []
        };
    },
    methods: {
        onAdvancedUpload(event) {
            this.uploadedFiles.push(event.files);
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        onClearUploadFiles() {
            this.uploadedFiles = [];
            this.$toast.add({ severity: 'warn', summary: 'Warning', detail: 'Files Removed', life: 3000 });
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
</style>

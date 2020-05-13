<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FileUpload</h1>
                <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3>Advanced</h3>
            <FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000">
                <template #empty>
                    <p>Drag and drop files to here to upload.</p>
                </template>
            </FileUpload>

            <h3>Basic</h3>
            <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />

            <h3>Basic with Auto</h3>
            <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
        </div>

        <FileUploadDoc/>
    </div>
</template>

<script>
import FileUploadDoc from './FileUploadDoc';

export default {
    methods: {
        onUpload() {
            this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
        }
    },
    components: {
        'FileUploadDoc': FileUploadDoc
    }
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>
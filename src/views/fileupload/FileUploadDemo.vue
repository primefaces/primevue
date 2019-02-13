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
            <FileUpload name="demo[]" url="http://192.168.1.110:4000/upload" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" />

            <h3>Basic</h3>
            <FileUpload mode="basic" name="demo[]" url="http://192.168.1.110:4000/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
            
            <h3>Basic with Auto</h3>
            <FileUpload mode="basic" name="demo[]" url="http://192.168.1.110:4000/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onUpload() {
            this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
        }
    }
}
</script>
<template>
    <DocSectionText v-bind="$attrs">
        <p>FileUpload basic <i>mode</i> provides a simpler UI as an alternative to default advanced mode.</p>
    </DocSectionText>
    <div class="card flex flex-col gap-6 items-center justify-center">
        <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
        <Button label="Upload" @click="upload" severity="secondary" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
<Button label="Upload" @click="upload" severity="secondary" />
`,
                options: `
<template>
    <div class="card flex flex-col gap-6 items-center justify-center">
        <Toast />
        <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
        <Button label="Upload" @click="upload" severity="secondary" />
    </div>
</template>

<script>
export default {
    methods: {
        upload() {
            this.$refs.fileupload.upload();
        },
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col gap-6 items-center justify-center">
        <Toast />
        <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
        <Button label="Upload" @click="upload" severity="secondary" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();
const fileupload = ref();

const upload = () => {
    fileupload.value.upload();
};

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        upload() {
            this.$refs.fileupload.upload();
        },
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
</script>

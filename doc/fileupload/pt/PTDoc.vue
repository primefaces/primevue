<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card">
        <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
            :pt="{
                content: { class: 'surface-ground' }
            }"
        >
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<FileUpload
    name="demo[]"
    url="./upload.php"
    @upload="onAdvancedUpload($event)"
    :multiple="true"
    accept="image/*"
    :maxFileSize="1000000"
    :pt="{
        content: { class: 'surface-ground' }
    }"
>
    <template #empty>
        <p>Drag and drop files to here to upload.</p>
    </template>
</FileUpload>
`,
                options: `
<template>
    <div class="card">
        <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
            :pt="{
                content: { class: 'surface-ground' }
            }"
        >
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
        <Toast />
    </div>
</template>

<script>
export default {
    methods: {
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
            :pt="{
                content: { class: 'surface-ground' }
            }"
        >
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
</script>

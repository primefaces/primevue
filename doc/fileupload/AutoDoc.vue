<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>auto</i> property is enabled, a file gets uploaded instantly after selection.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
    </div>
</template>

<script>
export default {
    methods: {
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
</script>

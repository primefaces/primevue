<template>
    <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="p-fileupload-file">
        <img role="presentation" class="p-fileupload-file-thumbnail" :alt="file.name" :src="file.objectURL" :width="previewWidth" />
        <div class="p-fileupload-file-details">
            <div class="p-fileupload-file-name">{{ file.name }}</div>
            <span class="p-fileupload-file-size">{{ formatSize(file.size) }}</span>
            <FileUploadBadge :value="badgeValue" class="p-fileupload-file-badge" :severity="badgeSeverity" />
        </div>
        <div class="p-fileupload-file-actions">
            <FileUploadButton icon="pi pi-times" @click="$emit('remove', index)" class="p-fileupload-file-remove p-button-text p-button-danger p-button-rounded"></FileUploadButton>
        </div>
    </div>
</template>

<script>
import Badge from 'primevue/badge';
import Button from 'primevue/button';

export default {
    emits: ['remove'],
    props: {
        files: {
            type: Array,
            default: () => []
        },
        badgeSeverity: {
            type: String,
            default: 'warning'
        },
        badgeValue: {
            type: String,
            default: null
        },
        previewWidth: {
            type: Number,
            default: 50
        }
    },
    methods: {
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
        FileUploadButton: Button,
        FileUploadBadge: Badge
    }
};
</script>

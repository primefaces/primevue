<template>
    <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card flex justify-content-between border-1 surface-border">
        <div class="align-self-center">
            <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
        </div>
        <div class="p-fileupload-content-body flex flex-column justify-content-between">
            <div>{{ file.name }}</div>
            <div class="flex">
                <div>{{ formatSize(file.size) }}</div>
                <Badge :value="badgeValue" class="ml-2" :severity="badgeSeverity" />
            </div>
        </div>
        <div class="align-self-center">
            <Button icon="pi pi-times" @click="$emit('remove', index)" class="p-button-text p-button-secondary" />
        </div>
    </div>
</template>

<script>
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
            default: 'Pending'
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
    }
};
</script>

<style scoped>
.p-fileupload-content-body {
    flex: 0.96;
}
</style>

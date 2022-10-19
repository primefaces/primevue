<template>
    <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="p-fileupload-content-container p-fileupload-content-item">
        <div>
            <img role="presentation" :alt="file.name" :src="file.objectURL" height="50" width="50" />
        </div>
        <div class="p-fileupload-content-body">
            <div>{{ file.name }}</div>
            <div class="p-fileupload-badge-container">
                <div>{{ formatSize(file.size) }}</div>
                <Badge :value="badgeValue" class="p-fileupload-badge" :severity="badgeSeverity" />
            </div>
        </div>
        <div>
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

<style lang="scss" scoped>
.p-fileupload-content-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10.5px;
}
.p-fileupload-content-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0.96;
}
.p-fileupload-badge-container {
    display: flex;
    align-items: center;
    margin-bottom: 10.5px;
}

.p-fileupload-badge {
    margin-left: 0.5rem;
}
</style>

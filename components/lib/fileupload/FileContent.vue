<template>
    <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="p-fileupload-file" v-bind="ptm('file')">
        <img role="presentation" class="p-fileupload-file-thumbnail" :alt="file.name" :src="file.objectURL" :width="previewWidth" v-bind="ptm('thumbnail')" />
        <div class="p-fileupload-file-details" v-bind="ptm('details')">
            <div class="p-fileupload-file-name" v-bind="ptm('fileName')">{{ file.name }}</div>
            <span class="p-fileupload-file-size" v-bind="ptm('fileSize')">{{ formatSize(file.size) }}</span>
            <FileUploadBadge :value="badgeValue" class="p-fileupload-file-badge" :severity="badgeSeverity" :pt="ptm('badge')" />
        </div>
        <div class="p-fileupload-file-actions" v-bind="ptm('actions')">
            <FileUploadButton @click="$emit('remove', index)" text rounded severity="danger" class="p-fileupload-file-remove" :pt="ptm('removeButton')">
                <template #icon="iconProps">
                    <component v-if="templates.fileremoveicon" :is="templates.fileremoveicon" :class="iconProps.class" :file="file" :index="index" />
                    <TimesIcon v-else :class="iconProps.class" aria-hidden="true" v-bind="ptm('removeButton')['icon']" />
                </template>
            </FileUploadButton>
        </div>
    </div>
</template>

<script>
import Badge from 'primevue/badge';
import BaseComponent from 'primevue/basecomponent';
import Button from 'primevue/button';
import TimesIcon from 'primevue/icons/times';

export default {
    extends: BaseComponent,
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
        },
        templates: {
            type: null,
            default: null
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
        FileUploadBadge: Badge,
        TimesIcon
    }
};
</script>

<template>
    <div v-for="(file, index) of files" :key="file.name + file.type + file.size" :class="cx('file')" v-bind="ptm('file')">
        <img role="presentation" :class="cx('fileThumbnail')" :alt="file.name" :src="file.objectURL" :width="previewWidth" v-bind="ptm('fileThumbnail')" />
        <div :class="cx('fileInfo')" v-bind="ptm('fileInfo')">
            <div :class="cx('fileName')" v-bind="ptm('fileName')">{{ file.name }}</div>
            <span :class="cx('fileSize')" v-bind="ptm('fileSize')">{{ formatSize(file.size) }}</span>
        </div>
        <Badge :value="badgeValue" :class="cx('pcFileBadge')" :severity="badgeSeverity" :unstyled="unstyled" :pt="ptm('pcFileBadge')" />
        <div :class="cx('fileActions')" v-bind="ptm('fileActions')">
            <Button @click="$emit('remove', index)" text rounded severity="danger" :class="cx('pcFileRemoveButton')" :unstyled="unstyled" :pt="ptm('pcFileRemoveButton')">
                <template #icon="iconProps">
                    <component v-if="templates.fileremoveicon" :is="templates.fileremoveicon" :class="iconProps.class" :file="file" :index="index" />
                    <TimesIcon v-else :class="iconProps.class" aria-hidden="true" v-bind="ptm('pcFileRemoveButton')['icon']" />
                </template>
            </Button>
        </div>
    </div>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import TimesIcon from '@primevue/icons/times';
import Badge from 'primevue/badge';
import Button from 'primevue/button';

export default {
    name: 'FileContent',
    hostName: 'FileUpload',
    extends: BaseComponent,
    emits: ['remove'],
    props: {
        files: {
            type: Array,
            default: () => []
        },
        badgeSeverity: {
            type: String,
            default: 'warn'
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
            const k = 1024;
            const dm = 3;
            const sizes = this.$primevue.config.locale?.fileSizeTypes || ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

            if (bytes === 0) {
                return `0 ${sizes[0]}`;
            }

            const i = Math.floor(Math.log(bytes) / Math.log(k));
            const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

            return `${formattedSize} ${sizes[i]}`;
        }
    },
    components: {
        Button,
        Badge,
        TimesIcon
    }
};
</script>

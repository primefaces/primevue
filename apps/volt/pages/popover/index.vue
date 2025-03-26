<template>
    <DocComponent title="Vue Popover Component" header="Popover" description="Popover is a container component that can overlay other components on page." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/popover/BasicDoc.vue';
import DownloadDoc from '@/doc/popover/DownloadDoc.vue';
import ImportDoc from '@/doc/popover/ImportDoc.vue';
import SelectDoc from '@/doc/popover/SelectDoc.vue';

import { ref } from 'vue';

const docs = ref([
    {
        id: 'dowload',
        label: 'Download',
        component: DownloadDoc
    },
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'basic',
        label: 'Basic',
        component: BasicDoc
    },
    {
        id: 'selectdata',
        label: 'Select',
        component: SelectDoc
    }
]);
</script>

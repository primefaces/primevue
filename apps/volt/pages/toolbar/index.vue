<template>
    <DocComponent title="Vue Toolbar Component" header="Toolbar" description="Toolbar is a grouping component for buttons and other content." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/toolbar/BasicDoc.vue';
import CustomDoc from '@/doc/toolbar/CustomDoc.vue';
import DownloadDoc from '@/doc/toolbar/DownloadDoc.vue';
import ImportDoc from '@/doc/toolbar/ImportDoc.vue';
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
        id: 'custom',
        label: 'Custom',
        component: CustomDoc
    }
]);
</script>

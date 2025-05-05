<template>
    <DocComponent title="Vue Panel Component" header="Panel" description="Panel is a collapsible container component." :componentDocs="docs" />
</template>

<script setup lang="ts">
import AdvancedDoc from '@/doc/panel/AdvancedDoc.vue';
import BasicDoc from '@/doc/panel/BasicDoc.vue';
import DownloadDoc from '@/doc/panel/DownloadDoc.vue';
import ImportDoc from '@/doc/panel/ImportDoc.vue';
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
        id: 'advanced',
        label: 'Advanced',
        component: AdvancedDoc
    }
]);
</script>

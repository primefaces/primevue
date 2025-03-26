<template>
    <DocComponent title="Vue Timeline Component" header="Timeline" description="Timeline visualizes a series of chained events." :componentDocs="docs" />
</template>

<script setup lang="ts">
import AlignmentDoc from '@/doc/timeline/AlignmentDoc.vue';
import BasicDoc from '@/doc/timeline/BasicDoc.vue';
import DownloadDoc from '@/doc/timeline/DownloadDoc.vue';
import HorizontalDoc from '@/doc/timeline/HorizontalDoc.vue';
import ImportDoc from '@/doc/timeline/ImportDoc.vue';
import OppositeDoc from '@/doc/timeline/OppositeDoc.vue';
import TemplateDoc from '@/doc/timeline/TemplateDoc.vue';
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
        id: 'alignment',
        label: 'Alignment',
        component: AlignmentDoc
    },
    {
        id: 'opposite',
        label: 'Opposite',
        component: OppositeDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'horizontal',
        label: 'Horizontal',
        component: HorizontalDoc
    }
]);
</script>

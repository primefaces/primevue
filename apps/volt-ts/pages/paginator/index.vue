<template>
    <DocComponent title="Vue Paginator Component" header="Paginator" description="Paginator displays data in paged format and provides navigation between pages." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/paginator/BasicDoc.vue';
import DownloadDoc from '@/doc/paginator/DownloadDoc.vue';
import ImportDoc from '@/doc/paginator/ImportDoc.vue';
import { ref } from 'vue';
import CustomDoc from '~/doc/paginator/CustomDoc.vue';

const docs = ref([
    {
        id: 'download',
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

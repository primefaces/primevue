<template>
    <DocComponent title="Vue DataView Component" header="DataView" description="DataView displays data in grid or list layout with pagination and sorting features." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/dataview/BasicDoc.vue';
import DownloadDoc from '@/doc/dataview/DownloadDoc.vue';
import ImportDoc from '@/doc/dataview/ImportDoc.vue';
import LayoutDoc from '@/doc/dataview/LayoutDoc.vue';
import LoadingDoc from '@/doc/dataview/LoadingDoc.vue';
import PaginationDoc from '@/doc/dataview/PaginationDoc.vue';
import SortableDoc from '@/doc/dataview/SortableDoc.vue';
import { ref } from 'vue';

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
        id: 'pagination',
        label: 'Pagination',
        component: PaginationDoc
    },
    {
        id: 'sortable',
        label: 'Sortable',
        component: SortableDoc
    },
    {
        id: 'layout',
        label: 'Layout',
        component: LayoutDoc
    },
    {
        id: 'loading',
        label: 'Loading',
        component: LoadingDoc
    }
]);
</script>

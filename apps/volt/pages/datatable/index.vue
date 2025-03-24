<template>
    <DocComponent title="Vue Table Component" header="DataTable" description="DataTable displays data in tabular format." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/datatable/BasicDoc.vue';
import DownloadDoc from '@/doc/datatable/DownloadDoc.vue';
import ImportDoc from '@/doc/datatable/ImportDoc.vue';
import PaginationDoc from '@/doc/datatable/PaginationDoc.vue';
import TemplateDoc from '@/doc/datatable/TemplateDoc.vue';
import { ref } from 'vue';
import DynamicDoc from '~/doc/datatable/DynamicDoc.vue';

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
        id: 'dynamic',
        label: 'Dynamic',
        component: DynamicDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'pagination',
        label: 'Pagination',
        component: PaginationDoc
    }
]);
</script>

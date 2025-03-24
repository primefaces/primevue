<template>
    <DocComponent title="Vue Table Component" header="DataTable" description="DataTable displays data in tabular format." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/datatable/BasicDoc.vue';
import DownloadDoc from '@/doc/datatable/DownloadDoc.vue';
import DynamicDoc from '@/doc/datatable/DynamicDoc.vue';
import FilterDoc from '@/doc/datatable/FilterDoc.vue';
import ImportDoc from '@/doc/datatable/ImportDoc.vue';
import PaginationDoc from '@/doc/datatable/PaginationDoc.vue';
import MultipleColumnsDoc from '@/doc/datatable/sort/MultipleColumnsDoc.vue';
import PreSortDoc from '@/doc/datatable/sort/PreSortDoc.vue';
import RemovableSortDoc from '@/doc/datatable/sort/RemovableSortDoc.vue';
import SingleColumnDoc from '@/doc/datatable/sort/SingleColumnDoc.vue';
import TemplateDoc from '@/doc/datatable/TemplateDoc.vue';
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
    },
    {
        id: 'sort',
        label: 'Sort',
        children: [
            {
                id: 'single_sort',
                label: 'Single Column',
                component: SingleColumnDoc
            },
            {
                id: 'multiple_sort',
                label: 'Multiple Columns',
                component: MultipleColumnsDoc
            },
            {
                id: 'pre_sort',
                label: 'PreSort',
                component: PreSortDoc
            },
            {
                id: 'removable_sort',
                label: 'Removable',
                component: RemovableSortDoc
            }
        ]
    },
    {
        id: 'filter',
        label: 'Filter',
        component: FilterDoc
    }
]);
</script>

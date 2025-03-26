<template>
    <DocComponent title="Vue Tree Component" header="Tree" description="Tree is used to display hierarchical data." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/tree/BasicDoc.vue';
import ControlledDoc from '@/doc/tree/ControlledDoc.vue';
import DownloadDoc from '@/doc/tree/DownloadDoc.vue';
import EventsDoc from '@/doc/tree/EventsDoc.vue';
import FilterDoc from '@/doc/tree/FilterDoc.vue';
import ImportDoc from '@/doc/tree/ImportDoc.vue';
import LazyDoc from '@/doc/tree/LazyDoc.vue';
import TemplateDoc from '@/doc/tree/TemplateDoc.vue';
import CheckboxDoc from '@/doc/tree/CheckboxDoc.vue';
import MultipleDoc from '@/doc/tree/MultipleDoc.vue';
import SingleDoc from '@/doc/tree/SingleDoc.vue';
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
        id: 'controlled',
        label: 'Controlled',
        component: ControlledDoc
    },
    {
        id: 'selection',
        label: 'Selection',
        children: [
            {
                id: 'single',
                label: 'Single',
                component: SingleDoc
            },
            {
                id: 'multiple',
                label: 'Multiple',
                component: MultipleDoc
            },
            {
                id: 'checkbox',
                label: 'Checkbox',
                component: CheckboxDoc
            }
        ]
    },
    {
        id: 'events',
        label: 'Events',
        component: EventsDoc
    },
    {
        id: 'lazy',
        label: 'Lazy',
        component: LazyDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'filter',
        label: 'Filter',
        component: FilterDoc
    }
]);
</script>

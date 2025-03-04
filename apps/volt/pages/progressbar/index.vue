<template>
    <DocComponent title="Vue ProgressBar Component" header="ProgressBar" description="ProgressBar is a process status indicator." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/progressbar/BasicDoc.vue';
import DynamicDoc from '@/doc/progressbar/DynamicDoc.vue';
import ImportDoc from '@/doc/progressbar/ImportDoc.vue';
import IndeterminateDoc from '@/doc/progressbar/IndeterminateDoc.vue';
import TemplateDoc from '@/doc/progressbar/TemplateDoc.vue';
import { ref } from 'vue';

const docs = ref([
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
        id: 'indeterminate',
        label: 'Indeterminate',
        component: IndeterminateDoc
    }
]);
</script>

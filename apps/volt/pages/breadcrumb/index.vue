<template>
    <DocComponent title="Vue Breadcrumb Component" header="Breadcrumb" description="Breadcrumb provides contextual information about page hierarchy." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/breadcrumb/BasicDoc.vue';
import ImportDoc from '@/doc/breadcrumb/ImportDoc.vue';
import RouterDoc from '@/doc/breadcrumb/RouterDoc.vue';
import TemplateDoc from '@/doc/breadcrumb/TemplateDoc';
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
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'router',
        label: 'Router',
        component: RouterDoc
    }
]);
</script>

<template>
    <DocComponent title="Vue Panel Component" header="Panel" description="Panel is a collapsible container component." :componentDocs="docs" />
</template>

<script setup>
import AdvancedDoc from '@/doc/panel/AdvancedDoc.vue';
import BasicDoc from '@/doc/panel/BasicDoc.vue';
import ImportDoc from '@/doc/panel/ImportDoc.vue';
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
        id: 'advanced',
        label: 'Advanced',
        component: AdvancedDoc
    }
]);
</script>

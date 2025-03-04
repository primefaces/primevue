<template>
    <DocComponent title="Vue Card Component" header="Card" description="Card is a flexible container component." :componentDocs="docs" />
</template>

<script setup>
import AdvancedDoc from '@/doc/card/AdvancedDoc.vue';
import BasicDoc from '@/doc/card/BasicDoc.vue';
import ImportDoc from '@/doc/card/ImportDoc.vue';
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

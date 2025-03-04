<template>
    <DocComponent title="Vue Rating Component" header="Rating" description="Rating component is a star based selection input." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/rating/BasicDoc.vue';
import DisabledDoc from '@/doc/rating/DisabledDoc.vue';
import ImportDoc from '@/doc/rating/ImportDoc.vue';
import NumberOfStarsDoc from '@/doc/rating/NumberOfStarsDoc.vue';
import ReadOnlyDoc from '@/doc/rating/ReadOnlyDoc.vue';
import TemplateDoc from '@/doc/rating/TemplateDoc.vue';
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
        id: 'numberofstars',
        label: 'Number of Stars',
        component: NumberOfStarsDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'readonly',
        label: 'ReadOnly',
        component: ReadOnlyDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    }
]);
</script>

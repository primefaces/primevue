<template>
    <DocComponent title="Vue Fluid Component" header="Fluid" description="Fluid is a layout component to make descendant components span full width of their container." :componentDocs="docs" />
</template>

<script setup>
import ContainerDoc from '@/doc/fluid/ContainerDoc.vue';
import ImportDoc from '@/doc/fluid/ImportDoc.vue';
import PropertyDoc from '@/doc/fluid/PropertyDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'property',
        label: 'Property',
        component: PropertyDoc
    },
    {
        id: 'container',
        label: 'Container',
        component: ContainerDoc
    }
]);
</script>

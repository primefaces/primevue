<template>
    <DocComponent title="Vue Fluid Component" header="Fluid" description="Fluid is a layout component to make descendant components span full width of their container." :componentDocs="docs" />
</template>

<script setup lang="ts">
import ContainerDoc from '@/doc/fluid/ContainerDoc.vue';
import DownloadDoc from '@/doc/fluid/DownloadDoc.vue';
import ImportDoc from '@/doc/fluid/ImportDoc.vue';
import PropertyDoc from '@/doc/fluid/PropertyDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'dowload',
        label: 'Download',
        component: DownloadDoc
    },
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

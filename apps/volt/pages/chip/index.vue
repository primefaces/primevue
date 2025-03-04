<template>
    <DocComponent title="Vue Chip Component" header="Chip" description="Chip represents entities using icons, labels and images." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/chip/BasicDoc.vue';
import IconDoc from '@/doc/chip/IconDoc.vue';
import ImageDoc from '@/doc/chip/ImageDoc.vue';
import ImportDoc from '@/doc/chip/ImportDoc.vue';
import TemplateDoc from '@/doc/chip/TemplateDoc.vue';
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
        id: 'icon',
        label: 'Icon',
        component: IconDoc
    },
    {
        id: 'image',
        label: 'Image',
        component: ImageDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
]);
</script>

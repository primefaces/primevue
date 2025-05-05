<template>
    <DocComponent title="Vue Accordion Component" header="Accordion" description="Accordion groups a collection of contents in panels." :componentDocs="docs" :presetKeys="['AccordionContent', 'AccordionHeader', 'AccordionPanel']" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/accordion/BasicDoc.vue';
import ControlledDoc from '@/doc/accordion/ControlledDoc.vue';
import Disabled from '@/doc/accordion/DisabledDoc.vue';
import DownloadDoc from '@/doc/accordion/DownloadDoc.vue';
import DynamicDoc from '@/doc/accordion/DynamicDoc.vue';
import ImportDoc from '@/doc/accordion/ImportDoc.vue';
import MultipleDoc from '@/doc/accordion/MultipleDoc.vue';
import TemplateDoc from '@/doc/accordion/TemplateDoc.vue';

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
        id: 'multiple',
        label: 'Multiple',
        component: MultipleDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: Disabled
    },
    {
        id: 'controlled',
        label: 'Controlled',
        component: ControlledDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    }
]);
</script>

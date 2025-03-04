<template>
    <DocComponent title="Vue SelectButton Component" header="SelectButton" description="SelectButton is used to choose single or multiple items from a list using buttons." :componentDocs="docs" :apiDocs="['SelectButton']" />
</template>

<script setup>
import BasicDoc from '@/doc/selectbutton/BasicDoc.vue';
import DisabledDoc from '@/doc/selectbutton/DisabledDoc.vue';
import ImportDoc from '@/doc/selectbutton/ImportDoc.vue';
import InvalidDoc from '@/doc/selectbutton/InvalidDoc.vue';
import MultipleDoc from '@/doc/selectbutton/MultipleDoc.vue';
import SizesDoc from '@/doc/selectbutton/SizesDoc.vue';
import TemplateDoc from '@/doc/selectbutton/TemplateDoc.vue';
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
        id: 'multiple',
        label: 'Multiple',
        component: MultipleDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
    },
    {
        id: 'invalid',
        label: 'Invalid',
        component: InvalidDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    }
]);
</script>

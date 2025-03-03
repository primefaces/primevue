<template>
    <DocComponent title="Vue Textarea Component" header="Textarea" description="Textarea adds styling and auto-resize functionality to standard textarea element." :componentDocs="docs" />
</template>

<script setup>
import AutoResizeDoc from '@/doc/textarea/AutoResizeDoc.vue';
import BasicDoc from '@/doc/textarea/BasicDoc.vue';
import DisabledDoc from '@/doc/textarea/DisabledDoc.vue';
import FilledDoc from '@/doc/textarea/FilledDoc.vue';
import ImportDoc from '@/doc/textarea/ImportDoc.vue';
import InvalidDoc from '@/doc/textarea/InvalidDoc.vue';
import SizesDoc from '@/doc/textarea/SizesDoc.vue';
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
        id: 'auto-resize',
        label: 'Auto Resize',
        component: AutoResizeDoc
    },
    {
        id: 'filled',
        label: 'Filled',
        component: FilledDoc
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

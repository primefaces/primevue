<template>
    <DocComponent title="Vue Input Component" header="InputText" description="InputText is an extension to standard input element with theming." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/inputtext/BasicDoc.vue';
import DisabledDoc from '@/doc/inputtext/DisabledDoc.vue';
/*import HelpTextDoc from '@/doc/inputtext/HelpTextDoc.vue';*/
import FilledDoc from '@/doc/inputtext/FilledDoc.vue';
import ImportDoc from '@/doc/inputtext/ImportDoc.vue';
import InvalidDoc from '@/doc/inputtext/InvalidDoc.vue';
import SizesDoc from '@/doc/inputtext/SizesDoc.vue';
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
        id: 'filled',
        label: 'Filled',
        component: FilledDoc
    },
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
    } /*,
    {
        id: 'helptext',
        label: 'Help Text',
        component: HelpTextDoc
    },*/,
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

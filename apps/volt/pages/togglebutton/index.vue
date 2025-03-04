<template>
    <DocComponent title="Vue ToggleButton Component" header="ToggleButton" description="ToggleButton is used to select a boolean value using a button." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/togglebutton/BasicDoc.vue';
import CustomizedDoc from '@/doc/togglebutton/CustomizedDoc.vue';
import DisabledDoc from '@/doc/togglebutton/DisabledDoc.vue';
import ImportDoc from '@/doc/togglebutton/ImportDoc.vue';
import InvalidDoc from '@/doc/togglebutton/InvalidDoc.vue';
import SizesDoc from '@/doc/togglebutton/SizesDoc.vue';
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
        id: 'customized',
        label: 'Customized',
        component: CustomizedDoc
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

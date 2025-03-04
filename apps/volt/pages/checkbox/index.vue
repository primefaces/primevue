<template>
    <DocComponent title="Vue Checkbox Component" header="Checkbox" description="Checkbox is an extension to standard checkbox element with theming." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/checkbox/BasicDoc.vue';
import DisabledDoc from '@/doc/checkbox/DisabledDoc.vue';
import DynamicDoc from '@/doc/checkbox/DynamicDoc.vue';
import FilledDoc from '@/doc/checkbox/FilledDoc.vue';
import GroupDoc from '@/doc/checkbox/GroupDoc.vue';
import ImportDoc from '@/doc/checkbox/ImportDoc.vue';
import IndeterminateDoc from '@/doc/checkbox/IndeterminateDoc.vue';
import InvalidDoc from '@/doc/checkbox/InvalidDoc.vue';
import SizesDoc from '@/doc/checkbox/SizesDoc.vue';
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
        id: 'group',
        label: 'Group',
        component: GroupDoc
    },
    {
        id: 'dynamic',
        label: 'Dynamic',
        component: DynamicDoc
    },
    {
        id: 'indeterminate',
        label: 'Indeterminate',
        component: IndeterminateDoc
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

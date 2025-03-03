<template>
    <DocComponent title="Vue ToggleSwitch Component" header="ToggleSwitch" description="ToggleSwitch is used to select a boolean value." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/toggleswitch/BasicDoc.vue';
import DisabledDoc from '@/doc/toggleswitch/DisabledDoc.vue';
import ImportDoc from '@/doc/toggleswitch/ImportDoc.vue';
import InvalidDoc from '@/doc/toggleswitch/InvalidDoc.vue';
import PreselectionDoc from '@/doc/toggleswitch/PreselectionDoc.vue';
import TemplateDoc from '@/doc/toggleswitch/TemplateDoc.vue';
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
        id: 'preselection',
        label: 'Preselection',
        component: PreselectionDoc
    },
    {
        id: 'invalid',
        label: 'Invalid',
        component: InvalidDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    }
]);
</script>

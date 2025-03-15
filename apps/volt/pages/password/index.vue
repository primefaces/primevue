<template>
    <DocComponent title="Vue Password Component" header="Password" description="Password displays strength indicator for password fields." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/password/BasicDoc.vue';
import DisabledDoc from '@/doc/password/DisabledDoc.vue';
import FilledDoc from '@/doc/password/FilledDoc.vue';
import ImportDoc from '@/doc/password/ImportDoc.vue';
import InvalidDoc from '@/doc/password/InvalidDoc.vue';
import LocaleDoc from '@/doc/password/LocaleDoc.vue';
import MeterDoc from '@/doc/password/MeterDoc.vue';
import SizesDoc from '@/doc/password/SizesDoc.vue';
import TemplateDoc from '@/doc/password/TemplateDoc.vue';
import ToggleMaskDoc from '@/doc/password/ToggleMaskDoc.vue';
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
        id: 'meter',
        label: 'Meter',
        component: MeterDoc
    },
    {
        id: 'locale',
        label: 'Locale',
        component: LocaleDoc
    },
    {
        id: 'togglemask',
        label: 'ToggleMask',
        component: ToggleMaskDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
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

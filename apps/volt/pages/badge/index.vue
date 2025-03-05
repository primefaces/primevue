<template>
    <DocComponent title="Vue Badge Component" header="Badge" description="Badge is a small status indicator for another element." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/badge/BasicDoc.vue';
import ButtonDoc from '@/doc/badge/ButtonDoc.vue';
import ImportDoc from '@/doc/badge/ImportDoc.vue';
import OverlayDoc from '@/doc/badge/OverlayDoc.vue';
import SeverityDoc from '@/doc/badge/SeverityDoc.vue';
import SizeDoc from '@/doc/badge/SizeDoc.vue';
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
        id: 'severity',
        label: 'Severity',
        component: SeverityDoc
    },
    {
        id: 'size',
        label: 'Size',
        component: SizeDoc
    },
    {
        id: 'overlay',
        label: 'Overlay',
        component: OverlayDoc
    },
    {
        id: 'button',
        label: 'Button',
        component: ButtonDoc
    }
]);
</script>

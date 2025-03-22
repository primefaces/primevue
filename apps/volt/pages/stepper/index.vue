<template>
    <DocComponent title="Vue Stepper Component" header="Stepper" description="The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression." :componentDocs="docs" />
</template>

<script setup>
import DownloadDoc from '@/doc/stepper/DownloadDoc.vue';
import HorizontalDoc from '@/doc/stepper/HorizontalDoc.vue';
import ImportDoc from '@/doc/stepper/ImportDoc.vue';
import LinearDoc from '@/doc/stepper/LinearDoc.vue';
import StepsOnlyDoc from '@/doc/stepper/StepsOnlyDoc.vue';
import VerticalDoc from '@/doc/stepper/VerticalDoc.vue';

import { ref } from 'vue';

const docs = ref([
    {
        id: 'download',
        label: 'Download',
        component: DownloadDoc
    },
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'horizontal',
        label: 'Horizontal',
        component: HorizontalDoc
    },
    {
        id: 'vertical',
        label: 'Vertical',
        component: VerticalDoc
    },
    {
        id: 'linear',
        label: 'Linear',
        component: LinearDoc
    },
    {
        id: 'stepsonly',
        label: 'Steps Only',
        component: StepsOnlyDoc
    }
]);
</script>

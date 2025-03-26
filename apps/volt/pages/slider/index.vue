<template>
    <DocComponent title="Vue Slider Component" header="Slider" description="Slider is a component to provide input with a drag handle." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/slider/BasicDoc.vue';
import DownloadDoc from '@/doc/slider/DownloadDoc.vue';
import FilterDoc from '@/doc/slider/FilterDoc.vue';
import ImportDoc from '@/doc/slider/ImportDoc.vue';
import InputDoc from '@/doc/slider/InputDoc.vue';
import RangeDoc from '@/doc/slider/RangeDoc.vue';
import StepDoc from '@/doc/slider/StepDoc.vue';
import VerticalDoc from '@/doc/slider/VerticalDoc.vue';
import { ref } from 'vue';

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
        id: 'input',
        label: 'Input',
        component: InputDoc
    },
    {
        id: 'step',
        label: 'Step',
        component: StepDoc
    },
    {
        id: 'range',
        label: 'Range',
        component: RangeDoc
    },
    {
        id: 'filter',
        label: 'Filter',
        component: FilterDoc
    },
    {
        id: 'vertical',
        label: 'Vertical',
        component: VerticalDoc
    }
]);
</script>

<template>
    <DocComponent title="Vue Inplace Component" header="Inplace" description="Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/inplace/BasicDoc.vue';
import DownloadDoc from '@/doc/inplace/DownloadDoc.vue';
import ImageDoc from '@/doc/inplace/ImageDoc.vue';
import ImportDoc from '@/doc/inplace/ImportDoc.vue';
import InputDoc from '@/doc/inplace/InputDoc.vue';
import LazyDoc from '@/doc/inplace/LazyDoc.vue';
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
        id: 'image',
        label: 'Image',
        component: ImageDoc
    },
    {
        id: 'lazy',
        label: 'Lazy',
        component: LazyDoc
    }
]);
</script>

<template>
    <DocComponent title="Vue Animations" header="Animations" description="The tailwindcss-primeui plugin is packed with animation utilities." :componentDocs="docs" />
</template>

<script setup>
import ApiDoc from '@/doc/animations/ApiDoc.vue';
import DemoDoc from '@/doc/animations/DemoDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'demo',
        label: 'Demo',
        component: DemoDoc
    },
    {
        id: 'api',
        label: 'API',
        component: ApiDoc
    }
]);
</script>

<template>
    <DocComponent title="Vue IconField" header="IconField" description="IconField displays an icon inside an input field." :componentDocs="docs" :isComponent="false" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/iconfield/BasicDoc.vue';
import CustomIconDoc from '@/doc/iconfield/CustomIconDoc.vue';
import SizesDoc from '@/doc/iconfield/SizesDoc.vue';

import { ref } from 'vue';

const docs = ref([
    {
        id: 'basic',
        label: 'Basic',
        component: BasicDoc
    },
    {
        id: 'custom',
        label: 'Custom Icon',
        component: CustomIconDoc
    },
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
    }
]);
</script>

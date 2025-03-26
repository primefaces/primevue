<template>
    <DocComponent title="Vue InputGroup Component" header="InputGroup" description="Text, icon, buttons and other content can be grouped next to an input." :componentDocs="docs" :isComponent="false" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/inputgroup/BasicDoc.vue';
import ButtonDoc from '@/doc/inputgroup/ButtonDoc.vue';
import CheckboxRadioDoc from '@/doc/inputgroup/CheckboxRadioDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'basic',
        label: 'Basic',
        component: BasicDoc
    },
    {
        id: 'button',
        label: 'Button',
        component: ButtonDoc
    },
    {
        id: 'checkbox',
        label: 'Checkbox & Radio',
        component: CheckboxRadioDoc
    }
]);
</script>

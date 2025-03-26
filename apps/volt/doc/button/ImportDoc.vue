<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton';
import ContrastButton from '@/volt/ContrastButton.vue';
import DangerButton from '@/volt/DangerButton.vue';
`);
</script>

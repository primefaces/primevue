<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import ContrastButton from '@/volt/button/contrast';
import DangerButton from '@/volt/button/danger';
`);
</script>

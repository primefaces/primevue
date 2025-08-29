<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="bash" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`npx volt-vue add MultiSelect
`);
</script>

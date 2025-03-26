<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import Splitter from '@/volt/Splitter.vue';
import SplitterPanel from 'primevue/splitterpanel';
`);
</script>

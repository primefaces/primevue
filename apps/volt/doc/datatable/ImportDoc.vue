<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import DataTable from '@/volt/DataTable.vue';
import Column from 'primevue/column';
import Column from 'primevue/columngroup';  // optional
import Column from 'primevue/row';          // optional
`);
</script>

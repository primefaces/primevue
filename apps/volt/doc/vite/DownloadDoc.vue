<template>
    <DocSectionText v-bind="$attrs">
        <p>Download the Volt components to your application codebase on demand with the <i>npx volt-vue</i> command. Refer to the individiual documentation pages of the components to access the download command per component.</p>
    </DocSectionText>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`
npm volt-vue add button
npm volt-vue add datatable
npm volt-vue add dialog
npm volt-vue add datepicker
`);
</script>

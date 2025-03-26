<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Download the Volt components to your application codebase on demand with the <a href="https://www.npmjs.com/package/volt-vue" target="_blank" rel="noopener noreferrer">npx volt-vue</a> command. Refer to the individiual documentation pages
            of the components to access the download command per component.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`
npx volt-vue add button
npx volt-vue add datatable
npx volt-vue add dialog
npx volt-vue add datepicker
`);
</script>

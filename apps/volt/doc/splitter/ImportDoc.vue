<template>
    <DocSectionText v-bind="$attrs">
        <p>Volt uses the PrimeVue SplitterPanel, as SplitterPanel is a simple semantic component with no style.</p>
    </DocSectionText>
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Splitter from '@/volt/splitter';
import SplitterPanel from 'primevue/splitterpanel';
`);
</script>

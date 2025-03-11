<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Tabs from '@/volt/tabs';
import TabList from '@/volt/tabs/tablist';
import Tab from '@/volt/tabs/tab';
import TabPanels from '@/volt/tabs/tabpanels';
import TabPanel from '@/volt/tabs/tabpanel';
`);
</script>

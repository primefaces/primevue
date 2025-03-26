<template>
    <TabPanel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </TabPanel>
</template>

<script setup lang="ts">
import TabPanel from 'primevue/tabpanel';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

const theme = ref({
    root: ``
});
</script>

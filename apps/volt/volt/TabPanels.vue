<template>
    <TabPanels
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </TabPanels>
</template>

<script setup>
import TabPanels from 'primevue/tabpanels';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        pt-[0.875rem] pb-[1.125rem] px-[1.125rem] outline-none`
});
</script>

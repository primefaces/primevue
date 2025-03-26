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

<script setup lang="ts">
import TabPanels, { type TabPanelsPassThroughOptions, type TabPanelsProps } from 'primevue/tabpanels';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TabPanelsProps {}
defineProps<Props>();

const theme = ref<TabPanelsPassThroughOptions>({
    root: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        pt-[0.875rem] pb-[1.125rem] px-[1.125rem] outline-none`
});
</script>

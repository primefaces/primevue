<template>
    <AccordionPanel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </AccordionPanel>
</template>

<script setup lang="ts">
import AccordionPanel, { type AccordionPanelPassThroughOptions, type AccordionPanelProps } from 'primevue/accordionpanel';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionPanelProps {}
defineProps<Props>();

const theme = ref<AccordionPanelPassThroughOptions>({
    root: `flex flex-col border-b border-surface-200 dark:border-surface-700`
});
</script>

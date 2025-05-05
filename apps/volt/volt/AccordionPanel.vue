<template>
    <AccordionPanel
        :value="props.value"
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
const props = defineProps<Props>();

const theme = ref<AccordionPanelPassThroughOptions>({
    root: `flex flex-col border-b border-surface-200 dark:border-surface-700`
});
</script>

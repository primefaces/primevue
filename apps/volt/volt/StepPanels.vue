<template>
    <StepPanels
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </StepPanels>
</template>

<script setup lang="ts">
import StepPanels, { type StepPanelsPassThroughOptions, type StepPanelsProps } from 'primevue/steppanels';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ StepPanelsProps {}
defineProps<Props>();

const theme = ref<StepPanelsPassThroughOptions>({
    root: `pt-[0.875rem] pb-[1.125rem] px-2`
});
</script>

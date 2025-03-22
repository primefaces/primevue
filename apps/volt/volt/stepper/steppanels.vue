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

<script setup>
import StepPanels from 'primevue/steppanels';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``
});
</script>

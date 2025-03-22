<template>
    <StepPanel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </StepPanel>
</template>

<script setup>
import StepPanel from 'primevue/steppanel';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``
});
</script>

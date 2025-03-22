<template>
    <StepItem
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </StepItem>
</template>

<script setup>
import StepItem from 'primevue/stepitem';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``
});
</script>

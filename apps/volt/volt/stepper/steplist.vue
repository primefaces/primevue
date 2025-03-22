<template>
    <StepList
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </StepList>
</template>

<script setup>
import StepList from 'primevue/steplist';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `relative flex justify-between items-center m-0 p-0 list-none overflow-x-auto`
});
</script>

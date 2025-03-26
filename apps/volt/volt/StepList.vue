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

<script setup lang="ts">
import StepList, { type StepListPassThroughOptions, type StepListProps } from 'primevue/steplist';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ StepListProps {}
defineProps<Props>();

const theme = ref<StepListPassThroughOptions>({
    root: `relative flex justify-between items-center m-0 p-0 list-none overflow-x-auto`
});
</script>

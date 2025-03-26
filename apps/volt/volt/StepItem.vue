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
import { ptViewMerge } from './utils';

const theme = ref({
    root: `flex flex-col flex-initial p-active:flex-auto last-of-type:*:last:ps-8`
});
</script>

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

<script setup lang="ts">
import StepItem, { type StepItemPassThroughOptions, type StepItemProps } from 'primevue/stepitem';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ StepItemProps {}
defineProps<Props>();

const theme = ref<StepItemPassThroughOptions>({
    root: `flex flex-col flex-initial p-active:flex-auto last-of-type:*:last:ps-8`
});
</script>

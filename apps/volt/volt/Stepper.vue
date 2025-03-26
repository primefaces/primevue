<template>
    <Stepper
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </Stepper>
</template>

<script setup lang="ts">
import Stepper, { type StepperPassThroughOptions, type StepperProps } from 'primevue/stepper';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ StepperProps {}
defineProps<Props>();

const theme = ref<StepperPassThroughOptions>({
    root: `has-[[data-pc-name="stepitem"]]:flex has-[[data-pc-name="stepitem"]]:flex-col`,
    separator: `flex-1 bg-surface-200 dark:bg-surface-700 p-completed:bg-primary w-full h-[2px] transition-colors duration-200
        p-vertical:grow-0 p-vertical:shrink-0 p-vertical:basis-auto p-vertical:w-[2px] p-vertical:h-auto p-vertical:ms-[1.625rem] p-vertical:relative p-vertical:start-[-2.5px]`
});
</script>

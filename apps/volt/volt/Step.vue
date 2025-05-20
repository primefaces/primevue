<template>
    <Step
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Step>
</template>

<script setup lang="ts">
import Step, { type StepPassThroughOptions, type StepProps } from 'primevue/step';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ StepProps {}
defineProps<Props>();

const theme = ref<StepPassThroughOptions>({
    root: `relative flex flex-auto items-center gap-4 p-2 last-of-type:flex-initial p-vertical:flex-initial`,
    header: `order-none inline-flex items-center no-underline cursor-pointer p-readonly:cursor-auto p-active:cursor-auto
        transition-colors duration-200 rounded-md bg-transparent p-0 gap-2
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`,
    number: `flex items-center justify-center text-surface-500 dark:text-surface-400
        bg-surface-0 dark:bg-surface-900 border-2 border-surface-200 dark:border-surface-700
        min-w-8 h-8 leading-8 text-lg font-medium rounded-full z-10 relative
        after:absolute after:w-full after:h-full after:rounded-full after:shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.12)]
        p-active:bg-surface-0 dark:p-active:bg-surface-900 p-active:text-primary p-active:border-surface-200 dark:p-active:border-surface-700`,
    title: `block whitespace-nowrap overflow-hidden text-ellipsis max-w-full
        text-surface-500 dark:text-surface-400 font-medium  p-active:text-primary
        transition-colors duration-200`
});
</script>

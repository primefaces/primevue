<template>
    <AccordionContent
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </AccordionContent>
</template>

<script setup>
import AccordionContent from 'primevue/accordioncontent';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

const theme = ref({
    root: `flex flex-col`,
    content: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 pt-0 px-[1.125rem] pb-[1.125rem]`,
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
        leaveToClass: 'max-h-0'
    }
});
</script>

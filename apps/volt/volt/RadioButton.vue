<template>
    <RadioButton
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    />
</template>

<script setup lang="ts">
import RadioButton, { type RadioButtonPassThroughOptions, type RadioButtonProps } from 'primevue/radiobutton';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ RadioButtonProps {}
defineProps<Props>();

const theme = ref<RadioButtonPassThroughOptions>({
    root: `relative inline-flex select-none w-5 h-5
        p-small:w-4 p-small:h-4
        p-large:w-6 p-large:h-6`,
    input: `peer cursor-pointer disabled:cursor-default appearance-none absolute start-0 top-0 w-full h-full m-0 p-0 opacity-0 z-10
        border border-transparent rounded-full`,
    box: `flex justify-center items-center rounded-full
        border border-surface-300 dark:border-surface-700
        bg-surface-0 dark:bg-surface-950
        peer-enabled:peer-hover:border-surface-400 dark:peer-enabled:peer-hover:border-surface-600
        p-checked:border-primary p-checked:bg-primary
        peer-enabled:peer-hover:p-checked:bg-primary-emphasis peer-enabled:peer-hover:p-checked:border-primary-emphasis
        peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary peer-focus-visible:outline 
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-disabled:bg-surface-200 dark:p-disabled:bg-surface-400 p-disabled:border-surface-300 dark:p-disabled:border-surface-700
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200
        w-5 h-5
        p-small:w-4 p-small:h-4
        p-large:w-6 p-large:h-6`,
    icon: `bg-transparent text-xs w-3 h-3 rounded-full
        transition-all duration-200 backface-hidden scale-[0.1]
        p-checked:bg-primary-contrast p-checked:visible p-checked:scale-100
        p-disabled:bg-surface-700 dark:p-disabled:bg-surface-400
        p-small:w-2 p-small:h-2
        p-large:w-4 p-large:h-4`
});
</script>

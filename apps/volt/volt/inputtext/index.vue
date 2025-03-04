<template>
    <InputText
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    />
</template>

<script setup>
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `appearance-none rounded-md outline-hidden
        bg-surface-0 dark:bg-surface-950
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        text-surface-700 dark:text-surface-0
        placeholder:text-surface-500 dark:placeholder:text-surface-400
        border border-surface-300 dark:border-surface-700
        enabled:hover:border-surface-400 dark:enabled:hover:border-surface-600
        enabled:focus:border-primary
        disabled:bg-surface-200 disabled:text-surface-500
        dark:disabled:bg-surface-700 dark:disabled:text-surface-400
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-invalid:placeholder:text-red-600 dark:p-invalid:placeholder:text-red-400
        px-3 py-2 p-fluid:w-full
        p-small:text-sm p-small:px-[0.625rem] p-small-py-[0.375rem]
        p-large:text-lg p-small:px-[0.875rem] p-small-py-[0.625rem]
        transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`
});
</script>

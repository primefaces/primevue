<template>
    <Panel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Panel>
</template>

<script setup>
import Panel from 'primevue/panel';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `border border-surface-200 dark:border-surface-700 rounded-md
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0`,
    header: `flex justify-between items-center p-[1.125rem] p-toggleable:py-[0.375rem] p-toggleable:px-[1.125rem]`,
    title: `leading-none font-semibold`,
    headerActions: `flex items-center gap-1`,
    pcToggleButton: {
        root: `w-10 h-10 px-0 gap-0 rounded-full 
            inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
            bg-transparent enabled:hover:bg-surface-50 enabled:active:bg-surface-100
            border-transparent enabled:hover:border-transparent enabled:active:border-transparent
            text-surface-500 enabled:hover:text-surface-500 enabled:active:text-surface-500
            dark:bg-transparent dark:enabled:hover:bg-surface-800 dark:enabled:active:bg-surface-700
            dark:border-transparent dark:enabled:hover:border-transparent dark:enabled:active:border-transparent
            dark:text-surface-400 dark:enabled:hover:text-surface-400 dark:enabled:active:text-surface-400
            focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2
            focus-visible:outline-surface-600 dark:focus-visible:outline-surface-300`,
        label: `p-icon-only:invisible p-icon-only:w-0`
    },
    contentContainer: ``,
    content: `pt-0 pb-[1.125rem] px-[1.125rem] `,
    footer: `pt-0 pb-[1.125rem] px-[1.125rem] `,
    transition: ``
});
</script>

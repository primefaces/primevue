<template>
    <Button
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Button>
</template>

<script setup lang="ts">
import Button, { type ButtonPassThroughOptions, type ButtonProps } from 'primevue/button';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const theme = ref<ButtonPassThroughOptions>({
    root: `inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
        px-3 py-2 gap-2 rounded-md disabled:pointer-events-none disabled:opacity-60 transition-colors duration-200
        bg-red-500 enabled:hover:bg-red-600 enabled:active:bg-red-700
        border border-red-500 enabled:hover:border-red-600 enabled:active:border-red-700
        text-white enabled:hover:text-white enabled:active:text-white
        dark:bg-red-400 dark:enabled:hover:bg-red-300 dark:enabled:active:bg-red-200
        dark:border-red-400 dark:enabled:hover:border-red-300 dark:enabled:active:border-red-200
        dark:text-red-950 dark:enabled:hover:text-red-950 dark:enabled:active:text-red-950
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2
        focus-visible:outline-red-500 dark:focus-visible:outline-red-400
        p-vertical:flex-col p-fluid:w-full p-fluid:p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-[1.125rem] p-large:px-[0.875rem] p-large:py-[0.625rem]
        p-raised:shadow-sm p-rounded:rounded-[2rem]
        p-outlined:bg-transparent enabled:hover:p-outlined:bg-red-50 enabled:active:p-outlined:bg-red-100
        p-outlined:border-red-200 enabled:hover:p-outlined:border-red-200 enabled:active:p-outlined:border-red-200
        p-outlined:text-red-500 enabled:hover:p-outlined:text-red-500 enabled:active:p-outlined:text-red-500
        dark:p-outlined:bg-transparent dark:enabled:hover:p-outlined:bg-red-400/5 dark:enabled:active:p-outlined:bg-red-400/15
        dark:p-outlined:border-red-700 dark:enabled:hover:p-outlined:border-red-700 dark:enabled:active:p-outlined:border-red-700
        dark:p-outlined:text-red-400 dark:enabled:hover:p-outlined:text-red-400 dark:enabled:active:p-outlined:text-red-400
        p-text:bg-transparent enabled:hover:p-text:bg-red-50 enabled:active:p-text:bg-red-100
        p-text:border-transparent enabled:hover:p-text:border-transparent enabled:active:p-text:border-transparent
        p-text:text-red-500 enabled:hover:p-text:text-red-500 enabled:active:p-text:text-red-500
        dark:p-text:bg-transparent dark:enabled:hover:p-text:bg-red-400/5 dark:enabled:active:p-text:bg-red-400/15
        dark:p-text:border-transparent dark:enabled:hover:p-text:border-transparent dark:enabled:active:p-text:border-transparent
        dark:p-text:text-red-400 dark:enabled:hover:p-text:text-red-400 dark:enabled:active:p-text:text-red-400
    `,
    loadingIcon: ``,
    icon: `p-right:order-1 p-bottom:order-2`,
    label: `font-medium p-icon-only:invisible p-icon-only:w-0
        p-small:text-sm p-large:text-[1.125rem]`,
    pcBadge: {
        root: `min-w-4 h-4 leading-4`
    }
});
</script>

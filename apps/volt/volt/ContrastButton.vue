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
        bg-surface-950 enabled:hover:bg-surface-900 enabled:active:bg-surface-800
        border border-surface-950 enabled:hover:border-surface-900 enabled:active:border-surface-800
        text-white enabled:hover:text-white enabled:active:text-white
        dark:bg-surface-0 dark:enabled:hover:bg-surface-100 dark:enabled:active:bg-surface-200
        dark:border-surface-100 dark:enabled:hover:border-surface-200 dark:enabled:active:border-surface-300
        dark:text-surface-950 dark:enabled:hover:text-surface-950 dark:enabled:active:text-surface-950
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2
        focus-visible:outline-surface-950 dark:focus-visible:outline-surface-0
        p-vertical:flex-col p-fluid:w-full p-fluid:p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-[1.125rem] p-large:px-[0.875rem] p-large:py-[0.625rem]
        p-raised:shadow-sm p-rounded:rounded-[2rem]
        p-outlined:bg-transparent enabled:hover:p-outlined:bg-surface-50 enabled:active:p-outlined:bg-surface-100
        p-outlined:border-surface-700 enabled:hover:p-outlined:border-surface-700 enabled:active:p-outlined:border-surface-700
        p-outlined:text-surface-950 enabled:hover:p-outlined:text-surface-950 enabled:active:p-outlined:text-surface-950
        dark:p-outlined:bg-transparent dark:enabled:hover:p-outlined:bg-surface-800 dark:enabled:active:p-outlined:bg-surface-700
        dark:p-outlined:border-surface-500 dark:enabled:hover:p-outlined:border-surface-500 dark:enabled:active:p-outlined:border-surface-500
        dark:p-outlined:text-surface-0 dark:enabled:hover:p-outlined:text-surface-0 dark:enabled:active:p-outlined:text-surface-0
        p-text:bg-transparent enabled:hover:p-text:bg-surface-50 enabled:active:p-text:bg-surface-100
        p-text:border-transparent enabled:hover:p-text:border-transparent enabled:active:p-text:border-transparent
        p-text:text-surface-950 enabled:hover:p-text:text-surface-950 enabled:active:p-text:text-surface-950
        dark:p-text:bg-transparent dark:enabled:hover:p-text:bg-surface-800 dark:enabled:active:p-text:bg-surface-700
        dark:p-text:border-transparent dark:enabled:hover:p-text:border-transparent dark:enabled:active:p-text:border-transparent
        dark:p-text:text-surface-0 dark:enabled:hover:p-text:text-surface-0 dark:enabled:active:p-text:text-surface-0
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

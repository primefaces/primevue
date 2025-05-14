<template>
    <Toast
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #closeicon>
            <TimesIcon />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Toast>
</template>

<script setup lang="ts">
import TimesIcon from '@primevue/icons/times';
import Toast, { type ToastPassThroughOptions, type ToastProps } from 'primevue/toast';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ToastProps {}
defineProps<Props>();

const theme = ref<ToastPassThroughOptions>({
    root: `w-96 rounded-md whitespace-pre-line break-words
        p-top-center:-translate-x-1/2 p-bottom-center:-translate-x-1/2
        p-center:min-w-[20vw] p-center:-translate-x-1/2 p-center:-translate-y-1/2`,
    message: `mb-4 not-p-custom:border not-p-custom:backdrop-blur-sm dark:not-p-custom:backdrop-blur-md not-p-custom:rounded-md
        p-info:bg-blue-50/95 p-info:border-blue-200 p-info:text-blue-600 dark:p-info:bg-blue-500/15 dark:p-info:border-blue-700/35 dark:p-info:text-blue-500
        p-success:bg-green-50/95 p-success:border-green-200 p-success:text-green-600 dark:p-success:bg-green-500/15 dark:p-success:border-green-700/35 dark:p-success:text-green-500
        p-warn:bg-yellow-50/95 p-warn:border-yellow-200 p-warn:text-yellow-600 dark:p-warn:bg-yellow-500/15 dark:p-warn:border-yellow-700/35 dark:p-warn:text-yellow-500
        p-error:bg-red-50/95 p-error:border-red-200 p-error:text-red-600 dark:p-error:bg-red-500/15 dark:p-error:border-red-700/35 dark:p-error:text-red-500
        p-secondary:bg-surface-100 p-secondary:border-surface-200 p-secondary:text-surface-600 dark:p-secondary:bg-surface-800 dark:p-secondary:border-surface-700 dark:p-secondary:text-surface-300
        p-contrast:bg-surface-900 p-contrast:border-surface-950 p-contrast:text-surface-50 dark:p-contrast:bg-surface-0 dark:p-contrast:border-surface-100 dark:p-contrast:text-surface-950`,
    messageContent: `flex items-start p-3 gap-2`,
    messageIcon: `flex-shrink-0 text-lg w-[1.125rem] h-[1.125rem] mt-1`,
    messageText: `flex-auto flex flex-col gap-2`,
    summary: `font-medium text-base`,
    detail: `font-medium text-sm text-surface-700 dark:text-surface-0
        p-contrast:text-surface-0 dark:p-contrast:text-surface-950`,
    buttonContainer: ``,
    closeButton: `flex items-center justify-center overflow-hidden relative cursor-pointer bg-transparent select-none
        transition-colors duration-200 text-inherit w-7 h-7 rounded-full -mt-[25%] -end-1/4 p-0 border-none
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2
        p-info:hover:bg-blue-100 p-info:focus-visible:outline-blue-600 dark:p-info:hover:bg-white/5 dark:p-info:focus-visible:outline-blue-500
        p-success:hover:bg-green-100 p-success:focus-visible:outline-green-600 dark:p-success:hover:bg-white/5 dark:p-success:focus-visible:outline-green-500
        p-warn:hover:bg-yellow-100 p-warn:focus-visible:outline-yellow-600 dark:p-warn:hover:bg-white/5 dark:p-warn:focus-visible:outline-yellow-500
        p-error:hover:bg-red-100 p-error:focus-visible:outline-red-600 dark:p-error:hover:bg-white/5 dark:p-error:focus-visible:outline-red-500
        p-secondary:hover:bg-surface-200 p-secondary:focus-visible:outline-surface-600 dark:p-secondary:hover:bg-surface-700 dark:p-secondary:focus-visible:outline-surface-300
        p-contrast:hover:bg-surface-800 p-contrast:focus-visible:outline-surface-50 dark:p-contrast:hover:bg-surface-100 dark:p-contrast:focus-visible:outline-surface-950`,
    closeIcon: `text-base w-4 h-4`,
    transition: {
        enterFromClass: 'opacity-0 translate-y-1/2',
        enterActiveClass: 'transition-all duration-500',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'transition-all duration-500',
        leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
    }
});
</script>

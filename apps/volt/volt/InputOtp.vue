<template>
    <InputOtp
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </InputOtp>
</template>

<script setup lang="ts">
import InputOtp, { type InputOtpPassThroughOptions, type InputOtpProps } from 'primevue/inputotp';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ InputOtpProps {}
defineProps<Props>();

const theme = ref<InputOtpPassThroughOptions>({
    root: `flex items-center gap-2`,
    pcInputText: {
        root: `text-center w-12 h-12
            appearance-none rounded-md outline-hidden
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
            p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem] p-small:w-10 p-small:h-10
            p-large:text-xl p-large:px-[0.875rem] p-large:py-[0.625rem] p-large:w-14 p-large:h-14
            transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`
    }
});
</script>

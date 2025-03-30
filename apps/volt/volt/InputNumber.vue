<template>
    <InputNumber
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #incrementicon>
            <AngleUpIcon />
        </template>
        <template #decrementicon>
            <AngleDownIcon />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </InputNumber>
</template>

<script setup lang="ts">
import AngleDownIcon from '@primevue/icons/angledown';
import AngleUpIcon from '@primevue/icons/angleup';
import InputNumber, { type InputNumberPassThroughOptions, type InputNumberProps } from 'primevue/inputnumber';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ InputNumberProps {}
defineProps<Props>();

const theme = ref<InputNumberPassThroughOptions>({
    root: `inline-flex relative 
        p-vertical:flex-col p-fluid:w-full`,
    pcInputText: {
        root: `appearance-none rounded-md outline-hidden flex-auto
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
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-lg p-large:px-[0.875rem] p-large:py-[0.625rem]
        transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]
        p-horizontal:order-2 p-horizontal:rounded-none
        p-vertical:order-2 p-vertical:rounded-none p-vertical:text-center
        p-fluid:w-[1%] p-fluid:p-vertical:w-full`
    },
    buttonGroup: `p-stacked:flex p-stacked:flex-col p-stacked:absolute p-stacked:top-px p-stacked:end-px p-stacked:h-[calc(100%-2px)] p-stacked:z-10`,
    incrementButton: `flex items-center justify-center grow-0 shrink-0 basis-auto cursor-pointer w-10
        bg-transparent enabled:hover:bg-surface-100 enabled:active:bg-surface-200
        border border-surface-300 enabled:hover:border-surface-300 enabled:active:border-surface-300
        text-surface-400 enabled:hover:text-surface-500 enabled:active:text-surface-600
        dark:bg-transparent dark:enabled:hover:bg-surface-800 dark:enabled:active:bg-surface-700
        dark:border-surface-700 dark:enabled:hover:border-surface-700 dark:enabled:active:border-surface-700
        dark:text-surface-400 dark:enabled:hover:text-surface-300 dark:enabled:active:text-surface-200
        transition-colors duration-200 disabled:pointer-events-none
        p-stacked:relative p-stacked:flex-auto p-stacked:border-none
        p-stacked:p-0 p-stacked:rounded-tr-[5px]
        p-horizontal:order-3 p-horizontal:rounded-e-md p-horizontal:border-s-0
        p-vertical:py-2 p-vertical:order-1 p-vertical:rounded-ss-md p-vertical:rounded-se-md p-vertical:w-full p-vertical:border-b-0`,
    incrementIcon: ``,
    decrementButton: `flex items-center justify-center grow-0 shrink-0 basis-auto cursor-pointer w-10
        bg-transparent enabled:hover:bg-surface-100 enabled:active:bg-surface-200
        border border-surface-300 enabled:hover:border-surface-300 enabled:active:border-surface-300
        text-surface-400 enabled:hover:text-surface-500 enabled:active:text-surface-600
        dark:bg-transparent dark:enabled:hover:bg-surface-800 dark:enabled:active:bg-surface-700
        dark:border-surface-700 dark:enabled:hover:border-surface-700 dark:enabled:active:border-surface-700
        dark:text-surface-400 dark:enabled:hover:text-surface-300 dark:enabled:active:text-surface-200
        transition-colors duration-200 disabled:pointer-events-none
        p-stacked:relative p-stacked:flex-auto p-stacked:border-none
        p-stacked:p-0 p-stacked:rounded-br-[5px]
        p-horizontal:order-1 p-horizontal:rounded-s-md p-horizontal:border-e-0
        p-vertical:py-2 p-vertical:order-3 p-vertical:rounded-ee-md p-vertical:rounded-es-md p-vertical:w-full p-vertical:border-t-0`,
    decrementIcon: ``
});
</script>

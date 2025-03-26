<template>
    <AutoComplete
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #dropdownicon>
            <ChevronDownIcon />
        </template>
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </AutoComplete>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@primevue/icons/chevrondown';
import AutoComplete, { type AutoCompletePassThroughOptions, type AutoCompleteProps } from 'primevue/autocomplete';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AutoCompleteProps {}
defineProps<Props>();

const theme = ref<AutoCompletePassThroughOptions>({
    root: `inline-flex p-fluid:flex`,
    pcInputText: {
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
            p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
            p-large:text-lg p-large:px-[0.875rem] p-large:py-[0.625rem]
            p-has-dropdown:flex-auto p-has-dropdown:w-[1%] p-has-dropdown:rounded-e-none
            transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`
    },
    inputMultiple: `m-0 list-none cursor-text overflow-hidden flex items-center flex-wrap
        px-3 py-1 not-p-empty:px-1 gap-1 text-surface-700 dark:text-surface-0 bg-surface-0 dark:bg-surface-950
        border border-surface-300 dark:border-surface-700 rounded-md p-has-dropdown:rounded-e-none w-full
        hover:border-surface-400 dark:hover:border-surface-600 p-focus:border-primary
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        p-disabled:pointer-events-none p-disabled:bg-surface-200 p-disabled:text-surface-500 dark:p-disabled:bg-surface-700 dark:p-disabled:text-surface-400
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]
        transition-colors duration-200 outline-none`,
    chipItem: ``,
    pcChip: {
        root: `inline-flex items-center rounded-sm gap-2 px-3 py-1
            bg-surface-100 dark:bg-surface-800
            text-surface-800 dark:text-surface-0
            has-[img]:pt-1 has-[img]:pb-1
            p-focus:bg-surface-200 p-focus:text-surface-800 dark:p-focus:bg-surface-700 dark:p-focus:text-surface-0
            p-removable:pe-2`,
        image: `rounded-full w-8 h-8 -ms-2`,
        icon: `text-surface-800 dark:bg-surface-0 text-base w-4 h-4`,
        label: ``,
        removeIcon: `cursor-pointer text-base w-4 h-4 rounded-full
            text-surface-800 dark:text-surface-0
            focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`
    },
    chipIcon: ``,
    inputChip: `flex-auto inline-flex py-1 max-w-30`,
    input: `border-none outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full text-inherit
        placeholder:text-surface-500 dark:placeholder:text-surface-400`,
    loader: `absolute top-1/2 -mt-2 end-3 p-has-dropdown:end-[3.25rem]`,
    dropdown: `cursor-pointer inline-flex items-center justify-center select-none overflow-hidden relative w-10 shrink-0 rounded-e-md
        border border-s-0 border-surface-300 dark:border-surface-700
        bg-surface-100 enabled:hover:bg-surface-200 enabled:active:bg-surface-300
        text-surface-600 enabled:hover:text-surface-700 enabled:hover:active:text-surface-800
        dark:bg-surface-800 dark:enabled:hover:bg-surface-700 dark:enabled:active:bg-surface-600
        dark:text-surface-300 dark:enabled:hover:text-surface-200 dark:enabled:active:text-surface-100
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        transition-colors duration-200`,
    dropdownIcon: ``,
    overlay: `p-portal-self:min-w-full absolute top-0 left-0 rounded-md
        bg-surface-0 dark:bg-surface-900
        border border-surface-200 dark:border-surface-700
        text-surface-700 dark:text-surface-0
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]`,
    virtualScroller: ``,
    listContainer: `overflow-auto`,
    list: `m-0 p-1 list-none flex flex-col gap-[2px]`,
    optionGroup: `m-0 px-3 py-2 text-surface-500 dark:text-surface-400 font-semibold bg-transparent`,
    option: `cursor-pointer whitespace-nowrap relative overflow-hidden flex items-center px-3 py-2 rounded-sm
        text-surface-700 dark:text-surface-0 bg-transparent border-none
        p-focus:bg-surface-100 dark:p-focus:bg-surface-800 p-focus:text-surface-800 dark:p-focus:text-surface-0
        p-selected:bg-highlight p-focus:p-selected:bg-highlight-emphasis
        transition-colors duration-200`,
    emptyMessage: `px-3 py-2`,
    searchResultMessage: ``,
    selectedMessage: ``,
    transition: {
        enterFromClass: 'opacity-0 scale-y-75',
        enterActiveClass: 'transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
});
</script>

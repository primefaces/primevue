<template>
    <Tree
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #togglericon="{ expanded }">
            <ChevronDownIcon v-if="expanded" />
            <ChevronRightIcon v-else />
        </template>
        <template #filtericon>
            <SearchIcon class="text-surface-400" />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Tree>
</template>

<script setup lang="ts">
import ChevronDownIcon from '@primevue/icons/chevrondown';
import ChevronRightIcon from '@primevue/icons/chevronright';
import SearchIcon from '@primevue/icons/search';
import Tree, { type TreePassThroughOptions, type TreeProps } from 'primevue/tree';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TreeProps {}
defineProps<Props>();

const theme = ref<TreePassThroughOptions>({
    root: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 p-4
        p-scrollable:flex p-scrollable:flex-1 p-scrollable:h-full p-scrollable:flex-col`,
    pcFilterContainer: {
        root: `relative mb-2`
    },
    pcFilterInput: {
        root: `w-full appearance-none rounded-md outline-hidden
            bg-surface-0 dark:bg-surface-950
            text-surface-700 dark:text-surface-0
            placeholder:text-surface-500 dark:placeholder:text-surface-400
            border border-surface-300 dark:border-surface-700
            hover:border-surface-400 dark:hover:border-surface-600
            focus:border-primary
            disabled:bg-surface-200 disabled:text-surface-500
            dark:disabled:bg-surface-700 dark:disabled:text-surface-400
            ps-3 pe-10 py-2 p-fluid:w-full
            transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`
    },
    pcFilterIconContainer: {
        root: `absolute top-1/2 -mt-2 leading-none end-3 z-1`
    },
    wrapper: `overflow-auto p-scrollable:flex-1`,
    rootChildren: `flex flex-col list-none m-0 gap-[4px] pt-[2px] pb-0 px-0`,
    node: `p-0 outline-none focus-visible:*:first:outline focus-visible:*:first:-outline-offset-1 focus-visible:*:first:outline-primary`,
    nodeContent: `group rounded-md px-2 py-1 flex items-center text-surface-700 dark:text-surface-0 gap-1 transition-colors duration-200
        hover:p-selectable:not-p-selected:bg-surface-100 hover:p-selectable:not-p-selected:text-surface-700 
        dark:hover:p-selectable:not-p-selected:bg-surface-800 dark:hover:p-selectable:not-p-selected:text-surface-0
        p-selected:bg-highlight 
        p-selectable:cursor-pointer p-selectable:select-none`,
    nodeToggleButton: `cursor-pointer select-none inline-flex justify-center rounded-full items-center overflow-hidden relative flex-shrink-0
        w-7 h-7 p-0 p-leaf:invisible transition-colors duration-200 border-none
        bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800
        group-p-selected:hover:bg-surface-0 dark:group-p-selected:hover:bg-surface-900 group-p-selected:hover:text-primary
        text-surface-500 dark:text-surface-400 hover:text-surface-600 dark:hover:text-surface-300
        group-p-selected:text-inherit`,
    nodeToggleIcon: ``,
    nodeIcon: `text-surface-500 dark:text-surface-400 group-p-selected:text-primary
        group-hover:group-p-selectable:not-group-p-selected:text-surface-600 
        dark:group-hover:group-p-selectable:not-group-p-selected:text-surface-300
        transition-colors duration-200`,
    nodeLabel: ``,
    pcNodeCheckbox: {
        root: `relative inline-flex select-none w-5 h-5 align-bottom`,
        input: `peer cursor-pointer disabled:cursor-default appearance-none 
            absolute start-0 top-0 w-full h-full m-0 p-0 opacity-0 z-10
            border border-transparent rounded-xs`,
        box: `flex justify-center items-center rounded-sm w-5 h-5
            border border-surface-300 dark:border-surface-700
            bg-surface-0 dark:bg-surface-950
            text-surface-700 dark:text-surface-0
            peer-enabled:peer-hover:border-surface-400 dark:peer-enabled:peer-hover:border-surface-600
            p-checked:border-primary p-checked:bg-primary p-checked:text-primary-contrast
            peer-enabled:peer-hover:p-checked:bg-primary-emphasis peer-enabled:peer-hover:p-checked:border-primary-emphasis
            shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200`,
        icon: `text-sm w-[0.875rem] h-[0.875rem] transition-none`
    },
    nodeChildren: `flex flex-col list-none m-0 gap-[2px] pt-[2px] pe-0 pb-0 ps-4`,
    mask: `bg-black/50 text-surface-200 absolute z-10 flex items-center justify-center`,
    loadingIcon: `text-[2rem] h-8 w-8`
});
</script>

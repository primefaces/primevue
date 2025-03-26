<template>
    <Select unstyled :pt="theme">
        <template #dropdownicon>
            <AngleDown />
        </template>
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Select>
</template>

<script setup lang="ts">
import AngleDown from '@primevue/icons/search';
import Select from 'primevue/select';
import { ref } from 'vue';

const theme = ref({
    root: `inline-flex cursor-pointer relative select-none rounded-xs p-fluid:flex
        bg-surface-0 dark:bg-surface-950
        border border-surface-500 dark:border-surface-600
        p-focus:outline-2 p-focus:outline-primary p-focus:outline-offset-0
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800`,
    label: `block whitespace-nowrap overflow-hidden flex-auto w-[1%]
        py-1 px-2 overflow-ellipsis text-sm
        p-clearable:pe-7 p-empty:overflow-hidden p-empty:opacity-0 p-editable:cursor-default
        text-surface-950 dark:text-surface-0 bg-transparent border-none outline-none
        p-placeholder:text-surface-500 dark:p-placeholder:text-surface-300 font-semibold`,
    dropdown: `flex items-center justify-center shrink-0 bg-transparent
        text-surface-500 w-10 rounded-e-md`,
    overlay: `absolute top-0 left-0 rounded-xs p-portal-self:min-w-full overflow-hidden
        bg-surface-0 dark:bg-surface-900
        border border-surface-300 dark:border-surface-600
        text-surface-900 dark:text-surface-0
        shadow-xl`,
    header: `pt-2 pb-1 px-4`,
    listContainer: `overflow-auto`,
    list: `m-0 p-0 list-none gap-[2px] flex flex-col`,
    optionGroup: `m-0 px-3 py-2 bg-transparent text-surface-500 dark:text-surface-400 font-semibold`,
    optionGroupLabel: ``,
    option: `cursor-pointer font-normal whitespace-nowrap relative overflow-hidden flex items-center
        px-2 py-1 border-none text-surface-900 dark:text-surface-0 bg-transparent text-sm
        p-focus:bg-highlight
        p-selected:bg-primary p-selected:text-primary-contrast
        p-focus:p-selected:bg-primary p-focus:p-selected:text-primary-contrast`,
    optionLabel: ``,
    optionCheckIcon: `relative -ms-[0.375rem] me-[0.375rem] text-surface-700 dark:text-surface-0`,
    optionBlankIcon: ``,
    emptyMessage: `px-3 py-2`,
    virtualScroller: ``,
    transition: {
        enterFromClass: 'opacity-0 translate-y-10',
        enterActiveClass: 'transition duration-400 ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-200 ease-linear',
        leaveToClass: 'opacity-0'
    }
});
</script>

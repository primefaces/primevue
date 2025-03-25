<template>
    <Select unstyled :pt="theme">
        <template #dropdownicon>
            <ChevronDownIcon class="size-5" />
        </template>
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Select>
</template>

<script setup>
import ChevronDownIcon from '@primevue/icons/chevrondown';
import Select from 'primevue/select';
import { ref } from 'vue';

const theme = ref({
    root: `inline-flex cursor-pointer relative select-none rounded-md p-fluid:flex
        bg-primary border border-primary
        transition-colors duration-200`,
    label: `block whitespace-nowrap overflow-hidden flex-auto w-[1%]
        py-3 px-3 overflow-ellipsis 
        p-clearable:pe-7 p-empty:overflow-hidden p-empty:opacity-0 p-editable:cursor-default
        text-primary-contrast bg-transparent border-none outline-none font-semibold
        p-placeholder:text-primary-contrast`,
    dropdown: `flex items-center justify-center shrink-0 bg-transparent
        text-primary-contrast w-10 rounded-e-md`,
    overlay: `absolute top-0 left-0 rounded-b-md p-portal-self:min-w-full -mt-2
        text-surface-700 dark:text-surface-0
        bg-linear-to-b from-primary to-primary-800
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]`,
    listContainer: `overflow-auto`,
    list: `m-0 py-2 list-none gap-[2px] flex flex-col`,
    optionGroupLabel: ``,
    option: `cursor-pointer font-normal whitespace-nowrap relative overflow-hidden flex items-center
        px-3 py-2 border-none text-primary-contrast
        p-focus:bg-white/20 font-semibold
        p-selected:bg-w p-focus:p-selected:bg-highlight-emphasis
        transition-colors duration-200`,
    optionLabel: ``,
    optionCheckIcon: `relative -ms-[0.125rem] me-[0.375rem] text-primary-contrast`,
    optionBlankIcon: `relative -ms-[0.125rem] me-[0.375rem]`,
    emptyMessage: `px-3 py-2`,
    virtualScroller: ``,
    transition: {
        enterFromClass: 'opacity-0 scale-y-10 rotate-25',
        enterActiveClass: 'transition duration-500 ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
});
</script>

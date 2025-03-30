<template>
    <ToggleButton
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </ToggleButton>
</template>

<script setup lang="ts">
import ToggleButton, { type ToggleButtonPassThroughOptions, type ToggleButtonProps } from 'primevue/togglebutton';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ToggleButtonProps {}
defineProps<Props>();

const theme = ref<ToggleButtonPassThroughOptions>({
    root: `inline-flex items-center justify-center overflow-hidden relative cursor-pointer select-none
        border border-surface-100 dark:border-surface-950 rounded-md
        bg-surface-100 dark:bg-surface-950
        text-surface-500 dark:text-surface-400
        p-checked:text-surface-700 dark:p-checked:text-surface-0
        text-base font-medium
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        disabled:cursor-default
        disabled:bg-surface-200 disabled:border-surface-200 disabled:text-surface-500
        disabled:dark:bg-surface-700 disabled:dark:border-surface-700 disabled:dark:text-surface-400
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        transition-colors duration-200
        p-1 p-small:text-sm p-large:text-lg
    `,
    content: `relative flex-auto inline-flex items-center justify-center gap-2 py-1 px-3
        rounded-md transition-colors duration-200
        p-checked:bg-surface-0 dark:p-checked:bg-surface-800 p-checked:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.02),0px_1px_2px_0px_rgba(0,0,0,0.04)]`,
    icon: ``,
    label: ``
});
</script>

<template>
    <Checkbox
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #icon="{ checked, indeterminate, dataP }">
            <CheckIcon v-if="checked" :class="theme.icon" :data-p="dataP" />
            <MinusIcon v-else-if="indeterminate" :class="theme.icon" :data-p="dataP" />
        </template>
    </Checkbox>
</template>

<script setup lang="ts">
import CheckIcon from '@primevue/icons/check';
import MinusIcon from '@primevue/icons/minus';
import Checkbox, { type CheckboxPassThroughOptions, type CheckboxProps } from 'primevue/checkbox';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ CheckboxProps {}
defineProps<Props>();

const theme = ref<CheckboxPassThroughOptions>({
    root: `relative inline-flex select-none w-5 h-5 align-bottom
        p-small:w-4 p-small:h-4
        p-large:w-6 p-large:h-6`,
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
        peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary peer-focus-visible:outline
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        p-disabled:bg-surface-200 dark:p-disabled:bg-surface-700 p-disabled:border-surface-300 dark:p-disabled:border-surface-500 p-disabled:text-surface-500 dark:p-disabled:text-surface-400
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200
        p-small:w-4 p-small:h-4
        p-large:w-6 p-large:h-6`,
    icon: `text-sm w-[0.875rem] h-[0.875rem] transition-none
        p-small:w-3 p-small:h-3
        p-large:w-4 p-large:h-4`
});
</script>

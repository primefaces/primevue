<template>
    <Tag
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Tag>
</template>

<script setup lang="ts">
import Tag, { type TagPassThroughOptions, type TagProps } from 'primevue/tag';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TagProps {}
defineProps<Props>();

const theme = ref<TagPassThroughOptions>({
    root: `inline-flex items-center justify-center text-sm font-bold py-1 px-2 rounded-md gap-1 p-rounded:rounded-2xl
        bg-primary-100 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300
        p-success:bg-green-100 dark:p-success:bg-green-500/15 p-success:text-green-700 dark:p-success:text-green-300
        p-info:bg-sky-100 dark:p-info:bg-sky-500/15 p-info:text-sky-700 dark:p-info:text-sky-300
        p-warn:bg-orange-100 dark:p-warn:bg-orange-500/15 p-warn:text-orange-700 dark:p-warn:text-orange-300
        p-danger:bg-red-100 dark:p-danger:bg-red-500/15 p-danger:text-red-700 dark:p-danger:text-red-300
        p-secondary:bg-surface-100 dark:p-secondary:bg-surface-800 p-secondary:text-surface-600 dark:p-secondary:text-surface-300
        p-contrast:bg-surface-950 dark:p-contrast:bg-surface-0 p-contrast:text-surface-0 dark:p-contrast:text-surface-950`,
    icon: `text-xs w-3 h-3`
});
</script>

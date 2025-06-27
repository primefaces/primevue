<template>
    <Badge
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Badge>
</template>

<script setup lang="ts">
import Badge, { type BadgePassThroughOptions, type BadgeProps } from 'primevue/badge';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ BadgeProps {}
defineProps<Props>();

const theme = ref<BadgePassThroughOptions>({
    root: `inline-flex items-center justify-center rounded-md
        py-0 px-2 text-xs font-bold min-w-6 h-6
        bg-primary text-primary-contrast
        p-empty:min-w-2 p-empty:h-2 p-empty:rounded-full p-empty:p-0
        p-circle:p-0 p-circle:rounded-full
        p-secondary:bg-surface-100 dark:p-secondary:bg-surface-800 p-secondary:text-surface-600 dark:p-secondary:text-surface-300
        p-success:bg-green-500 dark:p-success:bg-green-400 p-success:text-white dark:p-success:text-green-950
        p-info:bg-sky-500 dark:p-info:bg-sky-400 p-info:text-white dark:p-info:text-sky-950
        p-warn:bg-orange-500 dark:p-warn:bg-orange-400 p-warn:text-white dark:p-warn:text-orange-950
        p-danger:bg-red-500 dark:p-danger:bg-red-400 p-danger:text-white dark:p-danger:text-red-950
        p-contrast:bg-surface-950 dark:p-contrast:bg-white p-contrast:text-white dark:p-contrast:text-surface-950
        p-small:text-[0.625rem] p-small:min-w-5 p-small:h-5
        p-large:text-sm p-large:min-w-7 p-large:h-7
        p-xlarge:text-base p-xlarge:min-w-8 p-xlarge:h-8`
});
</script>

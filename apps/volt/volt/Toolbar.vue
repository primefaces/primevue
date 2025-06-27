<template>
    <Toolbar
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Toolbar>
</template>

<script setup lang="ts">
import Toolbar, { type ToolbarPassThroughOptions, type ToolbarProps } from 'primevue/toolbar';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ToolbarProps {}
defineProps<Props>();

const theme = ref<ToolbarPassThroughOptions>({
    root: `flex items-center justify-between flex-wrap p-3 gap-2
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0
        border border-surface-200 dark:border-surface-700 rounded-md`,
    start: `flex items-center`,
    center: `flex items-center`,
    end: `flex items-center`
});
</script>

<template>
    <Skeleton
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    />
</template>

<script setup lang="ts">
import Skeleton, { type SkeletonPassThroughOptions, type SkeletonProps } from 'primevue/skeleton';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ SkeletonProps {}
defineProps<Props>();

const theme = ref<SkeletonPassThroughOptions>({
    root: `overflow-hidden bg-surface-200 dark:bg-surface-700 animate-pulse rounded-md p-circle:rounded-full`
});
</script>

<template>
    <Skeleton
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    />
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `overflow-hidden bg-surface-200 dark:bg-surface-700 animate-pulse rounded-md p-circle:rounded-full`
});
</script>

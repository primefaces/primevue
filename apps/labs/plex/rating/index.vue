<template>
    <Rating
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Rating>
</template>

<script setup>
import Rating from 'primevue/rating';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `relative flex items-center gap-1 p-disabled:opacity-60 p-disabled:pointer-events-none p-readonly:pointer-events-none`,
    option: `inline-flex items-center cursor-pointer rounded-full
        p-focus-visible:outline p-focus-visible:outline-1 p-focus-visible:outline-offset-2 p-focus-visible:outline-primary`,
    onIcon: `text-base w-4 h-4 transition-colors duration-200 text-primary`,
    offIcon: `text-surface-500 dark:text-surface-400 text-base w-4 h-4 transition-colors duration-200`
});
</script>

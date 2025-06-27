<template>
    <ProgressBar
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </ProgressBar>
</template>

<script setup lang="ts">
import ProgressBar, { type ProgressBarPassThroughOptions, type ProgressBarProps } from 'primevue/progressbar';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ProgressBarProps {}
defineProps<Props>();

const theme = ref<ProgressBarPassThroughOptions>({
    root: `relative overflow-hidden h-5 bg-surface-200 dark:bg-surface-700 rounded-md`,
    value: `m-0 bg-primary
        p-determinate:h-full p-determinate:w-0 p-determinate:absolute p-determinate:flex p-determinate:items-center p-determinate:justify-center 
        p-determinate:overflow-hidden p-determinate:transition-[width] p-determinate:duration-1000 p-determinate:ease-in-out
        p-indeterminate:before:content-[''] p-indeterminate:before:absolute p-indeterminate:before:bg-inherit p-indeterminate:before:top-0 p-indeterminate:before:start-0 p-indeterminate:before:bottom-0 p-indeterminate:before:will-change-[inset-inline-start,inset-inline-end]
        p-indeterminate:before:animate-[p-progressbar-indeterminate-anim_2.1s_cubic-bezier(0.65,0.815,0.735,0.395)_infinite]
        p-indeterminate:after:content-[''] p-indeterminate:after:absolute p-indeterminate:after:bg-inherit p-indeterminate:after:top-0 p-indeterminate:after:start-0 p-indeterminate:after:bottom-0 p-indeterminate:after:will-change-[inset-inline-start,inset-inline-end]
        p-indeterminate:after:animate-[p-progressbar-indeterminate-anim-short_2.1s_cubic-bezier(0.165,0.84,0.44,1)_infinite]
        p-indeterminate:after:animate-delay-[1.15s]`,
    label: `text-primary-contrast text-xs font-semibold
        p-determinate:inline-flex`
});
</script>

<style>
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
</style>

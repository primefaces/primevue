<template>
    <ProgressSpinner
        unstyled
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </ProgressSpinner>
</template>

<script setup lang="ts">
import ProgressSpinner, {
    type ProgressSpinnerPassThroughOptions,
    type ProgressSpinnerProps
} from 'primevue/progressspinner'
import { ref } from 'vue'
import { ptViewMerge } from './utils'

interface Props extends /* @vue-ignore */ ProgressSpinnerProps {}
defineProps<Props>()

const theme = ref<ProgressSpinnerPassThroughOptions>({
    root: `relative mx-auto w-28 h-28 inline-block before:block before:pt-full`,
    spin: `absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full transform origin-center animate-spin`,
    circle: `text-red-500 progress-spinner-circle`
})
</script>

<style>

.progress-spinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {

    100%,
    0% {
        stroke: #ff5757;
    }

    40% {
        stroke: #696cff;
    }

    66% {
        stroke: #1ea97c;
    }

    80%,
    90% {
        stroke: #cc8925;
    }
}
</style>

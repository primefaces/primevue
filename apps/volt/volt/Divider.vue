<template>
    <Divider
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Divider>
</template>

<script setup lang="ts">
import Divider, { type DividerPassThroughOptions, type DividerProps } from 'primevue/divider';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ DividerProps {}
defineProps<Props>();

const theme = ref<DividerPassThroughOptions>({
    root: `p-horizontal:flex p-horizontal:w-full p-horizontal:relative p-horizontal:items-center p-horizontal:my-4 p-horizontal:mx-0 p-horizontal:py-0 p-horizontal:px-4
        p-horizontal:before:absolute p-horizontal:before:block p-horizontal:before:top-1/2 p-horizontal:before:start-0 p-horizontal:before:w-full
        p-horizontal:before:border-t p-horizontal:before:border-surface-200 dark:p-horizontal:before:border-surface-700
        p-vertical:min-h-full p-vertical:flex p-vertical:relative p-vertical:justify-center p-vertical:my-0 p-vertical:mx-4 p-vertical:py-2 p-vertical:px-0
        p-vertical:before:absolute p-vertical:before:block p-vertical:before:top-0 p-vertical:before:start-1/2 p-vertical:before:h-full
        p-vertical:before:border-s p-vertical:before:border-surface-200 dark:p-vertical:before:border-surface-700
        p-solid:before:border-solid p-dashed:before:border-dashed p-dotted:before:border-dotted`,
    content: `z-10 bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        p-horizontal:py-0 p-horizontal:px-2 p:vertical:py-2 p:vertical:px-0`
});
</script>

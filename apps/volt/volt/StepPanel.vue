<template>
    <StepPanel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </StepPanel>
</template>

<script setup lang="ts">
import StepPanel, { type StepPanelPassThroughOptions, type StepPanelProps } from 'primevue/steppanel';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ StepPanelProps {}
defineProps<Props>();

const theme = ref<StepPanelPassThroughOptions>({
    root: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0 p-vertical:flex p-vertical:flex-auto`,
    content: `w-full ps-4`,
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]',
        enterToClass: 'max-h-[1000px]',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: 'overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]',
        leaveToClass: 'max-h-0'
    }
});
</script>

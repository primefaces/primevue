<template>
    <Fieldset
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #togglericon="{ collapsed }">
            <PlusIcon v-if="collapsed" :class="theme.toggleIcon" />
            <MinusIcon v-else :class="theme.toggleIcon" />
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Fieldset>
</template>

<script setup lang="ts">
import MinusIcon from '@primevue/icons/minus';
import PlusIcon from '@primevue/icons/plus';
import Fieldset, { type FieldsetPassThroughOptions, type FieldsetProps } from 'primevue/fieldset';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ FieldsetProps {}
defineProps<Props>();

const theme = ref<FieldsetPassThroughOptions>({
    root: `border border-surface-200 dark:border-surface-700 rounded-md
        bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        px-[1.125rem] pt-0 pb-[1.125rem]`,
    legend: `border border-transparent rounded-md px-3 py-2 p-toggleable:p-0
        transition-colors duration-200`,
    toggleButton: `select-none overflow-hidden relative group cursor-pointer
        flex items-center justify-center gap-2
        px-3 py-2
        border-none rounded-md
        bg-surface-0 dark:bg-surface-900
        hover:bg-surface-100 dark:hover:bg-surface-800
        text-surface-700 dark:text-surface-0
        hover:text-surface-800 dark:hover:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        transition-colors duration-200`,
    toggleIcon: `text-surface-500 dark:text-surface-400 transition-colors duration-200
        group-hover:text-surface-600 dark:group-hover:text-surface-300`,
    legendLabel: `font-semibold`,
    contentContainer: ``,
    content: `p-0`,
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

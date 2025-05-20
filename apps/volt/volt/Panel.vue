<template>
    <Panel
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #togglebutton="{ collapsed, toggleCallback, keydownCallback }">
            <SecondaryButton variant="text" rounded @click="toggleCallback" @keydown="keydownCallback">
                <template #icon>
                    <PlusIcon v-if="collapsed" />
                    <MinusIcon v-else />
                </template>
            </SecondaryButton>
        </template>
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Panel>
</template>

<script setup lang="ts">
import MinusIcon from '@primevue/icons/minus';
import PlusIcon from '@primevue/icons/plus';
import Panel, { type PanelPassThroughOptions, type PanelProps } from 'primevue/panel';
import { ref } from 'vue';
import SecondaryButton from './SecondaryButton.vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ PanelProps {}
defineProps<Props>();

const theme = ref<PanelPassThroughOptions>({
    root: `border border-surface-200 dark:border-surface-700 rounded-md
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0`,
    header: `flex justify-between items-center p-[1.125rem] p-toggleable:py-[0.375rem] p-toggleable:px-[1.125rem]`,
    title: `leading-none font-semibold`,
    headerActions: `flex items-center gap-1`,
    contentContainer: ``,
    content: `pt-0 pb-[1.125rem] px-[1.125rem] `,
    footer: `pt-0 pb-[1.125rem] px-[1.125rem] `,
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

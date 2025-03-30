<template>
    <Timeline
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Timeline>
</template>

<script setup lang="ts">
import Timeline, { type TimelinePassThroughOptions, type TimelineProps } from 'primevue/timeline';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TimelineProps {}
defineProps<Props>();

const theme = ref<TimelinePassThroughOptions>({
    root: `flex flex-col flex-grow
        p-horizontal:flex-row`,
    event: `group flex relative min-h-20 last:min-h-0
        p-right:flex-row-reverse
        p-horizontal:flex-col p-horizontal:flex-1 p-horizontal:last:flex-none
        p-bottom:flex-col-reverse
        p-vertical:p-alternate:even:flex-row-reverse
        p-horizontal:p-alternate:even:flex-col-reverse`,
    eventOpposite: `flex-1
        p-left:text-end p-right:text-start
        p-vertical:py-0 p-vertical:px-4 p-vertical:leading-none
        p-vertical:p-alternate:group-odd:text-end  p-vertical:p-alternate:group-even:text-start
        p-horizontal:py-4 p-horizontal:px-0`,
    eventSeparator: `flex-none flex flex-col items-center p-horizontal:flex-row`,
    eventMarker: `inline-flex items-center justify-center relative self-baseline
        border-2 rounded-full border-surface-200 dark:border-surface-700 w-[1.125rem] h-[1.125rem]
        bg-surface-0 dark:bg-surface-900
        before:rounded-full before:w-[0.375rem] before:h-[0.375rem] before:bg-primary
        after:absolute after:w-full after:h-full after:rounded-full after:shadow-[0px_0.5px_0px_0px_rgba(0,0,0,0.06),0px_1px_1px_0px_rgba(0,0,0,0.12)]
        p-horizontal:flex-row`,
    eventConnector: `flex-grow bg-surface-200 dark:bg-surface-700
        p-vertical:w-[2px]
        p-horizontal:w-full p-horizontal:h-[2px]`,
    eventContent: `flex-1
        p-left:text-start p-right:text-end
        p-vertical:py-0 p-vertical:px-4 p-vertical:leading-none
        p-vertical:p-alternate:group-odd:text-start p-vertical:p-alternate:group-even:text-end
        p-horizontal:py-4 p-horizontal:px-0`
});
</script>

<template>
    <Card
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `flex flex-col rounded-xl
        bg-surface-0 dark:bg-surface-900 
        text-surface-700 dark:text-surface-0
        shadow-md`,
    header: ``,
    body: `p-5 flex flex-col gap-2`,
    caption: `flex flex-col gap-2`,
    title: `font-medium text-xl`,
    subtitle: `text-surface-500 dark:text-surface-400`,
    content: ``,
    footer: ``
});
</script>

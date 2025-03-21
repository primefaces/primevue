<template>
    <Inplace
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Inplace>
</template>

<script setup>
import Inplace from 'primevue/inplace';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``,
    display: `inline-block cursor-pointer border border-transparent px-3 py-2 rounded-md p-disabled:pointer-events-none
        hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-800 dark:hover:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        transition-colors duration-200`,
    content: `block`
});
</script>

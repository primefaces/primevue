<template>
    <Tabs
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </Tabs>
</template>

<script setup>
import Tabs from 'primevue/tabs';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

const theme = ref({
    root: `flex flex-col`
});
</script>

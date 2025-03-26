<template>
    <Accordion
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </Accordion>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

const theme = ref({
    root: ``
});
</script>

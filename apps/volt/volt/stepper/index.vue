<template>
    <Stepper
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </Stepper>
</template>

<script setup>
import Stepper from 'primevue/stepper';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``,
    separator: ``
});
</script>

<template>
    <ButtonGroup
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </ButtonGroup>
</template>

<script setup>
import ButtonGroup from 'primevue/buttongroup';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``
});
</script>

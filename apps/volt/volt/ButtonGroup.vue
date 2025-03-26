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
    root: `*:rounded-none *:first:rounded-s-md *:last:rounded-e-md
        *:focus-visible:relative *:focus-visible:z-10 *:not-last:border-r-0`
});
</script>

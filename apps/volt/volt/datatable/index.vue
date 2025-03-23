<template>
    <DataTable
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <slot></slot>
    </DataTable>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``
});
</script>

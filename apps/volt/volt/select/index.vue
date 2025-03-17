<template>
    <Select
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Select>
</template>

<script setup>
import Select from 'primevue/select';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``,
    label: ``,
    clearIcon: ``,
    dropdown: ``,
    dropdownIcon: ``,
    loadingIcon: ``,
    overlay: ``,
    header: ``,
    pcFilterContainer: ``,
    pcFilter: ``,
    pcFilterIconContainer: ``,
    filterIcon: ``,
    listContainer: ``,
    virtualScroller: ``,
    list: ``,
    optionGroup: ``,
    optionGroupLabel: ``,
    option: ``,
    optionLabel: ``,
    optionCheckIcon: ``,
    optionBlankIcon: ``,
    emptyMessage: ``,
    root: ``,
});
</script>

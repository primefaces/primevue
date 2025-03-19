<template>
    <AutoComplete
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </AutoComplete>
</template>

<script setup>
import AutoComplete from 'primevue/autocomplete';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``,
    pcInputText: ``,
    inputMultiple: ``,
    chipItem: ``,
    pcChip: ``,
    chipIcon: ``,
    inputChip: ``,
    loader: ``,
    dropdown: ``,
    dropdownIcon: ``,
    overlay: ``,
    virtualScroller: ``,
    listContainer: ``,
    list: ``,
    optionGroup: ``,
    option: ``,
    emptyMessage: ``,
    searchResultMessage: ``,
    selectedMessage: ``
});
</script>

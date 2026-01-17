<template>
    <ButtonGroup
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName as unknown" v-bind="slotProps ?? {}" />
        </template>
    </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup, { type ButtonGroupPassThroughOptions, type ButtonGroupProps, type ButtonGroupSlots } from 'primevue/buttongroup';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ButtonGroupProps {}
defineProps<Props>();
interface Slots extends /* @vue-ignore */ ButtonGroupSlots {}
defineSlots<Slots>();

const theme = ref<ButtonGroupPassThroughOptions>({
    root: `*:rounded-none *:first:rounded-s-md *:last:rounded-e-md
        *:focus-visible:relative *:focus-visible:z-10 *:not-last:border-r-0`
});
</script>

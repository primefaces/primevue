<template>
    <Message
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Message>
</template>

<script setup>
import Message from 'primevue/message';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: ``,
    content: ``,
    icon: ``,
    text: ``,
    closeButton: ``,
    closeIcon: ``,
    transition: {
        enterFromClass: 'opacity-0',
        enterActiveClass: 'transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
        leaveToClass: 'max-h-0 opacity-0 !m-0'
    }
});
</script>

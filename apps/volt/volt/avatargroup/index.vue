<template>
    <AvatarGroup
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </AvatarGroup>
</template>

<script setup>
import AvatarGroup from 'primevue/avatargroup';
import { ref } from 'vue';
import { ptViewMerge } from '../utils';

const theme = ref({
    root: `flex items-center *:border-2 *:border-surface-200 dark:*:border-surface-700 *:-ms-3`
});
</script>

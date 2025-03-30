<template>
    <AvatarGroup
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </AvatarGroup>
</template>

<script setup lang="ts">
import AvatarGroup, { type AvatarGroupPassThroughOptions, type AvatarGroupProps } from 'primevue/avatargroup';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AvatarGroupProps {}
defineProps<Props>();

const theme = ref<AvatarGroupPassThroughOptions>({
    root: `flex items-center *:border-2 *:border-surface-200 dark:*:border-surface-700 *:-ms-3`
});
</script>

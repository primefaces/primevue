<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const code = ref(`import Avatar from '@/volt/Avatar.vue';
import AvatarGroup from '@/volt/AvatarGroup.vue';
`);
</script>

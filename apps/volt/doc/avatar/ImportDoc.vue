<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Avatar from '@/volt/avatar';
import AvatarGroup from '@/volt/avatargroup';
`);
</script>

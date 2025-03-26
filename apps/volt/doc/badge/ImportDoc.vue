<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Badge from '@/volt/Badge.vue';
import OverlayBadge from '@/volt/OverlayBadge.vue';
`);
</script>

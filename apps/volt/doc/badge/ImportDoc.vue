<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script setup>
import { ref } from 'vue';

const code = ref(`import Badge from '@/volt/badge';
import OverlayBadge from '@/volt/overlaybadge';
`);
</script>

<template>
    <Menu :model="model">
        <!-- We can safely access additional keys on the object instead of it acting as any. -->
        <template #item="{ item }">{{ item.additionalData }}</template>
    </Menu>
</template>

<script setup lang="ts">
import { MenuItem } from 'primevue/menuitem/MenuItem';

const model: (MenuItem & { additionalData: Record<string, number> })[] = [
    {
        additionalData: {}
    }
];
</script>

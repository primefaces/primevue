<template>
    <Menu :items="model">
        <template #item="{ item }"> </template>
    </Menu>
</template>

<script setup lang="ts">
const model = [
    {
        a: 1
    }
];
</script>

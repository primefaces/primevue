<template>
    <div class="layout-footer">
        <div>
            <span>PrimeVue {{ version }} by </span>
            <a href="https://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">PrimeTek</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import pkg from '@/package.json';
import { ref } from 'vue';

const version = ref(pkg.version);
</script>

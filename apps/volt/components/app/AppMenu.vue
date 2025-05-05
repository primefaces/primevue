<template>
    <aside class="layout-sidebar" :class="{ active: active }">
        <nav>
            <ol class="layout-menu">
                <AppMenuItem :menu="menu"></AppMenuItem>
            </ol>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import menudata from '@/assets/data/menu.json';
import { ref } from 'vue';

const props = defineProps({
    active: {
        type: Boolean,
        default: true
    }
});

const menu = ref(menudata.data);
</script>

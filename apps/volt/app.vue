<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import EventBus from '@/layouts/AppEventBus';
import { onBeforeUnmount, onMounted } from 'vue';

const { layoutState } = useLayout();

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('p-dark');
    layoutState.darkTheme = !layoutState.darkTheme;

    EventBus.emit('dark-mode-toggle-complete');
};

const darkModeToggleListener = (event) => {
    if (!document.startViewTransition) {
        toggleDarkMode(event);
        return;
    }

    document.startViewTransition(() => toggleDarkMode(event));
};

onMounted(() => {
    EventBus.on('dark-mode-toggle', darkModeToggleListener);
});

onBeforeUnmount(() => {
    EventBus.off('dark-mode-toggle', darkModeToggleListener);
});
</script>

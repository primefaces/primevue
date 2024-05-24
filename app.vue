<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    mounted() {
        EventBus.on('dark-mode-toggle', this.darkModeToggleListener);
    },
    beforeUnmount() {
        EventBus.off('dark-mode-toggle', this.darkModeToggleListener);
    },
    methods: {
        darkModeToggleListener(event) {
            if (!document.startViewTransition) {
                this.toggleDarkMode(event);

                return;
            }

            document.startViewTransition(() => this.toggleDarkMode(event));
        },
        toggleDarkMode(event) {
            const isDark = event.dark;

            if (isDark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');

            this.$appState.darkTheme = isDark;

            EventBus.emit('dark-mode-toggle-complete');
        }
    }
};
</script>

<style lang="scss"></style>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/app/AppEventBus';

export default {
    mounted() {
        const itemString = localStorage.getItem(this.$appState.storageKey);
        const item = JSON.parse(itemString);

        if (item && item.darkTheme) {
            this.toggleDarkMode({ dark: true });
        }

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

            const itemString = localStorage.getItem(this.$appState.storageKey);
            const existingItem = itemString ? JSON.parse(itemString) : {};

            this.$appState.darkTheme = isDark;
            const item = {
                ...existingItem,
                darkTheme: isDark
            };

            localStorage.setItem(this.$appState.storageKey, JSON.stringify(item));
            EventBus.emit('dark-mode-toggle-complete');
        }
    }
};
</script>

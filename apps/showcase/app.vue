<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    setup() {
        const colorMode = useColorMode()
        return {
            colorMode
        }
    },
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
        toggleDarkMode() {
            const isDark = this.colorMode.preference !== 'dark';

            this.colorMode.preference = isDark ? 'dark' : 'light';
            this.$appState.darkTheme = isDark;

            EventBus.emit('dark-mode-toggle-complete');
        }
    }
};
</script>

<style lang="scss"></style>

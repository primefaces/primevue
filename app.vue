<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    beforeMount() {
        const isDark = localStorage['primevue-theme'] === 'dark' || (!('primevue-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDark) document.documentElement.classList.add('p-dark');
        else document.documentElement.classList.remove('p-dark');

        this.$appState.darkTheme = isDark;
    },
    mounted() {
        EventBus.on('theme-change', this.themeChangeListener);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    },
    methods: {
        themeChangeListener(event) {
            if (!document.startViewTransition) {
                this.applyTheme(event);

                return;
            }

            document.startViewTransition(() => this.applyTheme(event));
        },
        applyTheme(event) {
            const isDark = event.dark;

            if (isDark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');

            localStorage['primevue-theme'] = isDark ? 'dark' : 'light';
            this.$appState.darkTheme = isDark;
        }
    }
};
</script>

<style lang="scss"></style>

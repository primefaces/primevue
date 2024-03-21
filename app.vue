<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import { useColorScheme } from 'primevue/themes';

export default {
    beforeMount() {
        const isDark = localStorage['primevue-theme'] === 'dark' || (!('primevue-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        if (isDark) document.documentElement.classList.add('p-dark');
        else document.documentElement.classList.remove('p-dark');
        //@todo - set initial colorScheme
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
            const { toggleColorScheme } = useColorScheme();
            const newColorScheme = toggleColorScheme();

            localStorage['primevue-theme'] = newColorScheme;

            /*this.$appState.darkTheme = event.dark;

            if (event.dark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');*/
        }
    }
};
</script>

<style lang="scss"></style>

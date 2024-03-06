<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import { useColorScheme } from 'primevue/themes';

export default {
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

            toggleColorScheme();
            /*this.$appState.darkTheme = event.dark;

            if (event.dark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');*/
        }
    }
};
</script>

<style lang="scss"></style>

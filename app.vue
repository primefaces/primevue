<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    watch: {
        $route: {
            handler(to) {
                if (to.name === 'index') {
                    this.themeChangeListener({ theme: this.$appState.darkTheme ? 'lara-dark-green' : 'lara-light-green', dark: this.$appState.darkTheme });
                }
            }
        }
    },
    created() {
        useServerHead({
            link: [
                /*{
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: '/themes/lara-light-green/theme.css'
                }*/
                {
                    id: 'home-table-link',
                    rel: 'stylesheet',
                    href: '/styles/landing/themes/lara-light-green/theme.css'
                }
            ]
        });
    },
    mounted() {
        const preferredColorScheme = localStorage.getItem(this.$appState.colorSchemeKey);
        const prefersDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if ((preferredColorScheme === null && prefersDarkColorScheme) || preferredColorScheme === 'dark') {
            this.applyTheme({ theme: 'lara-dark-green', dark: true });
        }

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
            /*this.$primevue.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;

                EventBus.emit('theme-change-complete', { theme: event.theme, dark: event.dark });
            });*/
            // @todo
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
            document.documentElement.className = this.$appState.darkTheme ? 'p-dark' : '';
        }
    }
};
</script>

<style lang="scss"></style>

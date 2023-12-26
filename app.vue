<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    themeChangeListener: null,
    newsActivate: null,
    newsService: null,
    watch: {
        $route: {
            handler(to) {
                if (to.name === 'index') {
                    this.themeChangeListener({ theme: this.$appState.darkTheme ? 'lara-dark-green' : 'lara-light-green', dark: this.$appState.darkTheme });
                }
            }
        }
    },
    mounted() {
        this.themeChangeListener = (event) => {
            if (!document.startViewTransition) {
                this.applyTheme(event);

                return;
            }

            document.startViewTransition(() => this.applyTheme(event));
        };

        EventBus.on('theme-change', this.themeChangeListener);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
    },
    methods: {
        applyTheme(event) {
            this.$primevue.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;
                EventBus.emit('theme-change-complete', { theme: event.theme, dark: event.dark });
            });
        }
    }
};
</script>

<style lang="scss"></style>

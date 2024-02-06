<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';

export default {
    /*watch: {
        $route: {
            handler(to) {
                if (to.name === 'index') {
                    this.themeChangeListener({ theme: this.$appState.darkTheme ? 'aura-dark-green' : 'aura-light-green', dark: this.$appState.darkTheme });
                }
            }
        }
    },*/
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
            /*this.$primevue.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;

                EventBus.emit('theme-change-complete', { theme: event.theme, dark: event.dark });
            });*/
            // @todo
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
            
            if (event.dark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');
        }
    }
};
</script>

<style lang="scss"></style>

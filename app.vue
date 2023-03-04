<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
</template>

<script>
import News from '@/assets/data/news.json';
import EventBus from '@/layouts/AppEventBus';

export default {
    themeChangeListener: null,
    newsActivate: null,
    newsService: null,
    data() {
        return {
            layout: 'custom'
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                if (to.name === 'index') {
                    this.layout = 'custom';
                } else {
                    this.layout = 'default';
                }
            }
        }
    },
    mounted() {
        this.newsActivate = () => {
            this.$appState.announcement = News;
            const itemString = localStorage.getItem(this.$appState.storageKey);

            if (itemString) {
                const item = JSON.parse(itemString);

                if (!item.hiddenNews || item.hiddenNews !== News.id) {
                    this.$appState.newsActive = true;
                } else this.$appState.newsActive = false;
            } else {
                this.$appState.newsActive = true;
            }
        };

        this.themeChangeListener = (event) => {
            this.$primevue.changeTheme(this.$appState.theme, event.theme, 'theme-link', () => {
                this.$appState.theme = event.theme;
                this.$appState.darkTheme = event.dark;
            });
        };

        EventBus.on('theme-change', this.themeChangeListener);
        EventBus.on('news-activate', this.newsActivate);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
        EventBus.off('news-activate', this.newsActivate);
    }
};
</script>

<style lang="scss">
@import '@docsearch/css';
@import '@/assets/styles/layout/landing/landing.scss';
@import '@/assets/styles/layout/layout.scss';
</style>

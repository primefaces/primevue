<template>
    <router-view></router-view>
</template>

<script>
import EventBus from '@/AppEventBus';
import NewsService from '@/service/NewsService';

export default {
    themeChangeListener: null,
    newsActivate: null,
    newsService: null,
    data() {
        return {
            storageKey: 'primevue'
        }
    },
    created() {
        this.newsService = new NewsService();
    },
    mounted() {
        this.newsActivate = () => {
            this.newsService.fetchNews().then(data => {
                this.$appState.announcement = data;

                const itemString = localStorage.getItem(this.storageKey);
                if (itemString) {
                    const item = JSON.parse(itemString);
                    if (item.hiddenNews && item.hiddenNews !== data.id) {
                        this.$appState.newsActive = true;
                    }
                    else this.$appState.newsActive = false;
                }
                else {
                    this.$appState.newsActive = true;
                }
            });
        };

        this.themeChangeListener = (event) => {
            const elementId = 'theme-link';
            const linkElement = document.getElementById(elementId);
            const cloneLinkElement = linkElement.cloneNode(true);
            const newThemeUrl = linkElement.getAttribute('href').replace(this.$appState.theme, event.theme);

            cloneLinkElement.setAttribute('id', elementId + '-clone');
            cloneLinkElement.setAttribute('href', newThemeUrl);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', elementId);
            });
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
        
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
        };

        EventBus.on('theme-change', this.themeChangeListener);
        EventBus.on('news-activate', this.newsActivate);
    },
    beforeUnmount() {
        EventBus.off('theme-change', this.themeChangeListener);
        EventBus.off('news-activate', this.newsActivate);
    }
}
</script>

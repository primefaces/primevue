<template>
  <NuxtLayout v-if="$route.name !== 'index'">
    <NuxtPage />
  </NuxtLayout>
  <NuxtPage v-else />
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import NewsService from '@/service/NewsService';
import './public/themes/lara-light-blue/theme.css'
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
        console.log(process.env)
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
            console.log(this.$appState.theme);
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
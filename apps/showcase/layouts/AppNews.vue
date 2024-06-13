<template>
    <div v-if="$appState.newsActive" class="layout-news" :style="$appState.announcement.backgroundStyle">
        <div class="layout-news-container">
            <i></i>
            <div class="layout-news-content">
                <span class="layout-news-text" :style="$appState.announcement.textStyle">{{ $appState.announcement.content }}</span>
                <a class="layout-news-link" :href="$appState.announcement.linkHref">{{ $appState.announcement.linkText }}</a>
            </div>
            <a class="layout-news-close" :style="$appState.announcement.textStyle" @click="onClose">
                <span class="pi pi-times"></span>
            </a>
        </div>
    </div>
</template>

<script>
import News from '@/assets/data/news.json';

export default {
    mounted() {
        const itemString = localStorage.getItem(this.$appState.storageKey);

        if (itemString) {
            const item = JSON.parse(itemString);

            if (!item.hiddenNews || item.hiddenNews !== News.id) {
                this.$appState.newsActive = true;
                this.$appState.announcement = News;
            } else {
                this.$appState.newsActive = false;
            }
        } else {
            this.$appState.announcement = News;
            this.$appState.newsActive = true;
        }
    },
    methods: {
        onClose() {
            this.$appState.newsActive = false;
            const item = {
                hiddenNews: this.$appState.announcement.id
            };

            localStorage.setItem(this.$appState.storageKey, JSON.stringify(item));
        }
    }
};
</script>

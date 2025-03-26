<template>
    <div v-if="layoutState.newsActive" class="layout-news">
        <div class="layout-news-container">
            <i></i>
            <div class="layout-news-content">
                <span class="layout-news-text">{{ layoutState.announcement.content }}</span>
                <a v-if="layoutState.announcement.linkHref" class="layout-news-link" :href="layoutState.announcement.linkHref">{{ layoutState.announcement.linkText }}</a>
            </div>
            <a class="layout-news-close" @click="onClose">
                <span class="pi pi-times"></span>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import News from '@/assets/data/news.json';
import { onMounted } from 'vue';

const { layoutState } = useLayout();

onMounted(() => {
    const itemString = localStorage.getItem(layoutState.storageKey);

    if (itemString) {
        const item = JSON.parse(itemString);

        if (!item.hiddenNews || item.hiddenNews !== News.id) {
            layoutState.newsActive = true;
            layoutState.announcement = News;
        } else {
            layoutState.newsActive = false;
        }
    } else {
        layoutState.announcement = News;
        layoutState.newsActive = true;
    }
});

const onClose = () => {
    layoutState.newsActive = false;
    const item = {
        hiddenNews: layoutState.announcement.id
    };

    localStorage.setItem(layoutState.storageKey, JSON.stringify(item));
};
</script>

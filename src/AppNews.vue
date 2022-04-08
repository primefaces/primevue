<template>
    <div class="layout-news" :style="$appState.announcement.backgroundStyle">
        <i></i>
        <div class="layout-news-content">
            <span class="layout-news-text" :style="$appState.announcement.textStyle">{{$appState.announcement.content}}</span>
            <a class="layout-news-link" :href="$appState.announcement.linkHref">{{$appState.announcement.linkText}}</a>
        </div>
        <a class="layout-news-close" :style="$appState.announcement.textStyle" @click="onClose">
            <span class="pi pi-times"></span>
        </a>
    </div>
</template>

<script>
import EventBus from '@/AppEventBus';

export default {
    data() {
        return {
            storageKey: 'primevue',
            hovered: false
        }
    },
    mounted() {
        EventBus.emit('news-activate');
    },
    methods: {
        onClose() {
            this.$appState.newsActive = false;

            const item = {
                hiddenNews: this.$appState.announcement.id
            };
            localStorage.setItem(this.storageKey, JSON.stringify(item));
        }
    }
}
</script>
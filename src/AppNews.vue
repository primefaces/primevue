<template>
    <div class="layout-news" :style="$appState.announcement.backgroundStyle">
        <i></i>
        <div class="layout-news-content">
            <span class="layout-news-text" :style="$appState.announcement.textStyle">{{$appState.announcement.content}}</span>
            <a class="layout-news-link" :style="[$appState.announcement.linkStyle, hovered ? $appState.announcement.linkHoverStyle : '']" :href="$appState.announcement.linkHref"
                @mouseenter="hovered=true" @mouseleave="hovered=false">{{$appState.announcement.linkText}}</a>
        </div>
        <a class="layout-news-close" :style="newsTextStyleObject" @click="onClose">
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
    computed: {
        newsTextStyleObject() {
            if (this.$appState.announcement.textStyle) {
                const textStyle = this.$appState.announcement.textStyle.split(';');
                return [textStyle[0], textStyle[1]];
            }
            return [];
        },
        newsStyleObject() {
            return [this.$appState.announcement.linkStyle];
        },
        newsLinkHover() {
            return this.$appState.announcement.linkHoverStyle;
        }
    },
    watch: {
        '$appState.announcement'(newValue) {
            this.$appState.announcement = newValue;
        }
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

<style>
.layout-news-link:hover {
    text-decoration: newsLinkHover;
}
</style>
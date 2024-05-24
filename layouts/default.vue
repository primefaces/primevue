<template>
    <div :class="containerClass" :data-p-theme="$appState.theme">
        <AppNews />
        <AppTopBar @menubutton-click="onMenuButtonClick" />
        <div :class="['layout-mask', { 'layout-mask-active': sidebarActive }]" @click="onMaskClick"></div>
        <div class="layout-content">
            <app-menu :active="sidebarActive" />
            <div class="layout-content-slot">
                <slot></slot>
            </div>
        </div>
        <AppFooter />
        <Toast />
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />
    </div>
</template>

<script>
import DomHandler from '@/components/lib/utils/DomHandler';
import EventBus from '@/layouts/AppEventBus';
import AppFooter from './AppFooter.vue';
import AppMenu from './AppMenu.vue';
import AppNews from './AppNews.vue';
import AppTopBar from './AppTopBar.vue';

export default {
    data() {
        return {
            sidebarActive: false
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                if (!process.client || typeof window === 'undefined') {
                    return;
                }

                this.sidebarActive = false;
                DomHandler.unblockBodyScroll('blocked-scroll');
                this.$toast.removeAllGroups();
            }
        }
    },
    mounted() {
        EventBus.on('dark-mode-toggle', this.darkModeToggleListener);
    },
    beforeUnmount() {
        EventBus.off('dark-mode-toggle', this.darkModeToggleListener);
    },
    methods: {
        darkModeToggleListener(event) {
            if (!document.startViewTransition) {
                this.toggleDarkMode(event);

                return;
            }

            document.startViewTransition(() => this.toggleDarkMode(event));
        },
        toggleDarkMode(event) {
            const isDark = event.dark;

            if (isDark) document.documentElement.classList.add('p-dark');
            else document.documentElement.classList.remove('p-dark');

            this.$appState.darkTheme = isDark;

            EventBus.emit('dark-mode-toggle-complete');
        },
        onMenuButtonClick() {
            if (this.sidebarActive) {
                this.sidebarActive = false;
                DomHandler.unblockBodyScroll('blocked-scroll');
            } else {
                this.sidebarActive = true;
                DomHandler.blockBodyScroll('blocked-scroll');
            }
        },
        onMaskClick() {
            this.sidebarActive = false;
            DomHandler.unblockBodyScroll('blocked-scroll');
        },
        isOutdatedIE() {
            let ua = window.navigator.userAgent;

            if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
                return true;
            }

            return false;
        }
    },
    computed: {
        containerClass() {
            return [
                'layout-wrapper',
                {
                    'layout-news-active': this.$appState.newsActive
                }
            ];
        }
    },
    components: {
        AppTopBar,
        AppMenu,
        AppFooter,
        AppNews
    }
};
</script>

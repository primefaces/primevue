<template>
    <div class="layout-wrapper" :class="containerClass" :data-p-theme="$appState.theme">
        <AppNews />
        <AppTopBar @menubutton-click="onMenuButtonClick" @darkswitch-click="onDarkModeToggle" />
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
    methods: {
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
        },
        onDarkModeToggle() {
            /*let newTheme = null;
            let currentTheme = this.$appState.theme;

            if (this.$appState.darkTheme) {
                newTheme = currentTheme.replace('dark', 'light');
            } else {
                if (currentTheme.includes('light')) newTheme = currentTheme.replace('light', 'dark');
                else newTheme = 'aura-dark-green'; //fallback
            }

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });*/
            EventBus.emit('theme-change', { dark: !this.$appState.darkTheme });
        }
    },
    computed: {
        containerClass() {
            return [
                {
                    'layout-news-active': this.$appState.newsActive,
                    'p-ripple-disabled': this.$appState.ripple === false,
                    'layout-dark': this.$appState.darkTheme,
                    'layout-light': !this.$appState.darkTheme
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

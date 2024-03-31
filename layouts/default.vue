<template>
    <div class="layout-wrapper" :class="containerClass" :data-p-theme="$appState.theme">
        <AppNews />
        <AppTopBar @menubutton-click="onMenuButtonClick" @configbutton-click="onConfigButtonClick" @darkswitch-click="onDarkModeToggle" />
        <AppConfigurator :configActive="appConfigActive" @updateConfigActive="onUpdateConfigActive" @darkswitch-click="onDarkModeToggle" />
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
import AppConfigurator from './AppConfigurator';
import AppFooter from './AppFooter.vue';
import AppMenu from './AppMenu.vue';
import AppNews from './AppNews.vue';
import AppTopBar from './AppTopBar.vue';

export default {
    data() {
        return {
            sidebarActive: false,
            appConfigActive: false,
            defaultRipple: false
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                if (!process.client || typeof window === 'undefined') {
                    return;
                }

                if (!this.defaultRipple) {
                    if (to.name === 'ripple') {
                        this.$appState.ripple = true;
                    } else if (from?.name === 'ripple') {
                        this.$appState.ripple = this.defaultRipple;
                    }
                }

                this.sidebarActive = false;
                DomHandler.unblockBodyScroll('blocked-scroll');
                this.$toast.removeAllGroups();
            }
        }
    },
    beforeCreate() {
        this.defaultRipple = this.$appState.ripple;
    },
    mounted() {
        if (this.isOutdatedIE()) {
            this.$toast.add({
                severity: 'warn',
                summary: 'Limited Functionality',
                detail: 'Although PrimeVue supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.'
            });
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
        onConfigButtonClick() {
            this.appConfigActive = true;
        },
        onUpdateConfigActive() {
            this.appConfigActive = false;
        },
        onDarkModeToggle() {
            let newTheme = null;
            let currentTheme = this.$appState.theme;

            if (this.$appState.darkTheme) {
                newTheme = currentTheme.replace('dark', 'light');
            } else {
                if (currentTheme.includes('light')) newTheme = currentTheme.replace('light', 'dark');
                else newTheme = 'aura-dark-green'; //fallback
            }

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });
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
        AppConfigurator,
        AppNews
    }
};
</script>

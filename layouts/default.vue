<template>
    <div class="layout-wrapper" :class="containerClass" :data-p-theme="$appState.theme">
        <AppNews v-if="$appState.newsActive" />
        <AppTopBar @menubutton-click="onMenuButtonClick" @configbutton-click="onConfigButtonClick" />
        <AppConfigurator :configActive="appConfigActive" @updateConfigActive="onUpdateConfigActive" />
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
import AppConfigurator from './AppConfigurator.vue';
import AppFooter from './AppFooter.vue';
import AppMenu from './AppMenu.vue';
import AppNews from './AppNews.vue';
import AppTopBar from './AppTopBar.vue';

export default {
    data() {
        return {
            sidebarActive: false,
            appConfigActive: false
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
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
        hideNews(event) {
            this.$appState.newsActive = false;
            sessionStorage.setItem('primevue-news-hidden', 'true');
            event.stopPropagation();
        },
        isOutdatedIE() {
            let ua = window.navigator.userAgent;

            if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
                return true;
            }

            return false;
        },
        redirect() {
            window.location.href = 'https://blocks.primevue.org';
        },
        onConfigButtonClick() {
            this.appConfigActive = true;
        },
        onUpdateConfigActive() {
            this.appConfigActive = false;
        }
    },
    computed: {
        containerClass() {
            return [
                {
                    'layout-news-active': this.$appState.newsActive,
                    'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                    'p-ripple-disabled': this.$primevue.config.ripple === false,
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

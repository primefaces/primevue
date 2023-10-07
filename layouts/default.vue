<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-news v-if="$appState.newsActive" />
        <app-topbar @menubutton-click="onMenuButtonClick" @configbutton-click="onConfigButtonClick" />
        <app-configurator :configActive="appConfigActive" @updateConfigActive="onUpdateConfigActive" />
        <div :class="['layout-mask', { 'layout-mask-active': sidebarActive }]" @click="onMaskClick"></div>
        <div class="layout-content">
            <div class="layout-content-inner">
                <app-menu :active="sidebarActive" />
                <slot></slot>
            </div>
        </div>
        <app-footer />
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
                DomHandler.removeClass(document.body, 'blocked-scroll');
                document.body.style.removeProperty('--scrollbar-width');
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
                DomHandler.removeClass(document.body, 'blocked-scroll');
                document.body.style.removeProperty('--scrollbar-width');
            } else {
                this.sidebarActive = true;
                DomHandler.addClass(document.body, 'blocked-scroll');
                document.body.style.setProperty('--scrollbar-width', DomHandler.calculateScrollbarWidth() + 'px');
            }
        },
        onMaskClick() {
            this.sidebarActive = false;
            DomHandler.removeClass(document.body, 'blocked-scroll');
            document.body.style.removeProperty('--scrollbar-width');
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
                    'layout-wrapper-dark': this.$appState.darkTheme,
                    'layout-wrapper-light': !this.$appState.darkTheme
                }
            ];
        }
    },
    components: {
        'app-topbar': AppTopBar,
        'app-menu': AppMenu,
        'app-footer': AppFooter,
        'app-configurator': AppConfigurator,
        'app-news': AppNews
    }
};
</script>

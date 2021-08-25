<template>
    <div class="layout-wrapper" :class="containerClass">
        <div class="layout-news" v-if="newsActive">
            <div class="layout-news-container">
                <a href="https://www.primefaces.org/primeblocks-vue" class="layouts-news-mockup" target="_blank">
                    <img class="layouts-news-mockup-image" src="./assets/images/topbar-primeblocks-device.png">
                </a>
                <a href="https://www.primefaces.org/primeblocks-vue" target="_blank" tabindex="-1" style="text-decoration: none" class="layout-news-button">
                    LEARN MORE
                    <i class="pi pi-angle-right"></i>
                </a>
                <a tabindex="0" class="layout-news-close" @click="hideNews">
                    <i class="pi pi-times"></i>
                </a>
            </div>
        </div>

        <app-topbar @menubutton-click="onMenuButtonClick" @change-theme="changeTheme" :theme="theme" />
        <app-menu :active="sidebarActive" />
        <app-configurator @change-theme="changeTheme" :theme="theme" />
        <div :class="['layout-mask', {'layout-mask-active': sidebarActive}]" @click="onMaskClick"></div>
        <div class="layout-content">
            <router-view/>
            <app-footer />
        </div>
        <Toast />
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />
    </div>
</template>

<script>
import DomHandler from '@/components/utils/DomHandler';
import AppTopBar from '@/AppTopBar.vue';
import AppMenu from '@/AppMenu.vue';
import AppFooter from '@/AppFooter.vue';
import AppConfigurator from '@/AppConfigurator.vue';
import EventBus from '@/AppEventBus';

export default {
    data() {
        return {
            sidebarActive: false,
            newsActive: true,
            theme: 'saga-blue'
        }
    },
    mounted() {
        if (this.isOutdatedIE()) {
            this.$toast.add({severity: 'warn', summary: 'Limited Functionality', detail: 'Although PrimeVue supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.'});
        }

        this.newsActive = this.newsActive && sessionStorage.getItem('primevue-news-hidden') == null;
        this.initTheme();
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                let route = window.location.href.split('/#')[1];
                if (to.path === route) {
                    window['gtag']('config', 'UA-93461466-1', {
                        'page_path': '/primevue' + to.path
                    });
                }

                this.sidebarActive = false;
                DomHandler.removeClass(document.body, 'blocked-scroll');
                this.$toast.removeAllGroups();
            }
        }
    },
    methods: {
        initTheme() {
            let appTheme;
            const queryString = window.location.search;
            if (queryString)
                appTheme = new URLSearchParams(queryString.substring(1)).get('theme');
            else
                appTheme = localStorage.getItem('theme');

            if (appTheme) {
                let darkTheme = this.isDarkTheme(appTheme);
                this.changeTheme({
                    theme: appTheme,
                    dark: darkTheme
                });
            }
        },
        onMenuButtonClick() {
            if (this.sidebarActive) {
                this.sidebarActive = false;
                DomHandler.removeClass(document.body, 'blocked-scroll');
            }
            else {
                this.sidebarActive = true;
                DomHandler.addClass(document.body, 'blocked-scroll');
            }
        },
        onMaskClick() {
            this.sidebarActive = false;
            DomHandler.removeClass(document.body, 'blocked-scroll');
        },
        hideNews() {
            this.newsActive = false;
            sessionStorage.setItem('primevue-news-hidden', 'true');
        },
        changeTheme(event) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, event.theme));
            this.theme = event.theme;

            this.activeMenuIndex = null;

            EventBus.emit('change-theme', event);
            this.$appState.darkTheme = event.dark;

            if (event.theme.startsWith('md')) {
                this.$primevue.config.ripple = true;
            }

            localStorage.setItem('theme', this.theme);
        },
        addClass(element, className) {
            if (!this.hasClass(element, className)) {
                if (element.classList)
                    element.classList.add(className);
                else
                    element.className += ' ' + className;
            }
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        hasClass(element, className) {
            if (element.classList)
                return element.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        },
        isOutdatedIE() {
            let ua = window.navigator.userAgent;
            if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0) {
                return true;
            }

            return false;
        },
        isDarkTheme(theme) {
            return theme.indexOf('dark') !== -1 || theme.indexOf('vela') !== -1 || theme.indexOf('arya') !== -1 || theme.indexOf('luna') !== -1;
        }
    },
    computed: {
        containerClass() {
            return [{
                'layout-news-active': this.newsActive,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        }
    },
    components: {
        'app-topbar': AppTopBar,
        'app-menu': AppMenu,
        'app-footer': AppFooter,
        'app-configurator': AppConfigurator
    }
}
</script>

<style lang="scss">
@import './assets/styles/app/app.scss';
</style>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <a class="layout-news" href="https://www.primefaces.org/store" target="_blank" tabindex="-1" v-if="newsActive">
            <div class="layout-news-container">
                <img class="layouts-news-text-image" alt="easter" src="./assets/images/topbar-easter-2020-text.png">
                <img class="layouts-news-mockup-image" alt="easter" src="./assets/images/topbar-easter-2020-ultima.png">
                <a href="#" class="layout-news-close" @click="hideNews">
                    <i class="pi pi-times"></i>
                </a>
            </div>
        </a>

        <app-topbar @menubutton-click="onMenuButtonClick" @change-theme="changeTheme" :theme="theme" />
        <app-menu :active="sidebarActive" />
        <app-configurator @change-theme="changeTheme" :theme="theme" />
        <div :class="['layout-mask', {'layout-mask-active': sidebarActive}]" @click="onMaskClick"></div>
        <div class="layout-content">
            <router-view/>
            <app-footer />
        </div>
        <div class="app-theme" v-tooltip.bottom="theme">
            <img :src="'demo/images/themes/' + logoMap[theme]" />
        </div>
        <Toast />
        <Toast position="topleft" group="tl" />
        <Toast position="bottomleft" group="bl" />
        <Toast position="bottomright" group="br" />
    </div>
</template>

<script>
import AppTopBar from '@/AppTopBar.vue';
import AppMenu from '@/AppMenu.vue';
import AppFooter from '@/AppFooter.vue';
import AppConfigurator from '@/AppConfigurator.vue';
import EventBus from '@/EventBus';

export default {
    data() {
        return {
            sidebarActive: false,
            newsActive: false,
            theme: 'saga-blue',
            logoMap: {
                'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
                'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
                'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
                'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
                'md-light-indigo': 'md-light-indigo.svg',
                'md-light-purple': 'md-light-purple.svg',
                'md-dark-indigo': 'md-dark-indigo.svg',
                'md-dark-purple': 'md-dark-purple.svg',
                'mdc-light-indigo': 'md-light-indigo.svg',
                'mdc-light-purple': 'md-light-purple.svg',
                'mdc-dark-indigo': 'md-dark-indigo.svg',
                'mdc-dark-purple': 'md-dark-purple.svg',
                'saga-blue': 'saga-blue.png',
                'saga-green': 'saga-green.png',
                'saga-orange': 'saga-orange.png',
                'saga-purple': 'saga-purple.png',
                'vela-blue': 'vela-blue.png',
                'vela-green': 'vela-green.png',
                'vela-orange': 'vela-orange.png',
                'vela-purple': 'vela-purple.png',
                'arya-blue': 'arya-blue.png',
                'arya-green': 'arya-green.png',
                'arya-orange': 'arya-orange.png',
                'arya-purple': 'arya-purple.png',
                'nova': 'nova.png',
                'nova-alt': 'nova-alt.png',
                'nova-accent': 'nova-accent.png',
                'nova-vue': 'nova-vue.png',
                'luna-blue': 'luna-blue.png',
                'luna-green': 'luna-green.png',
                'luna-pink': 'luna-pink.png',
                'luna-amber': 'luna-amber.png',
                'rhea': 'rhea.png'
            }
        }
    },

    mounted() {
        if (this.isOutdatedIE()) {
            this.$toast.add({severity: 'warn', summary: 'Limited Functionality', detail: 'Although PrimeVue supports IE11, ThemeSwitcher in this application cannot be not fully supported by your browser. Please use a modern browser for the best experience of the showcase.'});
        }
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
                this.$toast.removeAllGroups();
            }
        }
    },
    methods: {
        onMenuButtonClick() {
            this.sidebarActive = !this.sidebarActive;
        },
        onMaskClick() {
            this.sidebarActive = false;
        },
        hideNews() {
            this.newsActive = false;
        },
        changeTheme(event) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.theme, event.theme));
            this.theme = event.theme;

            this.activeMenuIndex = null;

            EventBus.$emit('change-theme', event);
            this.$appState.darkTheme = event.dark;

            if (event.theme.startsWith('md')) {
                this.$appState.ripple = true;
            }
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
        }
    },
    computed: {
        containerClass() {
            return [{
                'layout-news-active': this.newsActive,
                'p-input-filled': this.$appState.inputStyle === 'filled',
                'p-ripple-disabled': this.$appState.ripple === false
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

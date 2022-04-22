<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-news v-if="$appState.newsActive" />
        <app-topbar @menubutton-click="onMenuButtonClick" />
        <app-menu :active="sidebarActive" />
        <app-configurator  />
        <div :class="['layout-mask', {'layout-mask-active': sidebarActive}]" @click="onMaskClick"></div>
        <div class="layout-content">
            <div class="layout-content-inner">
                <router-view/>
                <app-footer />
            </div>
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
import AppNews from '@/AppNews.vue';

export default {
    data() {
        return {
            sidebarActive: false
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
                window['gtag']('config', 'UA-93461466-1', {
                        'page_path': '/primevue' + to.path
                });

                this.sidebarActive = false;
                DomHandler.removeClass(document.body, 'blocked-scroll');
                this.$toast.removeAllGroups();
            }
        }
    },
    methods: {
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
        hideNews(event) {
            this.$appState.newsActive = false;
            sessionStorage.setItem('primevue-news-hidden', 'true');
            event.stopPropagation();
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
        redirect() {
            window.location.href = 'https://www.primefaces.org/primeblocks-vue';
        }
    },
    computed: {
        containerClass() {
            return [{
                'layout-news-active': this.$appState.newsActive,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false,
                'layout-wrapper-dark': this.$appState.darkTheme,
                'layout-wrapper-light': !this.$appState.darkTheme
            }];
        }
    },
    components: {
        'app-topbar': AppTopBar,
        'app-menu': AppMenu,
        'app-footer': AppFooter,
        'app-configurator': AppConfigurator,
        'app-news': AppNews
    }
}
</script>

<style lang="scss">
@import './assets/styles/app/app.scss';
</style>

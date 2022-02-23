<template>
    <div :class="landingClass">
        <div class="landing-intro">
            <HeaderSection @change-theme="onToggleTheme" />
            <HeroSection />
        </div>
        <ComponentSection />
        <ThemeSection :theme="theme" @theme-change="onThemeChange" />
        <BlockSection />
        <DesignerSection />
        <TemplateSection />
        <UsersSection />
        <FeaturesSection />
        <FooterSection />
    </div>
</template>

<script>
import EventBus from '@/AppEventBus';
import HeaderSection from './views/landing/HeaderSection';
import HeroSection from './views/landing/HeroSection';
import ComponentSection from './views/landing/ComponentSection';
import ThemeSection from './views/landing/ThemeSection';
import BlockSection from './views/landing/BlockSection';
import DesignerSection from './views/landing/DesignerSection';
import TemplateSection from './views/landing/TemplateSection';
import UsersSection from './views/landing/UsersSection';
import FeaturesSection from './views/landing/FeaturesSection';
import FooterSection from './views/landing/FooterSection';

export default {
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            tableTheme: 'lara-light-indigo'
        }
    },
    themeChangeListener: null,
    mounted() {
        let afId = this.$route.query['af_id'];
        if (afId) {
            let today = new Date();
            let expire = new Date();
            expire.setTime(today.getTime() + 3600000*24*7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }
    },
    methods: {
        onToggleTheme() {
            const theme = this.$appState.darkTheme ? 'lara-light-indigo' : 'lara-dark-indigo';
            this.tableTheme =  this.$appState.darkTheme ? this.tableTheme.replace('dark', 'light') : this.tableTheme.replace('light', 'dark');
            this.changeTheme(theme);

            EventBus.emit('change-theme', { theme, dark: !this.$appState.darkTheme });
            this.$appState.darkTheme = !this.$appState.darkTheme;
        },
        onThemeChange(theme) {
            this.changeTheme(theme);
        },
        changeTheme(theme) {
            let themeLink = document.getElementById('theme-link');
            let hrefThemeLink = 'themes/' + theme + '/theme.css';

            let homeLink = document.getElementById('home-link');
            let hrefHomeLink = 'styles/landing/themes/' + theme + '/theme.css';

            this.replaceLink(themeLink, hrefThemeLink);
            this.replaceLink(homeLink, hrefHomeLink);
        },
        replaceLink(linkElement, href) {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        },
    },
    computed: {
        landingClass() {
            return ['landing', {'landing-dark': this.$appState.darkTheme, 'landing-light': !this.$appState.darkTheme}];
        }
    },
    components: {
        HeaderSection,
        HeroSection,
        ComponentSection,
        ThemeSection,
        BlockSection,
        DesignerSection,
        TemplateSection,
        UsersSection,
        FeaturesSection,
        FooterSection
    }
}
</script>

<style lang="scss">
@import './assets/styles/landing/landing.scss';
</style>
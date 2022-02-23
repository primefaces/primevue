<template>
    <div :class="landingClass">
        <div class="landing-intro">
            <HeaderSection @theme-toggle="onThemeToggle" />
            <HeroSection />
        </div>
        <ComponentSection />
        <ThemeSection :theme="tableTheme" @table-theme-change="onTableThemeChange" />
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
        onThemeToggle() {
            const newTheme = this.$appState.darkTheme ? 'lara-light-indigo' : 'lara-dark-indigo';
            const newTableTheme =  this.$appState.darkTheme ? this.tableTheme.replace('dark', 'light') : this.tableTheme.replace('light', 'dark');

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });
            this.replaceTableTheme(newTableTheme);
        },
        onTableThemeChange(value) {
            this.replaceTableTheme(value);
        },
        replaceTableTheme(newTheme) {
            const elementId = 'home-table-link';
            const linkElement = document.getElementById(elementId);
            const cloneLinkElement = linkElement.cloneNode(true);
            const newThemeUrl = linkElement.getAttribute('href').replace(this.tableTheme, newTheme);

            cloneLinkElement.setAttribute('id', elementId + '-clone');
            cloneLinkElement.setAttribute('href', newThemeUrl);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', elementId);
            });
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            this.tableTheme = newTheme;
        }
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
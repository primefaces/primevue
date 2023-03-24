<template>
    <div :class="landingClass">
        <Intro @change:theme="onThemeToggle"></Intro>
        <UsersSection />
        <ComponentSection />
        <ThemeSection :theme="tableTheme" @table-theme-change="onTableThemeChange" />
        <BlockSection />
        <DesignerSection />
        <TemplateSection />
        <FeaturesSection />
        <FooterSection />
    </div>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
import BlockSection from './landing/BlockSection';
import ComponentSection from './landing/ComponentSection';
import DesignerSection from './landing/DesignerSection';
import FeaturesSection from './landing/FeaturesSection';
import FooterSection from './landing/FooterSection';
import TemplateSection from './landing/TemplateSection';
import ThemeSection from './landing/ThemeSection';
import UsersSection from './landing/UsersSection';
const Intro = defineAsyncComponent(() => import('./landing/Intro.vue'));

export default {
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            tableTheme: 'lara-light-blue'
        };
    },
    themeChangeListener: null,
    mounted() {
        let afId = this.$route.query['af_id'];

        if (afId) {
            let today = new Date();
            let expire = new Date();

            expire.setTime(today.getTime() + 3600000 * 24 * 7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }

        this.replaceTableTheme(this.$appState.darkTheme ? 'lara-dark-blue' : 'lara-light-blue');
    },
    methods: {
        onThemeToggle() {
            const newTheme = this.$appState.darkTheme ? 'lara-light-blue' : 'lara-dark-blue';
            const newTableTheme = this.$appState.darkTheme ? this.tableTheme.replace('dark', 'light') : this.tableTheme.replace('light', 'dark');

            EventBus.emit('theme-change', { theme: newTheme, dark: !this.$appState.darkTheme });
            this.replaceTableTheme(newTableTheme);
        },
        onTableThemeChange(value) {
            this.replaceTableTheme(value);
        },
        replaceTableTheme(newTheme) {
            const elementId = 'home-table-link';
            const linkElement = document.getElementById(elementId);
            const tableThemeTokens = linkElement?.getAttribute('href').split('/') || null;
            const currentTableTheme = tableThemeTokens ? tableThemeTokens[tableThemeTokens.length - 2] : null;

            if (currentTableTheme !== newTheme && tableThemeTokens) {
                const newThemeUrl = linkElement.getAttribute('href').replace(currentTableTheme, newTheme);

                const cloneLinkElement = linkElement.cloneNode(true);

                cloneLinkElement.setAttribute('id', elementId + '-clone');
                cloneLinkElement.setAttribute('href', newThemeUrl);
                cloneLinkElement.addEventListener('load', () => {
                    linkElement.remove();
                    cloneLinkElement.setAttribute('id', elementId);
                });
                linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);

                this.tableTheme = newTheme;
            }
        }
    },
    computed: {
        landingClass() {
            return ['landing', { 'landing-dark': this.$appState?.darkTheme, 'landing-light': !this.$appState?.darkTheme, 'landing-news-active': this.$appState?.newsActive }];
        }
    },
    components: {
        Intro,
        ComponentSection,
        ThemeSection,
        BlockSection,
        DesignerSection,
        TemplateSection,
        UsersSection,
        FeaturesSection,
        FooterSection
    }
};
</script>

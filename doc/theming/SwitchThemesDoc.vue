<template>
    <DocSectionText v-bind="$attrs">
        <p class="notification">
            Solution below works however there is room for improvement. The upcoming styling api will greatly improve dynamic theme switching ability, eliminates the prerequisites with the introduction of CSS variables and dynamic imports.
        </p>
        <p>
            Themes can be dynamically changed using the <i>PrimeVue.changeTheme</i> function. For this feature to work, there are two prerequisites. To begin with, the themes should be publicly available under the <i>public</i> folder in your project
            by copying them from PrimeVue <i>resources/themes</i> folder. Second part is making the theme.css accessible via a link element so that the id of the link can be provided as the 3rd parameter to the <i>changeTheme</i> function.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
    <div class="doc-section-description">
        <p>In a Vite based project like <a href="https://github.com/vuejs/create-vue">create-vue</a>, the link can be placed at index.html.</p>
    </div>
    <DocSectionCode :code="code4" hideToggleCode hideStackBlitz />
    <div class="doc-section-description">
        <p><a href="https://nuxtjs.org/">Nuxt</a> applications can configure the link element using <i>nuxt.config.js</i>.</p>
    </div>
    <DocSectionCode :code="code5" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
primevue.changeTheme(currentTheme: string, newTheme: string, linkElementId: string, callback: Function)
`
            },
            code2: {
                basic: `
// Options API
this.$primevue.changeTheme('md-dark-indigo', 'md-light-indigo', 'theme-link', () => {});
`
            },
            code3: {
                basic: `
// Composition API
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();
PrimeVue.changeTheme('md-dark-indigo', 'md-light-indigo', 'theme-link', () => {});
`
            },
            code4: {
                basic: `
<link id="theme-link" rel="stylesheet" href="/themes/aura-light-green/theme.css">
`
            },
            code5: {
                basic: `
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: baseUrl + 'themes/aura-light-green/theme.css'
                }
            ]
        }
    }
});
`
            }
        };
    }
};
</script>

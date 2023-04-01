const baseUrl = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    components: [
        '~/components',
        {
            path: '~/components/layout',
            prefetch: false
        }
    ],
    app: {
        baseURL: baseUrl,
        head: {
            title: 'PrimeVue - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                { name: 'twitter:title', content: 'PrimeVue | Vue UI Component Library' },
                { name: 'twitter:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'PrimeVue | Vue UI Component Library' },
                { property: 'og:url', content: 'https://primevue.org/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/primevue-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                {
                    id: 'home-table-link',
                    rel: 'stylesheet',
                    href: baseUrl + 'styles/landing/themes/lara-light-blue/theme.css'
                },
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: baseUrl + 'themes/lara-light-blue/theme.css'
                },
                { rel: 'icon', href: baseUrl + 'favicon.ico' }
            ],
            script: [
                {
                    strategy: 'lazyOnload',
                    src: 'https://www.googletagmanager.com/gtag/js?id=UA-93461466-1'
                },
                {
                    id: 'ga-analytics',
                    strategy: 'lazyOnload',
                    children: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-93461466-1');
                    `
                },
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl
        }
    },
    css: ['@/assets/styles/primevue.css', '/node_modules/primeflex/primeflex.css', '/node_modules/primeicons/primeicons.css', '@/assets/styles/flags.css', '@/components/lib/colorpicker/ColorPicker.css']
});

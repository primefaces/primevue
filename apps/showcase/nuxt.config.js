import path from 'path';

const baseUrl = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', '@primevue/nuxt-module'],
    components: [
        '~/components',
        {
            path: '~/components/layout',
            prefetch: false
        }
    ],
    vite: {
        resolve: {
            optimizeDeps: {
                disabled: true
            },
            alias: {
                primevue: path.resolve(__dirname, '../../packages/primevue/src'),
                '@primevue/core': path.resolve(__dirname, '../../packages/core/src'),
                '@primevue/themes/aura': path.resolve(__dirname, '../../packages/themes/src/presets/aura'),
                '@primevue/themes/lara': path.resolve(__dirname, '../../packages/themes/src/presets/lara'),
                '@primevue/themes/nora': path.resolve(__dirname, '../../packages/themes/src/presets/nora'),
                '@primevue/themes': path.resolve(__dirname, '../../packages/themes/src'),
                '@primevue/icons': path.resolve(__dirname, '../../packages/icons/src')
            }
        }
    },
    nitro: {
        alias: {
            primevue: path.resolve(__dirname, '../../packages/primevue/src'),
            '@primevue/core': path.resolve(__dirname, '../../packages/core/src'),
            '@primevue/themes/aura': path.resolve(__dirname, '../../packages/themes/src/presets/aura'),
            '@primevue/themes/lara': path.resolve(__dirname, '../../packages/themes/src/presets/lara'),
            '@primevue/themes/nora': path.resolve(__dirname, '../../packages/themes/src/presets/nora'),
            '@primevue/themes': path.resolve(__dirname, '../../packages/themes/src'),
            '@primevue/icons': path.resolve(__dirname, '../../packages/icons/src')
        }
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } }
    },
    primevue: {
        usePrimeVue: true,
        importTheme: { from: '@/themes/app-theme.js' },
        components: {
            exclude: []
        }
    },
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
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/tailwind/main.css', '@/assets/styles/layout/layout.scss']
});

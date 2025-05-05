import tailwindcss from '@tailwindcss/vite';
import { defineNuxtConfig } from 'nuxt/config';
import path from 'path';

const baseUrl = '/';

const alias = {
    primevue: path.resolve(__dirname, '../../packages/primevue/src'),
    '@primevue/core': path.resolve(__dirname, '../../packages/core/src'),
    '@primevue/icons': path.resolve(__dirname, '../../packages/icons/src')
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: false
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    experimental: {
        watcher: 'chokidar'
    },
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: []
        },
        esbuild: {
            minifyIdentifiers: false,
            minifyWhitespace: false
        },
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['legacy-js-api'] //@todo
                }
            }
        },
        plugins: [tailwindcss()]
    },
    alias,
    runtimeConfig: {
        GITHUB_TOKEN: ''
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'Volt UI Component Library for Vue.js',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue' },
                { name: 'twitter:title', content: 'Tailwind CSS based Vue UI Component Library' },
                { name: 'twitter:description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Tailwind CSS based Vue UI Component Library' },
                { property: 'og:url', content: 'https://tailwind.primevue.org/' },
                { property: 'og:description', content: 'Build your own UI library with the flexibility of Tailwind CSS and the convenience of PrimeVue components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/volt.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', as: 'font', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    css: ['@/assets/styles/tailwind.css', '@/assets/styles/app/app.scss', '@/assets/styles/demo/flags.css', 'primeicons/primeicons.css']
    /*layouts: {
        default: '~/layouts/default.vue'
    }*/
});

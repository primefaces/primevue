import fs from 'fs';
import path from 'path';

const baseUrl = '/';

const alias = {
    primevue: path.resolve(__dirname, '../../packages/primevue/src'),
    '@primevue/core': path.resolve(__dirname, '../../packages/core/src'),
    '@primevue/icons': path.resolve(__dirname, '../../packages/icons/src')
};

let PROCESS_ENV = {};

try {
    PROCESS_ENV = process?.env || {};
} catch {
    // NOOP
}

// Nested page paths that need redirects (e.g., /theming/styled.md -> /llms/pages/styled.md)
const nestedPagePaths = {
    'theming/styled': 'styled',
    'theming/unstyled': 'unstyled',
    'guides/accessibility': 'accessibility',
    'guides/animations': 'animations',
    'guides/dynamicimports': 'dynamicimports',
    'guides/rtl': 'rtl',
    'guides/migration/v4': 'v4'
};

const markdownRedirects = (() => {
    const rules = {};
    const llmsDir = path.resolve(__dirname, 'server/assets/llms');

    try {
        // Add nested path redirects
        for (const [nestedPath, fileName] of Object.entries(nestedPagePaths)) {
            rules[`/${nestedPath}.md`] = { redirect: { to: `/llms/pages/${fileName}.md`, statusCode: 301 } };
        }

        // Add direct page redirects
        for (const file of fs.readdirSync(path.join(llmsDir, 'pages'))) {
            rules[`/${file}`] = { redirect: { to: `/llms/pages/${file}`, statusCode: 301 } };
        }

        // Add component redirects
        for (const file of fs.readdirSync(path.join(llmsDir, 'components'))) {
            if (!rules[`/${file}`]) {
                rules[`/${file}`] = { redirect: { to: `/llms/components/${file}`, statusCode: 301 } };
            }
        }
    } catch {
        // Silently fail if llms directory doesn't exist yet
    }

    return rules;
})();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    modules: ['@primevue/nuxt-module'],
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    vite: {
        optimizeDeps: {
            noDiscovery: true,
            include: ['quill', 'yup']
        },
        resolve: {
            dedupe: ['vue', '@primeuix/styles', '@primeuix/themes', '@primeuix/utils'],
            alias
        }
    },
    nitro: {
        alias
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } },
        ...markdownRedirects
    },
    primevue: {
        usePrimeVue: process.env.DEV_ENV !== 'hot',
        autoImport: true, // When enabled, the module automatically imports PrimeVue components and directives used throughout the application.
        importTheme: { from: '@/themes/app-theme.js' }
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
            contextPath: baseUrl,
            DEV_ENV: PROCESS_ENV.DEV_ENV,
            designerApiUrl: ''
        }
    },
    css: ['primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/tailwind/main.css', '@/assets/styles/layout/layout.scss']
});

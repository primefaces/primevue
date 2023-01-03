import vueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';
const baseUrl = process.env.NODE_ENV === 'production' ? '/primevue/' : '/';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: false,
    components: true,
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
                { property: 'og:url', content: 'https://www.primefaces.org/primevue' },
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
    css: ['@/assets/styles/primevue.css', '/node_modules/primeflex/primeflex.css', '/node_modules/primeicons/primeicons.css', '@/assets/styles/flags.css'],
    vite: {
        plugins: [vueJsx()],
        resolve: {
            alias: {
                'primevue/ripple': path.resolve(__dirname, './components/ripple/Ripple.js'),
                'primevue/tooltip': path.resolve(__dirname, './components/tooltip/Tooltip.js'),
                'primevue/focustrap': path.resolve(__dirname, './components/focustrap/FocusTrap.js'),
                'primevue/useconfirm': path.resolve(__dirname, './components/useconfirm/UseConfirm.js'),
                'primevue/usetoast': path.resolve(__dirname, './components/usetoast/UseToast.js'),
                'primevue/usedialog': path.resolve(__dirname, './components/usedialog/UseDialog.js'),
                'primevue/utils': path.resolve(__dirname, './components/utils/Utils.js'),
                'primevue/api': path.resolve(__dirname, './components/api/Api.js'),
                'primevue/portal': path.resolve(__dirname, './components/portal/Portal.vue'),
                'primevue/button': path.resolve(__dirname, './components/button/Button.vue'),
                'primevue/inputtext': path.resolve(__dirname, './components/inputtext/InputText.vue'),
                'primevue/dialog': path.resolve(__dirname, './components/dialog/Dialog.vue'),
                'primevue/menu': path.resolve(__dirname, './components/menu/Menu.vue'),
                'primevue/tieredmenu': path.resolve(__dirname, './components/tieredmenu/TieredMenu.vue'),
                'primevue/dropdown': path.resolve(__dirname, './components/dropdown/Dropdown.vue'),
                'primevue/inputnumber': path.resolve(__dirname, './components/inputnumber/InputNumber.vue'),
                'primevue/paginator': path.resolve(__dirname, './components/paginator/Paginator.vue'),
                'primevue/progressbar': path.resolve(__dirname, './components/progressbar/ProgressBar.vue'),
                'primevue/message': path.resolve(__dirname, './components/message/Message.vue'),
                'primevue/tree': path.resolve(__dirname, './components/tree/Tree.vue'),
                'primevue/badge': path.resolve(__dirname, './components/badge/Badge.vue'),
                'primevue/confirmationeventbus': path.resolve(__dirname, './components/confirmationeventbus/ConfirmationEventBus.js'),
                'primevue/toasteventbus': path.resolve(__dirname, './components/toasteventbus/ToastEventBus.js'),
                'primevue/overlayeventbus': path.resolve(__dirname, './components/overlayeventbus/OverlayEventBus.js'),
                'primevue/terminalservice': path.resolve(__dirname, './components/terminalservice/TerminalService.js'),
                'primevue/dynamicdialogeventbus': path.resolve(__dirname, './components/dynamicdialogeventbus/DynamicDialogEventBus.js'),
                'primevue/virtualscroller': path.resolve(__dirname, './components/virtualscroller/VirtualScroller.vue')
            }
        }
    }
});

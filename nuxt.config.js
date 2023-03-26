import path from 'path';
const baseUrl = '/';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
    css: ['@/assets/styles/primevue.css', '/node_modules/primeflex/primeflex.css', '/node_modules/primeicons/primeicons.css', '@/assets/styles/flags.css', '@/components/lib/colorpicker/ColorPicker.css'],
    vite: {
        resolve: {
            alias: {
                'primevue/ripple': path.resolve(__dirname, './components/lib/ripple/Ripple.js'),
                'primevue/tooltip': path.resolve(__dirname, './components/lib/tooltip/Tooltip.js'),
                'primevue/focustrap': path.resolve(__dirname, './components/lib/focustrap/FocusTrap.js'),
                'primevue/useconfirm': path.resolve(__dirname, './components/lib/useconfirm/UseConfirm.js'),
                'primevue/usetoast': path.resolve(__dirname, './components/lib/usetoast/UseToast.js'),
                'primevue/usedialog': path.resolve(__dirname, './components/lib/usedialog/UseDialog.js'),
                'primevue/utils': path.resolve(__dirname, './components/lib/utils/Utils.js'),
                'primevue/api': path.resolve(__dirname, './components/lib/api/Api.js'),
                'primevue/portal': path.resolve(__dirname, './components/lib/portal/Portal.vue'),
                'primevue/button': path.resolve(__dirname, './components/lib/button/Button.vue'),
                'primevue/inputtext': path.resolve(__dirname, './components/lib/inputtext/InputText.vue'),
                'primevue/dialog': path.resolve(__dirname, './components/lib/dialog/Dialog.vue'),
                'primevue/menu': path.resolve(__dirname, './components/lib/menu/Menu.vue'),
                'primevue/tieredmenu': path.resolve(__dirname, './components/lib/tieredmenu/TieredMenu.vue'),
                'primevue/dropdown': path.resolve(__dirname, './components/lib/dropdown/Dropdown.vue'),
                'primevue/inputnumber': path.resolve(__dirname, './components/lib/inputnumber/InputNumber.vue'),
                'primevue/paginator': path.resolve(__dirname, './components/lib/paginator/Paginator.vue'),
                'primevue/progressbar': path.resolve(__dirname, './components/lib/progressbar/ProgressBar.vue'),
                'primevue/message': path.resolve(__dirname, './components/lib/message/Message.vue'),
                'primevue/tree': path.resolve(__dirname, './components/lib/tree/Tree.vue'),
                'primevue/badge': path.resolve(__dirname, './components/lib/badge/Badge.vue'),
                'primevue/confirmationeventbus': path.resolve(__dirname, './components/lib/confirmationeventbus/ConfirmationEventBus.js'),
                'primevue/toasteventbus': path.resolve(__dirname, './components/lib/toasteventbus/ToastEventBus.js'),
                'primevue/overlayeventbus': path.resolve(__dirname, './components/lib/overlayeventbus/OverlayEventBus.js'),
                'primevue/terminalservice': path.resolve(__dirname, './components/lib/terminalservice/TerminalService.js'),
                'primevue/dynamicdialogeventbus': path.resolve(__dirname, './components/lib/dynamicdialogeventbus/DynamicDialogEventBus.js'),
                'primevue/virtualscroller': path.resolve(__dirname, './components/lib/virtualscroller/VirtualScroller.vue')
            }
        }
    }
});

import vue from '@vitejs/plugin-vue';
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
        plugins: [vue()],
        test: {
            globals: true,
            environment: 'jsdom',
            coverage: {
                provider: 'istanbul',
                reporter: ['text', 'json', 'html']
            }
        },
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
                'primevue/basecomponent': path.resolve(__dirname, './components/lib/basecomponent/BaseComponent.vue'),
                'primevue/baseicon': path.resolve(__dirname, './components/lib/baseicon/BaseIcon.vue'),
                'primevue/icon/angledoubledown': path.resolve(__dirname, './components/lib/icon/angledoubledown/index.vue'),
                'primevue/icon/angledoubleleft': path.resolve(__dirname, './components/lib/icon/angledoubleleft/index.vue'),
                'primevue/icon/angledoubleright': path.resolve(__dirname, './components/lib/icon/angledoubleright/index.vue'),
                'primevue/icon/angledoubleup': path.resolve(__dirname, './components/lib/icon/angledoubleup/index.vue'),
                'primevue/icon/angledown': path.resolve(__dirname, './components/lib/icon/angledown/index.vue'),
                'primevue/icon/angleleft': path.resolve(__dirname, './components/lib/icon/angleleft/index.vue'),
                'primevue/icon/angleright': path.resolve(__dirname, './components/lib/icon/angleright/index.vue'),
                'primevue/icon/angleup': path.resolve(__dirname, './components/lib/icon/angleup/index.vue'),
                'primevue/icon/arrowdown': path.resolve(__dirname, './components/lib/icon/arrowdown/index.vue'),
                'primevue/icon/arrowup': path.resolve(__dirname, './components/lib/icon/arrowup/index.vue'),
                'primevue/icon/ban': path.resolve(__dirname, './components/lib/icon/ban/index.vue'),
                'primevue/icon/bars': path.resolve(__dirname, './components/lib/icon/bars/index.vue'),
                'primevue/icon/calendar': path.resolve(__dirname, './components/lib/icon/calendar/index.vue'),
                'primevue/icon/check': path.resolve(__dirname, './components/lib/icon/check/index.vue'),
                'primevue/icon/chevrondown': path.resolve(__dirname, './components/lib/icon/chevrondown/index.vue'),
                'primevue/icon/chevronleft': path.resolve(__dirname, './components/lib/icon/chevronleft/index.vue'),
                'primevue/icon/chevronright': path.resolve(__dirname, './components/lib/icon/chevronright/index.vue'),
                'primevue/icon/chevronup': path.resolve(__dirname, './components/lib/icon/chevronup/index.vue'),
                'primevue/icon/exclamationtriangle': path.resolve(__dirname, './components/lib/icon/exclamationtriangle/index.vue'),
                'primevue/icon/eye': path.resolve(__dirname, './components/lib/icon/eye/index.vue'),
                'primevue/icon/eyeslash': path.resolve(__dirname, './components/lib/icon/eyeslash/index.vue'),
                'primevue/icon/filter': path.resolve(__dirname, './components/lib/icon/filter/index.vue'),
                'primevue/icon/filterslash': path.resolve(__dirname, './components/lib/icon/filterslash/index.vue'),
                'primevue/icon/infocircle': path.resolve(__dirname, './components/lib/icon/infocircle/index.vue'),
                'primevue/icon/minus': path.resolve(__dirname, './components/lib/icon/minus/index.vue'),
                'primevue/icon/pencil': path.resolve(__dirname, './components/lib/icon/pencil/index.vue'),
                'primevue/icon/plus': path.resolve(__dirname, './components/lib/icon/plus/index.vue'),
                'primevue/icon/refresh': path.resolve(__dirname, './components/lib/icon/refresh/index.vue'),
                'primevue/icon/search': path.resolve(__dirname, './components/lib/icon/search/index.vue'),
                'primevue/icon/searchminus': path.resolve(__dirname, './components/lib/icon/searchminus/index.vue'),
                'primevue/icon/searchplus': path.resolve(__dirname, './components/lib/icon/searchplus/index.vue'),
                'primevue/icon/sortalt': path.resolve(__dirname, './components/lib/icon/sortalt/index.vue'),
                'primevue/icon/sortamountdown': path.resolve(__dirname, './components/lib/icon/sortamountdown/index.vue'),
                'primevue/icon/sortamountupalt': path.resolve(__dirname, './components/lib/icon/sortamountupalt/index.vue'),
                'primevue/icon/spinner': path.resolve(__dirname, './components/lib/icon/spinner/index.vue'),
                'primevue/icon/star': path.resolve(__dirname, './components/lib/icon/star/index.vue'),
                'primevue/icon/starfill': path.resolve(__dirname, './components/lib/icon/starfill/index.vue'),
                'primevue/icon/thlarge': path.resolve(__dirname, './components/lib/icon/thlarge/index.vue'),
                'primevue/icon/times': path.resolve(__dirname, './components/lib/icon/times/index.vue'),
                'primevue/icon/timescircle': path.resolve(__dirname, './components/lib/icon/timescircle/index.vue'),
                'primevue/icon/trash': path.resolve(__dirname, './components/lib/icon/trash/index.vue'),
                'primevue/icon/undo': path.resolve(__dirname, './components/lib/icon/undo/index.vue'),
                'primevue/icon/upload': path.resolve(__dirname, './components/lib/icon/upload/index.vue'),
                'primevue/icon/windowmaximize': path.resolve(__dirname, './components/lib/icon/windowmaximize/index.vue'),
                'primevue/icon/windowminimize': path.resolve(__dirname, './components/lib/icon/windowminimize/index.vue'),
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

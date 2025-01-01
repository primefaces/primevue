import AppTheme from '@/themes/app-theme';
import PrimeVue from 'primevue/config';
import { reactive } from 'vue';

const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({
            preset: 'Aura',
            primary: 'noir',
            surface: null,
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            storageKey: 'primevue',
            designer: {
                localStoreKey: 'primevue-designer',
                licenseKey: null,
                ticket: null,
                active: false,
                activeView: 'dashboard',
                activeTab: '0',
                theme: {
                    key: null,
                    name: null,
                    preset: null,
                    config: null
                },
                acTokens: [],
                themes: []
            }
        });
    }
};

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    nuxtApp.vueApp.use($appState);

    if (runtimeConfig.public.DEV_ENV === 'hot') {
        nuxtApp.vueApp.use(PrimeVue, {
            theme: AppTheme
        });
    }
});

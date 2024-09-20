import Material from '@primevue/themes/material';
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
            storageKey: 'primevue'
        });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    nuxtApp.vueApp.use($appState);

    if (runtimeConfig.public.DEV_ENV === 'hot') {
        nuxtApp.vueApp.use(PrimeVue, {
            theme: Material,
            options: {
                darkModeSelector: '.p-dark'
            }
        });
    }
});

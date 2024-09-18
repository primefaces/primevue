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

export default defineNuxtPlugin(async (nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    nuxtApp.vueApp.use($appState);

    if (runtimeConfig.public.DEV_ENV === 'hot') {
        const { default: PrimeVue } = await import('primevue/config');
        const { default: Noir } = await import('@/themes/app-theme');

        nuxtApp.vueApp.use(PrimeVue, { theme: Noir });
    }
});

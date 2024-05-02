import { reactive } from 'vue';

const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({
            //theme: 'aura-light-green',
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            ripple: false,
            storageKey: 'primevue'
        });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);
    //nuxtApp.vueApp.use(PrimeVue, { theme: Noir });
});

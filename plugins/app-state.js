const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({
            theme: 'aura-light-green',
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            ripple: false,
            rtl: false,
            storageKey: 'primevue'
        });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);

    // use cookie
    const direction = useCookie('direction-rtl');

    nuxtApp.vueApp.config.globalProperties.$appState.rtl = direction.value;
});

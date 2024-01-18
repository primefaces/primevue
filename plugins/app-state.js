const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({
            theme: 'aura-light-green',
            darkTheme: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            storageKey: 'primevue',
            colorSchemeKey: 'primevue-color-scheme'
        });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);
});

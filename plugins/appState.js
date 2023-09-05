const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({ theme: 'lara-light-blue', darkTheme: false, codeSandbox: false, sourceType: 'options-api', newsActive: true, announcement: {}, storageKey: 'primevue' });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);
});

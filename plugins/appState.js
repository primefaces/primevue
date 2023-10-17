const $appState = {
    install: (Vue, options) => {
        Vue.config.globalProperties.$appState = reactive({ theme: 'lara-light-teal', darkTheme: false, codeSandbox: false, sourceType: 'options-api', newsActive: false, announcement: null, storageKey: 'primevue' });
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($appState);
});

import PrimeVue from 'primevue/config';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true
    });
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.use(ToastService);
});

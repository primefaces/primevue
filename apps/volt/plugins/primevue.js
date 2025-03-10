import PrimeVue from 'primevue/config';
import StyleClass from 'primevue/styleclass';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue);
    nuxtApp.vueApp.directive('styleclass', StyleClass);
});

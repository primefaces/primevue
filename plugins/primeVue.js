 import PrimeVue from '@/components/config/PrimeVue';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(PrimeVue)
  nuxtApp.vueApp.use(PrimeVue);
}); 
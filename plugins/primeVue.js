import PrimeVue from '@/components/config/PrimeVue';
import CodeHighlight from '@/layouts/AppCodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
  console.log(PrimeVue)
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.directive('code', CodeHighlight)
}); 
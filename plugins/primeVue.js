import PrimeVue from '@/components/lib/config/PrimeVue';
import ToastService from '@/components/lib/toastservice/ToastService';

import CodeHighlight from '@/components/layout/CodeHighlight';
import Animate from '@/components/lib/animate/Animate';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.use(ToastService);

    nuxtApp.vueApp.directive('animate', Animate);
    nuxtApp.vueApp.directive('code', CodeHighlight);
});

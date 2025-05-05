import DeferredDemo from '@/components/demo/DeferredDemo.vue';
import CodeHighlight from '~/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('DeferredDemo', DeferredDemo);
    nuxtApp.vueApp.directive('code', CodeHighlight);
});

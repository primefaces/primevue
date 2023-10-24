import CodeHighlight from '@/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('code', CodeHighlight);
});

import DeferredDemo from '@/components/demo/DeferredDemo.vue';
import CodeHighlight from '@/directives/CodeHighlight';
import MeterGroup from '@/components/lib/metergroup/MeterGroup.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.component('DeferredDemo', DeferredDemo); // @todo
    nuxtApp.vueApp.component('MeterGroup', MeterGroup); // @todo
});

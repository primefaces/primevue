<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm registry</a>.</p>
        <DocSectionCode :code="code1" />
        <p>Volt does not need the PrimeVue Nuxt Module, instead create a primevue.js file inside plugins folder. Using the plugin configure PrimeVue to enable the unstyled mode that disables the default design token based theming globally.</p>
        <DocSectionCode :code="code2" lang="script" />
        <p>The nuxt plugin can also be used to configure additional PrimeVue features like Toast and Confirmation Services as well as directives.</p>
        <DocSectionCode :code="code3" lang="script" />
    </DocSectionText>
</template>

<script setup>
import { ref } from 'vue';

const code1 = ref(`
# Using npm
npm install primevue

# Using yarn
yarn add primevue

# Using pnpm
pnpm add primevue
`);

const code2 = ref(`import PrimeVue from 'primevue/config';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true
    });
});
`);

const code3 = ref(`import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
import ConfirmationService from 'primevue/confirmationservice';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        unstyled: true
    });

    // Optional features
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('animateonscroll', AnimateOnScroll);
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
});
`);
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Main configuration settings of PrimeVue, refer to the <PrimeVueNuxtLink to="/configuration">configuration</PrimeVueNuxtLink> documentation for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            ripple: true,
            inputVariant: 'filled',
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        }
    }
})
`
            }
        };
    }
};
</script>

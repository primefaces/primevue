<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue plugin is required to be installed with the <i>use</i> function to set up the default <NuxtLink to="/theming">configuration</NuxtLink>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);`
            }
        };
    }
};
</script>

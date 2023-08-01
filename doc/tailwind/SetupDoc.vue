<template>
    <DocSectionText v-bind="$attrs">
        <p>
            This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> like Vite or Nuxt for the installation.
            The built-in default theme is basically a <PrimeVueNuxtLink to="/passthrough">global pass through</PrimeVueNuxtLink> configuration that needs to be imported from <i>primevue/tailwind</i> path and then defined during setup. Since the theme
            is exclusive to unstyled mode, the <i>unstyled</i> setting is required in addition.
        </p>
        <p>Voilà 💚, you now have 90+ awesome Vue UI components styled with Tailwind that will work in harmony with the rest of your application.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `import {createApp} from "vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/tailwind";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> like Vite or Nuxt for the installation.
            The built-in default theme is basically a <PrimeVueNuxtLink to="/passthrough">global pass through</PrimeVueNuxtLink> preset that needs to be imported from <i>primevue/passthrough/tailwind</i> path and then defined during setup. Since the
            theme is exclusive to unstyled mode, the <i>unstyled</i> setting is required in addition.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>
            Tailwind uses PurgeCSS internally to remove unused classes, as PrimeVue components are loaded from <i>node_modules</i> the <i>content</i> property at <i>tailwind.config.js</i> needs to be aware of PrimeVue, otherwise the classes utilized
            in the theme will be removed as well.
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>Voilà 💚, you now have 90+ awesome Vue UI components styled with Tailwind that will work in harmony with the rest of your application. Time to customize it to bring in your own style with Tailwind.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import {createApp} from "vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });
`
            },
            code2: {
                basic: `
export default {
    ...
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
    ],
    ...
}
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Unstyled mode is disabled by default for all components. Using the PrimeVue plugin during installation, set <i>unstyled</i> as true to enable it globally. Visit the <NuxtLink to="/unstyled">Unstyled mode</NuxtLink> documentation for more
            information and examples.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
`
            }
        };
    }
};
</script>

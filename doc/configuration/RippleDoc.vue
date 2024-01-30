<template>
    <DocSectionText v-bind="$attrs">
        <p>Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup.</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
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

app.use(PrimeVue, { ripple: true });
`
            }
        };
    }
};
</script>

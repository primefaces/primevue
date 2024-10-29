<template>
    <DocSectionText v-bind="$attrs">
        <p>Hybrid mode is enabled for the whole suite by setting the <i>theme</i> option as <i>none</i>.</p>
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

app.use(PrimeVue, { theme: 'none' });
`
            }
        };
    }
};
</script>

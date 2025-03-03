<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure PrimeVue plugin with theme set as <i>none</i>, this option disables the default design token based theming.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue, {
    theme: 'none'
});
`
            }
        };
    }
};
</script>

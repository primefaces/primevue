<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Unstyled mode is disabled by default for all components. Using the PrimeVue plugin during installation, set <i>unstyled</i> as true to enable it globally. Visit the <NuxtLink to="/unstyled">Unstyled mode</NuxtLink> documentation for more
            information and examples.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>In unstyled mode, you'd need to style the components on your end. If you are using Tailwind CSS, see the <a href="https://tailwind.primevue.org/vite/">Tailwind CSS Presets</a> project to get you started.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true
});
`
            },
            code2: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';      //import preset

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset
});
`
            }
        };
    }
};
</script>

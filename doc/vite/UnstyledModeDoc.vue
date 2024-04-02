<template>
    <DocSectionText v-bind="$attrs">
        <p>In unstyled mode, the components do not include any CSS so you'd need to style the components on your end. Visit the <NuxtLink to="/unstyled">Unstyled mode</NuxtLink> documentation for more information and examples.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>If you are using Tailwind CSS, visit the <a href="https://tailwind.primevue.org/vite/">Tailwind CSS Presets</a> project to get you started with styling the components with Tailwind utility classes.</p>
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
import PrimeVueUnstyled from "primevue/config";
const app = createApp(App);

app.use(PrimeVueUnstyled);
`
            },
            code2: {
                basic: `
import { createApp } from 'vue';
import PrimeVueUnstyled from 'primevue/config';
import Lara from '@/presets/lara';      //import preset

const app = createApp(App);
app.use(PrimeVueUnstyled, {
    pt: Lara                            //apply preset
});
`
            }
        };
    }
};
</script>

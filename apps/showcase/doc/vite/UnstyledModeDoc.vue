<template>
    <DocSectionText v-bind="$attrs">
        <p>
            In unstyled mode, the components do not include any CSS so you'd need to style the components on your end, this is especially useful when building your own UI library on top of PrimeVue. Visit the
            <NuxtLink to="/theming/unstyled">Unstyled mode</NuxtLink> documentation for more information and examples.
        </p>
        <p>
            If you are using Tailwind CSS and prefer to have full control over the component styling, visit the <a href="https://tailwind.primevue.org/vite/">Tailwind CSS Presets</a> project to get you started with styling the components with
            Tailwind utility classes.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
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
            }
        };
    }
};
</script>

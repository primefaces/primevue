<template>
    <DocSectionText v-bind="$attrs">
        <p>Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the <NuxtLink to="/theming/styled">styled mode</NuxtLink> documentation for details.</p>
        <p>Install the <i>@primevue/themes</i> add-on package as the themes are not included in PrimeVue by default.</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
        <p>Configure PrimeVue to use a theme like Aura.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
# Using npm
npm install @primevue/themes

# Using yarn
yarn add @primevue/themes

# Using pnpm
pnpm add @primevue/themes
`
            },
            code2: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
`
            }
        };
    }
};
</script>

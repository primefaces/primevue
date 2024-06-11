<template>
    <DocSectionText v-bind="$attrs">
        <p>Style mode offers theming based on a design token based architecture. See the <NuxtLink to="/theming/styled">styled mode</NuxtLink> documentation for details such as building your own theme.</p>

        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
`
            }
        };
    }
};
</script>

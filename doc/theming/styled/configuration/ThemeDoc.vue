<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>theme</i> property is used to customize the initial theme that is preconfigured to be PrimeOne base with the Aura preset by default. The following is the default configuration and only needs to be defined for customization.</p>
        <p></p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import PrimeVue from 'primevue/config';
import PrimeOne from 'primevue/themes/primeone';
import Aura from 'primevue/themes/primeone/aura';

const app = createApp(App);

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        base: PrimeOne,
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

<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>theme</i> property is used to customize the initial theme, prefer the <i>PrimeVue</i> plugin for custom configuration instead of the preconfigured <i>PrimeVueStyled</i>.</p>
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
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    // Default theme configuration
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

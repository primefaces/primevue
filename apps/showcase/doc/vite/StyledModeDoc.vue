<template>
    <DocSectionText v-bind="$attrs">
        <p>Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the <NuxtLink to="/theming/styled">styled mode</NuxtLink> documentation for details.</p>
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

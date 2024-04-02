<template>
    <DocSectionText v-bind="$attrs">
        <p>Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the <NuxtLink to="/theming/styled">styled mode</NuxtLink> documentation to for customization.</p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import PrimeVueStyled from 'primevue/styled';

const app = createApp(App);
app.use(PrimeVueStyled);
`
            }
        };
    }
};
</script>

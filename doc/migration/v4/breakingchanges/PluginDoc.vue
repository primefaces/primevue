<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>PrimeVue</i> plugin is replaced with <i>PrimeVueStyled</i> and <i>PrimeVueUnstyled</i> plugins depending on the theming mode.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
//v3 styled mode
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);

//v4 styled mode
import PrimeVueStyled from 'primevue/styled';

const app = createApp(App);
app.use(PrimeVueStyled);
`
            },
            code2: {
                basic: `
///v3 unstyled mode
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true
});

///v4 unstyled mode
import PrimeVueUnstyled from 'primevue/styled';

const app = createApp(App);
app.use(PrimeVueUnstyled);
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue components can be globally managed through a single location using the global <i>pt</i> object. Before using the pt state from <i>PrimeVueContext</i>, it is essential to encapsulate your application with <i>PrimeVueProvider</i>.
            For more details, <PrimeVueNuxtLink to="/installation/#plugin">click</PrimeVueNuxtLink> here.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode import hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// main.js
const pt = {
    panel: {
        header: { class: 'bg-primary' }
    },
    autocomplete: {
        input: { root: { class: 'w-16rem' } }
    }
}

const app = createApp(App);
app.use(PrimeVue, { pt });
`
            }
        };
    }
};
</script>

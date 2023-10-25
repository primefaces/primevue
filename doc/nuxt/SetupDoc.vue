<template>
    <DocSectionText v-bind="$attrs">
        <p>The module is enabled by adding <i>nuxt-primevue</i> to the modules option. Configuration values are defined with the <i>primevue</i> property.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
        <p>The complete API with the all available configuration options along with the default values.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        /* Options */
    }
})
`
            },
            code2: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        usePrimeVue: true,
        options: {},
        importPT: undefined,
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
        components: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        directives: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        },
        composables: {
            prefix: '',
            name: undefined,
            include: undefined,
            exclude: undefined
        }
    }
})
`
            }
        };
    }
};
</script>

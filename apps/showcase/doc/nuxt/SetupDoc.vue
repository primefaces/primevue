<template>
    <DocSectionText v-bind="$attrs">
        <p>In <i>nuxt.config</i> file, add the <i>@primevue/nuxt-module</i> to the modules section and define <i>primevue</i> object for the configuration of the module.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
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
        '@primevue/nuxt-module'
    ],
    primevue: {
        /* Configuration */
    }
})
`
            }
        };
    }
};
</script>

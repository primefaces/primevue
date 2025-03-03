<template>
    <DocSectionText v-bind="$attrs">
        <p>In your <i>nuxt-config</i> file, add the <i>@primevue/nuxt-module</i> module and configure PrimeVue plugin with theme set as <i>none</i>, this option disables the default design token based theming..</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: 'none'
        }
    }
})
`
            }
        };
    }
};
</script>

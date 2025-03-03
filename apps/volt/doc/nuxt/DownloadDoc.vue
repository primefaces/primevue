<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue" target="_blank" rel="noopener noreferrer">npm registry</a>. For this setup, we'll also use the <i>@primevue/nuxt-module</i> module.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install primevue
npm install --save-dev @primevue/nuxt-module

# Using yarn
yarn add primevue
yarn add --dev @primevue/nuxt-module

# Using pnpm
pnpm add primevue
pnpm add -D @primevue/nuxt-module
`
            }
        };
    }
};
</script>

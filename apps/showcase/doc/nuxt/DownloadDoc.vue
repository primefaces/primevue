<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue">npm registry</a> along with the official
            <a href="https://www.npmjs.com/package/@primevue/nuxt-module" target="_blank" rel="noopener noreferrer">@primevue/nuxt-module</a>.
        </p>
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
npm install primevue @primevue/themes
npm install --save-dev @primevue/nuxt-module

# Using yarn
yarn add primevue @primevue/themes
yarn add --dev @primevue/nuxt-module

# Using pnpm
pnpm add primevue @primevue/themes
pnpm add -D @primevue/nuxt-module
`
            }
        };
    }
};
</script>

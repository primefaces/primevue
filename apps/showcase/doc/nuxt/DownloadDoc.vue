<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue">npm Registry</a> along with the official
            <a href="https://www.npmjs.com/package/@primevue/nuxt-module" target="_blank" rel="noopener noreferrer">nuxt-primevue</a> module.
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
npm install primevue@4.0.0-rc.2
npm install --save-dev @primevue/nuxt-module@4.0.0-rc.2

# Using yarn
yarn add primevue@4.0.0-rc.2
yarn add --dev @primevue/nuxt-module@4.0.0-rc.2

# Using pnpm
pnpm add primevue@4.0.0-rc.2
pnpm add -D @primevue/nuxt-module@4.0.0-rc.2
`
            }
        };
    }
};
</script>

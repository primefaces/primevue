<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue">npm Registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install --save-dev nuxt-primevue

# Using yarn
yarn add --dev nuxt-primevue

# Using pnpm
pnpm add -D nuxt-primevue
`
            }
        };
    }
};
</script>

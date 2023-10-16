<template>
    <DocSectionText v-bind="$attrs">
        <p>The <a href="https://www.npmjs.com/package/nuxt-primevue" target="_blank" rel="noopener noreferrer">nuxt-primevue</a> package is the official module by PrimeTek.</p>
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

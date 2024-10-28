<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download on <a href="https://www.npmjs.com/package/primevue">npm Registry</a>.</p>
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

# Using yarn
yarn add primevue @primevue/themes

# Using pnpm
pnpm add primevue @primevue/themes
`
            }
        };
    }
};
</script>

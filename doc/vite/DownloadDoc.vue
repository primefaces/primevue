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
npm install primevue@4.0.0-rc.1

# Using yarn
yarn add primevue@4.0.0-rc.1

# Using pnpm
pnpm add primevue@4.0.0-rc.1
`
            }
        };
    }
};
</script>

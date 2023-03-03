<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeVue is available for download at <a href="https://www.npmjs.com/package/primevue">npm</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `// with npm
npm install primevue primeicons

// with yarn
yarn add primevue primeicons`
            }
        };
    }
};
</script>

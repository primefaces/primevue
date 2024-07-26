<template>
    <DocSectionText v-bind="$attrs">
        <p>The module installs the PrimeVue plugin by default. Disable this option if you prefer to configure PrimeVue manually e.g. with a Nuxt plugin.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
primevue: {
    usePrimeVue: true
}
`
            }
        };
    }
};
</script>

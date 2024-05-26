<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme preset via a script element after adding PrimeVue, see <NuxtLink to="/theming/styled/#presets">preset</NuxtLink> section for the complete list of available presets to choose from.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<!-- <script src="https://unpkg.com/primevue/umd/themes/{preset}.min.js"><\/script> -->

<script src="https://unpkg.com/primevue/umd/themes/aura.min.js"><\/script>
`
            }
        };
    }
};
</script>

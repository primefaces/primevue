<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme preset via a script element after adding PrimeVue, valid options are Aura, Lara and Nora.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<!-- <script src="https://unpkg.com/primevue@4.0.0-beta.4/umd/themes/{preset}.min.js"><\/script> -->

<script src="https://unpkg.com/primevue@4.0.0-beta.4/umd/themes/aura.min.js"><\/script>
<script src="https://unpkg.com/primevue@4.0.0-beta.4/umd/themes/lara.min.js"><\/script>
<script src="https://unpkg.com/primevue@4.0.0-beta.4/umd/themes/nora.min.js"><\/script>
`
            }
        };
    }
};
</script>

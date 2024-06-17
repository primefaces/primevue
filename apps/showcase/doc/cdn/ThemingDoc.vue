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
<!-- <script src="https://unpkg.com/@primevue/themes@4.0.0-rc.2/umd/{preset}.min.js"><\/script> -->

<script src="https://unpkg.com/@primevue/themes@4.0.0-rc.2/umd/aura.min.js"><\/script>
<script src="https://unpkg.com/@primevue/themes@4.0.0-rc.2/umd/lara.min.js"><\/script>
<script src="https://unpkg.com/@primevue/themes@4.0.0-rc.2/umd/nora.min.js"><\/script>
`
            }
        };
    }
};
</script>

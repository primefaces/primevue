<template>
    <DocSectionText v-bind="$attrs">
        <p>
            You can use PrimeVue and Vue.js from a CDN with a script tag. This approach does not involve any build step, and is suitable for enhancing static HTML. This guide uses
            <a href="https://www.unpkg.com/" rel="noopener noreferrer">unpkg</a> however other providers such as <a href="https://www.jsdelivr.com" target="_blank" rel="noopener noreferrer">jsdeliver</a> and
            <a href="https://cdnjs.com" target="_blank" rel="noopener noreferrer">cdnjs</a> can also be used.
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
https://unpkg.com/vue@3/dist/vue.global.js
https://unpkg.com/primevue@4.0.0-beta.4/umd/primevue.min.js
https://unpkg.com/primevue@4.0.0-beta.4/umd/themes/aura.min.js  // see theming for alternatives
`
            }
        };
    }
};
</script>

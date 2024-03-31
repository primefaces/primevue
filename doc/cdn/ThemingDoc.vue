<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme file with a link element, see <NuxtLink to="/theming/#themes">themes</NuxtLink> section for the complete list of available themes to choose from.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<link rel="stylesheet" href="https://unpkg.com/primevue/resources/themes/lara-light-green/theme.css" />
`
            }
        };
    }
};
</script>

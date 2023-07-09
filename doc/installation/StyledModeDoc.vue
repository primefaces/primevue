<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme and core styles are the required css files to be imported, visit the
            <NuxtLink to="/theming/#themes">Themes</NuxtLink> section for the complete list of available themes to choose from.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>Each PrimeVue theme has its own font family so it is suggested to apply it to your application as well for a unified look.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";`
            },
            code2: {
                basic: `body {
    font-family: var(--font-family);
} `
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Module is used to configure the PrimeVue options, register components, directives and composables. CSS configuration of the styled mode is not included at the moment due to the upcoming enhancements like moving theming to core with CSS
            variables. In styled mode, the theme can be defined at Nuxt configuration with the <i>css</i> property. Note that this only applies to styled mode, in unstyled mode a theme file is not required as styling is done externally.
        </p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <p>
            Until the new styled mode implementation is ready, dynamic theming at runtime is currently done by switching theme css files. Visit the <NuxtLink to="/theming/#switchthemes">Switch Themes</NuxtLink>
            section at styled mode for an example.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default defineNuxtConfig({
    css: ['primevue/resources/themes/aura-dark-green/theme.css']
})
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the
            <NuxtLink to="/theming/#themes">Themes</NuxtLink> section for the complete list of available themes to choose from.
        </p>
        <p>You may use the <i>app.vue</i> file to import a theme using a script.</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
        <p>The style section may also be used with <i>@import</i>.</p>
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
        <p>Another alternative would be the <i>css</i> option in <i>nuxt.config</i>.</p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
        <p>
            The style classes of PrimeVue are defined under the <i>primevue</i> CSS layer to be easier to customize by having low specificity. If you are using a CSS library that styles default HTML elements such as Tailwind Preflight, Bootstrap,
            Normalize, or similar, a custom CSS layer configuration might be necessary with the <i>cssLayerOrder</i> option to make sure primevue layer is defined afterward. This only applies to Styled Mode as Unstyled Mode does not use any default
            styles or layers. View the <NuxtLink to="/csslayer">CSS Layer</NuxtLink> guide for more information.
        </p>
        <DocSectionCode :code="code4" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code5" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<script>
import 'primevue/resources/themes/aura-light-green/theme.css'
<\/script>
`
            },
            code2: {
                basic: `
<style>
@import url("primevue/resources/themes/aura-light-green/theme.css");
<\/style>
`
            },
            code3: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        /* Options */
    },
    css: ['primevue/resources/themes/aura-light-green/theme.css']
})
`
            },
            code4: {
                basic: `
/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}
`
            },
            code5: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        cssLayerOrder: 'reset,primevue'
    },
    css: ['primevue/resources/themes/aura-light-green/theme.css']
})
`
            }
        };
    }
};
</script>

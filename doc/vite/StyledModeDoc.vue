<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the
            <NuxtLink to="/theming/#themes">Themes</NuxtLink> section for the complete list of available themes to choose from.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>
            The style classes of PrimeVue are defined under the <i>primevue</i> CSS layer to be easier to customize by having low specificity. If you are using a CSS library that styles default HTML elements such as Tailwind Preflight, Bootstrap,
            Normalize, or similar, a custom CSS layer configuration might be necessary. This only applies to Styled Mode as Unstyled Mode does not use any default styles or layers. View the <NuxtLink to="/csslayer">CSS Layer</NuxtLink> guide for more
            information.
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'
`
            },
            code2: {
                basic: `
/* Order */
@layer reset, primevue;

/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}
`
            }
        };
    }
};
</script>

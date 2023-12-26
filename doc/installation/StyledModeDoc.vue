<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the
            <NuxtLink to="/theming/#themes">Themes</NuxtLink> section for the complete list of available themes to choose from.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>
            The classes of PrimeVue is defined under the <i>primevue</i> CSS layer to be easier to customize by having low specificity. If you are using a CSS library that styles default HTML elements such as Tailwind Preflight, Bootstrap, Normalize
            or similar a custom CSS layer configuration might be necessary. Note that this only applies to Styled Mode as Unstyled Mode does not use any default styles or layers. Here is an example with Tailwind, visit the
            <NuxtLink to="/guides/csslayer">CSS Layer</NuxtLink> for more information.
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: "\nimport 'primevue/resources/themes/lara-light-green/theme.css'\n"
            },
            code2: {
                basic: `
@layer tailwind-base, primereact, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
`
            }
        };
    }
};
</script>

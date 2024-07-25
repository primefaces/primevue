<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>options</i> property defines the how the CSS would be generated from the design tokens of the preset.</p>
        <h4>prefix</h4>
        <p>The prefix of the CSS variables, defaults to <i>p</i>. For instance, the <i>primary.color</i> design token would be <i>var(--p-primary-color)</i>.</p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
        <h4>darkModeSelector</h4>
        <p>
            The CSS rule to encapsulate the CSS variables of the dark mode, the default is the <i>system</i> to generate <i>@media (prefers-color-scheme: dark)</i>. If you need to make the dark mode toggleable based on the user selection define a
            class selector such as <i>.app-dark</i> and toggle this class at the document root. See the dark mode toggle section for an example.
        </p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
        <h4>cssLayer</h4>
        <p>
            Defines whether the styles should be defined inside a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer" target="_blank" rel="noopener noreferrer">CSS layer</a> named <i>primeui</i> by default or not. A CSS layer would be
            handy to declare a custom cascade layer for easier customization. The default is <i>false</i>.
        </p>
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
options: {
    prefix: 'my'
}
`
            },
            code2: {
                basic: `
options: {
    darkModeSelector: '.my-app-dark'
}
`
            },
            code3: {
                basic: `
options: {
    cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
    }
}
`
            }
        };
    }
};
</script>

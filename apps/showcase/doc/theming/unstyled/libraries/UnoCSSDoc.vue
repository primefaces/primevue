<template>
    <DocSectionText v-bind="$attrs">
        <p>
            To get started, UnoCSS should already be available in your application, if not visit the UnoCSS <a href="https://unocss.dev/integrations/">documentation</a> for the installation in various environments. Theming of PrimeVue components with
            UnoCSS is mainly achieved with unstyled mode either using global setting or for a particular component only.
        </p>
        <p>
            UnoCSS adds the utilities on demand so it needs to be aware of PrimeVue components path otherwise the classes used will not be included in the page, sample below configures UnoCSS with Vite. For other environments like Nuxt, visit the
            <a href="https://unocss.dev/integrations/">integrations documentation</a>.
        </p>
        <p>For a live sample, visit the <a href="https://stackblitz.com/edit/vitejs-vite-cowgnp?file=src%2FApp.vue" target="_blank" rel="noopener noreferrer">example repository</a>.</p>
    </DocSectionText>
</template>

<script></script>

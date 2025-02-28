<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports" target="_blank" rel="noopener noreferrer">postcss-import</a> plugin manages organization of multiple CSS files at build time. Begin with downloading
            the plugin.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />

        <p>Add it as the first plugin at your PostCSS configuration.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
npm install -D postcss-import
`
            },
            code2: {
                basic: `
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
`
            }
        };
    }
};
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>CSS file of the icon library needs to be imported in <i>styles.css</i> or <i>styles.scss</i> of your application.</p>
    </DocSectionText>
    <DocSectionCode :code="code_css" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <DocSectionCode :code="code_scss" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code_css: {
                basic: `// For .scss files\nimport 'primeicons/primeicons.css';`
            },
            code_scss: {
                basic: `// For .css files\n@import 'primeicons/primeicons.css';`
                        }
        };
    }
};
</script>

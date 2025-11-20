<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="/llms.txt" target="_blank">/llms.txt</a> file provides a curated index of key PrimeVue documentation pages in a structured format.
            This file follows the <a href="https://llmstxt.org/" target="_blank" rel="noopener noreferrer">llms.txt industry standard</a> and serves as an entry point for AI models to discover and navigate the documentation.
        </p>
        <p>
            Each entry in the file includes:
        </p>
        <ul>
            <li><strong>Component Name</strong>: The display name of the component</li>
            <li><strong>URL</strong>: Direct link to the component's documentation page</li>
            <li><strong>Description</strong>: Brief explanation of the component's purpose</li>
        </ul>
    </DocSectionText>
    <div class="card">
        <pre><code>{{ exampleContent }}</code></pre>
    </div>
</template>

<script>
export default {
    name: 'LlmsTxtDoc',
    data() {
        return {
            exampleContent: `# PrimeVue

## Components

- [Vue Button Component](https://primevue.org/button): Button is an extension to standard input element...
- [Vue DataTable Component](https://primevue.org/datatable): DataTable displays data in tabular format...
- [Vue Dialog Component](https://primevue.org/dialog): Dialog is a container to display content in an overlay window...`
        };
    }
};
</script>

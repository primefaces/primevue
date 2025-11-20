<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="/llms-full.txt" target="_blank">/llms-full.txt</a> file contains the complete documentation for all PrimeVue components in a single text file.
            This comprehensive resource includes all component examples, API documentation, theming information, and usage patterns.
        </p>
        <p>
            This file is ideal for:
        </p>
        <ul>
            <li><strong>AI Model Training</strong>: Complete context about PrimeVue components</li>
            <li><strong>Comprehensive Queries</strong>: When AI assistants need full documentation access</li>
            <li><strong>Offline Reference</strong>: Single file containing all component information</li>
            <li><strong>Search Indexing</strong>: Building search engines or documentation tools</li>
        </ul>
        <p class="text-sm text-color-secondary mt-3">
            Note: This file is large (~800KB) and includes complete documentation for {{ componentCount }}+ components with Props, Slots, Emits, Pass Through Options, and Theming information.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    name: 'LlmsFullTxtDoc',
    data() {
        return {
            componentCount: 108
        };
    }
};
</script>

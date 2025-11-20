<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue implements the <a href="https://llmstxt.org/" target="_blank" rel="noopener noreferrer">llms.txt standard</a>, an industry convention designed to help AI models better understand and navigate documentation.
            This implementation provides multiple formats optimized for different use cases, from quick reference to comprehensive documentation.
        </p>
    </DocSectionText>
</template>

<script>
export default {
    name: 'OverviewDoc'
};
</script>

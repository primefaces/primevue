<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://llmstxt.org/" target="_blank" rel="noopener noreferrer">llms.txt</a> file is an industry standard that helps AI models better understand and navigate the PrimeVue documentation. It lists key pages in a structured format, making it easier for LLMs to retrieve relevant information.
        </p>
        <Button as="a" href="/llms/llms.txt" target="_blank">Open llms.txt</Button>
    </DocSectionText>
</template>

<script>
export default {
    name: 'LlmsTxtDoc'
};
</script>

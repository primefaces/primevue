<template>
    <Head>
        <Title>LLMs.txt - PrimeVue</Title>
        <Meta name="description" content="LLM-optimized documentation endpoints for PrimeVue components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>LLMs.txt</h1>
                <p>LLM-optimized documentation endpoints for PrimeVue components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import LlmsTxtDoc from '@/doc/llms/LlmsTxtDoc.vue';
import LlmsFullTxtDoc from '@/doc/llms/LlmsFullTxtDoc.vue';
import MarkdownExtensionDoc from '@/doc/llms/MarkdownExtensionDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'llmstxt',
                    label: '/llms.txt',
                    component: LlmsTxtDoc
                },
                {
                    id: 'llmsfulltxt',
                    label: '/llms-full.txt',
                    component: LlmsFullTxtDoc
                },
                {
                    id: 'markdown',
                    label: '.md extension',
                    component: MarkdownExtensionDoc
                }
            ]
        };
    }
};
</script>

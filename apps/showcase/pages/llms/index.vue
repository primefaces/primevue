<template>
    <Head>
        <Title>LLMs.txt - PrimeVue</Title>
        <Meta name="description" content="LLM-optimized documentation endpoints for PrimeVue components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>LLMs.txt</h1>
                        <p>LLM-optimized documentation endpoints for PrimeVue components.</p>
                    </div>
                    <DocCopyMarkdown docType="page" class="flex-shrink-0" />
                </div>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
import LlmsTxtDoc from '@/doc/llms/LlmsTxtDoc.vue';
import LlmsFullTxtDoc from '@/doc/llms/LlmsFullTxtDoc.vue';
import MarkdownExtensionDoc from '@/doc/llms/MarkdownExtensionDoc.vue';

export default {
    components: { DocCopyMarkdown },
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

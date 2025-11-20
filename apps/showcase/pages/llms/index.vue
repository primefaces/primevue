<template>
    <DocComponent
        title="LLMs.txt - PrimeVue"
        header="LLMs.txt"
        description="PrimeVue provides LLM-friendly documentation formats to help AI models better understand and navigate the component library."
        :componentDocs="docs"
        :apiDocs="[]"
    />
</template>

<script>
import OverviewDoc from '@/doc/llms/OverviewDoc.vue';
import LlmsTxtDoc from '@/doc/llms/LlmsTxtDoc.vue';
import LlmsFullTxtDoc from '@/doc/llms/LlmsFullTxtDoc.vue';
import MarkdownExtensionDoc from '@/doc/llms/MarkdownExtensionDoc.vue';
import UsageExamplesDoc from '@/doc/llms/UsageExamplesDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
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
                    label: '.md Extension',
                    component: MarkdownExtensionDoc
                },
                {
                    id: 'examples',
                    label: 'Usage Examples',
                    component: UsageExamplesDoc
                }
            ]
        };
    }
};
</script>

<template>
    <DocComponent
        title="LLMs.txt - PrimeVue"
        header="LLMs.txt"
        description="LLMs.txt is a file that contains the LLMs for the PrimeVue documentation."
        :componentDocs="docs"
        :apiDocs="[]"
    />
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

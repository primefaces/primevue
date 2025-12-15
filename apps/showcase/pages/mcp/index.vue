<template>
    <Head>
        <Title>MCP Server - PrimeVue</Title>
        <Meta name="description" content="Model Context Protocol (MCP) server for PrimeVue component library." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>MCP Server</h1>
                        <p>Model Context Protocol (MCP) server for PrimeVue component library. Provides AI assistants with comprehensive access to PrimeVue component documentation.</p>
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
import IntroductionDoc from '@/doc/mcp/IntroductionDoc.vue';
import ClaudeCodeDoc from '@/doc/mcp/ClaudeCodeDoc.vue';
import VSCodeDoc from '@/doc/mcp/VSCodeDoc.vue';
import OpenAICodexDoc from '@/doc/mcp/OpenAICodexDoc.vue';
import CursorDoc from '@/doc/mcp/CursorDoc.vue';
import WindsurfDoc from '@/doc/mcp/WindsurfDoc.vue';
import ZedDoc from '@/doc/mcp/ZedDoc.vue';
import ToolsDoc from '@/doc/mcp/ToolsDoc.vue';
import ExamplePromptsDoc from '@/doc/mcp/ExamplePromptsDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            docs: [
                {
                    id: 'introduction',
                    label: 'Introduction',
                    component: IntroductionDoc
                },
                {
                    id: 'installation',
                    label: 'Installation',
                    children: [
                        {
                            id: 'claudecode',
                            label: 'Claude Code',
                            component: ClaudeCodeDoc
                        },
                        {
                            id: 'vscode',
                            label: 'VS Code',
                            component: VSCodeDoc
                        },
                        {
                            id: 'openaicodex',
                            label: 'OpenAI Codex',
                            component: OpenAICodexDoc
                        },
                        {
                            id: 'cursor',
                            label: 'Cursor',
                            component: CursorDoc
                        },
                        {
                            id: 'windsurf',
                            label: 'Windsurf',
                            component: WindsurfDoc
                        },
                        {
                            id: 'zed',
                            label: 'Zed',
                            component: ZedDoc
                        }
                    ]
                },
                {
                    id: 'tools',
                    label: 'Available Tools',
                    component: ToolsDoc
                },
                {
                    id: 'examples',
                    label: 'Example Prompts',
                    component: ExamplePromptsDoc
                }
            ]
        };
    }
};
</script>

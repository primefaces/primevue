<template>
    <Head>
        <Title>Install PrimeVue with CDN</Title>
        <Meta name="description" content="Setting up PrimeVue in a project using CDN" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>Install PrimeVue with CND</h1>
                        <p>Setting up PrimeVue in a project using CDN.</p>
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
import CreateAppDoc from '@/doc/cdn/CreateAppDoc.vue';
import ExampleDoc from '@/doc/cdn/ExampleDoc.vue';
import PluginDoc from '@/doc/cdn/PluginDoc.vue';
import ScriptDoc from '@/doc/cdn/ScriptDoc.vue';
import ThemingDoc from '@/doc/cdn/ThemingDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            docs: [
                {
                    id: 'script',
                    label: 'Script',
                    component: ScriptDoc
                },
                {
                    id: 'createapp',
                    label: 'CreateApp',
                    component: CreateAppDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'theming',
                    label: 'Theming',
                    component: ThemingDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        };
    }
};
</script>

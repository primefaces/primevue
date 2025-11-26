<template>
    <Head>
        <Title>Auto Import - PrimeVue</Title>
        <Meta name="description" content="On-demand PrimeVue components with auto imports and tree-shaking." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>Auto Import</h1>
                        <p>On-demand PrimeVue components with auto imports and tree-shaking.</p>
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
import ExampleDoc from '@/doc/autoimport/ExampleDoc.vue';
import OverviewDoc from '@/doc/autoimport/OverviewDoc.vue';
import UnpluginDoc from '@/doc/autoimport/UnpluginDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                },
                {
                    id: 'unplugin',
                    label: 'Unplugin',
                    component: UnpluginDoc
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

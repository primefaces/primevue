<template>
    <Head>
        <Title>Setup - PrimeVue</Title>
        <Meta name="description" content="Setup guides for popular development environments." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>Setup</h1>
                        <p>Installation guides for popular development environments.</p>
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
import GuidesDoc from '@/doc/setup/GuidesDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            docs: [
                {
                    id: 'guides',
                    label: 'Guides',
                    component: GuidesDoc
                }
            ]
        };
    }
};
</script>

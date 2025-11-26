<template>
    <div>
        <Head>
            <Title>Unstyled - PrimeVue</Title>
            <Meta name="description" content="Theming PrimeVue with alternative styling approaches." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div class="flex-1">
                            <h1>Unstyled Mode</h1>
                            <p>Theming PrimeVue with alternative styling approaches.</p>
                        </div>
                        <DocCopyMarkdown docType="page" class="flex-shrink-0" />
                    </div>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
import ArchitectureDoc from '@/doc/theming/unstyled/ArchitectureDoc.vue';
import ExampleDoc from '@/doc/theming/unstyled/ExampleDoc.vue';
import GlobalDoc from '@/doc/theming/unstyled/GlobalDoc.vue';
import SetupDoc from '@/doc/theming/unstyled/SetupDoc.vue';
import VoltDoc from '@/doc/theming/unstyled/VoltDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            docs: [
                {
                    id: 'architecture',
                    label: 'Architecture',
                    component: ArchitectureDoc
                },
                {
                    id: 'setup',
                    label: 'Setup',
                    component: SetupDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                },
                {
                    id: 'global',
                    label: 'Global',
                    component: GlobalDoc
                },
                {
                    id: 'volt',
                    label: 'Volt',
                    component: VoltDoc
                }
            ]
        };
    }
};
</script>

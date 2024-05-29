<template>
    <Head>
        <Title>Migration - PrimeVue</Title>
        <Meta name="description" content="Migration Guide to PrimeVue v4." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Migration</h1>
                <p>Migration guide to PrimeVue v4.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import OverviewDoc from '@/doc/guides/migration/v4/OverviewDoc.vue';
import BreakingDoc from '@/doc/guides/migration/v4/changes/BreakingDoc.vue';
import CompatibleDoc from '@/doc/guides/migration/v4/changes/CompatibleDoc.vue';

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
                    id: 'changes',
                    label: 'Changes',
                    description: 'The list of backward compatible and breaking changes.',
                    children: [
                        {
                            id: 'compatible',
                            label: 'Compatible',
                            component: CompatibleDoc
                        },
                        {
                            id: 'breaking',
                            label: 'Breaking',
                            component: BreakingDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<template>
    <Head>
        <Title>Migration - PrimeVue</Title>
        <Meta name="description" content="Migration Guide to PrimeVue v4." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Introduction</h1>
                <p>Migration guide to PrimeVue v4.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import NewFeaturesDoc from '@/doc/guides/migration/v4/NewFeaturesDoc.vue';
import OverviewDoc from '@/doc/guides/migration/v4/OverviewDoc.vue';
import ComponentsDoc from '@/doc/guides/migration/v4/breakingchanges/ComponentsDoc.vue';
import StyledModeDoc from '@/doc/guides/migration/v4/breakingchanges/StyledModeDoc.vue';

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
                    id: 'newfeatures',
                    label: 'New Features',
                    component: NewFeaturesDoc
                },
                {
                    id: 'breakingchanges',
                    label: 'Breaking Changes',
                    children: [
                        {
                            id: 'styledmode',
                            label: 'Styled Mode',
                            component: StyledModeDoc
                        },
                        {
                            id: 'components',
                            label: 'Components',
                            component: ComponentsDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>

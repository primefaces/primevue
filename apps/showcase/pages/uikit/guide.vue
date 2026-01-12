<template>
    <div>
        <Head>
            <Title>PrimeOne Guide - PrimeVue</Title>
            <Meta name="description" content="PrimeOne is a strong UI component library gets even better with a great Figma UI Kit. That's what PrimeOne is PrimeTek's official Figma UI Kit, built to work seamlessly with the Prime UI Suites." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>PrimeOne Guide</h1>
                    <p>PrimeOne is a strong UI component library gets even better with a great Figma UI Kit. That's what PrimeOne is PrimeTek's official Figma UI Kit, built to work seamlessly with the Prime UI Suites.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AddingPrimeIconsDoc from '@/doc/uikit/AddingPrimeIconsDoc.vue';
import CIPipelineDoc from '@/doc/uikit/CIPipelineDoc.vue';
import CollectionsDoc from '@/doc/uikit/CollectionsDoc.vue';
import ImportantNoticeDoc from '@/doc/uikit/ImportantNoticeDoc.vue';
import LimitationsDoc from '@/doc/uikit/LimitationsDoc.vue';
import OverviewDoc from '@/doc/uikit/OverviewDoc.vue';
import ResourcesDoc from '@/doc/uikit/ResourcesDoc.vue';
import SupportDoc from '@/doc/uikit/SupportDoc.vue';
import UpdatePrimeOneDoc from '@/doc/uikit/UpdatePrimeOneDoc.vue';
import ComponentsDoc from '@/doc/uikit/faq/ComponentsDoc.vue';
import LicenceDoc from '@/doc/uikit/faq/LicenceDoc.vue';
import RoadmapDoc from '@/doc/uikit/faq/RoadmapDoc.vue';
import UpdatesDoc from '@/doc/uikit/faq/UpdatesDoc.vue';
import UsageDoc from '@/doc/uikit/faq/UsageDoc.vue';
import EnablingDoc from '@/doc/uikit/installation/EnablingDoc.vue';
import ImportingDoc from '@/doc/uikit/installation/ImportingDoc.vue';
import PublishingDoc from '@/doc/uikit/installation/PublishingDoc.vue';

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
                    id: 'important-notice',
                    label: 'Important Notice',
                    component: ImportantNoticeDoc
                },
                {
                    id: 'resources',
                    label: 'Resources',
                    component: ResourcesDoc
                },
                {
                    id: 'installation',
                    label: 'Installation',
                    children: [
                        {
                            id: 'importing',
                            label: 'Importing',
                            component: ImportingDoc
                        },
                        {
                            id: 'publishing',
                            label: 'Publishing',
                            component: PublishingDoc
                        },
                        {
                            id: 'enabling',
                            label: 'Enabling',
                            component: EnablingDoc
                        }
                    ]
                },
                {
                    id: 'collections',
                    label: 'Collections',
                    component: CollectionsDoc
                },
                {
                    id: 'ci-pipeline',
                    label: 'CI Pipeline',
                    component: CIPipelineDoc
                },
                {
                    id: 'update-primeone',
                    label: 'Update PrimeOne',
                    component: UpdatePrimeOneDoc
                },
                {
                    id: 'adding-primeicons',
                    label: 'Adding PrimeIcons',
                    component: AddingPrimeIconsDoc
                },
                {
                    id: 'faq',
                    label: 'FAQ',
                    children: [
                        {
                            id: 'usage',
                            label: 'Usage',
                            component: UsageDoc
                        },
                        {
                            id: 'components',
                            label: 'Components',
                            component: ComponentsDoc
                        },
                        {
                            id: 'updates',
                            label: 'Updates',
                            component: UpdatesDoc
                        },
                        {
                            id: 'roadmap',
                            label: 'Roadmap',
                            component: RoadmapDoc
                        },
                        {
                            id: 'licence',
                            label: 'Licence',
                            component: LicenceDoc
                        }
                    ]
                },
                {
                    id: 'limitations',
                    label: 'Limitations',
                    component: LimitationsDoc
                },
                {
                    id: 'support',
                    label: 'Support',
                    component: SupportDoc
                }
            ]
        };
    }
};
</script>

<template>
    <div>
        <Head>
            <Title>PrimeOne Guide - PrimeVue</Title>
            <Meta name="description" content="PrimeOne is a strong UI component library gets even better with a great Figma UI Kit. That's what PrimeOne is PrimeTek's official Figma UI Kit, built to work seamlessly with the Prime UI Suites." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>PrimeOne Guide | 4.0</h1>
                    <p>PrimeOne is a strong UI component library gets even better with a great Figma UI Kit. That's what PrimeOne is PrimeTek's official Figma UI Kit, built to work seamlessly with the Prime UI Suites.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import AddingPrimeIconsDoc from '@/doc/uikit/common/AddingPrimeIconsDoc.vue';
import LicenceDoc from '@/doc/uikit/common/faq/LicenceDoc.vue';
import RoadmapDoc from '@/doc/uikit/common/faq/RoadmapDoc.vue';
import EnablingDoc from '@/doc/uikit/common/installation/EnablingDoc.vue';
import ImportingDoc from '@/doc/uikit/common/installation/ImportingDoc.vue';
import PublishingDoc from '@/doc/uikit/common/installation/PublishingDoc.vue';
import OverviewDoc from '@/doc/uikit/common/OverviewDoc.vue';
import SupportDoc from '@/doc/uikit/common/SupportDoc.vue';
import UpdatePrimeOneDoc from '@/doc/uikit/common/UpdatePrimeOneDoc.vue';
import PrimeUIFigmaPluginDoc from '@/doc/uikit/v4/PrimeUIFigmaPluginDoc.vue';
import CollectionsDoc from '@/doc/uikit/v4/CollectionsDoc.vue';
import ComponentsDoc from '@/doc/uikit/v4/faq/ComponentsDoc.vue';
import UpdatesDoc from '@/doc/uikit/v4/faq/UpdatesDoc.vue';
import UsageDoc from '@/doc/uikit/v4/faq/UsageDoc.vue';
import ImportantNoticeDoc from '@/doc/uikit/v4/ImportantNoticeDoc.vue';
import LimitationsDoc from '@/doc/uikit/v4/LimitationsDoc.vue';
import ResourcesDoc from '@/doc/uikit/v4/ResourcesDoc.vue';

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
                    id: 'primeui-figma-plugin',
                    label: 'PrimeUI Figma Plugin',
                    component: PrimeUIFigmaPluginDoc
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

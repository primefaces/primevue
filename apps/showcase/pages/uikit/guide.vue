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
import OverviewDoc from '@/doc/uikit/OverviewDoc.vue';
import ResourcesDoc from '@/doc/uikit/ResourcesDoc.vue';
import SupportDoc from '@/doc/uikit/SupportDoc.vue';
import TokenSetsDoc from '@/doc/uikit/TokenSetsDoc.vue';
import UpdatePrimeOneDoc from '@/doc/uikit/UpdatePrimeOneDoc.vue';
import ComponentsDoc from '@/doc/uikit/faq/ComponentsDoc.vue';
import LicenceDoc from '@/doc/uikit/faq/LicenceDoc.vue';
import RoadmapDoc from '@/doc/uikit/faq/RoadmapDoc.vue';
import TokensDoc from '@/doc/uikit/faq/TokensDoc.vue';
import UpdatesDoc from '@/doc/uikit/faq/UpdatesDoc.vue';
import UsageDoc from '@/doc/uikit/faq/UsageDoc.vue';
import EnablingDoc from '@/doc/uikit/installation/EnablingDoc.vue';
import ImportingDoc from '@/doc/uikit/installation/ImportingDoc.vue';
import PublishingDoc from '@/doc/uikit/installation/PublishingDoc.vue';
import DesignChangesDoc from '@/doc/uikit/workflow/DesignChangesDoc.vue';
import TokensStudioSetupDoc from '@/doc/uikit/workflow/TokensStudioSetupDoc.vue';
import CIPipelineDoc from '@/doc/uikit/workflow/CIPipelineDoc.vue';

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
                    id: 'suggested-workflow',
                    label: 'Suggested Workflow',
                    description:
                        "PrimeOne uses Tokens Studio as its primary tool for design token management. To leverage the benefits of Figma Variables, these variables have also been exported from Tokens Studio and included in the file. This setup, while powerful, can make design changes somewhat complex and less fluid due to the way the tools interact. Although the provided guide outlines the recommended steps, we acknowledge that the workflow may feel unintuitive or slow at times. We’re actively exploring improvements, and in the meantime, suggest following the guide as a baseline while adapting it to your team's needs where necessary.",
                    children: [
                        {
                            id: 'tokens-studio-setup',
                            label: 'Tokens Studio Setup',
                            component: TokensStudioSetupDoc
                        },
                        {
                            id: 'ci-pipeline',
                            label: 'CI Pipeline',
                            component: CIPipelineDoc
                        },
                        {
                            id: 'designchanges',
                            label: 'Design Changes',
                            component: DesignChangesDoc
                        }
                    ]
                },
                {
                    id: 'tokensets',
                    label: 'Token Sets',
                    component: TokenSetsDoc
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
                            id: 'tokens',
                            label: 'Tokens',
                            component: TokensDoc
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
                    id: 'support',
                    label: 'Support',
                    component: SupportDoc
                }
            ]
        };
    }
};
</script>

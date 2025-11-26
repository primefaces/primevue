<template>
    <div>
        <Head>
            <Title>Contribution - PrimeVue</Title>
            <Meta name="description" content="Accessible Vue UI Components." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div class="flex-1">
                            <h1>Contribution Guide</h1>
                            <p>Welcome to the PrimeVue Contribution Guide and thank you for considering contributing.</p>
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
import BenefitsDoc from '@/doc/contribution/BenefitsDoc.vue';
import CLADoc from '@/doc/contribution/CLADoc.vue';
import CommunicationDoc from '@/doc/contribution/CommunicationDoc.vue';
import HelpNeededDoc from '@/doc/contribution/HelpNeededDoc.vue';
import IntroductionDoc from '@/doc/contribution/IntroductionDoc.vue';
import KeyPointsDoc from '@/doc/contribution/KeyPointsDoc.vue';
import PathwayDoc from '@/doc/contribution/PathwayDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            checked: false,
            docs: [
                {
                    id: 'introduction',
                    label: 'Introduction',
                    component: IntroductionDoc
                },
                {
                    id: 'helpneeded',
                    label: 'Help Needed',
                    component: HelpNeededDoc
                },
                {
                    id: 'keypoints',
                    label: 'Key Points',
                    component: KeyPointsDoc
                },
                {
                    id: 'communication',
                    label: 'Communication',
                    component: CommunicationDoc
                },
                {
                    id: 'pathway',
                    label: 'Pathway',
                    component: PathwayDoc
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    component: BenefitsDoc
                },
                {
                    id: 'cla',
                    label: 'CLA',
                    component: CLADoc
                }
            ]
        };
    }
};
</script>

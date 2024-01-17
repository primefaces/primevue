<template>
    <div>
        <Head>
            <Title>Accessibility - PrimeVue</Title>
            <Meta name="description" content="Accessible Vue UI Components." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Accessibility</h1>
                    <p>PrimeVue has WCAG 2.1 AA level compliance, refer to the accessibility documentation of each component for detailed information.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ColorsDoc from '@/doc/guides/accessibility/ColorsDoc.vue';
import FormControlsDoc from '@/doc/guides/accessibility/FormControlsDoc.vue';
import IntroductionDoc from '@/doc/guides/accessibility/IntroductionDoc.vue';
import SemanticHTMLDoc from '@/doc/guides/accessibility/SemanticHTMLDoc.vue';
import WAIAriaDoc from '@/doc/guides/accessibility/WAIAriaDoc.vue';
import WCAGDoc from '@/doc/guides/accessibility/WCAGDoc.vue';

export default {
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
                    id: 'wcag',
                    label: 'WCAG',
                    component: WCAGDoc
                },
                {
                    id: 'formcontrols',
                    label: 'Form Controls',
                    component: FormControlsDoc
                },
                {
                    id: 'semantichtml',
                    label: 'Semantic HTML',
                    component: SemanticHTMLDoc
                },
                {
                    id: 'waiaria',
                    label: 'WAI ARIA',
                    component: WAIAriaDoc
                },
                {
                    id: 'colors',
                    label: 'Colors',
                    component: ColorsDoc
                }
            ]
        };
    }
};
</script>

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
                    <p>An introduction to accessibility and how it translates to Vue UI Components.</p>
                    <p class="line-height-3 bg-indigo-600 text-white p-3 text-lg" style="border-radius: 10px">PrimeVue has WCAG 2.1 AA level compliancy. Refer to the accessibility documentation of each component for detailed information.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ColorsDoc from '@/doc/accessibility/ColorsDoc';
import FormControlsDoc from '@/doc/accessibility/FormControlsDoc';
import IntroductionDoc from '@/doc/accessibility/IntroductionDoc';
import SemanticHTMLDoc from '@/doc/accessibility/SemanticHTMLDoc';
import WAIAriaDoc from '@/doc/accessibility/WAIAriaDoc';
import WCAGDoc from '@/doc/accessibility/WCAGDoc';

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

<template>
    <div>
        <Head>
            <Title>Tailwind - PrimeVue</Title>
            <Meta name="description" content="Tailwind UI Components for Vue" />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Tailwind CSS</h1>
                    <p>Tailwind CSS is a popular utility first CSS library that fits perfectly to the unstyled mode to skin the entire UI suite with a design system of your choice.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import CSSLayerDoc from '@/doc/tailwind/CSSLayerDoc.vue';
import ExampleDoc from '@/doc/tailwind/ExampleDoc.vue';
import SetupDoc from '@/doc/tailwind/SetupDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'csslayer',
                    label: 'CSS Layer',
                    component: CSSLayerDoc
                },
                {
                    id: 'unstyled',
                    label: 'Unstyled Mode',
                    description: `In unstyled mode, the exclusive Tailwind integration of PrimeVue is a great choice for developers who want the flexibility of Tailwind with the convenience of
                        a UI Component library. Tailwind is a perfect match for the unstyled mode of PrimeVue to implement design systems. A built-in Tailwind theme as a pass through preset based on
                        PrimeOne Design is even available to get started in no time. In upcoming iterations, a preset gallery will be available to share implementations developed by the PrimeVue community.`,
                    children: [
                        {
                            id: 'setup',
                            label: 'Setup',
                            component: SetupDoc
                        },
                        {
                            id: 'example',
                            label: 'Example',
                            component: ExampleDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>

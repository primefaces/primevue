<template>
    <div>
        <Head>
            <Title>CSS Layer - PrimeVue</Title>
            <Meta name="description" content="Best practices for the PrimeVue cascade layer in styled mode." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>CSS Layer</h1>
                    <p>Best practices for the PrimeVue cascade layer in styled mode.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import BootstrapDoc from '@/doc/csslayer/BootstrapDoc.vue';
import NormalizeDoc from '@/doc/csslayer/NormalizeDoc.vue';
import ResetDoc from '@/doc/csslayer/ResetDoc.vue';
import SpecificityDoc from '@/doc/csslayer/SpecificityDoc.vue';
import TailwindDoc from '@/doc/csslayer/TailwindDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'css-specificity',
                    label: 'CSS Specificity',
                    component: SpecificityDoc
                },
                {
                    id: 'reset',
                    label: 'Reset',
                    component: ResetDoc
                },
                {
                    id: 'libraries',
                    label: 'Libraries',
                    description: 'Compatibility between PrimeVue and CSS libraries.',
                    children: [
                        {
                            id: 'tailwind',
                            label: 'Tailwind CSS',
                            component: TailwindDoc
                        },
                        {
                            id: 'bootstrap',
                            label: 'Bootstrap',
                            component: BootstrapDoc
                        },
                        {
                            id: 'normalize',
                            label: 'Normalize',
                            component: NormalizeDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>

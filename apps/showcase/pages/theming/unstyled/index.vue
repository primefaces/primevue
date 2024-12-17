<template>
    <div>
        <Head>
            <Title>Unstyled - PrimeVue</Title>
            <Meta name="description" content="Theming PrimeVue with your own styles." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Unstyled Mode</h1>
                    <p>Theming PrimeVue with your own styles.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ArchitectureDoc from '@/doc/theming/unstyled/ArchitectureDoc.vue';
import ComparisonDoc from '@/doc/theming/unstyled/ComparisonDoc.vue';
import HybridExampleDoc from '@/doc/theming/unstyled/hybrid/HybridExampleDoc.vue';
import HybridSetupDoc from '@/doc/theming/unstyled/hybrid/HybridSetupDoc.vue';
import HybridTailwindDoc from '@/doc/theming/unstyled/hybrid/HybridTailwindDoc.vue';
import PureExampleDoc from '@/doc/theming/unstyled/pure/PureExampleDoc.vue';
import PureGlobalDoc from '@/doc/theming/unstyled/pure/PureGlobalDoc.vue';
import PureSetupDoc from '@/doc/theming/unstyled/pure/PureSetupDoc.vue';
import PureTailwindDoc from '@/doc/theming/unstyled/pure/PureTailwindDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'architecture',
                    label: 'Architecture',
                    component: ArchitectureDoc
                },
                {
                    id: 'comparison',
                    label: 'Comparison',
                    component: ComparisonDoc
                },
                {
                    id: 'pure',
                    label: 'Pure',
                    children: [
                        {
                            id: 'pure-setup',
                            label: 'Setup',
                            component: PureSetupDoc
                        },
                        {
                            id: 'pure-example',
                            label: 'Example',
                            component: PureExampleDoc
                        },
                        {
                            id: 'pure-global',
                            label: 'Global',
                            component: PureGlobalDoc
                        },
                        {
                            id: 'pure-tailwind',
                            label: 'Tailwind Presets',
                            component: PureTailwindDoc
                        }
                    ]
                },
                {
                    id: 'hybrid',
                    label: 'Hybrid',
                    children: [
                        {
                            id: 'hybrid-setup',
                            label: 'Setup',
                            component: HybridSetupDoc
                        },
                        {
                            id: 'hybrid-example',
                            label: 'Example',
                            component: HybridExampleDoc
                        },
                        {
                            id: 'hybrid-tailwind',
                            label: 'Tailwind Version',
                            component: HybridTailwindDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>

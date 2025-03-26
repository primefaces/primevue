<template>
    <div>
        <Head>
            <Title>Unstyled - PrimeVue</Title>
            <Meta name="description" content="Theming PrimeVue with alternative styling approaches." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Unstyled Mode</h1>
                    <p>Theming PrimeVue with alternative styling approaches.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ArchitectureDoc from '@/doc/theming/unstyled/ArchitectureDoc.vue';
import ExampleDoc from '@/doc/theming/unstyled/ExampleDoc.vue';
import GlobalDoc from '@/doc/theming/unstyled/GlobalDoc.vue';
import SetupDoc from '@/doc/theming/unstyled/SetupDoc.vue';
import VoltDoc from '@/doc/theming/unstyled/VoltDoc.vue';

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
                    id: 'setup',
                    label: 'Setup',
                    component: SetupDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                },
                {
                    id: 'global',
                    label: 'Global',
                    component: GlobalDoc
                },
                {
                    id: 'volt',
                    label: 'Volt',
                    component: VoltDoc
                }
            ]
        };
    }
};
</script>

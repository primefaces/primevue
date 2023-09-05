<template>
    <div>
        <Head>
            <Title>Unstyled - PrimeVue</Title>
            <Meta name="description" content="Styling PrimeVue with your favorite CSS library." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Unstyled Mode</h1>
                    <p>Styling PrimeVue with your favorite CSS library.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ArchitectureDoc from '@/doc/unstyled/ArchitectureDoc';
import ExampleDoc from '@/doc/unstyled/ExampleDoc';
import SetupDoc from '@/doc/unstyled/SetupDoc';
import ThemeDoc from '@/doc/unstyled/ThemeDoc';

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
                    id: 'theme',
                    label: 'Theme',
                    component: ThemeDoc
                }
            ]
        };
    }
};
</script>

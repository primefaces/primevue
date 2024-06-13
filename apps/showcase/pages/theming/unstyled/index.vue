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
import ArchitectureDoc from '@/doc/theming/unstyled/ArchitectureDoc.vue';
import ExampleDoc from '@/doc/theming/unstyled/ExampleDoc.vue';
import SetupDoc from '@/doc/theming/unstyled/SetupDoc.vue';
import ThemeDoc from '@/doc/theming/unstyled/ThemeDoc.vue';
import TailwindDoc from '@/doc/theming/unstyled/libraries/TailwindDoc.vue';
import UnoCSSDoc from '@/doc/theming/unstyled/libraries/UnoCSSDoc.vue';

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
                },
                {
                    id: 'libraries',
                    label: 'Libraries',
                    children: [
                        {
                            id: 'tailwind',
                            label: 'Tailwind',
                            component: TailwindDoc
                        },
                        {
                            id: 'unocss',
                            label: 'UnoCSS',
                            component: UnoCSSDoc
                        }
                    ]
                }
            ]
        };
    }
};
</script>
